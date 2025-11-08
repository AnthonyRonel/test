import React from 'react'
import { Book, Code, Rocket, Wrench } from 'lucide-react'

const TutorialCard = ({ icon: Icon, title, description, steps }) => (
  <div className="bg-dark-light border border-gray-700 rounded-lg p-6 mb-6">
    <div className="flex items-center gap-3 mb-4">
      <div className="p-2 bg-primary/10 rounded">
        <Icon size={24} className="text-primary" />
      </div>
      <h3 className="text-xl font-bold">{title}</h3>
    </div>
    <p className="text-gray-400 mb-4">{description}</p>
    <div className="space-y-3">
      {steps.map((step, i) => (
        <div key={i} className="flex gap-3">
          <div className="flex-shrink-0 w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center text-primary font-bold">
            {i + 1}
          </div>
          <div className="flex-1">
            <p className="text-gray-300">{step}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
)

const Tutorials = () => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold mb-4">Tutorials & How-To Guides</h1>
        <p className="text-gray-400 text-lg">
          Practical guides to help you understand, build, and extend the R-Type game engine.
        </p>
      </div>

      {/* Quick Start */}
      <section>
        <h2 className="text-3xl font-bold mb-6">Getting Started</h2>
        
        <TutorialCard
          icon={Rocket}
          title="Quick Start: Build and Run"
          description="Get the game running in 5 minutes"
          steps={[
            'Clone the repository: git clone <repo-url>',
            'Install dependencies: CMake 3.16+, C++17 compiler',
            'Build: ./scripts/build_all.sh',
            'Run server: ./build/rtype/server/r-type_server',
            'Run client: ./build/rtype/client/r-type_client',
            'Connect to localhost:1234 and start playing!'
          ]}
        />

        <TutorialCard
          icon={Wrench}
          title="Development Setup"
          description="Set up your development environment"
          steps={[
            'Install build tools: sudo apt install build-essential cmake git',
            'Install development libraries (if needed)',
            'Configure your IDE (VSCode, CLion, etc.)',
            'Build in debug mode: cmake -DCMAKE_BUILD_TYPE=Debug',
            'Run with debugger attached',
            'Use AddressSanitizer: cmake -DCMAKE_CXX_FLAGS="-fsanitize=address"'
          ]}
        />
      </section>

      {/* How-To Guides */}
      <section>
        <h2 className="text-3xl font-bold mb-6">How-To Guides</h2>

        <TutorialCard
          icon={Code}
          title="How to Add a New Entity Type"
          description="Extend the ECS with custom entities"
          steps={[
            'Define components in rtype/ecs/include/ecs/bootstrap.hpp',
            'Add entity spawn function in Engine class (engine.hpp)',
            'Implement spawn logic in engine.cpp',
            'Add network synchronization in protocol (if needed)',
            'Update client rendering to display new entity',
            'Test with multiple clients'
          ]}
        />

        <TutorialCard
          icon={Code}
          title="How to Add a New Message Type"
          description="Extend the network protocol"
          steps={[
            'Define message structure in protocol/protocol_data.hpp with __attribute__((packed))',
            'Add MessageType enum value',
            'Implement serialization in protocol/serializer.cpp',
            'Add factory case in protocol/factory.cpp',
            'Handle message in server/message_handler.cpp',
            'Add client callback in client/client.hpp',
            'Update protocol documentation (protocol/readMe.md)'
          ]}
        />

        <TutorialCard
          icon={Code}
          title="How to Create a New Game Room"
          description="Implement custom room logic"
          steps={[
            'Client sends CREATE_ROOM message with RoomConfig',
            'Server creates Room instance in GameManager',
            'Room initializes its own Engine instance',
            'Players join via JOIN_ROOM message',
            'Room broadcasts ROOM_NOTIFICATION to all players',
            'Game starts when room is full or host triggers start',
            'Room runs independent game loop at 60Hz'
          ]}
        />

        <TutorialCard
          icon={Wrench}
          title="How to Debug Network Issues"
          description="Troubleshoot connection problems"
          steps={[
            'Enable verbose logging in server and client',
            'Use Wireshark to capture UDP packets on port 1234',
            'Check packet structure matches protocol specification',
            'Verify endianness (should be little-endian)',
            'Test with single client first, then multiple',
            'Check firewall rules (allow UDP 1234)',
            'Use netstat to verify server is listening: netstat -ulnp | grep 1234'
          ]}
        />
      </section>

      {/* Code Examples */}
      <section className="bg-dark-light border border-gray-700 rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4 text-primary">Code Examples</h2>

        <div className="space-y-6">
          <div>
            <h3 className="font-bold text-lg mb-3">Example: Spawning an Enemy</h3>
            <pre className="bg-dark p-4 rounded text-sm text-gray-300 overflow-x-auto">{`// In Engine class (engine.cpp)
entity Engine::spawn_enemy(EnemyType type, float x, float y) {
    auto enemy = registry.spawn_entity();
    
    // Add components
    registry.add_component(enemy, Position{x, y});
    registry.add_component(enemy, Velocity{-100.0f, 0.0f}); // Move left
    registry.add_component(enemy, Healthpoints_t{type == BOSS ? 100 : 10});
    registry.add_component(enemy, Enemystype{type});
    
    // Add to tracking
    enemies.push_back({enemy, networkIdCounter++, type});
    
    return enemy;
}`}</pre>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-3">Example: Handling Input Message</h3>
            <pre className="bg-dark p-4 rounded text-sm text-gray-300 overflow-x-auto">{`// In MessageHandler (server)
void MessageHandler::handle_input(const PlayerInput& input, 
                                   const udp::endpoint& sender) {
    auto player = playerManager.find_by_endpoint(sender);
    if (!player) return;
    
    auto room = gameManager.get_room(player->roomId);
    if (!room) return;
    
    // Forward to game engine
    room->engine.handle_input(player->id, input);
}`}</pre>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-3">Example: Sending Snapshot</h3>
            <pre className="bg-dark p-4 rounded text-sm text-gray-300 overflow-x-auto">{`// In Room class (server)
void Room::broadcast_snapshot() {
    Snapshot snapshot;
    snapshot.tick = currentTick;
    snapshot.entity_count = 0;
    
    // Collect all entities
    for (const auto& player : players) {
        snapshot.entities[snapshot.entity_count++] = {
            player.networkId,
            player.position.x,
            player.position.y,
            player.hp,
            ENTITY_PLAYER
        };
    }
    
    // Serialize and send
    auto data = Serializer::serialize(snapshot);
    for (const auto& player : players) {
        server.send(data, player.endpoint);
    }
}`}</pre>
          </div>
        </div>
      </section>

      {/* Best Practices */}
      <section className="bg-dark-light border border-gray-700 rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4 text-primary">Best Practices</h2>
        
        <div className="space-y-4">
          <div className="border-l-4 border-green-500 pl-4">
            <h3 className="font-bold mb-2">✅ Always Validate Network Input</h3>
            <p className="text-gray-400 text-sm">
              Never trust client data. Validate ranges, check for impossible values, and handle
              malformed packets gracefully.
            </p>
          </div>

          <div className="border-l-4 border-green-500 pl-4">
            <h3 className="font-bold mb-2">✅ Use deltaTime for Movement</h3>
            <p className="text-gray-400 text-sm">
              Multiply velocities by deltaTime to ensure frame-rate independent movement.
              Never use fixed increments.
            </p>
          </div>

          <div className="border-l-4 border-green-500 pl-4">
            <h3 className="font-bold mb-2">✅ Keep Game Logic on Server</h3>
            <p className="text-gray-400 text-sm">
              Client should only render and send input. All collision detection, scoring, and
              game rules must be server-side.
            </p>
          </div>

          <div className="border-l-4 border-green-500 pl-4">
            <h3 className="font-bold mb-2">✅ Use Smart Pointers</h3>
            <p className="text-gray-400 text-sm">
              Prefer std::unique_ptr and std::shared_ptr over raw pointers. Use RAII for resource
              management.
            </p>
          </div>

          <div className="border-l-4 border-green-500 pl-4">
            <h3 className="font-bold mb-2">✅ Profile Before Optimizing</h3>
            <p className="text-gray-400 text-sm">
              Use profiling tools (perf, gprof, Valgrind) to identify bottlenecks before optimizing.
              Don't guess.
            </p>
          </div>
        </div>
      </section>

      {/* Common Issues */}
      <section className="bg-dark-light border border-gray-700 rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4 text-primary">Common Issues & Solutions</h2>
        
        <div className="space-y-4">
          <div>
            <h3 className="font-bold mb-2">❌ "Connection refused" when starting client</h3>
            <p className="text-gray-400 text-sm mb-2">
              <strong>Cause:</strong> Server not running or firewall blocking port 1234
            </p>
            <p className="text-gray-300 text-sm">
              <strong>Solution:</strong> Start server first, check firewall rules, verify port with netstat
            </p>
          </div>

          <div>
            <h3 className="font-bold mb-2">❌ Entities stuttering or teleporting</h3>
            <p className="text-gray-400 text-sm mb-2">
              <strong>Cause:</strong> Packet loss or incorrect deltaTime usage
            </p>
            <p className="text-gray-300 text-sm">
              <strong>Solution:</strong> Check network quality, ensure movement uses deltaTime, consider interpolation
            </p>
          </div>

          <div>
            <h3 className="font-bold mb-2">❌ Server crashes on client disconnect</h3>
            <p className="text-gray-400 text-sm mb-2">
              <strong>Cause:</strong> Dangling pointers or invalid entity references
            </p>
            <p className="text-gray-300 text-sm">
              <strong>Solution:</strong> Properly clean up entities, use smart pointers, check validity before access
            </p>
          </div>

          <div>
            <h3 className="font-bold mb-2">❌ Build fails with "ASIO not found"</h3>
            <p className="text-gray-400 text-sm mb-2">
              <strong>Cause:</strong> CPM failed to download ASIO
            </p>
            <p className="text-gray-300 text-sm">
              <strong>Solution:</strong> Check internet connection, clear CMake cache, rebuild
            </p>
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4">Next Steps</h2>
        <p className="text-gray-300 mb-4">
          Now that you understand the basics, explore these areas:
        </p>
        <ul className="space-y-2 text-gray-300">
          <li>• Read the <a href="/architecture" className="text-primary hover:underline">Architecture</a> page for system design</li>
          <li>• Study the <a href="/protocol" className="text-primary hover:underline">Network Protocol</a> specification</li>
          <li>• Review <a href="/comparative" className="text-primary hover:underline">Comparative Study</a> for technology decisions</li>
          <li>• Check <a href="/contributing" className="text-primary hover:underline">Contributing Guidelines</a> before submitting code</li>
        </ul>
      </section>
    </div>
  )
}

export default Tutorials
