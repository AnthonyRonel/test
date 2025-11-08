import React from 'react'
import { Activity, Users, Zap, Server } from 'lucide-react'

const StatCard = ({ icon: Icon, label, value, color = 'primary' }) => {
  const colorClasses = {
    primary: 'bg-blue-900/20 border-blue-500 text-blue-400',
    green: 'bg-green-900/20 border-green-500 text-green-400',
    purple: 'bg-purple-900/20 border-purple-500 text-purple-400',
    orange: 'bg-orange-900/20 border-orange-500 text-orange-400',
  }

  return (
    <div className={`${colorClasses[color]} border-l-4 rounded-lg p-4 flex items-center gap-4`}>
      <div className="p-3 bg-dark rounded-lg">
        <Icon size={24} />
      </div>
      <div>
        <p className="text-2xl font-bold">{value}</p>
        <p className="text-sm text-gray-400">{label}</p>
      </div>
    </div>
  )
}

const Dashboard = ({ stats }) => {
  const defaultStats = [
    { icon: Activity, label: 'Active Players', value: '60Hz', color: 'primary' },
    { icon: Users, label: 'Max Players', value: '4', color: 'green' },
    { icon: Zap, label: 'Protocol', value: 'UDP', color: 'purple' },
    { icon: Server, label: 'Tick Rate', value: '60/s', color: 'orange' },
  ]

  const displayStats = stats || defaultStats

  return (
    <div className="bg-dark-light border border-gray-700 rounded-lg p-6 mb-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {displayStats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>
    </div>
  )
}

export default Dashboard
