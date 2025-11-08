# 🖼️ Adding Images to Your Documentation

## Quick Start

### 1. Add Your Images

Place images in the `public/images/` folder:

```
public/images/
├── architecture/
│   ├── system-overview.png
│   ├── ecs-diagram.png
│   └── threading-model.png
├── gameplay/
│   ├── screenshot-1.png
│   ├── boss-fight.gif
│   └── player-ships.png
├── screenshots/
│   ├── lobby-ui.png
│   ├── game-menu.png
│   └── settings.png
└── diagrams/
    ├── protocol-flow.png
    └── network-topology.png
```

### 2. Use Images in Pages

#### Simple Image

```jsx
<img 
  src="/images/gameplay/screenshot-1.png" 
  alt="Gameplay Screenshot"
  className="w-full rounded-lg border border-gray-700"
/>
```

#### Image with Caption

```jsx
<div className="space-y-2">
  <img 
    src="/images/architecture/ecs-diagram.png" 
    alt="ECS Architecture"
    className="w-full rounded-lg border border-gray-700"
  />
  <p className="text-sm text-gray-400 text-center">
    Entity-Component-System architecture diagram
  </p>
</div>
```

#### Using ImageCard Component

```jsx
import ImageCard from '../components/ImageCard'

<ImageCard
  src="/images/gameplay/boss-fight.gif"
  alt="Boss Fight"
  title="Epic Boss Battle"
  description="Fighting the legendary Dobkeratops"
/>
```

#### Using ImageGallery Component

```jsx
import ImageGallery from '../components/ImageGallery'

const images = [
  {
    src: '/images/gameplay/screenshot-1.png',
    alt: 'Gameplay 1',
    title: 'Level 1 - Space Station',
    description: '4 players fighting enemy waves'
  },
  {
    src: '/images/gameplay/screenshot-2.png',
    alt: 'Gameplay 2',
    title: 'Level 2 - Asteroid Field'
  },
  // Add more images...
]

<ImageGallery images={images} />
```

## 🎨 Styling Examples

### Full-width Hero Image

```jsx
<div className="relative w-full h-96 overflow-hidden rounded-lg">
  <img 
    src="/images/gameplay/hero-banner.png"
    alt="R-Type Game"
    className="w-full h-full object-cover"
  />
  <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent flex items-end">
    <div className="p-8">
      <h2 className="text-4xl font-bold text-white">R-Type Game Engine</h2>
      <p className="text-gray-300 mt-2">A modern take on a classic shooter</p>
    </div>
  </div>
</div>
```

### Side-by-side Comparison

```jsx
<div className="grid md:grid-cols-2 gap-6">
  <div>
    <img 
      src="/images/screenshots/before.png"
      alt="Before"
      className="w-full rounded-lg border border-gray-700"
    />
    <p className="text-center mt-2 text-gray-400">Before optimization</p>
  </div>
  <div>
    <img 
      src="/images/screenshots/after.png"
      alt="After"
      className="w-full rounded-lg border border-gray-700"
    />
    <p className="text-center mt-2 text-gray-400">After optimization</p>
  </div>
</div>
```

### Image Grid

```jsx
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
  {['player1.png', 'player2.png', 'player3.png', 'player4.png'].map((img, i) => (
    <div key={i} className="relative group">
      <img 
        src={`/images/gameplay/${img}`}
        alt={`Player ${i + 1}`}
        className="w-full rounded-lg border border-gray-700 group-hover:border-primary transition-colors"
      />
      <p className="text-center mt-2 text-sm text-gray-400">Player {i + 1}</p>
    </div>
  ))}
</div>
```

### Floating Image with Text

```jsx
<div className="flex flex-col md:flex-row gap-6 items-center">
  <img 
    src="/images/architecture/ecs-diagram.png"
    alt="ECS"
    className="w-full md:w-1/2 rounded-lg border border-gray-700"
  />
  <div className="flex-1">
    <h3 className="text-2xl font-bold mb-4">Entity-Component-System</h3>
    <p className="text-gray-300">
      Our game engine uses the ECS pattern for maximum flexibility
      and performance. Entities are composed of simple data components,
      while systems handle the logic.
    </p>
  </div>
</div>
```

## 📸 Where to Find Images

### Game Screenshots
- Take screenshots while running your game
- Use OBS or built-in screenshot tools
- Capture different game states (menu, lobby, gameplay, etc.)

### Architecture Diagrams
- **Draw.io** (https://app.diagrams.net) - Free, web-based
- **Excalidraw** (https://excalidraw.com) - Hand-drawn style
- **Figma** (https://figma.com) - Professional design tool
- **PlantUML** - Generate UML from text

### Code Screenshots
- **Carbon** (https://carbon.now.sh) - Beautiful code images
- **Ray.so** (https://ray.so) - Modern code screenshots

### Icons & Graphics
- **Lucide Icons** (already installed in project)
- **Heroicons** (https://heroicons.com)
- **Flaticon** (https://flaticon.com) - Free icons
- **Unsplash** (https://unsplash.com) - Free stock photos

## 🎯 Example: Update Home Page

```jsx
// In src/pages/Home.jsx
import ImageGallery from '../components/ImageGallery'

// Add after the hero section
<section className="my-12">
  <h2 className="text-3xl font-bold mb-6">Game Screenshots</h2>
  <ImageGallery images={[
    {
      src: '/images/gameplay/lobby.png',
      alt: 'Lobby System',
      title: 'Multiplayer Lobby',
      description: 'Create and join game rooms'
    },
    {
      src: '/images/gameplay/ingame.png',
      alt: 'Gameplay',
      title: 'Intense Action',
      description: '4 players vs enemy waves'
    },
    // Add more...
  ]} />
</section>
```

## 🔧 Tips

1. **Optimize images** before adding them (use TinyPNG or Squoosh)
2. **Use descriptive alt text** for accessibility
3. **Keep file sizes small** (< 500KB per image ideally)
4. **Use WebP format** for better compression (modern browsers)
5. **Add loading="lazy"** for images below the fold
6. **Use consistent aspect ratios** for cleaner layouts

## 🎨 Suggested Images to Add

### Priority 1 (Most Important)
- [ ] Game logo / banner
- [ ] Main gameplay screenshot
- [ ] Lobby/menu screenshot
- [ ] System architecture diagram

### Priority 2
- [ ] ECS component diagram
- [ ] Network protocol flow diagram
- [ ] Server architecture diagram
- [ ] Different enemy types

### Priority 3
- [ ] Player ships showcase
- [ ] Power-ups demonstration
- [ ] Level screenshots
- [ ] Code examples (as images)

## 🚀 Next Steps

1. Create/find your images
2. Place them in `public/images/`
3. Update pages to include images
4. Test locally with `npm run dev`
5. Deploy to Vercel with `vercel --prod`

Your images will be automatically deployed with your site!
