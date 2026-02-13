# Manmohan Imaging Center - Multilingual Landing Page

A modern, multilingual landing page for Manmohan Imaging Center built with Next.js 14, TypeScript, TailwindCSS, and next-intl for internationalization.

## 🌍 Supported Languages

- **English** (en)
- **Hindi** (hi) - हिन्दी
- **Marathi** (mr) - मराठी

## ✨ Features

- 🌐 **Multilingual Support**: Seamless language switching between English, Hindi, and Marathi
- 🎨 **Premium Design**: Modern, elegant UI with smooth animations and transitions
- 📱 **Fully Responsive**: Optimized for all devices (mobile, tablet, desktop)
- ⚡ **Performance Optimized**: Built with Next.js 14 App Router for optimal performance
- 🎯 **SEO Optimized**: Comprehensive SEO implementation with structured data, meta tags, and sitemaps
- 🔄 **Smooth Animations**: Custom animations using TailwindCSS
- 💬 **WhatsApp Integration**: Quick contact via floating WhatsApp button
- 📋 **Contact Form**: Appointment booking form with validation
- ♿ **Accessible**: WCAG compliant with skip links and semantic HTML
- 🔒 **Secure**: Security headers and best practices implemented

## 🔍 SEO Features

This website includes enterprise-level SEO optimization:

### Meta Tags & Social Media

- ✅ Dynamic multilingual meta titles and descriptions
- ✅ Open Graph tags for Facebook/LinkedIn
- ✅ Twitter Card metadata
- ✅ Canonical URLs and language alternates (hreflang)
- ✅ Location-based keywords (Nallasopara, Vasai, Virar)

### Structured Data (Schema.org)

- ✅ MedicalBusiness schema with JSON-LD
- ✅ LocalBusiness information
- ✅ GeoCoordinates for local SEO
- ✅ Service listings (X-Ray, CT, MRI, etc.)
- ✅ Business hours and contact info
- ✅ Aggregate ratings

### Technical SEO

- ✅ Dynamic XML sitemap
- ✅ Robots.txt configuration
- ✅ PWA manifest for mobile installation
- ✅ Semantic HTML structure
- ✅ Image optimization (WebP, AVIF)
- ✅ Security headers
- ✅ Fast loading times

**📖 See `SEO-GUIDE.md` for detailed documentation and `SEO-CHECKLIST.md` for action items.**

## 🚀 Getting Started

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

The page will automatically redirect to the default language (English). You can access other languages via:

- English: http://localhost:3000/en
- Hindi: http://localhost:3000/hi
- Marathi: http://localhost:3000/mr

## 📁 Project Structure

```
landing-page-nextjs-v2/
├── app/
│   ├── [locale]/           # Locale-specific pages
│   │   ├── layout.tsx      # Layout with i18n provider
│   │   └── page.tsx        # Main landing page
│   └── globals.css         # Global styles
├── components/             # React components
│   ├── Navigation.tsx      # Header with language switcher
│   ├── HeroSection.tsx     # Hero section
│   ├── StatsSection.tsx    # Statistics with counters
│   ├── ServicesSection.tsx # Services grid
│   ├── AboutSection.tsx    # About us section
│   ├── WhyChooseSection.tsx# Why choose us
│   ├── ContactSection.tsx  # Contact form
│   ├── Footer.tsx          # Footer
│   ├── WhatsAppButton.tsx  # Floating WhatsApp button
│   ├── LanguageSwitcher.tsx# Language dropdown
│   └── DecorativeElements.tsx # Background decorations
├── messages/               # Translation files
│   ├── en.json            # English translations
│   ├── hi.json            # Hindi translations
│   └── mr.json            # Marathi translations
├── i18n.ts                # i18n configuration
├── middleware.ts          # Locale detection middleware
├── tailwind.config.js     # TailwindCSS configuration
└── next.config.js         # Next.js configuration
```

## 🎨 Design System

### Colors

- **Primary**: `#8B2635` (Maroon)
- **Primary Dark**: `#6B1D29`
- **Primary Light**: `#A52A2A`
- **Accent**: `#C44556`

### Fonts

- **Serif**: Playfair Display (headings)
- **Sans**: Inter (body text)

### Animations

- Slide up/down
- Scale in
- Float
- Fade in
- Custom blob animations

## 🔧 Configuration

### Adding a New Language

1. Create a new translation file in `messages/` (e.g., `messages/es.json`)
2. Add the locale to `middleware.ts`:

```typescript
locales: ["en", "hi", "mr", "es"];
```

3. Add the language to `LanguageSwitcher.tsx`

### Customizing Content

Edit the translation files in the `messages/` directory to update content for each language.

### Styling

- Global styles: `app/globals.css`
- TailwindCSS config: `tailwind.config.js`
- Component-specific styles: Use TailwindCSS utility classes

## 📦 Build for Production

```bash
npm run build
npm start
```

## 🌐 Deployment

This project can be deployed to:

- **Vercel** (recommended for Next.js)
- **Netlify**
- **AWS Amplify**
- Any Node.js hosting platform

### Deploy to Vercel

```bash
npm install -g vercel
vercel
```

## 📝 License

© 2024 Manmohan Imaging Center. All rights reserved.

## 🤝 Support

For support, contact: +91 XXXXXXXXXX

---

Built with ❤️ using Next.js, TypeScript, and TailwindCSS
