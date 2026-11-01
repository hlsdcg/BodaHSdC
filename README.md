# Wedding Web App

A bilingual wedding website built with React, featuring event information, additional details, and an RSVP form.

## Features

- **Bilingual Support**: Spanish (default) and English, switchable via dropdown in the top-right corner
- **Three Tabs**:
  - **Home**: Event information including heading, picture placeholder, address (San Sebastián), and schedule (March 6, 2027 at 2pm)
  - **Additional Information**: Terms & Conditions, Hotels, Transportation, Tips & Recommendations, and Gifts sections
  - **Form**: RSVP form with conditional fields for guests and transportation preferences

## Form Features

- First Name, Last Name, and Allergies fields
- Toggle for "Will you come with someone?" (Yes/No)
- Conditional fields for +1 (First Name, Last Name, Allergies) - only visible if guest toggle is "Yes"
- Toggle buttons for bus transportation to/from restaurant
- Confirm button that emails form data to fcosdc@gmail.com

## Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

## Project Structure

```
src/
├── components/
│   ├── Home.jsx           # Home tab with event info
│   ├── AdditionalInfo.jsx # Additional information tab
│   └── Form.jsx           # RSVP form with conditional fields
├── contexts/
│   └── LanguageContext.jsx # Bilingual support context
├── App.jsx                # Main app with tabs and language selector
├── App.css                # App styling
├── main.jsx               # React entry point
└── index.css              # Global styles
```

## Customization

- To add the wedding picture, replace the placeholder in `src/components/Home.jsx`
- To update additional information content, edit the sections in `src/components/AdditionalInfo.jsx`
- To change the recipient email, update the `mailto` link in `src/components/Form.jsx`
