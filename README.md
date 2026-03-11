# Vesta B2B SaaS Landing Page

A high-converting, "Human-Centric Digital Transformation" landing page built for small-to-medium enterprises (SMEs) and government agencies in the Philippines.

## Key Features

- **Strategic Design:** Clean, modern, and "warm" aesthetic using heavy negative space, soft blues, and crisp typography (`Inter`).
- **Engaging UI Components:** Includes complex CSS grid backgrounds, glassmorphism (`backdrop-blur`), sticky navigation, and infinite scrolling logo marquees.
- **Fast and Responsive:** Built atop Vite for instant HMR development, fully responsive leveraging Tailwind CSS breakpoints.
- **Iconography:** Utilizes `lucide-react` for clean, scalable vector graphics.

---

## Tech Stack

- **Framework:** React 19 via Vite
- **Styling:** Tailwind CSS V4
- **Icons:** `lucide-react`
- **Typography:** Inter (Standard Sans-Serif system fonts mapping)
- **Deployment Target:** Static hosting capable (Vercel, Netlify, GitHub Pages)

---

## Prerequisites

- Node.js 18 or higher
- npm or pnpm

---

## Getting Started

### 1. Clone the Repository

```bash
git clone <repository_url>
cd electric-glenn
```

### 2. Install JavaScript Dependencies

```bash
npm install
```

### 3. Start Development Server

Run the Vite development server:

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) (default Vite port) in your browser.

---

## Architecture Overview

### Directory Structure

```
├── public/                 # Static assets (images, SVGs)
├── skills_acquired/        # Documentation of skills leveraged for this specific build
│   └── skill.md            # Technical competencies mapped to the project requirements
├── src/                    # Primary Application Source
│   ├── components/         # Reusable React components
│   │   ├── Footer.jsx      # Footer with links and social icons
│   │   ├── Hero.jsx        # Top section with CTAs
│   │   ├── Navbar.jsx      # Sticky top navigation
│   │   ├── Onboarding.jsx  # Process steps layout
│   │   ├── Partners.jsx    # Infinite scroll marquee and bottom CTA
│   │   ├── Projects.jsx    # Portfolio grid display
│   │   └── Services.jsx    # Horizontal snap-scroll services display
│   ├── App.jsx             # Main assembly point for layout components
│   ├── index.css           # Global CSS, Tailwind v4 imports and custom @keyframes
│   └── main.jsx            # React root injection point
├── package.json            # Dependencies and scripts workflows
├── tailwind.config.js      # (Abstracted into index.css for V4 compatibility)
└── vite.config.js          # Vite bundler configuration
```

### Design Logic

Data flow is minimal as this is a static landing page. Components are structured modularly to allow for easy substitution of assets (like logos or project imagery) by swapping out hardcoded arrays within individual components or lifting that state to `App.jsx` in the future.

Custom CSS utilities specifically for the marquee and text glowing effects are stored in `src/index.css` using the V4 `@utility` declarations.

---

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start Vite development server with HMR |
| `npm run build` | Compile and bundle production ready code in `/dist` |
| `npm run preview` | Serve the production `/dist` locally to preview build |
| `npm run lint` | Run ESLint across source files |

---

## Deployment

Since this project leverages Vite, it produces static files that can be deployed anywhere.

### Vercel / Netlify

1. Connect your repository.
2. Ensure the framework preset is set to **Vite**.
3. Build command: `npm run build`
4. Output directory: `dist`

### Manual / Simple Static Hosting

1. Run `npm run build` to generate the `/dist` folder.
2. Upload the contents of the `/dist` directory to your hosting provider (e.g., AWS S3, standard cPanel file manager, Google Cloud Storage).
