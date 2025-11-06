import React from 'react'

const ECS = () => {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-4">Entity-Component-System (ECS)</h1>
        <p className="text-gray-400 text-lg">
          Deep dive into the ECS architecture powering the R-Type game engine.
        </p>
      </div>

      {/* What is ECS */}
      <section className="bg-dark-light border border-gray-700 rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4 text-primary">What is ECS?</h2>
        <p className="text-gray-300 mb-4">
          Entity-Component-System is an architectural pattern that favors <strong>composition over inheritance</strong>.
          Instead of deep class hierarchies, entities are composed of simple data components, and systems operate on those components.
        </p>

        <div className="grid md:grid-cols-3 gap-4 mt-6">
          <div className="bg-dark border border-gray-600 rounded-lg p-4">
            <h3 className="font-bold text-lg mb-2 text-blue-400">Entity</h3>
            <p className="text-sm text-gray-400">
              Just an ID (uint32_t). Represents a game object but contains no data or logic itself.
            </p>
            <code className="text-xs text-primary mt-2 block">entity player = 42;</code>
          </div>

          <div className="bg-dark border border-gray-600 rounded-lg p-4">
            <h3 className="font-bold text-lg mb-2 text-green-400">Component</h3>
            <p className="text-sm text-gray-400">
              Pure data structures. No methods, just fields. Examples: Position, Velocity, Health.
            </p>
            <code className="text-xs text-primary mt-2 block">struct Position &#123; float x, y; &#125;;</code>
          </div>

          <div className="bg-dark border border-gray-600 rounded-lg p-4">
            <h3 className="font-bold text-lg mb-2 text-purple-400">System</h3>
            <p className="text-sm text-gray-400">
              Logic that operates on entities with specific components. Examples: MovementSystem, CollisionSystem.
            </p>
            <code className="text-xs text-primary mt-2 block">void update(registry&amp; reg)</code>
          </div>
        </div>
      </section>

      {/* Components */}
      <section className="bg-dark-light border border-gray-700 rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4 text-primary">Components</h2>
        <p className="text-gray-300 mb-4">
          All components are defined in <code className="text-primary">rtype/ecs/include/ecs/bootstrap.hpp</code>
        </p>

        <div className="space-y-3">
          <div className="bg-dark border border-gray-600 rounded p-4">
            <code className="text-primary font-bold">Position</code>
            <pre className="text-sm text-gray-300 mt-2">{`struct Position {
    float x, y;
};`}</pre>
            <p className="text-sm text-gray-400 mt-2">Entity's 2D coordinates in the game world.</p>
          </div>

          <div className="bg-dark border border-gray-600 rounded p-4">
            <code className="text-primary font-bold">Velocity</code>
            <pre className="text-sm text-gray-300 mt-2">{`struct Velocity {
    float vx, vy;
};`}</pre>
            <p className="text-sm text-gray-400 mt-2">Movement speed in pixels per second.</p>
          </div>

          <div className="bg-dark border border-gray-600 rounded p-4">
            <code className="text-primary font-bold">Healthpoints_t</code>
            <pre className="text-sm text-gray-300 mt-2">{`struct Healthpoints_t {
    int hp;
};`}</pre>
            <p className="text-sm text-gray-400 mt-2">Current health points. Entity dies when hp &lt;= 0.</p>
          </div>

          <div className="bg-dark border border-gray-600 rounded p-4">
            <code className="text-primary font-bold">Controllable</code>
            <pre className="text-sm text-gray-300 mt-2">{`struct Controllable {
    uint32_t playerId;
};`}</pre>
            <p className="text-sm text-gray-400 mt-2">Marks entity as player-controlled, links to network player ID.</p>
          </div>
        </div>
      </section>

      {/* Systems */}
      <section className="bg-dark-light border border-gray-700 rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4 text-primary">Systems</h2>
        <p className="text-gray-300 mb-4">
          Systems are functions that iterate over entities with specific component combinations
          and update them. They run every frame in the game loop.
        </p>

        <div className="space-y-4">
          <div className="bg-dark border border-gray-600 rounded-lg p-4">
            <h3 className="font-bold text-lg mb-2">Movement System</h3>
            <p className="text-gray-400 mb-3">
              Updates entity positions based on their velocity and deltaTime.
            </p>
            <pre className="bg-dark-light p-3 rounded text-sm text-gray-300">{`void movement_system(registry& reg, float dt) {
    auto& positions = reg.get_components<Position>();
    auto& velocities = reg.get_components<Velocity>();
    
    for (size_t i = 0; i < positions.size(); i++) {
        if (positions[i] && velocities[i]) {
            positions[i]->x += velocities[i]->vx * dt;
            positions[i]->y += velocities[i]->vy * dt;
        }
    }
}`}</pre>
          </div>

          <div className="bg-dark border border-gray-600 rounded-lg p-4">
            <h3 className="font-bold text-lg mb-2">Collision System</h3>
            <p className="text-gray-400 mb-3">
              Detects collisions between entities and triggers appropriate responses.
            </p>
            <p className="text-sm text-gray-400">
              Implemented in <code className="text-primary">Engine::update()</code> using spatial partitioning
              for efficiency. Checks bullets vs enemies, players vs enemies, etc.
            </p>
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="bg-dark-light border border-gray-700 rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4 text-primary">Why ECS?</h2>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-green-900/20 border-l-4 border-green-500 p-4 rounded">
            <h3 className="font-bold mb-2">✅ Performance</h3>
            <p className="text-sm text-gray-400">
              Components stored in contiguous arrays = better cache locality.
              Systems iterate over packed data, not scattered objects.
            </p>
          </div>

          <div className="bg-green-900/20 border-l-4 border-green-500 p-4 rounded">
            <h3 className="font-bold mb-2">✅ Flexibility</h3>
            <p className="text-sm text-gray-400">
              Easy to add new entity types by combining components.
              No need to modify class hierarchies.
            </p>
          </div>

          <div className="bg-green-900/20 border-l-4 border-green-500 p-4 rounded">
            <h3 className="font-bold mb-2">✅ Parallelization</h3>
            <p className="text-sm text-gray-400">
              Systems can run in parallel if they don't modify the same components.
              Future optimization opportunity.
            </p>
          </div>

          <div className="bg-green-900/20 border-l-4 border-green-500 p-4 rounded">
            <h3 className="font-bold mb-2">✅ Network Friendly</h3>
            <p className="text-sm text-gray-400">
              Components are plain data, easy to serialize.
              Snapshots are just arrays of component values.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ECS
