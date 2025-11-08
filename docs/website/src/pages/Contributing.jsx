import React from 'react'
import { GitBranch, Code, CheckCircle, AlertCircle } from 'lucide-react'

const Contributing = () => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold mb-4">Contributing Guidelines</h1>
        <p className="text-gray-400 text-lg">
          Team conventions, coding standards, and contribution workflow for the R-Type project.
        </p>
      </div>

      {/* Git Workflow */}
      <section className="bg-dark-light border border-gray-700 rounded-lg p-6">
        <div className="flex items-center gap-3 mb-4">
          <GitBranch size={24} className="text-primary" />
          <h2 className="text-2xl font-bold">Git Workflow</h2>
        </div>

        <div className="space-y-4">
          <div>
            <h3 className="font-bold text-lg mb-2">Branch Strategy</h3>
            <ul className="space-y-2 text-gray-300">
              <li>• <code className="text-primary">main</code> - Production-ready code, always stable</li>
              <li>• <code className="text-primary">develop</code> - Integration branch for features</li>
              <li>• <code className="text-primary">feature/feature-name</code> - New features</li>
              <li>• <code className="text-primary">fix/bug-description</code> - Bug fixes</li>
              <li>• <code className="text-primary">refactor/component-name</code> - Code refactoring</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-2">Workflow Steps</h3>
            <div className="bg-dark p-4 rounded space-y-2 text-sm">
              <p className="text-gray-300">1. Create feature branch from develop:</p>
              <pre className="text-primary">git checkout develop
git pull origin develop
git checkout -b feature/new-enemy-type</pre>

              <p className="text-gray-300 mt-4">2. Make changes and commit regularly:</p>
              <pre className="text-primary">git add .
git commit -m "feat: add tank enemy type with high HP"</pre>

              <p className="text-gray-300 mt-4">3. Push and create merge request:</p>
              <pre className="text-primary">git push origin feature/new-enemy-type
# Create MR on GitLab/GitHub targeting develop</pre>

              <p className="text-gray-300 mt-4">4. After review and approval, merge to develop</p>
              <p className="text-gray-300">5. Periodically merge develop to main for releases</p>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-2">Commit Message Convention</h3>
            <p className="text-gray-400 mb-3">Follow Conventional Commits format:</p>
            <div className="bg-dark p-4 rounded space-y-2 text-sm">
              <p className="text-primary">feat: add new feature</p>
              <p className="text-primary">fix: fix bug in collision detection</p>
              <p className="text-primary">refactor: restructure ECS component storage</p>
              <p className="text-primary">docs: update protocol documentation</p>
              <p className="text-primary">test: add unit tests for serializer</p>
              <p className="text-primary">chore: update dependencies</p>
            </div>
          </div>
        </div>
      </section>

      {/* Coding Standards */}
      <section className="bg-dark-light border border-gray-700 rounded-lg p-6">
        <div className="flex items-center gap-3 mb-4">
          <Code size={24} className="text-primary" />
          <h2 className="text-2xl font-bold">Coding Standards</h2>
        </div>

        <div className="space-y-6">
          <div>
            <h3 className="font-bold text-lg mb-3">C++ Style Guide</h3>
            
            <div className="space-y-4">
              <div className="border-l-4 border-green-500 pl-4">
                <h4 className="font-semibold mb-2">✅ Naming Conventions</h4>
                <ul className="space-y-1 text-sm text-gray-300">
                  <li>• Classes: <code className="text-primary">PascalCase</code> (Engine, GameManager)</li>
                  <li>• Functions: <code className="text-primary">snake_case</code> (spawn_entity, handle_input)</li>
                  <li>• Variables: <code className="text-primary">snake_case</code> (player_count, network_id)</li>
                  <li>• Constants: <code className="text-primary">UPPER_SNAKE_CASE</code> (MAX_PLAYERS, DEFAULT_PORT)</li>
                  <li>• Private members: <code className="text-primary">_prefix</code> (_registry, _players)</li>
                </ul>
              </div>

              <div className="border-l-4 border-green-500 pl-4">
                <h4 className="font-semibold mb-2">✅ File Organization</h4>
                <ul className="space-y-1 text-sm text-gray-300">
                  <li>• Header files: <code className="text-primary">.hpp</code> extension</li>
                  <li>• Source files: <code className="text-primary">.cpp</code> extension</li>
                  <li>• One class per file (generally)</li>
                  <li>• Include guards: <code className="text-primary">#pragma once</code></li>
                </ul>
              </div>

              <div className="border-l-4 border-green-500 pl-4">
                <h4 className="font-semibold mb-2">✅ Code Style</h4>
                <pre className="bg-dark p-3 rounded text-sm text-gray-300 mt-2">{`// Good: Clear, modern C++
class Engine {
public:
    void update(float deltaTime);
    entity spawn_player(uint32_t networkId);
    
private:
    registry _registry;
    std::vector<playerInfo> _players;
};

// Use auto for complex types
auto players = _registry.get_components<Controllable>();

// Use range-based for loops
for (const auto& player : _players) {
    // ...
}

// Use smart pointers
std::unique_ptr<Room> room = std::make_unique<Room>();`}</pre>
              </div>

              <div className="border-l-4 border-red-500 pl-4">
                <h4 className="font-semibold mb-2">❌ Avoid</h4>
                <pre className="bg-dark p-3 rounded text-sm text-gray-300 mt-2">{`// Bad: Raw pointers for ownership
Room* room = new Room();  // Use unique_ptr instead

// Bad: Manual memory management
delete room;  // Use RAII instead

// Bad: C-style casts
int x = (int)someFloat;  // Use static_cast<int>()

// Bad: Magic numbers
if (hp > 100) { }  // Use named constants`}</pre>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-3">Code Formatting</h3>
            <p className="text-gray-400 mb-3">Use clang-format with the following settings:</p>
            <div className="bg-dark p-4 rounded text-sm">
              <pre className="text-gray-300">{`# .clang-format
BasedOnStyle: Google
IndentWidth: 4
ColumnLimit: 100
PointerAlignment: Left
AllowShortFunctionsOnASingleLine: Empty`}</pre>
            </div>
            <p className="text-gray-400 mt-3 text-sm">
              Run before committing: <code className="text-primary">clang-format -i src/**/*.cpp src/**/*.hpp</code>
            </p>
          </div>
        </div>
      </section>

      {/* Code Review Checklist */}
      <section className="bg-dark-light border border-gray-700 rounded-lg p-6">
        <div className="flex items-center gap-3 mb-4">
          <CheckCircle size={24} className="text-primary" />
          <h2 className="text-2xl font-bold">Code Review Checklist</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <h3 className="font-bold mb-3 text-green-400">Before Submitting MR</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="flex items-start gap-2">
                <CheckCircle size={16} className="text-green-400 mt-0.5 flex-shrink-0" />
                <span>Code compiles without warnings</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle size={16} className="text-green-400 mt-0.5 flex-shrink-0" />
                <span>All tests pass</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle size={16} className="text-green-400 mt-0.5 flex-shrink-0" />
                <span>Code formatted with clang-format</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle size={16} className="text-green-400 mt-0.5 flex-shrink-0" />
                <span>No memory leaks (run Valgrind)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle size={16} className="text-green-400 mt-0.5 flex-shrink-0" />
                <span>Documentation updated if needed</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle size={16} className="text-green-400 mt-0.5 flex-shrink-0" />
                <span>Commit messages follow convention</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-3 text-blue-400">During Review</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="flex items-start gap-2">
                <AlertCircle size={16} className="text-blue-400 mt-0.5 flex-shrink-0" />
                <span>Check for proper error handling</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertCircle size={16} className="text-blue-400 mt-0.5 flex-shrink-0" />
                <span>Verify network input validation</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertCircle size={16} className="text-blue-400 mt-0.5 flex-shrink-0" />
                <span>Look for potential race conditions</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertCircle size={16} className="text-blue-400 mt-0.5 flex-shrink-0" />
                <span>Ensure thread safety where needed</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertCircle size={16} className="text-blue-400 mt-0.5 flex-shrink-0" />
                <span>Check for performance implications</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertCircle size={16} className="text-blue-400 mt-0.5 flex-shrink-0" />
                <span>Verify code follows project patterns</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Testing Guidelines */}
      <section className="bg-dark-light border border-gray-700 rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4 text-primary">Testing Guidelines</h2>

        <div className="space-y-4">
          <div>
            <h3 className="font-bold text-lg mb-2">Manual Testing</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>• Test with multiple clients (at least 2)</li>
              <li>• Test client disconnect/reconnect scenarios</li>
              <li>• Test with packet loss simulation</li>
              <li>• Verify no crashes or memory leaks</li>
              <li>• Check gameplay feels smooth (no stuttering)</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-2">Automated Testing</h3>
            <p className="text-gray-400 mb-3 text-sm">Run before committing:</p>
            <div className="bg-dark p-3 rounded text-sm space-y-2">
              <p className="text-gray-300"># Build and run tests</p>
              <pre className="text-primary">cmake -DCMAKE_BUILD_TYPE=Debug -DBUILD_TESTS=ON ..
make
ctest --output-on-failure</pre>

              <p className="text-gray-300 mt-3"># Memory leak check</p>
              <pre className="text-primary">valgrind --leak-check=full ./r-type_server</pre>

              <p className="text-gray-300 mt-3"># Address sanitizer</p>
              <pre className="text-primary">cmake -DCMAKE_CXX_FLAGS="-fsanitize=address" ..
make
./r-type_server</pre>
            </div>
          </div>
        </div>
      </section>

      {/* Documentation Standards */}
      <section className="bg-dark-light border border-gray-700 rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4 text-primary">Documentation Standards</h2>

        <div className="space-y-4">
          <div>
            <h3 className="font-bold text-lg mb-2">Code Comments</h3>
            <pre className="bg-dark p-4 rounded text-sm text-gray-300">{`/**
 * @brief Spawns a new player entity in the game world
 * 
 * Creates a player entity with default components (Position, Velocity,
 * Health, Controllable) and assigns a unique network ID for synchronization.
 * 
 * @param networkId Unique identifier for network synchronization
 * @return entity The created entity ID
 */
entity Engine::spawn_player(uint32_t networkId) {
    // Implementation
}`}</pre>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-2">When to Comment</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>✅ Complex algorithms or non-obvious logic</li>
              <li>✅ Public API functions and classes</li>
              <li>✅ Workarounds or temporary solutions (with TODO)</li>
              <li>✅ Performance-critical sections</li>
              <li>❌ Don't comment obvious code</li>
              <li>❌ Don't leave commented-out code</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-2">Protocol Changes</h3>
            <p className="text-gray-400 text-sm">
              When modifying the network protocol, update <code className="text-primary">rtype/protocol/readMe.md</code> with:
            </p>
            <ul className="space-y-1 text-gray-300 text-sm mt-2">
              <li>• New message type definitions</li>
              <li>• Packet structure diagrams</li>
              <li>• Example packets in hex</li>
              <li>• Version compatibility notes</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Project Structure */}
      <section className="bg-dark-light border border-gray-700 rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4 text-primary">Project Structure Conventions</h2>

        <div className="space-y-4">
          <div>
            <h3 className="font-bold text-lg mb-2">Where to Add New Code</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>• <strong>New components:</strong> <code className="text-primary">rtype/ecs/include/ecs/bootstrap.hpp</code></li>
              <li>• <strong>New systems:</strong> <code className="text-primary">rtype/ecs/src/engine.cpp</code></li>
              <li>• <strong>New messages:</strong> <code className="text-primary">rtype/protocol/include/protocol/protocol_data.hpp</code></li>
              <li>• <strong>Server logic:</strong> <code className="text-primary">rtype/server/src/</code></li>
              <li>• <strong>Client rendering:</strong> <code className="text-primary">rtype/client/src/</code></li>
              <li>• <strong>Assets:</strong> <code className="text-primary">rtype/client/assets/</code></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-2">Module Dependencies</h3>
            <p className="text-gray-400 text-sm mb-2">Follow these dependency rules:</p>
            <div className="bg-dark p-3 rounded text-sm">
              <pre className="text-gray-300">{`protocol (no dependencies)
    ↑
ecs (depends on protocol for network IDs)
    ↑
server (depends on ecs + protocol)
client (depends on ecs + protocol)`}</pre>
            </div>
            <p className="text-gray-400 text-sm mt-2">
              Never create circular dependencies between modules!
            </p>
          </div>
        </div>
      </section>

      {/* Communication */}
      <section className="bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4">Team Communication</h2>
        
        <div className="space-y-3 text-gray-300">
          <p>• <strong>Daily standups:</strong> Quick sync on progress and blockers</p>
          <p>• <strong>Code reviews:</strong> All MRs require at least one approval</p>
          <p>• <strong>Architecture decisions:</strong> Discuss major changes before implementing</p>
          <p>• <strong>Documentation:</strong> Update docs alongside code changes</p>
          <p>• <strong>Be respectful:</strong> Constructive feedback, no personal attacks</p>
        </div>
      </section>

      {/* Getting Help */}
      <section className="bg-dark-light border border-gray-700 rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4 text-primary">Getting Help</h2>
        
        <div className="space-y-3 text-gray-300 text-sm">
          <p>If you're stuck:</p>
          <ul className="space-y-2 ml-4">
            <li>1. Check the <a href="/tutorials" className="text-primary hover:underline">Tutorials</a> page</li>
            <li>2. Read the relevant documentation pages</li>
            <li>3. Search existing issues on GitLab/GitHub</li>
            <li>4. Ask in team chat/Discord</li>
            <li>5. Create a detailed issue with reproduction steps</li>
          </ul>
        </div>
      </section>
    </div>
  )
}

export default Contributing
