import React from 'react'

const Architecture = () => {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-4">System Architecture</h1>
        <p className="text-gray-400 text-lg">
          Complete overview of the R-Type game engine architecture and design decisions.
        </p>
      </div>

      {/* High-Level Architecture */}
      <section className="bg-dark-light border border-gray-700 rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4 text-primary">High-Level Architecture</h2>
        <p className="text-gray-300 mb-6">
          The R-Type engine follows a <strong>Client-Server Authoritative Model</strong> with clear
          separation of concerns between different subsystems.
        </p>
        
        <div className="bg-dark border border-gray-600 rounded-lg p-6 font-mono text-sm overflow-x-auto">
          <pre className="text-gray-300">{`
┌─────────────────────────────────────────────────────────────────┐
│                        R-Type System                            │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ┌──────────────┐                    ┌──────────────┐           │
│  │   Client 1   │                    │              │           │
│  │  (Raylib)    │<────── UDP ───────>│              │           │
│  └──────────────┘                    │              │           │
│                                      │    Server    │           │
│  ┌──────────────┐                    │              │           │
│  │   Client 2   │<────── UDP ───────►│  (ASIO)      │           │
│  │  (Raylib)    │                    │              │           │
│  └──────────────┘                    │  Port: 1234  │           │
│                                      │              │           │
│  ┌──────────────┐                    │              │           │
│  │   Client N   │<────── UDP ───────>│              │           │
│  └──────────────┘                    └──────────────┘           │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
          `}</pre>
        </div>
      </section>

      {/* Layer Architecture */}
      <section className="bg-dark-light border border-gray-700 rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4 text-primary">Layered Architecture</h2>
        <p className="text-gray-300 mb-6">
          The system is organized in distinct layers with clear responsibilities and minimal coupling.
        </p>

        <div className="space-y-4">
          <div className="bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded">
            <h3 className="font-bold text-lg mb-2">🎮 Presentation Layer (Client Only)</h3>
            <p className="text-gray-300 mb-2">Handles rendering, input, and user interface.</p>
            <ul className="list-disc list-inside text-gray-400 space-y-1">
              <li><code>Renderer</code> - Graphics rendering with Raylib</li>
              <li><code>InputManager</code> - Keyboard/mouse input handling</li>
              <li><code>SpriteManager</code> - Sprite loading and management</li>
              <li><code>Starfield</code> - Background scrolling effects</li>
            </ul>
          </div>

          <div className="bg-green-900/20 border-l-4 border-green-500 p-4 rounded">
            <h3 className="font-bold text-lg mb-2">🎯 Game Logic Layer</h3>
            <p className="text-gray-300 mb-2">Core game mechanics using ECS pattern.</p>
            <ul className="list-disc list-inside text-gray-400 space-y-1">
              <li><code>Engine</code> - Main ECS engine with update loop</li>
              <li><code>Registry</code> - Entity and component management</li>
              <li><code>Systems</code> - Movement, collision, shooting logic</li>
              <li><code>Components</code> - Position, Velocity, Health, etc.</li>
            </ul>
          </div>

          <div className="bg-purple-900/20 border-l-4 border-purple-500 p-4 rounded">
            <h3 className="font-bold text-lg mb-2">🌐 Network Layer</h3>
            <p className="text-gray-300 mb-2">Binary UDP protocol for real-time communication.</p>
            <ul className="list-disc list-inside text-gray-400 space-y-1">
              <li><code>UdpServer</code> / <code>RTypeClient</code> - ASIO-based networking</li>
              <li><code>Serializer</code> - Binary data packing/unpacking</li>
              <li><code>MessageFactory</code> - Message creation and parsing</li>
              <li><code>ThreadSafeQueue</code> - Lock-free message queue</li>
            </ul>
          </div>

          <div className="bg-orange-900/20 border-l-4 border-orange-500 p-4 rounded">
            <h3 className="font-bold text-lg mb-2">🎲 Application Layer (Server Only)</h3>
            <p className="text-gray-300 mb-2">Server-side game management and orchestration.</p>
            <ul className="list-disc list-inside text-gray-400 space-y-1">
              <li><code>GameManager</code> - Multi-room game orchestration</li>
              <li><code>Room</code> - Individual game instance management</li>
              <li><code>PlayerManager</code> - Player session tracking</li>
              <li><code>MessageHandler</code> - Protocol message routing</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Data Flow */}
      <section className="bg-dark-light border border-gray-700 rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4 text-primary">Data Flow</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-3">Client → Server Flow</h3>
            <div className="bg-dark border border-gray-600 rounded-lg p-4 font-mono text-sm">
              <pre className="text-gray-300">{`
Input Event → InputManager → PlayerInput struct
                                    ↓
                            Serialize to binary
                                    ↓
                            UDP Socket (ASIO)
                                    ↓
                            Server receives packet
                                    ↓
                            ThreadSafeQueue enqueue
                                    ↓
                            MessageHandler processes
                                    ↓
                            Engine.handle_input()
                                    ↓
                            Update player entity
              `}</pre>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">Server → Client Flow</h3>
            <div className="bg-dark border border-gray-600 rounded-lg p-4 font-mono text-sm">
              <pre className="text-gray-300">{`
Game Loop (60Hz) → Engine.update()
                        ↓
                  Collision detection
                        ↓
                  Entity updates
                        ↓
                  Create Snapshot
                        ↓
                  Serialize entities
                        ↓
                  Broadcast to all clients
                        ↓
                  Client receives
                        ↓
                  Deserialize
                        ↓
                  Update local entities
                        ↓
                  Renderer.draw()
              `}</pre>
            </div>
          </div>
        </div>
      </section>

      {/* Threading Model */}
      <section className="bg-dark-light border border-gray-700 rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4 text-primary">Threading Model</h2>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-dark border border-gray-600 rounded-lg p-4">
            <h3 className="font-bold text-lg mb-3 text-blue-400">Server Threads</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <strong>Network Thread</strong>
                <p className="text-sm text-gray-400">ASIO io_context.run() - handles UDP I/O</p>
              </li>
              <li>
                <strong>Game Thread</strong>
                <p className="text-sm text-gray-400">GameManager.run() - 60Hz game loop</p>
              </li>
            </ul>
            <div className="mt-4 p-3 bg-yellow-900/20 border border-yellow-700 rounded text-sm">
              <strong>Communication:</strong> ThreadSafeQueue with mutex protection
            </div>
          </div>

          <div className="bg-dark border border-gray-600 rounded-lg p-4">
            <h3 className="font-bold text-lg mb-3 text-green-400">Client Threads</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <strong>Main Thread</strong>
                <p className="text-sm text-gray-400">Raylib rendering + input (must be main thread)</p>
              </li>
              <li>
                <strong>Network Thread</strong>
                <p className="text-sm text-gray-400">RTypeClient.receive_loop() - async UDP receive</p>
              </li>
            </ul>
            <div className="mt-4 p-3 bg-yellow-900/20 border border-yellow-700 rounded text-sm">
              <strong>Sync:</strong> Callbacks executed in network thread, data copied to main
            </div>
          </div>
        </div>
      </section>

      {/* Design Patterns */}
      <section className="bg-dark-light border border-gray-700 rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4 text-primary">Design Patterns Used</h2>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-dark border border-gray-600 rounded-lg p-4">
            <h3 className="font-bold mb-2">Entity-Component-System (ECS)</h3>
            <p className="text-sm text-gray-400 mb-2">
              Decouples data (Components) from behavior (Systems) for maximum flexibility.
            </p>
            <code className="text-xs text-primary">rtype/ecs/</code>
          </div>

          <div className="bg-dark border border-gray-600 rounded-lg p-4">
            <h3 className="font-bold mb-2">Factory Pattern</h3>
            <p className="text-sm text-gray-400 mb-2">
              MessageFactory creates appropriate message objects from binary data.
            </p>
            <code className="text-xs text-primary">protocol/factory.hpp</code>
          </div>

          <div className="bg-dark border border-gray-600 rounded-lg p-4">
            <h3 className="font-bold mb-2">Observer Pattern</h3>
            <p className="text-sm text-gray-400 mb-2">
              Callback-based event handling for network messages.
            </p>
            <code className="text-xs text-primary">client/client.hpp</code>
          </div>

          <div className="bg-dark border border-gray-600 rounded-lg p-4">
            <h3 className="font-bold mb-2">Producer-Consumer</h3>
            <p className="text-sm text-gray-400 mb-2">
              ThreadSafeQueue for inter-thread communication.
            </p>
            <code className="text-xs text-primary">server/ThreadSafeQueue.hpp</code>
          </div>

          <div className="bg-dark border border-gray-600 rounded-lg p-4">
            <h3 className="font-bold mb-2">Singleton (Implicit)</h3>
            <p className="text-sm text-gray-400 mb-2">
              Single Engine instance per game, single GameManager per server.
            </p>
            <code className="text-xs text-primary">ecs/engine.hpp</code>
          </div>

          <div className="bg-dark border border-gray-600 rounded-lg p-4">
            <h3 className="font-bold mb-2">Strategy Pattern</h3>
            <p className="text-sm text-gray-400 mb-2">
              Different enemy types with varying movement patterns.
            </p>
            <code className="text-xs text-primary">ecs/bootstrap.hpp</code>
          </div>
        </div>
      </section>

      {/* Key Decisions */}
      <section className="bg-dark-light border border-gray-700 rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4 text-primary">Key Architectural Decisions</h2>
        
        <div className="space-y-4">
          <div className="border-l-4 border-green-500 pl-4">
            <h3 className="font-bold text-lg">✅ Why ECS over traditional OOP?</h3>
            <p className="text-gray-400 mt-2">
              ECS provides better cache locality, easier parallelization, and more flexible entity composition.
              Traditional inheritance hierarchies become unwieldy with complex entity types.
            </p>
          </div>

          <div className="border-l-4 border-blue-500 pl-4">
            <h3 className="font-bold text-lg">✅ Why UDP over TCP?</h3>
            <p className="text-gray-400 mt-2">
              Real-time games prioritize low latency over reliability. Old snapshots are useless - better
              to drop them and send fresh data. UDP allows for custom reliability where needed.
            </p>
          </div>

          <div className="border-l-4 border-purple-500 pl-4">
            <h3 className="font-bold text-lg">✅ Why ASIO library?</h3>
            <p className="text-gray-400 mt-2">
              Cross-platform async I/O without platform-specific code. Header-only option simplifies
              deployment. Well-tested and used in production systems.
            </p>
          </div>

          <div className="border-l-4 border-orange-500 pl-4">
            <h3 className="font-bold text-lg">✅ Why Raylib over SFML?</h3>
            <p className="text-gray-400 mt-2">
              Simpler API, easier to learn, better documentation. SFML's network module conflicts with
              our custom protocol. Raylib focuses on graphics/input only.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Architecture
