// Example of Home.jsx with images and dashboard
// Copy sections you want to use into your actual Home.jsx

import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Zap, Shield, Layers, Network, Activity, Users, Server } from 'lucide-react'
import Dashboard from '../components/Dashboard'
import ImageGallery from '../components/ImageGallery'
import ImageCard from '../components/ImageCard'

const Home = () => {
  // Example stats for dashboard
  const projectStats = [
    { icon: Activity, label: 'Tick Rate', value: '60Hz', color: 'primary' },
    { icon: Users, label: 'Max Players', value: '4', color: 'green' },
    { icon: Zap, label: 'Protocol', value: 'UDP', color: 'purple' },
    { icon: Server, label: 'Modules', value: '4', color: 'orange' },
  ]

  // Example gallery images
  const screenshotGallery = [
    {
      src: '/images/gameplay/lobby.png',
      alt: 'Lobby System',
      title: 'Multiplayer Lobby',
      description: 'Create and join game rooms with custom settings'
    },
    {
      src: '/images/gameplay/ingame-1.png',
      alt: 'Gameplay Screenshot 1',
      title: 'Intense Space Combat',
      description: '4 players fighting waves of enemies'
    },
    {
      src: '/images/gameplay/ingame-2.png',
      alt: 'Gameplay Screenshot 2',
      title: 'Boss Battle',
      description: 'Epic encounter with the Dobkeratops'
    },
  ]

  const features = [
    {
      icon: Layers,
      title: 'ECS Architecture',
      description: 'Entity-Component-System pattern for decoupled, scalable game logic',
      link: '/ecs',
      image: '/images/architecture/ecs-preview.png'
    },
    {
      icon: Network,
      title: 'Binary UDP Protocol',
      description: 'Optimized real-time networking with custom binary protocol',
      link: '/protocol',
      image: '/images/diagrams/protocol-preview.png'
    },
    {
      icon: Shield,
      title: 'Authoritative Server',
      description: 'Multi-threaded server with robust error handling and room management',
      link: '/server',
      image: '/images/architecture/server-preview.png'
    },
    {
      icon: Zap,
      title: 'High Performance',
      description: 'Optimized algorithms and data structures for 60Hz gameplay',
      link: '/algorithms',
      image: '/images/diagrams/performance-preview.png'
    }
  ]

  return (
    <div className="space-y-12">
      {/* Hero Section with Background Image */}
      <div className="relative overflow-hidden rounded-lg">
        {/* Optional: Add a hero background image */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 opacity-50"></div>
        
        <div className="relative text-center space-y-6 py-12 px-4">
          <h1 className="text-6xl font-bold">
            R-Type <span className="text-primary">Game Engine</span>
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
      </div>

      {/* Dashboard Stats */}
      <Dashboard stats={projectStats} />

      {/* Game Screenshots Gallery */}
      <section>
        <h2 className="text-3xl font-bold mb-6">Game Screenshots</h2>
        <ImageGallery images={screenshotGallery} />
      </section>

      {/* Features Grid with Images */}
      <section>
        <h2 className="text-3xl font-bold mb-6">Core Features</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Link
                key={index}
                to={feature.link}
                className="bg-dark-light border border-gray-700 rounded-lg overflow-hidden hover:border-primary transition-colors group"
              >
                {/* Feature Image */}
                {feature.image && (
                  <div className="h-48 overflow-hidden bg-dark">
                    <img 
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        e.target.style.display = 'none'
                      }}
                    />
                  </div>
                )}
                
                {/* Feature Content */}
                <div className="p-6">
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
                </div>
              </Link>
            )
          })}
        </div>
      </section>

      {/* Architecture Diagram Section */}
      <section className="bg-dark-light border border-gray-700 rounded-lg p-8">
        <h2 className="text-3xl font-bold mb-6">System Architecture</h2>
        <div className="flex flex-col md:flex-row gap-6 items-center">
          <div className="flex-1">
            <img 
              src="/images/architecture/system-overview.png"
              alt="System Architecture"
              className="w-full rounded-lg border border-gray-700"
              onError={(e) => {
                e.target.style.display = 'none'
              }}
            />
          </div>
          <div className="flex-1">
            <p className="text-gray-300 mb-4">
              The R-Type engine follows a <strong>Client-Server Authoritative Model</strong> with clear
              separation of concerns between different subsystems.
            </p>
            <ul className="space-y-2 text-gray-400">
              <li>✅ Entity-Component-System (ECS)</li>
              <li>✅ Binary UDP Protocol</li>
              <li>✅ Multi-threaded Server</li>
              <li>✅ Raylib Graphics Engine</li>
            </ul>
            <Link 
              to="/architecture"
              className="inline-block mt-4 text-primary hover:text-blue-400 font-medium"
            >
              Learn more about the architecture →
            </Link>
          </div>
        </div>
      </section>

      {/* Technology Stack with Icons */}
      <section className="bg-dark-light border border-gray-700 rounded-lg p-8">
        <h2 className="text-3xl font-bold mb-6">Technology Stack</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <ImageCard
            src="/images/icons/cpp-logo.png"
            alt="C++"
            title="C++17/20"
            description="Modern C++ standards"
          />
          <ImageCard
            src="/images/icons/cmake-logo.png"
            alt="CMake"
            title="CMake"
            description="Build system"
          />
          <ImageCard
            src="/images/icons/raylib-logo.png"
            alt="Raylib"
            title="Raylib 5.0"
            description="Graphics library"
          />
          <ImageCard
            src="/images/icons/asio-logo.png"
            alt="ASIO"
            title="ASIO"
            description="Async networking"
          />
        </div>
      </section>

      {/* Quick Links (keep existing) */}
      <div className="bg-dark-light border border-gray-700 rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-6">Quick Navigation</h2>
        {/* ... existing quick links code ... */}
      </div>

      {/* Stats (keep existing) */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {/* ... existing stats code ... */}
      </div>

      {/* Project Info (keep existing) */}
      <div className="bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 rounded-lg p-8">
        {/* ... existing project info code ... */}
      </div>
    </div>
  )
}

export default Home
