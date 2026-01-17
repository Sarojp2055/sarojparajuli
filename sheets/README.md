# Portfolio Google Sheets Backend Setup

## CSV Files Created
Each CSV file corresponds to one sheet in your Google Sheets workbook:

| CSV File | Sheet Name | Description |
|----------|------------|-------------|
| `site_settings.csv` | SiteSettings | Site name, tagline, owner |
| `hero.csv` | Hero | Homepage hero section |
| `about.csv` | About | About page content |
| `professional_summary.csv` | ProfessionalSummary | Summary text |
| `highlights.csv` | Highlights | Summary highlights list |
| `contact.csv` | Contact | Contact info |
| `socials.csv` | Socials | Social media links |
| `education.csv` | Education | Academic degrees |
| `certifications.csv` | Certifications | Professional certs |
| `digital_skills.csv` | DigitalSkills | Technical skills |
| `soft_skills.csv` | SoftSkills | Professional skills |
| `journey.csv` | Journey | Work experience |
| `hobbies.csv` | Hobbies | Hobbies list |
| `notes.csv` | Notes | Fun facts & notes |

---

## Step-by-Step Setup

### 1. Create a New Google Sheet
1. Go to [sheets.google.com](https://sheets.google.com)
2. Create a new blank spreadsheet
3. Name it "Portfolio Database"

### 2. Import Each CSV
For each CSV file:
1. Create a new sheet tab (click the `+` at bottom)
2. Rename the tab to match the sheet name (e.g., "Hero", "About")
3. Go to **File > Import**
4. Upload the CSV file
5. Select "Replace current sheet"
6. Click "Import data"

### 3. Publish to Web
1. Go to **File > Share > Publish to web**
2. Select **Entire Document** and **CSV**
3. Click **Publish**
4. Copy the generated URL

### 4. Get Sheet-Specific URLs
For each sheet, the URL format is:
```
https://docs.google.com/spreadsheets/d/{SPREADSHEET_ID}/gviz/tq?tqx=out:csv&sheet={SHEET_NAME}
```

---

## Data Structure Rules

### Required Fields for List Data
| Field | Type | Description |
|-------|------|-------------|
| `id` | string | Unique identifier (e.g., "edu-1") |
| `order` | number | Display order (1, 2, 3...) |
| `visible` | TRUE/FALSE | Show/hide this item |

### How to Control Content
- **Reorder items**: Change the `order` numbers
- **Hide items**: Set `visible` to `FALSE`
- **Add items**: Create new row with unique `id`

---

## Column Reference

### Hero
| Column | Required | Description |
|--------|----------|-------------|
| id | Yes | Unique ID |
| title | Yes | Main headline |
| tagline | Yes | Badge text above title |
| description | Yes | Paragraph below title |
| ctaText | Yes | Button text |
| ctaLink | Yes | Button URL |

### About
| Column | Required | Description |
|--------|----------|-------------|
| id | Yes | Unique ID |
| bio | Yes | Main bio paragraph |
| mission | Yes | Mission statement |
| tagline | Yes | Role description |
| interests | Yes | Comma-separated list |

### Education
| Column | Required | Description |
|--------|----------|-------------|
| id | Yes | Unique ID |
| order | Yes | Display order |
| visible | Yes | TRUE/FALSE |
| degree | Yes | Degree name |
| institution | Yes | School name |
| year | Yes | Years attended |
| details | No | Additional info |
| logoUrl | No | School logo URL |

### Digital Skills
| Column | Required | Description |
|--------|----------|-------------|
| id | Yes | Unique ID |
| order | Yes | Display order |
| visible | Yes | TRUE/FALSE |
| name | Yes | Skill name |
| level | Yes | 0-100 percentage |
| category | Yes | Category label |
| icon | No | Emoji icon |

### Soft Skills
| Column | Required | Description |
|--------|----------|-------------|
| id | Yes | Unique ID |
| order | Yes | Display order |
| visible | Yes | TRUE/FALSE |
| name | Yes | Skill name |
| level | Yes | 0-100 percentage |
| description | No | Short description |

### Journey (Experience)
| Column | Required | Description |
|--------|----------|-------------|
| id | Yes | Unique ID |
| order | Yes | Display order |
| visible | Yes | TRUE/FALSE |
| role | Yes | Job title |
| company | Yes | Company name |
| period | Yes | Employment dates |
| description | Yes | Job description |
| logoUrl | No | Company logo URL |

### Hobbies
| Column | Required | Description |
|--------|----------|-------------|
| id | Yes | Unique ID |
| order | Yes | Display order |
| visible | Yes | TRUE/FALSE |
| name | Yes | Hobby name |
| icon | Yes | Emoji icon |
| description | Yes | Short description |

### Notes
| Column | Required | Description |
|--------|----------|-------------|
| id | Yes | Unique ID |
| order | Yes | Display order |
| visible | Yes | TRUE/FALSE |
| title | Yes | Note title |
| content | Yes | Note content |
| category | Yes | Category tag |

---

## Next Steps: Connect to Website
After setting up Google Sheets, you'll need to:
1. Install a CSV fetching library (e.g., `papaparse`)
2. Create a data fetching utility
3. Replace the static `content.js` with fetched data

I can help you implement this integration once your sheets are ready!
