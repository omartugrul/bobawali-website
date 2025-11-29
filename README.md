# Boba Wali Website

Houston's first South Asian fusion bubble tea cart.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Analytics**: PostHog
- **Fonts**: Inter (body), Radicalls (display/logo)

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Project Structure

```
├── app/                    # Next.js App Router
│   ├── layout.tsx          # Root layout with fonts & analytics
│   ├── page.tsx            # Home page
│   ├── globals.css         # Global styles & custom fonts
│   └── icon.png            # Favicon
├── components/
│   ├── Hero.tsx            # Hero section
│   ├── Navbar.tsx          # Navigation bar
│   ├── Footer.tsx          # Footer
│   └── sections/           # Page sections
│       ├── ServicesSection.tsx
│       ├── InquirySection.tsx
│       ├── FeaturedInSection.tsx
│       ├── LogoCarousel.tsx
│       └── ...
├── content/                # Content data files
│   ├── features.ts         # Press features
│   ├── clients.ts          # Client logos
│   ├── menu.ts             # Menu items
│   └── ...
└── public/                 # Static assets
    ├── fonts/              # Custom fonts
    ├── logos/              # Client logos
    └── featured/           # Press logos
```

## Environment Variables

Create a `.env` file in the root directory:

```
NEXT_PUBLIC_GOOGLE_FORM_URL=<embedded form URL>
NEXT_PUBLIC_GOOGLE_FORM_DIRECT_URL=<direct form URL>
NEXT_PUBLIC_MENU_URL=<menu PDF URL>
```

## TODOs

### Analytics & SEO (Phase 5)
- [ ] Integrate PostHog using env variables (`NEXT_PUBLIC_POSTHOG_KEY`, `NEXT_PUBLIC_POSTHOG_HOST`)
- [ ] Wire up custom events for CTAs and Inquiry actions
- [ ] Add meta tags and Open Graph tags
- [ ] Add sitemap.xml and robots.txt
- [ ] Performance & accessibility pass (lazy-load images, alt text)

### Typography Cleanup
- [ ] Standardize section heading sizes (ServicesSection and FeaturedInSection use smaller h2 than other sections)
- [ ] Add base typography styles to globals.css using @apply for consistency
- [ ] Decide on FeaturedIn mobile label style (currently subtle `text-xs text-text/50`, desktop uses full heading)

### Current Typography Inconsistencies
- Most sections: `text-3xl md:text-4xl lg:text-5xl` for h2
- ServicesSection: `text-2xl md:text-3xl lg:text-4xl` (smaller)
- FeaturedInSection desktop: `text-2xl lg:text-3xl` (smaller)
- FeaturedInSection mobile: `text-xs text-text/50` (intentionally subtle label)

### Content
- [ ] Update hero section copy to be more compelling and pointed (headline, subheadline, CTA)

### Design & Motion
- [ ] Explore more motion and animations to level up the feel of the website (micro-interactions, scroll effects, hover states)
