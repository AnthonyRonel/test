import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Home, Layers, FolderTree, Box, Network, Server, Monitor, Code, GitCompare, FileCode } from 'lucide-react'

const Layout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const location = useLocation()

  const navigation = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'Architecture', href: '/architecture', icon: Layers },
    { name: 'Project Tree', href: '/project-tree', icon: FolderTree },
    { name: 'ECS Engine', href: '/ecs', icon: Box },
    { name: 'Network Protocol', href: '/protocol', icon: Network },
    { name: 'Server', href: '/server', icon: Server },
    { name: 'Client', href: '/client', icon: Monitor },
    { name: 'Algorithms', href: '/algorithms', icon: Code },
    { name: 'Comparative Study', href: '/comparative', icon: GitCompare },
    { name: 'Tutorials', href: '/tutorials', icon: FileCode },
    { name: 'Contributing', href: '/contributing', icon: GitCompare },
  ]

  return (
    <div className="min-h-screen bg-dark">
      {/* Header */}
      <header className="bg-dark-light border-b border-gray-700 sticky top-0 z-50">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
              >
                {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
              <h1 className="ml-4 text-2xl font-bold text-white">
                R-Type <span className="text-primary">Documentation</span>
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-400">v1.0.0</span>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside
          className={`${
            sidebarOpen ? 'w-64' : 'w-0'
          } bg-dark-light border-r border-gray-700 transition-all duration-300 overflow-hidden`}
        >
          <nav className="p-4 space-y-1">
            {navigation.map((item) => {
              const Icon = item.icon
              const isActive = location.pathname === item.href
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                    isActive
                      ? 'bg-primary text-white'
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                  }`}
                >
                  <Icon size={20} className="mr-3" />
                  {item.name}
                </Link>
              )
            })}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  )
}

export default Layout
