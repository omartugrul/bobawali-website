# Boba Wali Website

Houston's first South Asian fusion bubble tea cart.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Analytics**: PostHog
- **Fonts**: Inter (body/headings), Radicalls (display/logo)

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

## Design System

### Colors
| Token | Hex | Usage |
|-------|-----|-------|
| `primary` | `#790000` | Maroon - CTAs, accents, logo text |
| `secondary` | `#EAB6C9` | Soft pink - backgrounds, highlights |
| `tertiary-dark` | `#001B2E` | Navy - text color |
| `tertiary-accent` | `#C27013` | Orange/gold - shimmer accents |
| `bg` | `#FFF7F0` | Warm cream - page background |
| `text` | `#001B2E` | Navy - body text (same as tertiary-dark) |

### Fonts
| Token | Font | Usage |
|-------|------|-------|
| `font-display` | Radicalls | Logo, brand headings |
| `font-sans` | Inter | Body text, UI elements |

### Switching to Raleway (Menu Font)
To match the menu typography, you can switch from Inter to Raleway:

1. **layout.tsx** - Change the import and config:
```tsx
import { Raleway } from 'next/font/google'
const raleway = Raleway({ subsets: ['latin'], weight: ['400', '500', '600', '700'], variable: '--font-raleway' })
// Use raleway.variable in <html>
```

2. **tailwind.config.js** - Update font-sans:
```js
sans: ['var(--font-raleway)', 'Raleway', 'system-ui', 'sans-serif'],
```

3. **globals.css** - Optionally bump body weight:
```css
body { @apply font-medium; } /* Raleway 400 is thin, 500 looks better */
```

4. **Section headings** - Add uppercase styling:
```tsx
className="uppercase tracking-wide"
```

## Environment Variables

Create a `.env` file in the root directory:

```
NEXT_PUBLIC_GOOGLE_FORM_URL=<embedded form URL>
NEXT_PUBLIC_GOOGLE_FORM_DIRECT_URL=<direct form URL>
NEXT_PUBLIC_MENU_URL=<menu PDF URL>
```

## TODOs

### High Priority - Visual Impact
- [ ] Add photos to make the site feel more personal (hero image, mini gallery on homepage with link to full gallery page)
- [ ] Hero section needs visual punch - add hero image (boba cup, event photo, or lifestyle shot), consider split layout
  - ⏳ BLOCKED: Waiting on client for animated boba cup images
  - Side task: Create master prompt to generate any boba cup image

### Medium Priority - Polish & Consistency
- [ ] Standardize section spacing - currently inconsistent (py-16 vs py-20 vs py-12). Create a spacing scale and apply consistently
- [ ] Improve FeaturedIn cards - currently plain. Add subtle gradients, glass effects, or better visual treatment

### Lower Priority - Enhancements
- [ ] Reconsider the loading screen - the animated boba cup may not fit the current design direction
- [ ] Consider adding a testimonials section with quotes from past clients
- [ ] Explore more motion and animations (micro-interactions, scroll effects, hover states)
- [ ] Vary motion effects - currently all fade-in-up on scroll. Add staggered animations, subtle parallax, scroll-triggered effects
- [ ] Add CTA variety - ghost buttons and styled text links for secondary actions

### Later - Analytics & SEO
- [ ] Integrate PostHog using env variables (`NEXT_PUBLIC_POSTHOG_KEY`, `NEXT_PUBLIC_POSTHOG_HOST`)
- [ ] Wire up custom events for CTAs and Inquiry actions
- [ ] Add sitemap.xml and robots.txt
- [ ] Performance & accessibility pass (lazy-load images, alt text)

### Done
- [x] Update hero section copy to be more compelling and pointed (headline, subheadline, CTA)
- [x] Remove ServicesSection (redundant with hero copy), add one-liner to LogoCarousel

## Time Log

| Date | Time | Notes |
|------|------|-------|
| Friday, Nov 28, 2025 | 4pm - 8pm | Initial design review, added FeaturedInSection, shimmer effect, design TODOs |
| Saturday, Nov 29, 2025 | 11:45am - 12:45pm | Updated hero copy, removed ServicesSection, added one-liner to LogoCarousel, tried Raleway font (reverted to Inter), fixed mobile text wrapping |
