import React, { createContext, useContext, useState, useEffect, useRef } from 'react';

const AccessibilityContext = createContext();

export const AccessibilityProvider = ({ children }) => {
    const [isScreenReaderEnabled, setIsScreenReaderEnabled] = useState(false);
    const [speechRate, setSpeechRate] = useState(1);
    const [preferredVoice, setPreferredVoice] = useState(null);
    const lastSpokenRef = useRef(null);

    // Load voices and pick the best female one
    useEffect(() => {
        const loadVoices = () => {
            const voices = window.speechSynthesis.getVoices();
            // Look for high quality female voices
            // Priority: Google US English (Female), Samantha (Apple), Microsoft Zira (Windows), Victoria (Apple)
            const preferred = voices.find(v => v.name.includes('Google US English') || v.name.includes('Female')) ||
                voices.find(v => v.name.includes('Samantha')) ||
                voices.find(v => v.name.includes('Zira')) ||
                voices.find(v => v.name.includes('Victoria')) ||
                voices[0];

            setPreferredVoice(preferred);
        };

        loadVoices();
        if (window.speechSynthesis.onvoiceschanged !== undefined) {
            window.speechSynthesis.onvoiceschanged = loadVoices;
        }
    }, []);

    // Save/Load settings from localStorage
    useEffect(() => {
        const saved = localStorage.getItem('accessibility-settings');
        if (saved) {
            const { screenReader, rate } = JSON.parse(saved);
            setIsScreenReaderEnabled(screenReader);
            setSpeechRate(rate);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('accessibility-settings', JSON.stringify({
            screenReader: isScreenReaderEnabled,
            rate: speechRate
        }));
    }, [isScreenReaderEnabled, speechRate]);

    const speak = (text) => {
        if (!isScreenReaderEnabled || !text) return;

        // Don't repeat the exact same text immediately
        if (lastSpokenRef.current === text && window.speechSynthesis.speaking) return;

        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.rate = speechRate;
        if (preferredVoice) {
            utterance.voice = preferredVoice;
        }

        // Pitch 1.1 often sounds slightly more natural/friendly for female voices
        utterance.pitch = 1.1;

        window.speechSynthesis.speak(utterance);
        lastSpokenRef.current = text;
    };

    const stopSpeaking = () => {
        window.speechSynthesis.cancel();
        lastSpokenRef.current = null;
    };

    return (
        <AccessibilityContext.Provider value={{
            isScreenReaderEnabled,
            setIsScreenReaderEnabled,
            speechRate,
            setSpeechRate,
            speak,
            stopSpeaking,
            preferredVoice
        }}>
            {children}
        </AccessibilityContext.Provider>
    );
};

export const useAccessibility = () => {
    const context = useContext(AccessibilityContext);
    if (!context) throw new Error('useAccessibility must be used within AccessibilityProvider');
    return context;
};
