# Images Directory

Place your images here to use them in the documentation.

## 📁 Folder Structure

```
public/images/
├── architecture/     # System diagrams, architecture visuals
├── gameplay/         # Game screenshots, gameplay GIFs
├── screenshots/      # UI screenshots, client/server views
├── diagrams/         # UML, flowcharts, technical diagrams
└── icons/           # Custom icons, logos
```

## 🖼️ How to Use Images

### In React Components

```jsx
// Simple image
<img src="/images/gameplay/screenshot1.png" alt="Gameplay" />

// With Tailwind styling
<img 
  src="/images/architecture/ecs-diagram.png" 
  alt="ECS Architecture"
  className="w-full rounded-lg border border-gray-700"
/>

// Responsive image
<div className="max-w-4xl mx-auto">
  <img 
    src="/images/screenshots/lobby.png" 
    alt="Lobby System"
    className="w-full h-auto rounded-lg shadow-lg"
  />
</div>
```

## 📸 Recommended Image Types

### Architecture Page
- System architecture diagrams
- Layer diagrams
- Threading model visuals
- Data flow diagrams

### Gameplay
- In-game screenshots
- Enemy types showcase
- Power-ups demonstration
- Player ships

### Protocol
- Packet structure diagrams
- Message flow sequences
- Network topology

### ECS
- Component diagrams
- Entity relationships
- System flow

## 🎨 Image Guidelines

- **Format**: PNG for diagrams, JPG for screenshots, GIF for animations
- **Size**: Optimize images (max 1-2MB per image)
- **Resolution**: 1920x1080 or smaller for screenshots
- **Naming**: Use kebab-case (e.g., `ecs-architecture.png`)

## 🔧 Tools for Creating Diagrams

- **Draw.io** / **Excalidraw** - Architecture diagrams
- **Figma** - UI mockups
- **PlantUML** - UML diagrams
- **Mermaid** - Flowcharts (can be embedded in markdown)
- **Carbon** - Beautiful code screenshots

## 📦 Optimization

Before adding images, optimize them:

```bash
# Using imagemagick
convert input.png -resize 1920x1080 -quality 85 output.png

# Using online tools
# - TinyPNG (https://tinypng.com)
# - Squoosh (https://squoosh.app)
```
