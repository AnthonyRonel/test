import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Architecture from './pages/Architecture'
import ProjectTree from './pages/ProjectTree'
import ECS from './pages/ECS'
import Protocol from './pages/Protocol'
import Server from './pages/Server'
import Client from './pages/Client'
import Algorithms from './pages/Algorithms'
import Comparative from './pages/Comparative'
import Classes from './pages/Classes'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/architecture" element={<Architecture />} />
          <Route path="/project-tree" element={<ProjectTree />} />
          <Route path="/ecs" element={<ECS />} />
          <Route path="/protocol" element={<Protocol />} />
          <Route path="/server" element={<Server />} />
          <Route path="/client" element={<Client />} />
          <Route path="/algorithms" element={<Algorithms />} />
          <Route path="/comparative" element={<Comparative />} />
          <Route path="/classes" element={<Classes />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
