import React, { useEffect } from 'react';
import { useAccessibility } from '../data/AccessibilityContext';

const HoverScreenReader = () => {
    const { isScreenReaderEnabled, speak, stopSpeaking } = useAccessibility();

    useEffect(() => {
        if (!isScreenReaderEnabled) {
            stopSpeaking();
            return;
        }

        const handleMouseOver = (e) => {
            const target = e.target;

            // Find the closest meaningful element to read
            const elementToRead = target.closest('p, h1, h2, h3, h4, h5, h6, li, button, a, span, label, input, [role="button"], [aria-label]');

            if (elementToRead) {
                let textToSpeak = '';

                // Prioritize aria-label
                if (elementToRead.getAttribute('aria-label')) {
                    textToSpeak = elementToRead.getAttribute('aria-label');
                } else if (elementToRead.tagName === 'INPUT') {
                    textToSpeak = elementToRead.placeholder || elementToRead.value || 'Input field';
                } else {
                    textToSpeak = elementToRead.innerText || elementToRead.textContent;
                }

                if (textToSpeak && textToSpeak.trim().length > 0) {
                    // Stop any current reading and speak new text
                    speak(textToSpeak.trim());

                    // Visual feedback (optional but helpful for some low-vision users)
                    elementToRead.style.outline = '2px solid var(--primary-500)';
                    elementToRead.style.outlineOffset = '2px';
                }
            }
        };

        const handleMouseOut = (e) => {
            const target = e.target;
            const elementToRead = target.closest('p, h1, h2, h3, h4, h5, h6, li, button, a, span, label, input, [role="button"], [aria-label]');
            if (elementToRead) {
                elementToRead.style.outline = '';
                elementToRead.style.outlineOffset = '';
            }
        };

        window.addEventListener('mouseover', handleMouseOver);
        window.addEventListener('mouseout', handleMouseOut);

        return () => {
            window.removeEventListener('mouseover', handleMouseOver);
            window.removeEventListener('mouseout', handleMouseOut);
        };
    }, [isScreenReaderEnabled, speak, stopSpeaking]);

    return null; // This is a logic-only component
};

export default HoverScreenReader;
