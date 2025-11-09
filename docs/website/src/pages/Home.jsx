import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Zap, Shield, Layers, Network } from 'lucide-react'

const Home = () => {
  const features = [
    {
      icon: Layers,
      title: 'ECS Architecture',
      description: 'Entity-Component-System pattern for decoupled, scalable game logic',
      link: '/ecs'
    },
    {
      icon: Network,
      title: 'Binary UDP Protocol',
      description: 'Optimized real-time networking with custom binary protocol',
      link: '/protocol'
    },
    {
      icon: Shield,
      title: 'Authoritative Server',
      description: 'Multi-threaded server with robust error handling and room management',
      link: '/server'
    },
    {
      icon: Zap,
      title: 'High Performance',
      description: 'Optimized algorithms and data structures for 60Hz gameplay',
      link: '/algorithms'
    }
  ]

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="text-center space-y-6 py-12 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 blur-3xl -z-10"></div>
        <h1 className="text-6xl font-bold float-animation">
          R-Type <span className="gradient-text">Game Engine</span>
        </h1>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          A complete technical documentation for a networked multiplayer game engine
          built with modern C++ and advanced software architecture patterns.
        </p>
        <div className="flex justify-center gap-4 pt-4">
          <Link
            to="/architecture"
            className="px-6 py-3 bg-primary hover:bg-blue-600 text-white rounded-lg font-medium transition-colors flex items-center gap-2"
          >
            Get Started <ArrowRight size={20} />
          </Link>
          <Link
            to="/project-tree"
            className="px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg font-medium transition-colors"
          >
            View Project Structure
          </Link>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {features.map((feature, index) => {
          const Icon = feature.icon
          return (
            <Link
              key={index}
              to={feature.link}
              className="p-6 glass-card rounded-lg group shimmer"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <Icon size={24} className="text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              </div>
            </Link>
          )
        })}
      </div>

      <div className="glass-card rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-6">Quick Navigation</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <div>
            <h3 className="font-semibold text-primary mb-3">Architecture</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/architecture" className="hover:text-white">System Overview</Link></li>
              <li><Link to="/ecs" className="hover:text-white">ECS Engine</Link></li>
              <li><Link to="/project-tree" className="hover:text-white">Project Structure</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-primary mb-3">Implementation</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/server" className="hover:text-white">Server Details</Link></li>
              <li><Link to="/client" className="hover:text-white">Client Details</Link></li>
              <li><Link to="/protocol" className="hover:text-white">Network Protocol</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-primary mb-3">Technical</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/algorithms" className="hover:text-white">Algorithms</Link></li>
              <li><Link to="/classes" className="hover:text-white">Classes & API</Link></li>
              <li><Link to="/comparative" className="hover:text-white">Comparative Study</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="glass-card rounded-lg p-6 text-center pulse-glow">
          <div className="text-3xl font-bold text-primary">4</div>
          <div className="text-sm text-gray-400 mt-1">Core Modules</div>
        </div>
        <div className="glass-card rounded-lg p-6 text-center pulse-glow">
          <div className="text-3xl font-bold text-primary">UDP</div>
          <div className="text-sm text-gray-400 mt-1">Binary Protocol</div>
        </div>
        <div className="glass-card rounded-lg p-6 text-center pulse-glow">
          <div className="text-3xl font-bold text-primary">60Hz</div>
          <div className="text-sm text-gray-400 mt-1">Tick Rate</div>
        </div>
        <div className="glass-card rounded-lg p-6 text-center pulse-glow">
          <div className="text-3xl font-bold text-primary">C++17</div>
          <div className="text-sm text-gray-400 mt-1">Modern C++</div>
        </div>
      </div>

      {/* Project Info */}
      <div className="neon-border rounded-lg p-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5"></div>
        <div className="relative z-10">
        <h2 className="text-2xl font-bold mb-4">About This Project</h2>
        <p className="text-gray-300 mb-4">
          This documentation covers the complete R-Type game engine implementation, developed as part
          of the Epitech Advanced C++ curriculum (B-CPP-500). The project demonstrates advanced
          software engineering practices, network programming, and game engine architecture.
        </p>
        <p className="text-gray-300">
          The engine features a custom Entity-Component-System, binary UDP networking protocol,
          multi-threaded server architecture, and a complete lobby system for multiplayer matchmaking.
        </p>
        </div>
      </div>
    </div>
  )
}

export default Home
