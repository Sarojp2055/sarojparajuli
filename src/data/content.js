/**
 * Portfolio Content Database
 * 
 * This file is structured to be compatible with Google Sheets as a backend.
 * Each section uses a flat, tabular structure where:
 * - id: unique identifier (maps to row ID in sheets)
 * - order: display order (allows reordering from sheets)
 * - visible: boolean to show/hide (allows toggling visibility from sheets)
 * 
 * To integrate with Google Sheets:
 * 1. Create a sheet for each section (hero, about, education, etc.)
 * 2. Use Google Sheets API or Apps Script to fetch data
 * 3. Replace this static export with the fetched data
 */

export const db = {
    // Site-wide settings (1 row in Google Sheets)
    siteSettings: {
        id: 'settings-1',
        siteName: 'Saroj.stat',
        siteTagline: 'Statistics & Data Science Portfolio',
        ownerName: 'Saroj Parajuli',
        themeColor: '#009688',
        profilePicture: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop'
    },

    // Hero section (1 row in Google Sheets)
    hero: {
        id: 'hero-1',
        title: 'Turning Data into Actionable Insights',
        tagline: 'Statistics and Data Tech',
        description: 'I specialize in statistical analysis, predictive modeling, and data visualization to solve complex problems and bridge the gap between theory and impact.',
        ctaText: 'View Case Studies',
        ctaLink: '/journey'
    },

    // About section (1 row in Google Sheets)
    about: {
        id: 'about-1',
        bio: 'I am a passionate aspiring Data Scientist skilled in Statistics, AI workflows, and Agentic Systems. My focus is on leveraging theoretical knowledge and technical skills to build robust data solutions.',
        mission: 'To bridge the gap between raw data and decision-making through rigorous statistical methodology.',
        tagline: 'Statistician | Data Scientist | Problem Solver',
        interests: ['Machine Learning', 'Bayesian Statistics', 'Data Visualization', 'Automation']
    },

    // Professional Summary (1 row in Google Sheets, highlights as JSON array)
    professionalSummary: {
        id: 'summary-1',
        text: 'Highly analytical Statistician with expertise in predictive modeling, data visualization, and automated workflows. Proven track record of deploying machine learning models and optimizing data pipelines.',
        highlights: [
            { id: 'h1', order: 1, visible: true, text: 'Deployed 10+ Production ML Models' },
            { id: 'h2', order: 2, visible: true, text: 'Automated reporting workflows reducing manual effort by 40%' },
            { id: 'h3', order: 3, visible: true, text: 'Specialized in Bayesian Inference and A/B Testing' },
            { id: 'h4', order: 4, visible: true, text: 'Published research on statistical modeling techniques' }
        ]
    },

    // Contact Info (1 row in Google Sheets)
    contact: {
        id: 'contact-1',
        email: 'saroj_official@hotmail.io',
        phone: '+977-XXXXXXXXXX',
        location: 'Kathmandu, Nepal',
        availability: 'Open to opportunities',
        intro: "I'm currently open to new opportunities in data science and statistical consulting. Whether you have a question or just want to say hi, I'll try my best to get back to you!",
        socials: [
            { id: 's1', order: 1, visible: true, name: 'LinkedIn', icon: '💼', url: 'https://linkedin.com/in/saroj-parajuli' },
            { id: 's2', order: 2, visible: true, name: 'GitHub', icon: '🐙', url: 'https://github.com/saroj-parajuli' },
            { id: 's3', order: 3, visible: true, name: 'Scholar', icon: '📚', url: 'https://scholar.google.com/citations?user=saroj' },
            { id: 's4', order: 4, visible: true, name: 'Twitter', icon: '🐦', url: 'https://twitter.com/saroj_stat' }
        ]
    },

    // Education (each item = 1 row in Google Sheets)
    education: [
        {
            id: 'edu-1',
            order: 1,
            visible: true,
            degree: 'Master of Science in Statistics',
            institution: 'University of Data Science',
            year: '2023 - Present',
            details: 'Focus on Bayesian Statistics, Time Series Analysis, and Deep Learning.',
            logoUrl: ''
        },
        {
            id: 'edu-2',
            order: 2,
            visible: true,
            degree: 'Bachelor of Science in Mathematics',
            institution: 'National Technical Institute',
            year: '2019 - 2023',
            details: 'Major in Applied Mathematics and minor in Computer Science.',
            logoUrl: ''
        }
    ],

    // Certifications (each item = 1 row in Google Sheets)
    certifications: [
        { id: 'cert-1', order: 1, visible: true, name: 'Google Data Analytics Professional Certificate', year: '2023', issuer: 'Coursera/Google', credentialUrl: '' },
        { id: 'cert-2', order: 2, visible: true, name: 'TensorFlow Developer Certificate', year: '2024', issuer: 'Google', credentialUrl: '' },
        { id: 'cert-3', order: 3, visible: true, name: 'AWS Cloud Practitioner', year: '2024', issuer: 'Amazon', credentialUrl: '' }
    ],

    // Digital/Technical Skills (each item = 1 row in Google Sheets)
    digitalSkills: [
        { id: 'ds-1', order: 1, visible: true, name: 'Python', level: 90, category: 'Languages', icon: '🐍' },
        { id: 'ds-2', order: 2, visible: true, name: 'R', level: 85, category: 'Languages', icon: '📊' },
        { id: 'ds-3', order: 3, visible: true, name: 'SQL', level: 80, category: 'Database', icon: '🗄️' },
        { id: 'ds-4', order: 4, visible: true, name: 'Tableau', level: 75, category: 'Visualization', icon: '📈' },
        { id: 'ds-5', order: 5, visible: true, name: 'TensorFlow/PyTorch', level: 70, category: 'ML/AI', icon: '🤖' },
        { id: 'ds-6', order: 6, visible: true, name: 'Excel/Sheets', level: 85, category: 'Tools', icon: '📑' }
    ],

    // Soft/Professional Skills (each item = 1 row in Google Sheets)
    softSkills: [
        { id: 'ss-1', order: 1, visible: true, name: 'Statistical Reasoning', level: 95, description: 'Deep understanding of statistical theory and application' },
        { id: 'ss-2', order: 2, visible: true, name: 'Mathematical Proofs', level: 85, description: 'Rigorous mathematical thinking and proof construction' },
        { id: 'ss-3', order: 3, visible: true, name: 'Critical Thinking', level: 90, description: 'Analytical approach to problem-solving' },
        { id: 'ss-4', order: 4, visible: true, name: 'Problem Solving', level: 90, description: 'Creative solutions to complex challenges' },
        { id: 'ss-5', order: 5, visible: true, name: 'Communication', level: 80, description: 'Clear presentation of technical concepts' }
    ],

    // Professional Journey/Experience (each item = 1 row in Google Sheets)
    journey: [
        {
            id: 'job-1',
            order: 1,
            visible: true,
            role: 'Junior Data Scientist',
            company: 'Tech Solutions Inc.',
            period: '2023 - Present',
            description: 'Developing predictive models for customer churn and optimizing marketing spend. Built automated reporting dashboards using Python and Tableau.',
            logoUrl: ''
        },
        {
            id: 'job-2',
            order: 2,
            visible: true,
            role: 'Statistical Analyst Intern',
            company: 'DataCorp',
            period: '2022 - 2023',
            description: 'Analysed large datasets to identify key trends and presented findings to stakeholders. Implemented A/B testing framework for product features.',
            logoUrl: ''
        }
    ],

    // Hobbies (each item = 1 row in Google Sheets)
    hobbies: [
        { id: 'hob-1', order: 1, visible: true, name: 'Chess', icon: '♟️', description: 'Strategic thinking and pattern recognition.' },
        { id: 'hob-2', order: 2, visible: true, name: 'Hiking', icon: '🏔️', description: 'Exploring nature and staying active.' },
        { id: 'hob-3', order: 3, visible: true, name: 'Reading Sci-Fi', icon: '📚', description: 'Exploring future possibilities.' },
        { id: 'hob-4', order: 4, visible: true, name: 'Coding Side Projects', icon: '💻', description: 'Building tools and automations for fun.' }
    ],

    // Notes & Facts (each item = 1 row in Google Sheets)
    notes: [
        { id: 'note-1', order: 1, visible: true, title: 'Favorite Theorem', content: "Bayes' Theorem - representing how we update our beliefs with new evidence.", category: 'Math' },
        { id: 'note-2', order: 2, visible: true, title: 'Current Read', content: "'The Signal and the Noise' by Nate Silver.", category: 'Books' },
        { id: 'note-3', order: 3, visible: true, title: 'Did You Know?', content: 'I once optimized a sorting algorithm just for fun.', category: 'Fun Facts' },
        { id: 'note-4', order: 4, visible: true, title: 'Work Philosophy', content: 'Data tells stories - my job is to translate them into actionable insights.', category: 'Philosophy' }
    ],

    // Projects (each item = 1 row in Google Sheets)
    projects: [
        {
            id: 'proj-1',
            order: 1,
            visible: true,
            title: 'Statistical Analysis Tool',
            link: 'https://github.com/saroj-parajuli/stat-tool',
            summary: 'A Python-based tool for automated statistical testing and visualization of complex datasets.'
        }
    ]
};

/**
 * Helper functions for data filtering and sorting
 * These can be used by components to process data consistently
 */
export const getVisibleItems = (items) => {
    return items
        .filter(item => item.visible !== false)
        .sort((a, b) => (a.order || 0) - (b.order || 0));
};

export const getItemById = (items, id) => {
    return items.find(item => item.id === id);
};
