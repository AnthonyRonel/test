import React from 'react'
import { Server as ServerIcon, Users, Zap, Shield } from 'lucide-react'

const Server = () => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 blur-3xl -z-10"></div>
        <h1 className="text-4xl font-bold mb-4"><span className="gradient-text">Server Architecture</span></h1>
        <p className="text-gray-400 text-lg">
          Multi-threaded authoritative server handling concurrent game instances.
        </p>
      </div>

      {/* Overview */}
      <section className="glass-card rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4 text-primary">System Overview</h2>
        <p className="text-gray-300 mb-4">
          The server is the <strong>authoritative source of truth</strong> for all game state.
          It runs game logic, validates inputs, detects collisions, and broadcasts state updates
          to all connected clients.
        </p>

        <div className="grid md:grid-cols-3 gap-4 mt-6">
          <div className="glass-card rounded-lg p-4 shimmer">
            <div className="flex items-center gap-3 mb-3">
              <ServerIcon size={24} className="text-primary" />
              <h3 className="font-bold">Multi-threaded</h3>
            </div>
            <p className="text-sm text-gray-400">
              Separate threads for network I/O and game logic prevent blocking.
            </p>
          </div>

          <div className="glass-card rounded-lg p-4 shimmer">
            <div className="flex items-center gap-3 mb-3">
              <Users size={24} className="text-primary" />
              <h3 className="font-bold">Room-based</h3>
            </div>
            <p className="text-sm text-gray-400">
              Multiple game rooms run concurrently, each with independent state.
            </p>
          </div>

          <div className="glass-card rounded-lg p-4 shimmer">
            <div className="flex items-center gap-3 mb-3">
              <Zap size={24} className="text-primary" />
              <h3 className="font-bold">60Hz Tick Rate</h3>
            </div>
            <p className="text-sm text-gray-400">
              Game loop runs at 60 updates per second for smooth gameplay.
            </p>
          </div>
        </div>
      </section>

      {/* Threading Model */}
      <section className="glass-card rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4 text-primary">Threading Model</h2>
        
        <div className="bg-dark border border-gray-600 rounded-lg p-4 mb-4">
          <pre className="text-sm text-gray-300">{`
┌─────────────────────────────────────────────────────┐
│                   Main Thread                       │
│  - Initializes server                               │
│  - Spawns network and game threads                  │
│  - Waits for shutdown signal                        │
└─────────────────────────────────────────────────────┘
           │                            │
           ↓                            ↓
┌──────────────────────┐    ┌──────────────────────┐
│   Network Thread     │    │    Game Thread       │
│                      │    │                      │
│  - ASIO io_context   │    │  - 60Hz game loop    │
│  - UDP receive       │    │  - Process messages  │
│  - Enqueue messages  │    │  - Update entities   │
│  - Send responses    │    │  - Broadcast state   │
└──────────────────────┘    └──────────────────────┘
           │                            ↑
           └────── ThreadSafeQueue ─────┘
          `}</pre>
        </div>

        <div className="space-y-3">
          <div>
            <h3 className="font-bold mb-2">Network Thread</h3>
            <p className="text-gray-400 text-sm">
              Runs <code className="text-primary">io_context.run()</code> to handle async UDP I/O.
              When packets arrive, they're enqueued in a thread-safe queue for the game thread to process.
            </p>
            <p className="text-gray-400 text-sm mt-2">
              <strong>Code:</strong> <code className="text-primary">rtype/server/src/network.cpp</code>
            </p>
          </div>

          <div>
            <h3 className="font-bold mb-2">Game Thread</h3>
            <p className="text-gray-400 text-sm">
              Runs the main game loop at 60Hz. Dequeues messages, updates game state, and sends snapshots.
              Each room has its own Engine instance.
            </p>
            <p className="text-gray-400 text-sm mt-2">
              <strong>Code:</strong> <code className="text-primary">rtype/server/src/game_loop.cpp</code>
            </p>
          </div>
        </div>
      </section>

      {/* Main Components */}
      <section className="glass-card rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4 text-primary">Main Components</h2>

        <div className="space-y-4">
          <div className="border-l-4 border-blue-500 pl-4">
            <h3 className="font-bold text-lg mb-2">UdpServer</h3>
            <p className="text-gray-300 mb-2">
              <strong>Purpose:</strong> Handles UDP networking using ASIO.
            </p>
            <p className="text-gray-400 text-sm mb-2">
              <strong>Location:</strong> <code className="text-primary">rtype/server/include/server/server.hpp</code>
            </p>
            <p className="text-gray-400 text-sm">
              <strong>Key Methods:</strong>
            </p>
            <ul className="list-disc list-inside text-sm text-gray-400 ml-4">
              <li><code>start_receive()</code> - Begin async UDP receive</li>
              <li><code>send(data, endpoint)</code> - Send packet to client</li>
              <li><code>handle_receive()</code> - Process incoming packets</li>
            </ul>
          </div>

          <div className="border-l-4 border-green-500 pl-4">
            <h3 className="font-bold text-lg mb-2">GameManager</h3>
            <p className="text-gray-300 mb-2">
              <strong>Purpose:</strong> Orchestrates multiple game rooms and the main game loop.
            </p>
            <p className="text-gray-400 text-sm mb-2">
              <strong>Location:</strong> <code className="text-primary">rtype/server/include/server/GameManager.hpp</code>
            </p>
            <p className="text-gray-400 text-sm">
              <strong>Key Responsibilities:</strong>
            </p>
            <ul className="list-disc list-inside text-sm text-gray-400 ml-4">
              <li>Manage room lifecycle (create, destroy)</li>
              <li>Run 60Hz game loop</li>
              <li>Process incoming messages from network thread</li>
              <li>Coordinate room updates</li>
            </ul>
          </div>

          <div className="border-l-4 border-purple-500 pl-4">
            <h3 className="font-bold text-lg mb-2">Room</h3>
            <p className="text-gray-300 mb-2">
              <strong>Purpose:</strong> Represents a single game instance with its own Engine.
            </p>
            <p className="text-gray-400 text-sm mb-2">
              <strong>Location:</strong> <code className="text-primary">rtype/server/include/server/room.hpp</code>
            </p>
            <p className="text-gray-400 text-sm">
              <strong>Key Data:</strong>
            </p>
            <ul className="list-disc list-inside text-sm text-gray-400 ml-4">
              <li><code>Engine engine</code> - Game logic for this room</li>
              <li><code>std::vector&lt;Player&gt; players</code> - Connected players</li>
              <li><code>RoomConfig config</code> - Room settings</li>
              <li><code>uint32_t roomId</code> - Unique identifier</li>
            </ul>
          </div>

          <div className="border-l-4 border-orange-500 pl-4">
            <h3 className="font-bold text-lg mb-2">PlayerManager</h3>
            <p className="text-gray-300 mb-2">
              <strong>Purpose:</strong> Tracks all connected players and their sessions.
            </p>
            <p className="text-gray-400 text-sm mb-2">
              <strong>Location:</strong> <code className="text-primary">rtype/server/include/server/PlayerManager.hpp</code>
            </p>
            <p className="text-gray-400 text-sm">
              <strong>Key Methods:</strong>
            </p>
            <ul className="list-disc list-inside text-sm text-gray-400 ml-4">
              <li><code>add_player(endpoint)</code> - Register new player</li>
              <li><code>remove_player(playerId)</code> - Handle disconnect</li>
              <li><code>find_by_endpoint()</code> - Lookup player by UDP endpoint</li>
              <li><code>get_player_room()</code> - Get player's current room</li>
            </ul>
          </div>

          <div className="border-l-4 border-red-500 pl-4">
            <h3 className="font-bold text-lg mb-2">MessageHandler</h3>
            <p className="text-gray-300 mb-2">
              <strong>Purpose:</strong> Routes incoming messages to appropriate handlers.
            </p>
            <p className="text-gray-400 text-sm mb-2">
              <strong>Location:</strong> <code className="text-primary">rtype/server/include/server/message_handler.hpp</code>
            </p>
            <p className="text-gray-400 text-sm">
              <strong>Handles:</strong>
            </p>
            <ul className="list-disc list-inside text-sm text-gray-400 ml-4">
              <li>CONNECT - Player connection</li>
              <li>DISCONNECT - Player disconnect</li>
              <li>INPUT - Player input commands</li>
              <li>CREATE_ROOM - Room creation</li>
              <li>JOIN_ROOM - Room joining</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Game Loop */}
      <section className="glass-card rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4 text-primary">Game Loop (60Hz)</h2>
        
        <div className="bg-dark border border-gray-600 rounded-lg p-4">
          <pre className="text-sm text-gray-300">{`void GameManager::run() {
    const auto targetFrameTime = std::chrono::milliseconds(16); // 60Hz
    
    while (running) {
        auto frameStart = std::chrono::steady_clock::now();
        
        // 1. Process incoming messages from network thread
        process_messages();
        
        // 2. Update all active rooms
        for (auto& room : rooms) {
            room.update(deltaTime);
            room.broadcast_snapshot();
        }
        
        // 3. Clean up disconnected players
        cleanup_disconnected();
        
        // 4. Sleep to maintain 60Hz
        auto frameEnd = std::chrono::steady_clock::now();
        auto elapsed = frameEnd - frameStart;
        if (elapsed < targetFrameTime) {
            std::this_thread::sleep_for(targetFrameTime - elapsed);
        }
    }
}`}</pre>
        </div>

        <div className="mt-4 space-y-2 text-sm text-gray-400">
          <p><strong>Step 1:</strong> Dequeue messages from ThreadSafeQueue (player inputs, room requests)</p>
          <p><strong>Step 2:</strong> Each room updates its Engine, runs collision detection, and sends snapshots</p>
          <p><strong>Step 3:</strong> Remove players who timed out or disconnected</p>
          <p><strong>Step 4:</strong> Sleep to maintain consistent 60Hz tick rate</p>
        </div>
      </section>

      {/* Message Flow */}
      <section className="glass-card rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4 text-primary">Message Flow Example</h2>
        
        <div className="space-y-4">
          <div>
            <h3 className="font-bold mb-3">Player Input Flow</h3>
            <div className="bg-dark border border-gray-600 rounded-lg p-4">
              <pre className="text-sm text-gray-300">{`1. Client sends INPUT message (arrow keys pressed)
   ↓
2. Network thread receives UDP packet
   ↓
3. Deserialize to PlayerInput struct
   ↓
4. Enqueue in ThreadSafeQueue
   ↓
5. Game thread dequeues message
   ↓
6. MessageHandler routes to handle_input()
   ↓
7. Find player's room
   ↓
8. Room.engine.handle_input(playerId, input)
   ↓
9. Update player entity velocity
   ↓
10. Next frame: broadcast snapshot with new position`}</pre>
            </div>
          </div>

          <div>
            <h3 className="font-bold mb-3">Room Creation Flow</h3>
            <div className="bg-dark border border-gray-600 rounded-lg p-4">
              <pre className="text-sm text-gray-300">{`1. Client sends CREATE_ROOM_REQUEST
   ↓
2. MessageHandler::handle_create_room()
   ↓
3. GameManager creates new Room instance
   ↓
4. Room initializes its Engine
   ↓
5. Add room to active rooms list
   ↓
6. Send CREATE_ROOM_RESPONSE to client
   ↓
7. Client receives room ID and joins automatically`}</pre>
            </div>
          </div>
        </div>
      </section>

      {/* Error Handling */}
      <section className="glass-card rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4 text-primary">Error Handling & Robustness</h2>
        
        <div className="space-y-3">
          <div className="border-l-4 border-yellow-500 pl-4">
            <h3 className="font-bold mb-2">Malformed Packets</h3>
            <p className="text-gray-400 text-sm">
              All incoming packets are validated (size, type, ranges). Invalid packets are logged and dropped.
              Server never crashes from bad client data.
            </p>
          </div>

          <div className="border-l-4 border-yellow-500 pl-4">
            <h3 className="font-bold mb-2">Client Disconnects</h3>
            <p className="text-gray-400 text-sm">
              Timeout detection (no packets for 5 seconds). Player removed from room, other players notified.
              Room destroyed if empty.
            </p>
          </div>

          <div className="border-l-4 border-yellow-500 pl-4">
            <h3 className="font-bold mb-2">Thread Safety</h3>
            <p className="text-gray-400 text-sm">
              ThreadSafeQueue uses mutex for synchronization. No shared mutable state between threads
              except the queue.
            </p>
          </div>

          <div className="border-l-4 border-green-500 pl-4">
            <h3 className="font-bold mb-2">Graceful Shutdown</h3>
            <p className="text-gray-400 text-sm">
              SIGINT handler stops game loop, notifies all clients, closes sockets, joins threads cleanly.
            </p>
          </div>
        </div>
      </section>

      {/* Performance */}
      <section className="glass-card rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4 text-primary">Performance Considerations</h2>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div className="glass-card rounded-lg p-4 pulse-glow">
            <h3 className="font-bold mb-2 text-green-400">✅ Optimizations</h3>
            <ul className="space-y-1 text-sm text-gray-400">
              <li>• Non-blocking I/O (ASIO async)</li>
              <li>• Binary protocol (small packets)</li>
              <li>• Lock-free queue where possible</li>
              <li>• Entity pooling in ECS</li>
              <li>• Spatial partitioning for collisions</li>
            </ul>
          </div>

          <div className="glass-card rounded-lg p-4 pulse-glow">
            <h3 className="font-bold mb-2 text-blue-400">📊 Metrics</h3>
            <ul className="space-y-1 text-sm text-gray-400">
              <li>• <strong>Tick rate:</strong> 60Hz (16ms per frame)</li>
              <li>• <strong>Max players/room:</strong> 4-6</li>
              <li>• <strong>Max concurrent rooms:</strong> ~100</li>
              <li>• <strong>Packet size:</strong> 50-200 bytes</li>
              <li>• <strong>Bandwidth:</strong> ~10KB/s per client</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Code Locations */}
      <section className="neon-border rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4">Quick Reference: Code Locations</h2>
        
        <div className="grid md:grid-cols-2 gap-3 text-sm">
          <div>
            <p className="text-gray-300"><strong>Main entry:</strong></p>
            <code className="text-primary">rtype/server/src/main.cpp</code>
          </div>
          <div>
            <p className="text-gray-300"><strong>Network thread:</strong></p>
            <code className="text-primary">rtype/server/src/network.cpp</code>
          </div>
          <div>
            <p className="text-gray-300"><strong>Game loop:</strong></p>
            <code className="text-primary">rtype/server/src/game_loop.cpp</code>
          </div>
          <div>
            <p className="text-gray-300"><strong>Message handling:</strong></p>
            <code className="text-primary">rtype/server/src/message_handler.cpp</code>
          </div>
          <div>
            <p className="text-gray-300"><strong>Room management:</strong></p>
            <code className="text-primary">rtype/server/src/room.cpp</code>
          </div>
          <div>
            <p className="text-gray-300"><strong>Player tracking:</strong></p>
            <code className="text-primary">rtype/server/src/PlayerManager.cpp</code>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Server
