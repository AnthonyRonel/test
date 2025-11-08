import React from 'react'
import { Check, X, AlertTriangle } from 'lucide-react'

const ComparisonTable = ({ title, items }) => (
  <div className="bg-dark-light border border-gray-700 rounded-lg p-6 mb-6">
    <h3 className="text-xl font-bold mb-4 text-primary">{title}</h3>
    <div className="overflow-x-auto">
      <table className="w-full text-left">
        <thead className="bg-dark">
          <tr>
            <th className="p-3">Technology</th>
            <th className="p-3">Pros</th>
            <th className="p-3">Cons</th>
            <th className="p-3">Decision</th>
          </tr>
        </thead>
        <tbody className="text-gray-300">
          {items.map((item, i) => (
            <tr key={i} className="border-t border-gray-700">
              <td className="p-3 font-semibold">{item.tech}</td>
              <td className="p-3 text-sm">
                <ul className="space-y-1">
                  {item.pros.map((pro, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <Check size={16} className="text-green-400 mt-0.5 flex-shrink-0" />
                      <span>{pro}</span>
                    </li>
                  ))}
                </ul>
              </td>
              <td className="p-3 text-sm">
                <ul className="space-y-1">
                  {item.cons.map((con, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <X size={16} className="text-red-400 mt-0.5 flex-shrink-0" />
                      <span>{con}</span>
                    </li>
                  ))}
                </ul>
              </td>
              <td className="p-3">
                <span className={`px-3 py-1 rounded-full text-sm ${
                  item.chosen ? 'bg-green-900/30 text-green-400 border border-green-700' : 'bg-gray-700 text-gray-400'
                }`}>
                  {item.chosen ? '✓ Chosen' : 'Not used'}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
)

const Comparative = () => {
  const languageComparison = [
    {
      tech: 'C++17/20',
      pros: [
        'High performance, zero-cost abstractions',
        'Direct memory control for game engines',
        'Industry standard for game development',
        'Excellent library ecosystem (ASIO, Raylib)',
        'Modern features (smart pointers, lambdas, concepts)'
      ],
      cons: [
        'Steeper learning curve',
        'Manual memory management complexity',
        'Longer compilation times'
      ],
      chosen: true
    },
    {
      tech: 'Rust',
      pros: [
        'Memory safety without GC',
        'Modern language features',
        'Growing game dev ecosystem'
      ],
      cons: [
        'Smaller library ecosystem for games',
        'Team unfamiliarity',
        'Borrow checker learning curve',
        'Less mature game engine libraries'
      ],
      chosen: false
    },
    {
      tech: 'C#',
      pros: [
        'Easier to learn and use',
        'Good networking libraries',
        'Garbage collection'
      ],
      cons: [
        'Requires .NET runtime',
        'Lower performance than C++',
        'GC pauses problematic for real-time games',
        'Not meeting project requirements'
      ],
      chosen: false
    }
  ]

  const networkingComparison = [
    {
      tech: 'UDP (Binary Protocol)',
      pros: [
        'Low latency for real-time gameplay',
        'No connection overhead',
        'Can drop old packets without blocking',
        'Smaller packet headers',
        'Full control over reliability'
      ],
      cons: [
        'No built-in reliability',
        'Packets can arrive out of order',
        'Must handle packet loss manually'
      ],
      chosen: true
    },
    {
      tech: 'TCP',
      pros: [
        'Guaranteed delivery',
        'Ordered packets',
        'Built-in flow control'
      ],
      cons: [
        'Head-of-line blocking',
        'Higher latency',
        'Retransmission delays',
        'Not suitable for fast-paced action games'
      ],
      chosen: false
    },
    {
      tech: 'WebSockets',
      pros: [
        'Browser compatibility',
        'Bidirectional communication'
      ],
      cons: [
        'TCP-based (inherits TCP issues)',
        'Overhead for game packets',
        'Not optimal for native clients'
      ],
      chosen: false
    }
  ]

  const graphicsComparison = [
    {
      tech: 'Raylib 5.0',
      pros: [
        'Simple, clean API',
        'Cross-platform (Linux, Windows, macOS)',
        'No external dependencies',
        'Perfect for 2D games',
        'Active development and community'
      ],
      cons: [
        'Less features than SFML',
        'Smaller ecosystem'
      ],
      chosen: true
    },
    {
      tech: 'SFML',
      pros: [
        'Mature library',
        'Rich feature set',
        'Built-in networking (conflict!)'
      ],
      cons: [
        'Network module conflicts with custom protocol',
        'More complex API',
        'Heavier dependency'
      ],
      chosen: false
    },
    {
      tech: 'SDL2',
      pros: [
        'Industry standard',
        'Very mature',
        'Extensive platform support'
      ],
      cons: [
        'Lower-level API (more boilerplate)',
        'Requires more wrapper code',
        'Steeper learning curve'
      ],
      chosen: false
    }
  ]

  const networkLibComparison = [
    {
      tech: 'ASIO (Standalone)',
      pros: [
        'Header-only option',
        'Cross-platform async I/O',
        'Production-tested',
        'Excellent documentation',
        'No external dependencies'
      ],
      cons: [
        'Template-heavy (compilation time)',
        'Callback-based can be complex'
      ],
      chosen: true
    },
    {
      tech: 'Raw Sockets (POSIX)',
      pros: [
        'Maximum control',
        'No dependencies',
        'Minimal overhead'
      ],
      cons: [
        'Platform-specific code',
        'Must implement async I/O manually',
        'More error-prone',
        'Significant development time'
      ],
      chosen: false
    },
    {
      tech: 'Boost.Asio',
      pros: [
        'Same as ASIO standalone',
        'Part of Boost ecosystem'
      ],
      cons: [
        'Requires full Boost dependency',
        'Heavier than standalone ASIO'
      ],
      chosen: false
    }
  ]

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold mb-4">Technical & Comparative Study</h1>
        <p className="text-gray-400 text-lg">
          Justification of technology choices through comparative analysis across multiple axes:
          algorithms, storage, security, and performance.
        </p>
      </div>

      {/* Executive Summary */}
      <section className="bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4">Executive Summary</h2>
        <p className="text-gray-300 mb-4">
          Our technology stack was selected based on <strong>performance requirements</strong>, 
          <strong>real-time constraints</strong>, and <strong>team expertise</strong>. Each choice
          was evaluated against alternatives considering latency, reliability, and development velocity.
        </p>
        <div className="grid md:grid-cols-2 gap-4 mt-4">
          <div className="bg-dark-light border border-gray-700 rounded p-4">
            <h3 className="font-bold mb-2 text-primary">Key Decision: UDP over TCP</h3>
            <p className="text-sm text-gray-400">
              Real-time gameplay requires low latency. Old game state is worthless - better to drop
              packets than wait for retransmission.
            </p>
          </div>
          <div className="bg-dark-light border border-gray-700 rounded p-4">
            <h3 className="font-bold mb-2 text-primary">Key Decision: C++ over Alternatives</h3>
            <p className="text-sm text-gray-400">
              Performance-critical game engine requires zero-cost abstractions and direct memory control
              that only C++ provides.
            </p>
          </div>
        </div>
      </section>

      {/* Programming Language */}
      <section>
        <h2 className="text-3xl font-bold mb-6">1. Programming Language</h2>
        <ComparisonTable title="Language Comparison" items={languageComparison} />
        
        <div className="bg-dark-light border border-gray-700 rounded-lg p-6">
          <h3 className="text-xl font-bold mb-3 text-primary">Justification: C++17/20</h3>
          <p className="text-gray-300 mb-4">
            <strong>Performance</strong>: Game engines require 60Hz update loops with minimal latency.
            C++ provides zero-cost abstractions and direct memory control essential for this.
          </p>
          <p className="text-gray-300 mb-4">
            <strong>Industry Standard</strong>: Most game engines (Unreal, Unity core, CryEngine) use C++.
            Proven track record for networked games.
          </p>
          <p className="text-gray-300">
            <strong>Modern Features</strong>: C++17/20 brings smart pointers, lambdas, and concepts,
            making it safer and more expressive while maintaining performance.
          </p>
        </div>
      </section>

      {/* Networking */}
      <section>
        <h2 className="text-3xl font-bold mb-6">2. Network Protocol</h2>
        <ComparisonTable title="Protocol Comparison" items={networkingComparison} />
        
        <div className="bg-dark-light border border-gray-700 rounded-lg p-6">
          <h3 className="text-xl font-bold mb-3 text-primary">Justification: UDP with Binary Protocol</h3>
          <p className="text-gray-300 mb-4">
            <strong>Latency Requirements</strong>: At 60Hz tick rate, we have only 16ms per frame.
            TCP's retransmission and head-of-line blocking would cause unacceptable delays.
          </p>
          <p className="text-gray-300 mb-4">
            <strong>Packet Loss Strategy</strong>: In fast-paced games, old state is obsolete.
            Better to drop a packet and send fresh state than wait for retransmission.
          </p>
          <p className="text-gray-300">
            <strong>Binary Format</strong>: Smaller packets (3-byte header vs JSON overhead) reduce
            bandwidth and parsing time. Critical for real-time performance.
          </p>
        </div>
      </section>

      {/* Graphics Library */}
      <section>
        <h2 className="text-3xl font-bold mb-6">3. Graphics Library</h2>
        <ComparisonTable title="Graphics Library Comparison" items={graphicsComparison} />
        
        <div className="bg-dark-light border border-gray-700 rounded-lg p-6">
          <h3 className="text-xl font-bold mb-3 text-primary">Justification: Raylib 5.0</h3>
          <p className="text-gray-300 mb-4">
            <strong>Simplicity</strong>: Clean API allows focus on game logic rather than graphics boilerplate.
            Faster development velocity.
          </p>
          <p className="text-gray-300 mb-4">
            <strong>No Conflicts</strong>: Unlike SFML, Raylib doesn't include networking, avoiding
            conflicts with our custom UDP protocol.
          </p>
          <p className="text-gray-300">
            <strong>Cross-platform</strong>: Single codebase works on Linux (required) and Windows (bonus).
          </p>
        </div>
      </section>

      {/* Network Library */}
      <section>
        <h2 className="text-3xl font-bold mb-6">4. Network Library</h2>
        <ComparisonTable title="Network Library Comparison" items={networkLibComparison} />
        
        <div className="bg-dark-light border border-gray-700 rounded-lg p-6">
          <h3 className="text-xl font-bold mb-3 text-primary">Justification: ASIO (Standalone)</h3>
          <p className="text-gray-300 mb-4">
            <strong>Async I/O</strong>: Non-blocking I/O essential for server handling multiple clients.
            ASIO provides production-tested async primitives.
          </p>
          <p className="text-gray-300 mb-4">
            <strong>Cross-platform</strong>: Abstracts platform differences (epoll, kqueue, IOCP)
            without sacrificing performance.
          </p>
          <p className="text-gray-300">
            <strong>Header-only</strong>: Simplifies deployment. No linking issues, just include headers.
          </p>
        </div>
      </section>

      {/* Algorithms & Data Structures */}
      <section className="bg-dark-light border border-gray-700 rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4 text-primary">5. Algorithms & Data Structures</h2>
        
        <div className="space-y-4">
          <div>
            <h3 className="font-bold text-lg mb-2">Entity-Component-System (ECS)</h3>
            <p className="text-gray-300 mb-2">
              <strong>Why:</strong> Traditional OOP inheritance hierarchies become unwieldy with
              complex entity types. ECS provides composition over inheritance.
            </p>
            <p className="text-gray-400 text-sm">
              <strong>Benefit:</strong> Better cache locality (components in contiguous arrays),
              easier to parallelize, more flexible entity composition.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-2">Sparse Set (Component Storage)</h3>
            <p className="text-gray-300 mb-2">
              <strong>Why:</strong> Entities don't all have all components. Sparse set allows
              O(1) component access while keeping memory compact.
            </p>
            <p className="text-gray-400 text-sm">
              <strong>Alternative considered:</strong> Hash maps (slower), dense arrays (memory waste).
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-2">Lock-Free Queue (Network Thread)</h3>
            <p className="text-gray-300 mb-2">
              <strong>Why:</strong> Network and game threads communicate via queue. Lock-free
              implementation avoids mutex contention.
            </p>
            <p className="text-gray-400 text-sm">
              <strong>Trade-off:</strong> More complex implementation but eliminates blocking.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-2">AABB Collision Detection</h3>
            <p className="text-gray-300 mb-2">
              <strong>Why:</strong> Simple axis-aligned bounding boxes sufficient for 2D shooter.
              O(n²) acceptable for ~100 entities.
            </p>
            <p className="text-gray-400 text-sm">
              <strong>Future optimization:</strong> Spatial partitioning (quadtree) if entity count grows.
            </p>
          </div>
        </div>
      </section>

      {/* Storage */}
      <section className="bg-dark-light border border-gray-700 rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4 text-primary">6. Storage & Persistence</h2>
        
        <div className="space-y-4">
          <div>
            <h3 className="font-bold text-lg mb-2">Game State: In-Memory Only</h3>
            <p className="text-gray-300 mb-2">
              <strong>Decision:</strong> No persistence. Game state exists only during match.
            </p>
            <p className="text-gray-400 text-sm">
              <strong>Rationale:</strong> R-Type is session-based. No need for save games or
              persistent world state. Simplifies architecture.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-2">Configuration: Plain Text Files</h3>
            <p className="text-gray-300 mb-2">
              <strong>Decision:</strong> Server config in simple text format (port, tick rate, etc.).
            </p>
            <p className="text-gray-400 text-sm">
              <strong>Rationale:</strong> Easy to edit, version control friendly, no database overhead.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-2">Assets: File System</h3>
            <p className="text-gray-300 mb-2">
              <strong>Decision:</strong> Sprites and sounds loaded from filesystem.
            </p>
            <p className="text-gray-400 text-sm">
              <strong>Rationale:</strong> Standard approach for game assets. Raylib handles loading.
            </p>
          </div>
        </div>
      </section>

      {/* Security */}
      <section className="bg-dark-light border border-gray-700 rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4 text-primary">7. Security Considerations</h2>
        
        <div className="space-y-4">
          <div className="border-l-4 border-yellow-500 pl-4">
            <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
              <AlertTriangle size={20} className="text-yellow-500" />
              Packet Validation
            </h3>
            <p className="text-gray-300 mb-2">
              <strong>Threat:</strong> Malformed packets could crash server or cause undefined behavior.
            </p>
            <p className="text-gray-400 text-sm">
              <strong>Mitigation:</strong> All incoming packets validated (size, type, ranges).
              Invalid packets logged and dropped.
            </p>
          </div>

          <div className="border-l-4 border-yellow-500 pl-4">
            <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
              <AlertTriangle size={20} className="text-yellow-500" />
              DoS Protection
            </h3>
            <p className="text-gray-300 mb-2">
              <strong>Threat:</strong> Flood of packets could overwhelm server.
            </p>
            <p className="text-gray-400 text-sm">
              <strong>Mitigation:</strong> Rate limiting per IP. Queue size limits prevent memory exhaustion.
            </p>
          </div>

          <div className="border-l-4 border-yellow-500 pl-4">
            <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
              <AlertTriangle size={20} className="text-yellow-500" />
              Client Authority
            </h3>
            <p className="text-gray-300 mb-2">
              <strong>Threat:</strong> Malicious client could send impossible moves (teleporting, etc.).
            </p>
            <p className="text-gray-400 text-sm">
              <strong>Mitigation:</strong> Server is authoritative. All game logic on server.
              Client inputs validated (range checks, rate limits).
            </p>
          </div>

          <div className="border-l-4 border-green-500 pl-4">
            <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
              <Check size={20} className="text-green-500" />
              Memory Safety
            </h3>
            <p className="text-gray-300 mb-2">
              <strong>Approach:</strong> Modern C++ with smart pointers, RAII, bounds checking.
            </p>
            <p className="text-gray-400 text-sm">
              <strong>Tools:</strong> AddressSanitizer, Valgrind for testing. No raw pointers in hot paths.
            </p>
          </div>
        </div>
      </section>

      {/* Conclusion */}
      <section className="bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4">Conclusion</h2>
        <p className="text-gray-300 mb-4">
          Our technology stack prioritizes <strong>performance</strong>, <strong>low latency</strong>,
          and <strong>reliability</strong> - essential for real-time multiplayer games.
        </p>
        <p className="text-gray-300">
          Each decision was made after evaluating alternatives and considering trade-offs.
          The result is a robust, performant system that meets all project requirements while
          remaining maintainable and extensible.
        </p>
      </section>
    </div>
  )
}

export default Comparative
