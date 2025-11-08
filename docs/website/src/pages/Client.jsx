import React from 'react'
import { Monitor, Gamepad2, Wifi, Eye } from 'lucide-react'

const Client = () => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold mb-4">Client Architecture</h1>
        <p className="text-gray-400 text-lg">
          Lightweight client focused on rendering and input, with server-authoritative gameplay.
        </p>
      </div>

      {/* Overview */}
      <section className="bg-dark-light border border-gray-700 rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4 text-primary">System Overview</h2>
        <p className="text-gray-300 mb-4">
          The client is a <strong>thin client</strong> that handles only rendering and input.
          All game logic runs on the server. The client receives snapshots and displays them,
          while sending player inputs to the server.
        </p>

        <div className="grid md:grid-cols-3 gap-4 mt-6">
          <div className="bg-dark border border-gray-600 rounded-lg p-4">
            <div className="flex items-center gap-3 mb-3">
              <Monitor size={24} className="text-primary" />
              <h3 className="font-bold">Rendering</h3>
            </div>
            <p className="text-sm text-gray-400">
              Raylib 5.0 for 2D graphics. Renders entities based on server snapshots.
            </p>
          </div>

          <div className="bg-dark border border-gray-600 rounded-lg p-4">
            <div className="flex items-center gap-3 mb-3">
              <Gamepad2 size={24} className="text-primary" />
              <h3 className="font-bold">Input</h3>
            </div>
            <p className="text-sm text-gray-400">
              Captures keyboard input and sends to server. No client-side prediction.
            </p>
          </div>

          <div className="bg-dark border border-gray-600 rounded-lg p-4">
            <div className="flex items-center gap-3 mb-3">
              <Wifi size={24} className="text-primary" />
              <h3 className="font-bold">Networking</h3>
            </div>
            <p className="text-sm text-gray-400">
              UDP client using ASIO. Receives snapshots, sends inputs.
            </p>
          </div>
        </div>
      </section>

      {/* Architecture Diagram */}
      <section className="bg-dark-light border border-gray-700 rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4 text-primary">Client Architecture</h2>
        
        <div className="bg-dark border border-gray-600 rounded-lg p-4 mb-4">
          <pre className="text-sm text-gray-300">{`
┌─────────────────────────────────────────────────────────┐
│                    Main Loop (60 FPS)                   │
│                                                         │
│  1. Process Input (Keyboard)                            │
│  2. Send Input to Server                                │
│  3. Receive Snapshots from Server                       │
│  4. Update Local State                                  │
│  5. Render Frame                                        │
│  6. Sleep to maintain 60 FPS                            │
└─────────────────────────────────────────────────────────┘
           │                            ↑
           │ INPUT messages             │ SNAPSHOT messages
           ↓                            │
┌─────────────────────────────────────────────────────────┐
│                    Network Client                       │
│  - ASIO UDP socket                                      │
│  - Async send/receive                                   │
│  - Message serialization                                │
└─────────────────────────────────────────────────────────┘
          `}</pre>
        </div>

        <p className="text-gray-400 text-sm">
          The client runs a simple loop: capture input → send to server → receive snapshot → render.
          No game logic runs client-side to prevent cheating.
        </p>
      </section>

      {/* Main Components */}
      <section className="bg-dark-light border border-gray-700 rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4 text-primary">Main Components</h2>

        <div className="space-y-4">
          <div className="border-l-4 border-blue-500 pl-4">
            <h3 className="font-bold text-lg mb-2">Game</h3>
            <p className="text-gray-300 mb-2">
              <strong>Purpose:</strong> Main game class orchestrating all subsystems.
            </p>
            <p className="text-gray-400 text-sm mb-2">
              <strong>Location:</strong> <code className="text-primary">rtype/client/include/client/Game.hpp</code>
            </p>
            <p className="text-gray-400 text-sm">
              <strong>Key Responsibilities:</strong>
            </p>
            <ul className="list-disc list-inside text-sm text-gray-400 ml-4">
              <li>Initialize Raylib window</li>
              <li>Run main game loop at 60 FPS</li>
              <li>Coordinate renderer, input, and network</li>
              <li>Manage game states (menu, lobby, gameplay)</li>
            </ul>
          </div>

          <div className="border-l-4 border-green-500 pl-4">
            <h3 className="font-bold text-lg mb-2">Renderer</h3>
            <p className="text-gray-300 mb-2">
              <strong>Purpose:</strong> Handles all rendering using Raylib.
            </p>
            <p className="text-gray-400 text-sm mb-2">
              <strong>Location:</strong> <code className="text-primary">rtype/client/include/client/Renderer.hpp</code>
            </p>
            <p className="text-gray-400 text-sm">
              <strong>Key Methods:</strong>
            </p>
            <ul className="list-disc list-inside text-sm text-gray-400 ml-4">
              <li><code>render_entity(entity)</code> - Draw sprite at position</li>
              <li><code>render_background()</code> - Scrolling star-field</li>
              <li><code>render_ui()</code> - HUD, health bars, score</li>
              <li><code>render_lobby()</code> - Room list UI</li>
            </ul>
          </div>

          <div className="border-l-4 border-purple-500 pl-4">
            <h3 className="font-bold text-lg mb-2">InputManager</h3>
            <p className="text-gray-300 mb-2">
              <strong>Purpose:</strong> Captures keyboard input and creates input messages.
            </p>
            <p className="text-gray-400 text-sm mb-2">
              <strong>Location:</strong> <code className="text-primary">rtype/client/include/client/InputManager.hpp</code>
            </p>
            <p className="text-gray-400 text-sm">
              <strong>Key Methods:</strong>
            </p>
            <ul className="list-disc list-inside text-sm text-gray-400 ml-4">
              <li><code>poll_input()</code> - Check keyboard state</li>
              <li><code>get_input_state()</code> - Return PlayerInput struct</li>
              <li><code>is_key_pressed(key)</code> - Check specific key</li>
            </ul>
          </div>

          <div className="border-l-4 border-orange-500 pl-4">
            <h3 className="font-bold text-lg mb-2">NetworkClient</h3>
            <p className="text-gray-300 mb-2">
              <strong>Purpose:</strong> UDP client for server communication.
            </p>
            <p className="text-gray-400 text-sm mb-2">
              <strong>Location:</strong> <code className="text-primary">rtype/client/include/client/client.hpp</code>
            </p>
            <p className="text-gray-400 text-sm">
              <strong>Key Methods:</strong>
            </p>
            <ul className="list-disc list-inside text-sm text-gray-400 ml-4">
              <li><code>connect(ip, port)</code> - Connect to server</li>
              <li><code>send_input(input)</code> - Send player input</li>
              <li><code>receive_snapshot()</code> - Get world state</li>
              <li><code>send_room_request()</code> - Lobby operations</li>
            </ul>
          </div>

          <div className="border-l-4 border-red-500 pl-4">
            <h3 className="font-bold text-lg mb-2">GameState</h3>
            <p className="text-gray-300 mb-2">
              <strong>Purpose:</strong> Stores local representation of game world.
            </p>
            <p className="text-gray-400 text-sm mb-2">
              <strong>Location:</strong> <code className="text-primary">rtype/client/include/client/GameState.hpp</code>
            </p>
            <p className="text-gray-400 text-sm">
              <strong>Key Data:</strong>
            </p>
            <ul className="list-disc list-inside text-sm text-gray-400 ml-4">
              <li><code>std::map&lt;uint32_t, Entity&gt; entities</code> - All visible entities</li>
              <li><code>uint32_t myPlayerId</code> - Local player ID</li>
              <li><code>std::vector&lt;Room&gt; availableRooms</code> - Lobby rooms</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Main Loop */}
      <section className="bg-dark-light border border-gray-700 rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4 text-primary">Main Loop (60 FPS)</h2>
        
        <div className="bg-dark border border-gray-600 rounded-lg p-4">
          <pre className="text-sm text-gray-300">{`void Game::run() {
    const float targetFPS = 60.0f;
    const float targetFrameTime = 1.0f / targetFPS;
    
    while (!WindowShouldClose()) {
        float frameStart = GetTime();
        
        // 1. Process input
        PlayerInput input = inputManager.poll_input();
        
        // 2. Send input to server
        if (input.has_input) {
            networkClient.send_input(input);
        }
        
        // 3. Receive snapshots from server (non-blocking)
        while (auto snapshot = networkClient.try_receive()) {
            gameState.update_from_snapshot(*snapshot);
        }
        
        // 4. Render frame
        BeginDrawing();
        ClearBackground(BLACK);
        
        renderer.render_background();
        renderer.render_entities(gameState.entities);
        renderer.render_ui(gameState);
        
        EndDrawing();
        
        // 5. Frame rate limiting
        float frameTime = GetTime() - frameStart;
        if (frameTime < targetFrameTime) {
            WaitTime(targetFrameTime - frameTime);
        }
    }
}`}</pre>
        </div>

        <div className="mt-4 space-y-2 text-sm text-gray-400">
          <p><strong>Step 1:</strong> Check keyboard state (arrow keys, space)</p>
          <p><strong>Step 2:</strong> Send INPUT message to server if keys pressed</p>
          <p><strong>Step 3:</strong> Receive and apply all pending snapshots</p>
          <p><strong>Step 4:</strong> Render current game state</p>
          <p><strong>Step 5:</strong> Sleep to maintain 60 FPS</p>
        </div>
      </section>

      {/* State Management */}
      <section className="bg-dark-light border border-gray-700 rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4 text-primary">State Management</h2>
        
        <div className="space-y-4">
          <div>
            <h3 className="font-bold mb-3">Snapshot Processing</h3>
            <div className="bg-dark border border-gray-600 rounded-lg p-4">
              <pre className="text-sm text-gray-300">{`void GameState::update_from_snapshot(const Snapshot& snapshot) {
    // Update or create entities
    for (const auto& entityData : snapshot.entities) {
        if (entities.contains(entityData.networkId)) {
            // Update existing entity
            entities[entityData.networkId].position = entityData.position;
            entities[entityData.networkId].hp = entityData.hp;
        } else {
            // Create new entity
            Entity entity;
            entity.networkId = entityData.networkId;
            entity.position = entityData.position;
            entity.type = entityData.type;
            entity.hp = entityData.hp;
            entities[entityData.networkId] = entity;
        }
    }
    
    // Remove entities not in snapshot (destroyed)
    std::erase_if(entities, [&](const auto& pair) {
        return !snapshot.contains(pair.first);
    });
}`}</pre>
            </div>
            <p className="text-gray-400 text-sm mt-2">
              Client maintains a map of entities by network ID. Each snapshot updates positions and HP.
            </p>
          </div>

          <div>
            <h3 className="font-bold mb-3">No Client-Side Prediction</h3>
            <p className="text-gray-400 text-sm">
              This implementation uses a <strong>simple authoritative model</strong>. The client does NOT
              predict player movement. This prevents cheating but may feel slightly laggy on high-latency
              connections. For better feel, client-side prediction could be added (see Advanced Networking).
            </p>
          </div>
        </div>
      </section>

      {/* Rendering Pipeline */}
      <section className="bg-dark-light border border-gray-700 rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4 text-primary">Rendering Pipeline</h2>
        
        <div className="space-y-4">
          <div className="border-l-4 border-blue-500 pl-4">
            <h3 className="font-bold mb-2">1. Background Layer</h3>
            <p className="text-gray-400 text-sm">
              Scrolling star-field. Multiple layers at different speeds for parallax effect.
            </p>
            <p className="text-gray-400 text-sm mt-1">
              <strong>Code:</strong> <code className="text-primary">renderer.render_background()</code>
            </p>
          </div>

          <div className="border-l-4 border-green-500 pl-4">
            <h3 className="font-bold mb-2">2. Entity Layer</h3>
            <p className="text-gray-400 text-sm">
              Draw all entities (players, enemies, bullets) based on their type and position.
              Each entity type has a corresponding sprite.
            </p>
            <p className="text-gray-400 text-sm mt-1">
              <strong>Code:</strong> <code className="text-primary">renderer.render_entities()</code>
            </p>
          </div>

          <div className="border-l-4 border-purple-500 pl-4">
            <h3 className="font-bold mb-2">3. UI Layer</h3>
            <p className="text-gray-400 text-sm">
              HUD elements: health bars, score, player names, minimap.
            </p>
            <p className="text-gray-400 text-sm mt-1">
              <strong>Code:</strong> <code className="text-primary">renderer.render_ui()</code>
            </p>
          </div>
        </div>

        <div className="bg-dark border border-gray-600 rounded-lg p-4 mt-4">
          <h4 className="font-bold mb-2">Entity Rendering Example</h4>
          <pre className="text-sm text-gray-300">{`void Renderer::render_entity(const Entity& entity) {
    Texture2D sprite = get_sprite_for_type(entity.type);
    
    DrawTextureV(sprite, entity.position, WHITE);
    
    // Health bar above entity
    if (entity.type == ENTITY_PLAYER) {
        float hpPercent = entity.hp / entity.maxHp;
        DrawRectangle(
            entity.position.x, 
            entity.position.y - 10,
            50 * hpPercent, 
            5, 
            GREEN
        );
    }
}`}</pre>
        </div>
      </section>

      {/* Game States */}
      <section className="bg-dark-light border border-gray-700 rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4 text-primary">Game States</h2>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-dark border border-gray-600 rounded-lg p-4">
            <h3 className="font-bold mb-2 text-blue-400">Menu State</h3>
            <ul className="space-y-1 text-sm text-gray-400">
              <li>• Main menu UI</li>
              <li>• Connect to server</li>
              <li>• Enter nickname</li>
              <li>• Transition to Lobby</li>
            </ul>
          </div>

          <div className="bg-dark border border-gray-600 rounded-lg p-4">
            <h3 className="font-bold mb-2 text-green-400">Lobby State</h3>
            <ul className="space-y-1 text-sm text-gray-400">
              <li>• Display available rooms</li>
              <li>• Create new room</li>
              <li>• Join existing room</li>
              <li>• Wait for game start</li>
            </ul>
          </div>

          <div className="bg-dark border border-gray-600 rounded-lg p-4">
            <h3 className="font-bold mb-2 text-purple-400">Gameplay State</h3>
            <ul className="space-y-1 text-sm text-gray-400">
              <li>• Active game loop</li>
              <li>• Send inputs, receive snapshots</li>
              <li>• Render game world</li>
              <li>• ESC to return to lobby</li>
            </ul>
          </div>

          <div className="bg-dark border border-gray-600 rounded-lg p-4">
            <h3 className="font-bold mb-2 text-red-400">Disconnect State</h3>
            <ul className="space-y-1 text-sm text-gray-400">
              <li>• Connection lost</li>
              <li>• Display error message</li>
              <li>• Attempt reconnect</li>
              <li>• Return to menu</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Input Handling */}
      <section className="bg-dark-light border border-gray-700 rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4 text-primary">Input Handling</h2>
        
        <div className="bg-dark border border-gray-600 rounded-lg p-4">
          <pre className="text-sm text-gray-300">{`PlayerInput InputManager::poll_input() {
    PlayerInput input = {};
    input.has_input = false;
    
    // Movement
    if (IsKeyDown(KEY_UP)) {
        input.move_up = true;
        input.has_input = true;
    }
    if (IsKeyDown(KEY_DOWN)) {
        input.move_down = true;
        input.has_input = true;
    }
    if (IsKeyDown(KEY_LEFT)) {
        input.move_left = true;
        input.has_input = true;
    }
    if (IsKeyDown(KEY_RIGHT)) {
        input.move_right = true;
        input.has_input = true;
    }
    
    // Shooting
    if (IsKeyDown(KEY_SPACE)) {
        input.shoot = true;
        input.has_input = true;
    }
    
    return input;
}`}</pre>
        </div>

        <p className="text-gray-400 text-sm mt-4">
          Input is polled every frame. Only send INPUT message if keys are pressed to reduce bandwidth.
        </p>
      </section>

      {/* Performance */}
      <section className="bg-dark-light border border-gray-700 rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4 text-primary">Performance Considerations</h2>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-dark border border-gray-600 rounded-lg p-4">
            <h3 className="font-bold mb-2 text-green-400">✅ Optimizations</h3>
            <ul className="space-y-1 text-sm text-gray-400">
              <li>• Sprite batching</li>
              <li>• Only send input when keys pressed</li>
              <li>• Non-blocking network receive</li>
              <li>• Texture atlas for sprites</li>
              <li>• VSync for smooth rendering</li>
            </ul>
          </div>

          <div className="bg-dark border border-gray-600 rounded-lg p-4">
            <h3 className="font-bold mb-2 text-blue-400">📊 Metrics</h3>
            <ul className="space-y-1 text-sm text-gray-400">
              <li>• <strong>FPS:</strong> 60 (locked)</li>
              <li>• <strong>Input latency:</strong> ~16ms</li>
              <li>• <strong>Render time:</strong> ~5-10ms</li>
              <li>• <strong>Network latency:</strong> Depends on ping</li>
              <li>• <strong>Memory:</strong> ~50MB</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Code Locations */}
      <section className="bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4">Quick Reference: Code Locations</h2>
        
        <div className="grid md:grid-cols-2 gap-3 text-sm">
          <div>
            <p className="text-gray-300"><strong>Main entry:</strong></p>
            <code className="text-primary">rtype/client/src/main.cpp</code>
          </div>
          <div>
            <p className="text-gray-300"><strong>Game loop:</strong></p>
            <code className="text-primary">rtype/client/src/Game.cpp</code>
          </div>
          <div>
            <p className="text-gray-300"><strong>Rendering:</strong></p>
            <code className="text-primary">rtype/client/src/Renderer.cpp</code>
          </div>
          <div>
            <p className="text-gray-300"><strong>Input:</strong></p>
            <code className="text-primary">rtype/client/src/InputManager.cpp</code>
          </div>
          <div>
            <p className="text-gray-300"><strong>Network:</strong></p>
            <code className="text-primary">rtype/client/src/client.cpp</code>
          </div>
          <div>
            <p className="text-gray-300"><strong>Assets:</strong></p>
            <code className="text-primary">rtype/client/assets/</code>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Client
