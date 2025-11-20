# Mama's Luncheonette Website

A modern, warm, and inviting website for Mama's Luncheonette - San Francisco's neighborhood comfort food spot.

## Features

- **Modern Diner Aesthetic**: Clean layout with warm colors, rounded edges, and a subtle grain texture
- **Fully Responsive**: Optimized for mobile, tablet, and desktop viewing
- **Interactive Menu**: Tabbed menu system with categories for wraps, breakfast, sides, and drinks
- **Business Information**: Hours, location, and contact details prominently displayed
- **Online Ordering**: Quick links to order pickup through delivery services

## Tech Stack

- **Next.js 14**: React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **Google Fonts**: Baloo 2 (headings) and Inter (body text)

## Design System

### Colors
- **Tomato Red** (#D6422B): Primary brand color, energetic and appetizing
- **Warm Cream** (#FFF4E8): Soft background, cozy feel
- **Charcoal Black** (#1F1F1F): Text and borders, modern and clean
- **Muted Tan** (#E6D1B3): Accent color, vintage diner aesthetic

### Typography
- **Headings**: Fredoka - Bold, rounded, modern diner aesthetic
- **Body**: Inter - Clean, readable sans-serif

## Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
mamas/
├── app/
│   ├── globals.css       # Global styles and fonts
│   ├── layout.tsx        # Root layout with metadata
│   └── page.tsx          # Homepage
├── components/
│   ├── Navigation.tsx    # Header navigation
│   ├── Hero.tsx          # Hero section with logo
│   ├── Story.tsx         # About section
│   ├── FeaturedSpecials.tsx  # Highlighted menu items
│   ├── Menu.tsx          # Full menu with tabs
│   ├── HoursLocation.tsx # Business hours and location
│   └── Footer.tsx        # Footer
├── public/
│   └── images/
│       └── logo.png      # Mama's logo
└── README.md
```

## Customization

### Updating Menu Items
Edit the menu data in `components/Menu.tsx` and `components/FeaturedSpecials.tsx`

### Changing Hours
Update the hours array in `components/HoursLocation.tsx`

### Modifying Colors
Edit the color palette in `tailwind.config.ts`

## Deployment

This site can be deployed to:
- **Vercel** (recommended for Next.js)
- **Netlify**
- **Any static hosting service**

## License

© 2025 Mama's Luncheonette. All rights reserved.
# mamas
