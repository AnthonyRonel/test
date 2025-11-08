# 🎨 Quick Image Reference

## ✅ Setup Complete

Your project now has:
- ✅ `public/images/` folder structure
- ✅ `ImageCard` component for single images
- ✅ `ImageGallery` component for image galleries with lightbox
- ✅ `Dashboard` component for stats at the top of pages
- ✅ Example code in `HOME_WITH_IMAGES_EXAMPLE.jsx`

## 📁 Where to Put Images

```
public/images/
├── architecture/    ← System diagrams, architecture visuals
├── gameplay/        ← Game screenshots, gameplay GIFs  
├── screenshots/     ← UI screenshots, menus
├── diagrams/        ← Technical diagrams, flowcharts
└── icons/          ← Logos, custom icons
```

## 🚀 Quick Usage

### 1. Simple Image

```jsx
<img 
  src="/images/gameplay/screenshot.png" 
  alt="Gameplay"
  className="w-full rounded-lg border border-gray-700"
/>
```

### 2. Image Card

```jsx
import ImageCard from '../components/ImageCard'

<ImageCard
  src="/images/gameplay/boss.png"
  alt="Boss Fight"
  title="Epic Boss Battle"
  description="Fighting the Dobkeratops"
/>
```

### 3. Image Gallery (with Lightbox!)

```jsx
import ImageGallery from '../components/ImageGallery'

const images = [
  { src: '/images/gameplay/1.png', alt: 'Game 1', title: 'Level 1' },
  { src: '/images/gameplay/2.png', alt: 'Game 2', title: 'Level 2' },
]

<ImageGallery images={images} />
```

### 4. Dashboard Stats

```jsx
import Dashboard from '../components/Dashboard'
import { Activity, Users, Zap, Server } from 'lucide-react'

const stats = [
  { icon: Activity, label: 'Tick Rate', value: '60Hz', color: 'primary' },
  { icon: Users, label: 'Players', value: '4', color: 'green' },
]

<Dashboard stats={stats} />
```

## 🎯 Recommended Images to Create

### Must Have (Priority 1)
1. **Game Logo** → `public/images/logo.png`
2. **Main Screenshot** → `public/images/gameplay/main.png`
3. **Lobby Screenshot** → `public/images/screenshots/lobby.png`
4. **Architecture Diagram** → `public/images/architecture/overview.png`

### Nice to Have (Priority 2)
5. **ECS Diagram** → `public/images/diagrams/ecs.png`
6. **Protocol Flow** → `public/images/diagrams/protocol.png`
7. **Enemy Types** → `public/images/gameplay/enemies.png`
8. **Player Ships** → `public/images/gameplay/players.png`

### Optional (Priority 3)
9. **Boss Screenshots** → `public/images/gameplay/boss-*.png`
10. **Power-ups** → `public/images/gameplay/powerups.png`
11. **Level Screenshots** → `public/images/gameplay/level-*.png`

## 🔧 Tools to Create Images

### Screenshots
- **In-game**: Press PrintScreen while playing
- **OBS Studio**: Record and screenshot
- **Flameshot** (Linux): `sudo apt install flameshot`

### Diagrams
- **Draw.io**: https://app.diagrams.net (FREE)
- **Excalidraw**: https://excalidraw.com (FREE, hand-drawn style)
- **Figma**: https://figma.com (FREE for personal)

### Code Screenshots
- **Carbon**: https://carbon.now.sh (beautiful code images)
- **Ray.so**: https://ray.so (modern code screenshots)

### Image Optimization
- **TinyPNG**: https://tinypng.com (compress PNG/JPG)
- **Squoosh**: https://squoosh.app (Google's image optimizer)

## 📝 Example: Add Images to a Page

```jsx
// In any page (e.g., Architecture.jsx)
import ImageGallery from '../components/ImageGallery'
import Dashboard from '../components/Dashboard'

const Architecture = () => {
  return (
    <div className="space-y-8">
      {/* Add dashboard at top */}
      <Dashboard />
      
      <h1>Architecture</h1>
      
      {/* Add single image */}
      <img 
        src="/images/architecture/system-overview.png"
        alt="System Overview"
        className="w-full rounded-lg border border-gray-700"
      />
      
      {/* Add image gallery */}
      <ImageGallery images={[
        { src: '/images/architecture/layer1.png', alt: 'Layer 1' },
        { src: '/images/architecture/layer2.png', alt: 'Layer 2' },
      ]} />
    </div>
  )
}
```

## ✨ Pro Tips

1. **Optimize before uploading**: Keep images < 500KB
2. **Use descriptive names**: `ecs-architecture.png` not `image1.png`
3. **Add alt text**: Important for accessibility
4. **Use WebP format**: Better compression than PNG/JPG
5. **Test locally first**: `npm run dev` to see changes

## 🎨 Color Palette for Diagrams

Match your documentation theme:
- **Primary Blue**: #3b82f6
- **Secondary Purple**: #8b5cf6
- **Dark Background**: #0f172a
- **Dark Light**: #1e293b
- **Text**: #e2e8f0

## 📦 Next Steps

1. ✅ Images folder created
2. ✅ Components ready
3. ⏳ **YOUR TURN**: Add your images to `public/images/`
4. ⏳ **YOUR TURN**: Update pages with images
5. ⏳ Deploy: `vercel --prod`

## 🆘 Need Help?

Check these files:
- `IMAGES_GUIDE.md` - Detailed guide
- `HOME_WITH_IMAGES_EXAMPLE.jsx` - Full example
- `public/images/README.md` - Folder structure

Happy documenting! 🚀
