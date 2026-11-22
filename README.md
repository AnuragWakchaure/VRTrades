# Vinduraj Health Trade — Coming Soon Landing Page

A high-converting, responsive Coming Soon landing page built with **Next.js 14 (App Router)** and **TypeScript**, faithfully matching the desktop and mobile reference designs for **Vinduraj Health Trade**.

---

## Key Features

1. **Pixel-Perfect Alignment with Reference Designs**:
   - Matches both `references/Vinduraj Healthcare Coming Soon desktop view.png` and `references/Vinduraj Healthcare Coming Soon Mobile view.png`.
   - Desktop: Left-aligned typography with red accent bar, "Launching Soon //" badge, category grid, and side-by-side collection preview.
   - Mobile: Centered layout with red pill badge ("Launching Soon" with transparent rocket icon), full-width hero collection preview, and mobile category grid.

2. **Ultra-Smooth, Fading Animated Red Swooshes**:
   - Aerodynamic tapered filled ribbon vectors (`AnimatedRedLines.tsx`) that naturally fade from opacity 0 to vibrant crimson/rose and back to 0.
   - Feathered Gaussian blur filters (`#softFeather` with `stdDeviation="4"`) and broad atmospheric glow (`stdDeviation="38"`).
   - Mouse parallax tracking on desktop and gentle float + shimmer beam animations.

3. **Premium Dark Curved Wave Footer**:
   - Layered organic wave border with dual SVG curve geometry for desktop and mobile.
   - Flowing crimson swooshes and curved ribbon accents behind the dark footer that blend smoothly into the white content section.
   - Interactive "For bulk and business enquiries →" button opening an interactive modal.
   - Direct email (`vrhealthtrade@gmail.com`) and phone (`+91 88881 84833`) links with custom divider styling.

4. **Category Grid with Provided PNG Icons**:
   - Uses the 6 category icons from `public/icons/`:
     1. Doctor & Nurse Uniforms (`Red Nurse Cap Medical Icon.png`)
     2. Medical Scrubs & OT Linen (`Red V-Neck Scrub Top Icon.png`)
     3. Hospital Bedding & Linen (`Stacked Surgical Linens Icon.png`)
     4. Patient Gowns & Drapes (`Red Hospital Bed Icon.png`)
     5. Staff & Housekeeping Uniforms (`Red Uniform Shirt Icon.png`)
     6. Disposables & Accessories (`Red Surgical Mask Icon.png`)

5. **Transparent Logo**:
   - Uses `public/images/logo-transparent.png` cleanly placed in the header.

6. **Interactive Bulk Enquiry Modal & Direct WhatsApp Integration**:
   - Clicking any category or the footer enquiry button opens a modal pre-filled with the category.
   - Seamless one-click WhatsApp redirection to `+91 88881 84833`.

---

## Getting Started

### Prerequisites
- Node.js 18+ (tested on Node v20)
- `pnpm` (or `npm`)

### Development Server
```bash
pnpm dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser.

### Production Build
```bash
pnpm build
pnpm start
```

### Static Version (No-Build Alternative)
You can also open [index.html](file:///d:/VR/index.html) directly in any web browser.

---

## Project Structure

```
d:/VR/
├── app/
│   ├── favicon.ico
│   ├── globals.css         # Design tokens, keyframes, typography, responsive styles
│   ├── layout.tsx          # Root layout with metadata and font definitions
│   └── page.tsx            # Main page combining all modular components
├── components/
│   ├── AnimatedRedLines.tsx # Smooth fading SVG ribbons & ambient glow
│   ├── CategoryGrid.tsx     # 6-card grid with user's PNG icons
│   ├── EnquiryModal.tsx     # Bulk B2B enquiry dialog with WhatsApp integration
│   ├── Footer.tsx           # Premium dark curved wave footer with red ribbons
│   ├── Header.tsx           # Transparent brand logo header
│   └── HeroSection.tsx      # Main title, descriptions, badges, and collection visual
├── public/
│   ├── icons/               # 6 category PNG icons + clean rocket icon
│   └── images/              # logo-transparent.png, collection.png, etc.
├── references/              # Original desktop and mobile reference designs
├── index.html               # Synchronized standalone static HTML version
├── css/style.css            # Standalone static stylesheet
├── js/main.js               # Standalone static interactivity script
├── package.json
├── tsconfig.json
└── next.config.mjs
```

