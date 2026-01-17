/**
 * Google Sheets Data Fetcher
 * 
 * This utility fetches data from your published Google Sheet
 * and converts it to the format used by your portfolio.
 */

import Papa from 'papaparse';

// Google Spreadsheet ID (fetched from environment variables for security)
const SPREADSHEET_ID = import.meta.env.VITE_SPREADSHEET_ID;

// Sheet names must match your Google Sheet tabs exactly
const SHEET_NAMES = {
    siteSettings: 'SiteSettings',
    hero: 'Hero',
    about: 'About',
    professionalSummary: 'ProfessionalSummary',
    highlights: 'Highlights',
    contact: 'Contact',
    socials: 'Socials',
    education: 'Education',
    certifications: 'Certifications',
    digitalSkills: 'DigitalSkills',
    softSkills: 'SoftSkills',
    journey: 'Journey',
    hobbies: 'Hobbies',
    notes: 'Notes',
    projects: 'Projects'
};

/**
 * Generates the public CSV URL for a specific sheet
 */
function getSheetUrl(sheetName) {
    return `https://docs.google.com/spreadsheets/d/${SPREADSHEET_ID}/gviz/tq?tqx=out:csv&sheet=${encodeURIComponent(sheetName)}`;
}

/**
 * Fetches and parses CSV data from a Google Sheet tab
 */
async function fetchSheet(sheetName) {
    try {
        const url = getSheetUrl(sheetName);
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`Failed to fetch ${sheetName}: ${response.status}`);
        }

        const csvText = await response.text();

        const result = Papa.parse(csvText, {
            header: true,
            skipEmptyLines: true,
            transformHeader: (header) => header.trim(),
            transform: (value, field) => {
                // Convert TRUE/FALSE strings to booleans
                if (value === 'TRUE') return true;
                if (value === 'FALSE') return false;
                // Convert numeric strings to numbers
                if (field === 'level' || field === 'order') {
                    const num = Number(value);
                    return isNaN(num) ? value : num;
                }
                return value.trim();
            }
        });

        return result.data;
    } catch (error) {
        console.error(`Error fetching sheet "${sheetName}":`, error);
        return null;
    }
}

/**
 * Fetches all portfolio data from Google Sheets
 * Returns data in the same format as content.js
 */
export async function fetchPortfolioData() {
    try {
        // Fetch all sheets in parallel
        const [
            siteSettingsData,
            heroData,
            aboutData,
            summaryData,
            highlightsData,
            contactData,
            socialsData,
            educationData,
            certificationsData,
            digitalSkillsData,
            softSkillsData,
            journeyData,
            hobbiesData,
            notesData,
            projectsData
        ] = await Promise.all([
            fetchSheet(SHEET_NAMES.siteSettings),
            fetchSheet(SHEET_NAMES.hero),
            fetchSheet(SHEET_NAMES.about),
            fetchSheet(SHEET_NAMES.professionalSummary),
            fetchSheet(SHEET_NAMES.highlights),
            fetchSheet(SHEET_NAMES.contact),
            fetchSheet(SHEET_NAMES.socials),
            fetchSheet(SHEET_NAMES.education),
            fetchSheet(SHEET_NAMES.certifications),
            fetchSheet(SHEET_NAMES.digitalSkills),
            fetchSheet(SHEET_NAMES.softSkills),
            fetchSheet(SHEET_NAMES.journey),
            fetchSheet(SHEET_NAMES.hobbies),
            fetchSheet(SHEET_NAMES.notes),
            fetchSheet(SHEET_NAMES.projects)
        ]);

        // Process About interests (comma-separated string to array)
        const aboutRow = aboutData?.[0];
        if (aboutRow?.interests) {
            aboutRow.interests = aboutRow.interests.split(',').map(s => s.trim());
        }

        // Build the db object matching content.js structure
        return {
            siteSettings: siteSettingsData?.[0] || {},
            hero: heroData?.[0] || {},
            about: aboutRow || {},
            professionalSummary: {
                ...(summaryData?.[0] || {}),
                highlights: highlightsData || []
            },
            contact: {
                ...(contactData?.[0] || {}),
                socials: socialsData || []
            },
            education: educationData || [],
            certifications: certificationsData || [],
            digitalSkills: digitalSkillsData || [],
            softSkills: softSkillsData || [],
            journey: journeyData || [],
            hobbies: hobbiesData || [],
            notes: notesData || [],
            projects: projectsData || []
        };
    } catch (error) {
        console.error('Error fetching portfolio data:', error);
        return null;
    }
}

/**
 * Helper: Filter visible items and sort by order
 */
export function getVisibleItems(items) {
    if (!items || !Array.isArray(items)) return [];
    return items
        .filter(item => item.visible !== false)
        .sort((a, b) => (a.order || 0) - (b.order || 0));
}

/**
 * Helper: Find item by ID
 */
export function getItemById(items, id) {
    if (!items || !Array.isArray(items)) return null;
    return items.find(item => item.id === id);
}
