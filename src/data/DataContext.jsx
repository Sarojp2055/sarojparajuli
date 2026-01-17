import { createContext, useContext, useState, useEffect } from 'react';
import { fetchPortfolioData, getVisibleItems as filterItems } from './sheetsApi';
import { db as fallbackDb } from './content';

// Create context
const DataContext = createContext(null);

/**
 * DataProvider - Wraps the app and provides portfolio data
 * 
 * Falls back to static content.js if Google Sheets fetch fails
 */
export function DataProvider({ children }) {
    const [data, setData] = useState(fallbackDb);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [source, setSource] = useState('static'); // 'static' or 'sheets'

    useEffect(() => {
        async function loadData() {
            try {
                setLoading(true);
                const sheetsData = await fetchPortfolioData();

                if (sheetsData && Object.keys(sheetsData).length > 0) {
                    setData(sheetsData);
                    setSource('sheets');
                    console.log('✅ Portfolio data loaded from Google Sheets');
                } else {
                    console.log('⚠️ Using fallback static data');
                    setSource('static');
                }
            } catch (err) {
                console.error('Failed to fetch from Sheets, using fallback:', err);
                setError(err);
                setSource('static');
            } finally {
                setLoading(false);
            }
        }

        loadData();
    }, []);

    return (
        <DataContext.Provider value={{ data, loading, error, source }}>
            {children}
        </DataContext.Provider>
    );
}

/**
 * Hook to access portfolio data
 */
export function usePortfolioData() {
    const context = useContext(DataContext);
    if (!context) {
        throw new Error('usePortfolioData must be used within a DataProvider');
    }
    return context;
}

/**
 * Re-export helper functions
 */
export const getVisibleItems = filterItems;
