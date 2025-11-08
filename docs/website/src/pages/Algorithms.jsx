import React from 'react'
import { Cpu, Database, Shield, Zap } from 'lucide-react'

const Algorithms = () => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold mb-4">Algorithms & Data Structures</h1>
        <p className="text-gray-400 text-lg">
          Key algorithms and data structures used in the R-Type engine, with justifications.
        </p>
      </div>

      {/* Overview */}
      <section className="bg-dark-light border border-gray-700 rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4 text-primary">Overview</h2>
        <p className="text-gray-300 mb-4">
          The R-Type engine uses carefully selected algorithms and data structures optimized for
          real-time gameplay, network efficiency, and maintainability. Each choice balances
          performance, simplicity, and correctness.
        </p>
      </section>

      {/* ECS Pattern */}
      <section className="bg-dark-light border border-gray-700 rounded-lg p-6">
        <div className="flex items-center gap-3 mb-4">
          <Cpu size={24} className="text-primary" />
          <h2 className="text-2xl font-bold text-primary">Entity-Component-System (ECS)</h2>
        </div>

        <div className="space-y-4">
          <div>
            <h3 className="font-bold text-lg mb-2">What is ECS?</h3>
            <p className="text-gray-300 mb-3">
              ECS is an architectural pattern that separates data (Components) from behavior (Systems).
              Entities are just IDs that group components together.
            </p>
            <div className="bg-dark border border-gray-600 rounded-lg p-4">
              <pre className="text-sm text-gray-300">{`Entity: Just an ID (uint32_t)
  ↓
Components: Pure data (Position, Velocity, Health)
  ↓
Systems: Logic that operates on components (MovementSystem, CollisionSystem)`}</pre>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-2">Why ECS over OOP Inheritance?</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-dark border border-green-600 rounded-lg p-4">
                <h4 className="font-bold mb-2 text-green-400">✅ ECS Benefits</h4>
                <ul className="space-y-1 text-sm text-gray-400">
                  <li>• <strong>Composition over inheritance</strong> - Flexible entity creation</li>
                  <li>• <strong>Cache-friendly</strong> - Components stored contiguously</li>
                  <li>• <strong>Easy to extend</strong> - Add components without modifying classes</li>
                  <li>• <strong>Data-oriented</strong> - Better performance for game loops</li>
                  <li>• <strong>Network-friendly</strong> - Easy to serialize components</li>
                </ul>
              </div>

              <div className="bg-dark border border-red-600 rounded-lg p-4">
                <h4 className="font-bold mb-2 text-red-400">❌ OOP Inheritance Problems</h4>
                <ul className="space-y-1 text-sm text-gray-400">
                  <li>• <strong>Rigid hierarchies</strong> - Hard to change later</li>
                  <li>• <strong>Diamond problem</strong> - Multiple inheritance issues</li>
                  <li>• <strong>Pointer chasing</strong> - Poor cache locality</li>
                  <li>• <strong>Tight coupling</strong> - Hard to test and maintain</li>
                  <li>• <strong>Bloated classes</strong> - God objects with too much responsibility</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-2">Example: Creating an Enemy</h3>
            <div className="bg-dark border border-gray-600 rounded-lg p-4">
              <pre className="text-sm text-gray-300">{`// ECS approach - Composition
auto enemy = registry.spawn_entity();
registry.add_component(enemy, Position{100, 200});
registry.add_component(enemy, Velocity{-50, 0});
registry.add_component(enemy, Healthpoints_t{10});
registry.add_component(enemy, Enemystype{BASIC});
registry.add_component(enemy, Sprite{"enemy.png"});

// vs OOP approach - Inheritance
class Enemy : public GameObject, public Movable, public Damageable {
    // Complex inheritance hierarchy
};`}</pre>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-2">Performance Impact</h3>
            <p className="text-gray-400 text-sm">
              <strong>Cache locality:</strong> ECS stores all Position components contiguously in memory.
              When the MovementSystem iterates over positions, it benefits from CPU cache prefetching.
              This can be 10-100x faster than pointer-chasing through OOP objects.
            </p>
          </div>
        </div>
      </section>

      {/* Sparse Set */}
      <section className="bg-dark-light border border-gray-700 rounded-lg p-6">
        <div className="flex items-center gap-3 mb-4">
          <Database size={24} className="text-primary" />
          <h2 className="text-2xl font-bold text-primary">Sparse Set (Component Storage)</h2>
        </div>

        <div className="space-y-4">
          <div>
            <h3 className="font-bold text-lg mb-2">What is a Sparse Set?</h3>
            <p className="text-gray-300 mb-3">
              A data structure that provides O(1) insertion, deletion, and lookup for components,
              while maintaining cache-friendly iteration.
            </p>
            <div className="bg-dark border border-gray-600 rounded-lg p-4">
              <pre className="text-sm text-gray-300">{`Sparse Array (entity ID → index):
[-, -, 0, -, 1, -, -, 2, ...]  // Sparse, mostly empty

Dense Array (actual components):
[Component₀, Component₁, Component₂]  // Dense, contiguous`}</pre>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-2">Why Sparse Set?</h3>
            <div className="bg-dark border border-gray-600 rounded-lg p-4">
              <table className="w-full text-sm">
                <thead className="border-b border-gray-600">
                  <tr>
                    <th className="text-left p-2">Operation</th>
                    <th className="text-left p-2">Sparse Set</th>
                    <th className="text-left p-2">std::map</th>
                    <th className="text-left p-2">std::vector</th>
                  </tr>
                </thead>
                <tbody className="text-gray-300">
                  <tr className="border-b border-gray-700">
                    <td className="p-2">Insert</td>
                    <td className="p-2 text-green-400">O(1)</td>
                    <td className="p-2 text-yellow-400">O(log n)</td>
                    <td className="p-2 text-green-400">O(1) amortized</td>
                  </tr>
                  <tr className="border-b border-gray-700">
                    <td className="p-2">Remove</td>
                    <td className="p-2 text-green-400">O(1)</td>
                    <td className="p-2 text-yellow-400">O(log n)</td>
                    <td className="p-2 text-red-400">O(n)</td>
                  </tr>
                  <tr className="border-b border-gray-700">
                    <td className="p-2">Lookup</td>
                    <td className="p-2 text-green-400">O(1)</td>
                    <td className="p-2 text-yellow-400">O(log n)</td>
                    <td className="p-2 text-red-400">O(n)</td>
                  </tr>
                  <tr>
                    <td className="p-2">Iteration</td>
                    <td className="p-2 text-green-400">Cache-friendly</td>
                    <td className="p-2 text-red-400">Pointer chasing</td>
                    <td className="p-2 text-green-400">Cache-friendly</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-2">Implementation</h3>
            <p className="text-gray-400 text-sm mb-2">
              <strong>Location:</strong> <code className="text-primary">rtype/ecs/include/ecs/sparse_array.hpp</code>
            </p>
            <div className="bg-dark border border-gray-600 rounded-lg p-4">
              <pre className="text-sm text-gray-300">{`template<typename Component>
class sparse_array {
    std::vector<std::optional<size_t>> sparse;  // Entity ID → dense index
    std::vector<Component> dense;                // Actual components
    
public:
    void insert(entity e, Component c) {
        sparse[e] = dense.size();
        dense.push_back(c);
    }
    
    Component& get(entity e) {
        return dense[sparse[e].value()];
    }
};`}</pre>
            </div>
          </div>
        </div>
      </section>

      {/* Collision Detection */}
      <section className="bg-dark-light border border-gray-700 rounded-lg p-6">
        <div className="flex items-center gap-3 mb-4">
          <Zap size={24} className="text-primary" />
          <h2 className="text-2xl font-bold text-primary">AABB Collision Detection</h2>
        </div>

        <div className="space-y-4">
          <div>
            <h3 className="font-bold text-lg mb-2">Algorithm: Axis-Aligned Bounding Box (AABB)</h3>
            <p className="text-gray-300 mb-3">
              Simple rectangle-based collision detection. Fast and sufficient for 2D shoot'em up.
            </p>
            <div className="bg-dark border border-gray-600 rounded-lg p-4">
              <pre className="text-sm text-gray-300">{`bool check_collision(const AABB& a, const AABB& b) {
    return (a.x < b.x + b.width &&
            a.x + a.width > b.x &&
            a.y < b.y + b.height &&
            a.y + a.height > b.y);
}`}</pre>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-2">Why AABB over Other Methods?</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-dark border border-gray-600 rounded-lg p-4">
                <h4 className="font-bold mb-2 text-green-400">✅ AABB (Chosen)</h4>
                <ul className="space-y-1 text-sm text-gray-400">
                  <li>• <strong>O(1)</strong> per pair</li>
                  <li>• Simple to implement</li>
                  <li>• Fast (4 comparisons)</li>
                  <li>• Good enough for R-Type</li>
                </ul>
              </div>

              <div className="bg-dark border border-gray-600 rounded-lg p-4">
                <h4 className="font-bold mb-2 text-yellow-400">⚠️ Circle Collision</h4>
                <ul className="space-y-1 text-sm text-gray-400">
                  <li>• More accurate</li>
                  <li>• Requires sqrt()</li>
                  <li>• Slower than AABB</li>
                  <li>• Overkill for our game</li>
                </ul>
              </div>

              <div className="bg-dark border border-gray-600 rounded-lg p-4">
                <h4 className="font-bold mb-2 text-red-400">❌ Pixel-Perfect</h4>
                <ul className="space-y-1 text-sm text-gray-400">
                  <li>• Most accurate</li>
                  <li>• Very slow</li>
                  <li>• Complex implementation</li>
                  <li>• Not needed</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-2">Optimization: Spatial Partitioning</h3>
            <p className="text-gray-300 mb-3">
              Naive collision: O(n²) - check every entity against every other entity.
              With spatial partitioning (grid), we only check nearby entities.
            </p>
            <div className="bg-dark border border-gray-600 rounded-lg p-4">
              <pre className="text-sm text-gray-300">{`// Divide world into grid cells
Grid grid(worldWidth, worldHeight, cellSize);

// Insert entities into grid
for (auto entity : entities) {
    grid.insert(entity, entity.position);
}

// Check collisions only within same cell + neighbors
for (auto entity : entities) {
    auto nearby = grid.get_nearby(entity.position);
    for (auto other : nearby) {
        if (check_collision(entity, other)) {
            handle_collision(entity, other);
        }
    }
}`}</pre>
            </div>
            <p className="text-gray-400 text-sm mt-2">
              <strong>Complexity:</strong> O(n) average case (vs O(n²) naive)
            </p>
          </div>
        </div>
      </section>

      {/* Thread-Safe Queue */}
      <section className="bg-dark-light border border-gray-700 rounded-lg p-6">
        <div className="flex items-center gap-3 mb-4">
          <Shield size={24} className="text-primary" />
          <h2 className="text-2xl font-bold text-primary">Thread-Safe Queue</h2>
        </div>

        <div className="space-y-4">
          <div>
            <h3 className="font-bold text-lg mb-2">Purpose</h3>
            <p className="text-gray-300 mb-3">
              Communication between network thread and game thread. Network thread enqueues messages,
              game thread dequeues and processes them.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-2">Implementation Choices</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-dark border border-green-600 rounded-lg p-4">
                <h4 className="font-bold mb-2 text-green-400">✅ Mutex + std::queue (Chosen)</h4>
                <ul className="space-y-1 text-sm text-gray-400">
                  <li>• Simple and correct</li>
                  <li>• Standard library</li>
                  <li>• Easy to debug</li>
                  <li>• Good enough for our load</li>
                </ul>
                <div className="mt-3 bg-dark-light border border-gray-700 rounded p-2">
                  <pre className="text-xs text-gray-300">{`std::mutex mutex;
std::queue<Message> queue;

void enqueue(Message msg) {
    std::lock_guard lock(mutex);
    queue.push(msg);
}`}</pre>
                </div>
              </div>

              <div className="bg-dark border border-yellow-600 rounded-lg p-4">
                <h4 className="font-bold mb-2 text-yellow-400">⚠️ Lock-Free Queue</h4>
                <ul className="space-y-1 text-sm text-gray-400">
                  <li>• Higher throughput</li>
                  <li>• No blocking</li>
                  <li>• Complex to implement correctly</li>
                  <li>• Overkill for our needs</li>
                </ul>
                <p className="text-xs text-gray-400 mt-2">
                  Could be used if profiling shows mutex contention, but unlikely.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-2">Code Location</h3>
            <p className="text-gray-400 text-sm">
              <strong>Location:</strong> <code className="text-primary">rtype/server/include/server/ThreadSafeQueue.hpp</code>
            </p>
          </div>
        </div>
      </section>

      {/* Movement & Physics */}
      <section className="bg-dark-light border border-gray-700 rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4 text-primary">Movement & Physics</h2>

        <div className="space-y-4">
          <div>
            <h3 className="font-bold text-lg mb-2">Delta Time Integration</h3>
            <p className="text-gray-300 mb-3">
              Frame-rate independent movement using delta time.
            </p>
            <div className="bg-dark border border-gray-600 rounded-lg p-4">
              <pre className="text-sm text-gray-300">{`// Update position based on velocity and delta time
void MovementSystem::update(float deltaTime) {
    auto positions = registry.get_components<Position>();
    auto velocities = registry.get_components<Velocity>();
    
    for (size_t i = 0; i < positions.size(); ++i) {
        if (positions[i] && velocities[i]) {
            positions[i]->x += velocities[i]->x * deltaTime;
            positions[i]->y += velocities[i]->y * deltaTime;
        }
    }
}`}</pre>
            </div>
            <p className="text-gray-400 text-sm mt-2">
              <strong>Why delta time?</strong> Ensures consistent movement speed regardless of frame rate.
              A player moving at 100 units/sec will move the same distance whether running at 30 FPS or 144 FPS.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-2">No Complex Physics</h3>
            <p className="text-gray-400 text-sm">
              R-Type doesn't need a full physics engine (gravity, friction, forces). Simple velocity-based
              movement is sufficient. This keeps the codebase simple and performance high.
            </p>
          </div>
        </div>
      </section>

      {/* Serialization */}
      <section className="bg-dark-light border border-gray-700 rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4 text-primary">Binary Serialization</h2>

        <div className="space-y-4">
          <div>
            <h3 className="font-bold text-lg mb-2">Why Binary over JSON/Text?</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-dark border border-green-600 rounded-lg p-4">
                <h4 className="font-bold mb-2 text-green-400">✅ Binary (Chosen)</h4>
                <ul className="space-y-1 text-sm text-gray-400">
                  <li>• <strong>Small packets:</strong> 50-200 bytes</li>
                  <li>• <strong>Fast:</strong> memcpy, no parsing</li>
                  <li>• <strong>Predictable size:</strong> Fixed structs</li>
                  <li>• <strong>Low bandwidth:</strong> Critical for real-time</li>
                </ul>
              </div>

              <div className="bg-dark border border-red-600 rounded-lg p-4">
                <h4 className="font-bold mb-2 text-red-400">❌ JSON/Text</h4>
                <ul className="space-y-1 text-sm text-gray-400">
                  <li>• <strong>Large packets:</strong> 500-2000 bytes</li>
                  <li>• <strong>Slow:</strong> Parsing overhead</li>
                  <li>• <strong>Variable size:</strong> Hard to predict</li>
                  <li>• <strong>High bandwidth:</strong> Wastes network</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-2">Example: Snapshot Message</h3>
            <div className="bg-dark border border-gray-600 rounded-lg p-4">
              <pre className="text-sm text-gray-300">{`struct Snapshot {
    uint32_t tick;              // 4 bytes
    uint8_t entity_count;       // 1 byte
    EntityData entities[32];    // 32 * 16 = 512 bytes
} __attribute__((packed));

// Total: ~517 bytes (binary)
// vs ~2000+ bytes (JSON)`}</pre>
            </div>
          </div>
        </div>
      </section>

      {/* Summary */}
      <section className="bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4">Summary: Design Philosophy</h2>
        
        <div className="space-y-3 text-gray-300">
          <p>
            <strong>1. Simplicity First:</strong> Choose the simplest algorithm that meets requirements.
            AABB collision is simpler than circle collision and works fine.
          </p>
          <p>
            <strong>2. Measure Before Optimizing:</strong> Use mutex-based queue first. Only switch to
            lock-free if profiling shows it's a bottleneck.
          </p>
          <p>
            <strong>3. Data-Oriented Design:</strong> ECS and Sparse Set prioritize cache-friendly data
            layout for better performance.
          </p>
          <p>
            <strong>4. Network Efficiency:</strong> Binary protocol minimizes bandwidth for real-time gameplay.
          </p>
          <p>
            <strong>5. Maintainability:</strong> Standard library solutions (std::queue, std::vector) over
            custom implementations when possible.
          </p>
        </div>
      </section>
    </div>
  )
}

export default Algorithms
