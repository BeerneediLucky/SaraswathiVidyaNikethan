# Saraswathi Vidya Nikethan

A modern, responsive school landing page built with React, Vite, and Bootstrap. This project showcases a polished homepage for Saraswathi Vidya Nikethan with interactive sections like hero, classes, gallery, testimonials, admissions, and contact.

## Table of Contents

- [Project Overview](#project-overview)
- [Tech Stack](#tech-stack)
- [Features](#features)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Customizing Content](#customizing-content)
- [Adding or Replacing Gallery Images](#adding-or-replacing-gallery-images)
- [Contact + WhatsApp Behavior](#contact--whatsapp-behavior)
- [Notes](#notes)

## Project Overview

This repository contains a React single-page application for a school website. It uses a clean component-based design and modern CSS styling to deliver a responsive layout for desktop and mobile screens.

## Tech Stack

- React
- Vite
- Bootstrap 5
- JavaScript (JSX)
- CSS

## Features

- Responsive hero section with call-to-action buttons
- Navigation bar with smooth scrolling behavior
- About, Classes, Facilities, Gallery, Achievements, Testimonials, Admissions, and Contact sections
- Image gallery with responsive card layout and lightbox preview
- WhatsApp contact buttons with pre-filled inquiry text
- Contact form with native validation before opening WhatsApp
- Clean responsive CSS styling and grid layout

## Project Structure

```
SaraswathiVidyaNikethan/
  ├─ index.html
  ├─ package.json
  ├─ vite.config.js
  ├─ src/
  │   ├─ main.jsx
  │   ├─ App.jsx
  │   ├─ components/
  │   │   ├─ About.jsx
  │   │   ├─ Achievements.jsx
  │   │   ├─ Admissions.jsx
  │   │   ├─ Classes.jsx
  │   │   ├─ Contact.jsx
  │   │   ├─ Facilities.jsx
  │   │   ├─ Footer.jsx
  │   │   ├─ Gallery.jsx
  │   │   ├─ Hero.jsx
  │   │   ├─ Navbar.jsx
  │   │   ├─ ScrollProgress.jsx
  │   │   ├─ Testimonials.jsx
  │   │   └─ WhatsAppFloat.jsx
  │   └─ styles/
  │       └─ main.css
```

## Getting Started

### Prerequisites

- Node.js (v18 or later recommended)
- npm

### Install dependencies

```bash
npm install
```

### Run development server

```bash
npm run dev
```

Open the browser at the local Vite URL shown in the terminal.

## Available Scripts

- `npm run dev` - Start the Vite development server
- `npm run build` - Build the production-ready app
- `npm run preview` - Preview the production build locally

## Customizing Content

### Update text and section content

The app is organized into modular React components. You can edit each section inside `src/components/`:

- `Hero.jsx` - top hero banner and CTA buttons
- `About.jsx` - about section content
- `Classes.jsx` - class overview
- `Facilities.jsx` - facility highlights
- `Achievements.jsx` - achievements and numbers
- `Testimonials.jsx` - parent/student testimonials
- `Admissions.jsx` - admission details and CTA
- `Contact.jsx` - contact form and details
- `Gallery.jsx` - image gallery and preview behavior

### Update site title and metadata

Edit `index.html` to change the page `<title>`, meta description, and favicon.

## Adding or Replacing Gallery Images

The gallery is defined in `src/components/Gallery.jsx`. Replace or extend the `images` array with new image URLs.

Example:

```js
const images = [
  'https://images.unsplash.com/....',
  'https://your-image-url.com/photo.jpg',
  // add more image links here
]
```

The gallery uses responsive card styling, so new images will automatically fit into the structured layout with consistent aspect ratios.

## Contact + WhatsApp Behavior

- The contact form uses native browser `required` validation on all fields.
- When submitted successfully, it opens WhatsApp with the user's name, email, and message pre-filled.
- The quick WhatsApp buttons in the hero, footer, and floating action button also launch a ready-made inquiry message.

## Notes

- The project uses Bootstrap classes for the grid and basic spacing.
- Most global styling is located in `src/styles/main.css`.
- For best image quality, use high-resolution photos with aspect ratios that match the gallery card layout.
