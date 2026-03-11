# Vesta Landing Page

A high-converting, premium dark-mode B2B SaaS landing page designed to attract disruptive brands, founders, and enterprises. The application is a fully responsive single-page architecture built for maximum visual impact and immediate lead capture.

## Key Features

- **Immersive Dark Mode Aesthetic**: Utilizes a deep slate-950 foundation with targeted `slate-800` elevations and subtle blue/white glowing accents.
- **Zig-Zag Service Layout**: Engages users with alternating text and visual content blocks to prevent scroll fatigue.
- **Dynamic Infinite Marquee**: Features a CSS-powered infinite looping logo carousel for displaying partner networks.
- **Conversion-Optimized CTAs**: All primary buttons securely route to a dedicated `#contact` lead capture form.
- **Scroll-Snapping Carousels**: Smooth, native CSS scroll-snapping for horizontal lists.

---

## Tech Stack

- **Language**: JavaScript / JSX
- **Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS 3.4+
- **Icons**: Lucide React
- **Deployment**: Vercel / Netlify / Make (Static Export)

---

## Prerequisites

- Node.js 18 or higher
- npm or yarn

---

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/clederamarkx-cody/studious-octo-invention-vesta.git
cd studious-octo-invention-vesta
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start Development Server

Run the Vite local development server:

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser. The server supports hot module replacement (HMR), so changes to React components will instantly reflect in the browser.

---

## Architecture Overview

### Directory Structure

```
├── public/                 # Static assets that don't pass through the bundler
├── skills_acquired/        # Documentation of skills and workflows used to build the app
├── src/
│   ├── assets/             # Images, SVGs, and other bundler-processed assets
│   ├── components/         # React components
│   │   ├── About.jsx       # 'Who We Are' section with founder note
│   │   ├── Contact.jsx     # Lead capture form
│   │   ├── Footer.jsx      # Navigation links and social icons
│   │   ├── Hero.jsx        # Value proposition and immediate CTA
│   │   ├── Navbar.jsx      # Sticky top navigation
│   │   ├── Onboarding.jsx  # 5-step process layout
│   │   ├── Partners.jsx    # Infinite scrolling logo marquee
│   │   ├── Projects.jsx    # Projects display carousel
│   │   └── Services.jsx    # Zig-zag feature layout
│   ├── App.jsx             # Main application assembly and component rendering
│   ├── App.css             # Global component styles (minimal)
│   ├── index.css           # Tailwind directives and global CSS resets
│   └── main.jsx            # React rendering entry point
├── eslint.config.js        # ESLint configuration for code quality
├── index.html              # HTML entry point for the Vite SPA
├── package.json            # Dependencies and scripts
├── tailwind.config.js      # Tailwind theme configuration
└── vite.config.js          # Vite build configuration
```

### Request Lifecycle

1. The browser requests `index.html`.
2. Vite serves `/src/main.jsx` as an ES module.
3. React mounts the application into the `<div id="root">` element.
4. `App.jsx` sequentially renders the static UI components.
5. In-page anchors (e.g., `<a href="#contact">`) utilize native browser smooth scrolling via CSS `scroll-behavior: smooth`.

### Styling Philosophy

The project aggressively utilizes Tailwind CSS utility classes. 
- Custom hex codes have been entirely purged in favor of Tailwind's unified `slate` palette.
- Complex background gradients and glows are generated via radial gradients directly in the JSX `className` string.
- Animations (like the marquee and glowing sweeps) are defined within `tailwind.config.js`.

---

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Starts the Vite development server with HMR. |
| `npm run build` | Compiles a highly optimized, minified production build into `/dist`. |
| `npm run preview` | Boots a local static server to preview the production `/dist` folder. |
| `npm run lint` | Runs ESLint to check for code quality and syntax errors. |

---

## Deployment

Because this is a statically exported React application (SPA) powered by Vite, deployment is incredibly straightforward across any static hosting provider.

### Vercel (Recommended)

1. Push your code to GitHub.
2. Import the repository into Vercel.
3. Vercel automatically detects Vite and configures the following settings:
   - Build Command: `npm run build`
   - Output Directory: `dist`
4. Click Deploy.

### Netlify

1. Connect your repository to Netlify.
2. Use the following build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`

### Docker (Nginx Static Serving)

If you must deploy via Docker, build the assets and serve them with Nginx:

```dockerfile
# Build stage
FROM node:20-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Production stage
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```
