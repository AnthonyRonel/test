import React from 'react'
import { Folder, File, Code, Settings, Book } from 'lucide-react'

const ProjectTree = () => {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-4">Project Structure</h1>
        <p className="text-gray-400 text-lg">
          Complete directory tree and module organization of the R-Type project.
        </p>
      </div>

      {/* Tree Visualization */}
      <section className="bg-dark-light border border-gray-700 rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4 text-primary">Directory Tree</h2>
        
        <div className="bg-dark border border-gray-600 rounded-lg p-6 font-mono text-sm overflow-x-auto">
          <pre className="text-gray-300">{`
G-CPP-500-COT-5-1-rtype-12/
├── 📄 CMakeLists.txt              # Root build configuration
├── 📄 README.md                   # Project documentation (you are here!)
├── 📄 .gitignore                  # Git ignore rules
│
├── 📁 scripts/                    # Build and utility scripts
│   ├── build_all.sh              # Build server + client
│   └── clean_all.sh              # Clean build artifacts
│
├── 📁 docs/                       # Documentation
│   └── 📁 website/                # React documentation site (this site!)
│       ├── package.json
│       ├── vite.config.js
│       ├── vercel.json           # Vercel deployment config
│       └── src/
│           ├── App.jsx
│           ├── components/
│           └── pages/
│
├── 📁 rtype/                      # Main source code
│   │
│   ├── 📁 ecs/                    # Entity-Component-System Engine
│   │   ├── CMakeLists.txt
│   │   ├── include/
│   │   │   └── ecs/
│   │   │       ├── engine.hpp     # Main game engine
│   │   │       └── bootstrap.hpp  # ECS registry & components
│   │   └── src/
│   │       └── engine.cpp         # Engine implementation
│   │
│   ├── 📁 protocol/               # Network Protocol Layer
│   │   ├── CMakeLists.txt
│   │   ├── readMe.md             # Protocol specification (RFC-style)
│   │   ├── include/
│   │   │   └── protocol/
│   │   │       ├── protocol_data.hpp    # Message structures
│   │   │       ├── serializer.hpp       # Binary serialization
│   │   │       └── factory.hpp          # Message factory
│   │   └── src/
│   │       ├── protocol.cpp
│   │       ├── serializer.cpp
│   │       ├── factory.cpp
│   │       ├── protocol_part2.cpp
│   │       └── lobby_protocol.cpp
│   │
│   ├── 📁 server/                 # Server Implementation
│   │   ├── CMakeLists.txt
│   │   ├── include/
│   │   │   └── server/
│   │   │       ├── server.hpp           # UDP server (ASIO)
│   │   │       ├── GameManager.hpp      # Multi-room orchestration
│   │   │       ├── room.hpp             # Game room management
│   │   │       ├── PlayerManager.hpp    # Player sessions
│   │   │       ├── message_handler.hpp  # Message routing
│   │   │       └── ThreadSafeQueue.hpp  # Thread-safe queue
│   │   └── src/
│   │       ├── main.cpp                 # Server entry point
│   │       ├── server.cpp
│   │       ├── network.cpp
│   │       ├── game_loop.cpp
│   │       ├── message_handler.cpp
│   │       ├── PlayerManager.cpp
│   │       ├── room.cpp
│   │       └── GameManager.cpp
│   │
│   └── 📁 client/                 # Client Implementation
│       ├── CMakeLists.txt
│       ├── assets/                # Game assets (sprites, sounds)
│       ├── include/
│       │   └── client/
│       │       ├── client.hpp           # Network client
│       │       ├── Game.hpp             # Main game class
│       │       ├── GameClient.hpp       # Game logic integration
│       │       ├── Renderer.hpp         # Graphics rendering
│       │       ├── InputManager.hpp     # Input handling
│       │       ├── SpriteManager.hpp    # Sprite management
│       │       ├── Starfield.hpp        # Background effects
│       │       ├── Anima.hpp            # Animation system
│       │       ├── Datagame.hpp         # Game data structures
│       │       ├── Commands.hpp         # Command pattern
│       │       ├── GraphicsEngine.hpp   # Graphics abstraction
│       │       └── UdpClient.hpp        # UDP client wrapper
│       └── src/
│           ├── main.cpp                 # Client entry point
│           ├── client.cpp
│           ├── GameClient.cpp
│           ├── InputManager.cpp
│           ├── Renderer.cpp
│           ├── SpriteManager.cpp
│           ├── Starfield.cpp
│           ├── Game.cpp
│           ├── Datagame.cpp
│           └── Anima.cpp
│
├── 📁 build/                      # Build output (generated by CMake)
│   ├── rtype/
│   │   ├── server/
│   │   │   └── r-type_server      # Server executable
│   │   └── client/
│   │       └── r-type_client      # Client executable
│   └── ...
│
└── 📁 chat/                       # Bonus: Chat system (separate module)
    ├── include/
    └── src/
          `}</pre>
        </div>
      </section>

      {/* Module Descriptions */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-primary">Module Descriptions</h2>

        {/* ECS Module */}
        <div className="bg-dark-light border border-gray-700 rounded-lg p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-blue-900/30 rounded">
              <Code className="text-blue-400" size={24} />
            </div>
            <h3 className="text-xl font-bold">rtype/ecs/ - Game Engine</h3>
          </div>
          
          <p className="text-gray-300 mb-4">
            Core game engine implementing the Entity-Component-System architectural pattern.
          </p>

          <div className="space-y-3">
            <div className="bg-dark border border-gray-600 rounded p-3">
              <code className="text-primary">engine.hpp / engine.cpp</code>
              <p className="text-sm text-gray-400 mt-1">
                Main engine class with update loop, entity spawning, input handling, and collision detection.
                Manages player entities, enemies, bullets, and power-ups.
              </p>
            </div>

            <div className="bg-dark border border-gray-600 rounded p-3">
              <code className="text-primary">bootstrap.hpp</code>
              <p className="text-sm text-gray-400 mt-1">
                ECS registry implementation and component definitions (Position, Velocity, Health, etc.).
                Provides the foundation for data-oriented design.
              </p>
            </div>
          </div>

          <div className="mt-4 p-3 bg-green-900/20 border border-green-700 rounded">
            <strong>Key Features:</strong> Network ID mapping, deltaTime-based updates, component systems
          </div>
        </div>

        {/* Protocol Module */}
        <div className="bg-dark-light border border-gray-700 rounded-lg p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-purple-900/30 rounded">
              <Settings className="text-purple-400" size={24} />
            </div>
            <h3 className="text-xl font-bold">rtype/protocol/ - Network Protocol</h3>
          </div>
          
          <p className="text-gray-300 mb-4">
            Binary UDP protocol for real-time client-server communication.
          </p>

          <div className="space-y-3">
            <div className="bg-dark border border-gray-600 rounded p-3">
              <code className="text-primary">protocol_data.hpp</code>
              <p className="text-sm text-gray-400 mt-1">
                Message type definitions, packet structures (CONNECT, SNAPSHOT, INPUT, etc.).
                All structures are packed for efficient binary transmission.
              </p>
            </div>

            <div className="bg-dark border border-gray-600 rounded p-3">
              <code className="text-primary">serializer.hpp / serializer.cpp</code>
              <p className="text-sm text-gray-400 mt-1">
                Binary serialization/deserialization for all message types.
                Handles endianness and struct packing.
              </p>
            </div>

            <div className="bg-dark border border-gray-600 rounded p-3">
              <code className="text-primary">factory.hpp / factory.cpp</code>
              <p className="text-sm text-gray-400 mt-1">
                Message factory pattern for creating appropriate message objects from raw binary data.
              </p>
            </div>

            <div className="bg-dark border border-gray-600 rounded p-3">
              <code className="text-primary">lobby_protocol.cpp</code>
              <p className="text-sm text-gray-400 mt-1">
                Lobby system messages: room creation, joining, player notifications.
              </p>
            </div>
          </div>

          <div className="mt-4 p-3 bg-green-900/20 border border-green-700 rounded">
            <strong>Protocol:</strong> Binary, UDP, Little Endian, 3-byte header (size + type)
          </div>
        </div>

        {/* Server Module */}
        <div className="bg-dark-light border border-gray-700 rounded-lg p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-orange-900/30 rounded">
              <Settings className="text-orange-400" size={24} />
            </div>
            <h3 className="text-xl font-bold">rtype/server/ - Server</h3>
          </div>
          
          <p className="text-gray-300 mb-4">
            Multi-threaded authoritative server with room management.
          </p>

          <div className="space-y-3">
            <div className="bg-dark border border-gray-600 rounded p-3">
              <code className="text-primary">main.cpp</code>
              <p className="text-sm text-gray-400 mt-1">
                Server entry point. Creates network and game threads, initializes ASIO context.
              </p>
            </div>

            <div className="bg-dark border border-gray-600 rounded p-3">
              <code className="text-primary">server.hpp / server.cpp</code>
              <p className="text-sm text-gray-400 mt-1">
                UdpServer class using ASIO for async UDP communication. Handles packet reception.
              </p>
            </div>

            <div className="bg-dark border border-gray-600 rounded p-3">
              <code className="text-primary">GameManager.hpp / GameManager.cpp</code>
              <p className="text-sm text-gray-400 mt-1">
                Orchestrates multiple game rooms, processes incoming messages, runs 60Hz game loop.
              </p>
            </div>

            <div className="bg-dark border border-gray-600 rounded p-3">
              <code className="text-primary">room.hpp / room.cpp</code>
              <p className="text-sm text-gray-400 mt-1">
                Individual game room with its own Engine instance. Manages players in the room.
              </p>
            </div>

            <div className="bg-dark border border-gray-600 rounded p-3">
              <code className="text-primary">PlayerManager.hpp / PlayerManager.cpp</code>
              <p className="text-sm text-gray-400 mt-1">
                Tracks connected players, sessions, and their current rooms.
              </p>
            </div>

            <div className="bg-dark border border-gray-600 rounded p-3">
              <code className="text-primary">ThreadSafeQueue.hpp</code>
              <p className="text-sm text-gray-400 mt-1">
                Lock-based thread-safe queue for network thread → game thread communication.
              </p>
            </div>
          </div>

          <div className="mt-4 p-3 bg-green-900/20 border border-green-700 rounded">
            <strong>Threading:</strong> Network thread (ASIO) + Game thread (60Hz loop)
          </div>
        </div>

        {/* Client Module */}
        <div className="bg-dark-light border border-gray-700 rounded-lg p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-green-900/30 rounded">
              <Settings className="text-green-400" size={24} />
            </div>
            <h3 className="text-xl font-bold">rtype/client/ - Client</h3>
          </div>
          
          <p className="text-gray-300 mb-4">
            Graphical client with Raylib rendering and network integration.
          </p>

          <div className="space-y-3">
            <div className="bg-dark border border-gray-600 rounded p-3">
              <code className="text-primary">main.cpp</code>
              <p className="text-sm text-gray-400 mt-1">
                Client entry point. Creates Game instance and starts main loop.
              </p>
            </div>

            <div className="bg-dark border border-gray-600 rounded p-3">
              <code className="text-primary">Game.hpp / Game.cpp</code>
              <p className="text-sm text-gray-400 mt-1">
                Main game class coordinating UI, lobby, and gameplay states.
              </p>
            </div>

            <div className="bg-dark border border-gray-600 rounded p-3">
              <code className="text-primary">client.hpp / client.cpp</code>
              <p className="text-sm text-gray-400 mt-1">
                RTypeClient network layer with callback-based message handling.
              </p>
            </div>

            <div className="bg-dark border border-gray-600 rounded p-3">
              <code className="text-primary">Renderer.hpp / Renderer.cpp</code>
              <p className="text-sm text-gray-400 mt-1">
                Graphics rendering using Raylib. Draws entities, UI, and effects.
              </p>
            </div>

            <div className="bg-dark border border-gray-600 rounded p-3">
              <code className="text-primary">InputManager.hpp / InputManager.cpp</code>
              <p className="text-sm text-gray-400 mt-1">
                Keyboard and mouse input handling, converts to protocol messages.
              </p>
            </div>

            <div className="bg-dark border border-gray-600 rounded p-3">
              <code className="text-primary">SpriteManager.hpp / SpriteManager.cpp</code>
              <p className="text-sm text-gray-400 mt-1">
                Sprite loading, caching, and animation management.
              </p>
            </div>

            <div className="bg-dark border border-gray-600 rounded p-3">
              <code className="text-primary">Starfield.hpp / Starfield.cpp</code>
              <p className="text-sm text-gray-400 mt-1">
                Scrolling star-field background effect for space atmosphere.
              </p>
            </div>
          </div>

          <div className="mt-4 p-3 bg-green-900/20 border border-green-700 rounded">
            <strong>Graphics:</strong> Raylib 5.0 | <strong>Threading:</strong> Main (render) + Network (async)
          </div>
        </div>
      </section>

      {/* Build System */}
      <section className="bg-dark-light border border-gray-700 rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4 text-primary">Build System</h2>
        
        <div className="space-y-4">
          <div>
            <h3 className="font-bold text-lg mb-2">CMake Configuration</h3>
            <p className="text-gray-300 mb-3">
              The project uses CMake 3.16+ with hierarchical CMakeLists.txt files:
            </p>
            <ul className="list-disc list-inside text-gray-400 space-y-1">
              <li><code>./CMakeLists.txt</code> - Root configuration, CPM setup, ASIO dependency</li>
              <li><code>rtype/ecs/CMakeLists.txt</code> - ECS shared library</li>
              <li><code>rtype/protocol/CMakeLists.txt</code> - Protocol shared library</li>
              <li><code>rtype/server/CMakeLists.txt</code> - Server executable</li>
              <li><code>rtype/client/CMakeLists.txt</code> - Client executable with Raylib</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-2">Dependencies</h3>
            <div className="bg-dark border border-gray-600 rounded p-4">
              <p className="text-gray-300 mb-2">Managed via <strong>CPM (CMake Package Manager)</strong>:</p>
              <ul className="list-disc list-inside text-gray-400 space-y-1">
                <li><strong>ASIO 1.28.0</strong> - Async I/O (header-only)</li>
                <li><strong>Raylib 5.0</strong> - Graphics library (FetchContent)</li>
              </ul>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-2">Build Scripts</h3>
            <div className="bg-dark border border-gray-600 rounded p-4 font-mono text-sm">
              <p className="text-gray-300 mb-2"><code>./scripts/build_all.sh</code></p>
              <p className="text-gray-400 text-xs">Configures CMake and builds all targets in parallel</p>
              
              <p className="text-gray-300 mb-2 mt-3"><code>./scripts/clean_all.sh</code></p>
              <p className="text-gray-400 text-xs">Removes build directory and artifacts</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ProjectTree
