# R-Type Documentation Website

Modern React documentation website for the R-Type game engine project.

## 🚀 Quick Start

### Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:3000
```

### Build for Production

```bash
# Build static site
npm run build

# Preview production build
npm run preview
```

## 📦 Deployment on Vercel

### Method 1: Vercel CLI (Recommended)

```bash
# Install Vercel CLI globally
npm install -g vercel

# Login to Vercel
vercel login

# Deploy to production
vercel --prod
```

### Method 2: GitHub Integration

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Configure:
   - **Framework Preset**: Vite
   - **Root Directory**: `docs/website`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
6. Click "Deploy"

### Method 3: Vercel Dashboard

1. Go to [vercel.com/new](https://vercel.com/new)
2. Drag and drop the `docs/website` folder
3. Vercel will auto-detect Vite configuration
4. Click "Deploy"

## 🔧 Configuration

The project is pre-configured for Vercel deployment:

- `vercel.json` - Vercel configuration
- `vite.config.js` - Vite build settings
- `package.json` - Dependencies and scripts

## 📁 Project Structure

```
docs/website/
├── src/
│   ├── App.jsx              # Main app component
│   ├── main.jsx             # Entry point
│   ├── index.css            # Global styles
│   ├── components/
│   │   └── Layout.jsx       # Layout with sidebar
│   └── pages/
│       ├── Home.jsx         # Landing page
│       ├── Architecture.jsx # System architecture
│       ├── ProjectTree.jsx  # Project structure
│       ├── ECS.jsx          # ECS documentation
│       ├── Protocol.jsx     # Network protocol
│       ├── Server.jsx       # Server details
│       ├── Client.jsx       # Client details
│       ├── Algorithms.jsx   # Algorithm explanations
│       ├── Comparative.jsx  # Technology comparison
│       └── Classes.jsx      # API reference
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── vercel.json
```

## 🎨 Tech Stack

- **React 18** - UI framework
- **Vite** - Build tool and dev server
- **TailwindCSS** - Utility-first CSS
- **React Router** - Client-side routing
- **Lucide React** - Icon library
- **Prism.js** - Syntax highlighting

## 🌐 Features

- ✅ Responsive design
- ✅ Dark theme optimized for code
- ✅ Syntax highlighting for code blocks
- ✅ Fast navigation with React Router
- ✅ Collapsible sidebar
- ✅ Optimized for Vercel deployment
- ✅ SEO-friendly

## 📝 Adding New Pages

1. Create new page component in `src/pages/`
2. Add route in `src/App.jsx`
3. Add navigation link in `src/components/Layout.jsx`

Example:

```jsx
// src/pages/NewPage.jsx
import React from 'react'

const NewPage = () => {
  return (
    <div>
      <h1>New Page</h1>
    </div>
  )
}

export default NewPage
```

## 🔗 Environment Variables

No environment variables required for basic deployment.

## 📄 License

Part of the R-Type project - Epitech B-CPP-500

## 👥 Authors

R-Type Team - 2025
