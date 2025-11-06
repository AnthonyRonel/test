import React from 'react'

const Protocol = () => {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold mb-4">Network Protocol</h1>
      <p className="text-gray-400 text-lg">Binary UDP protocol specification - see full RFC in rtype/protocol/readMe.md</p>
      
      <div className="bg-dark-light border border-gray-700 rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4 text-primary">Protocol Overview</h2>
        <ul className="list-disc list-inside text-gray-300 space-y-2">
          <li><strong>Transport:</strong> UDP (User Datagram Protocol)</li>
          <li><strong>Encoding:</strong> Binary (Little Endian)</li>
          <li><strong>Header:</strong> 3 bytes (2 bytes size + 1 byte type)</li>
          <li><strong>Port:</strong> 1234 (default)</li>
        </ul>
      </div>

      <div className="bg-dark-light border border-gray-700 rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4 text-primary">Message Types</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-dark">
              <tr>
                <th className="p-3">ID</th>
                <th className="p-3">Name</th>
                <th className="p-3">Direction</th>
                <th className="p-3">Description</th>
              </tr>
            </thead>
            <tbody className="text-gray-300">
              <tr className="border-t border-gray-700"><td className="p-3">0x01</td><td>CONNECT</td><td>C→S</td><td>Connection request</td></tr>
              <tr className="border-t border-gray-700"><td className="p-3">0x02</td><td>DISCONNECT</td><td>C→S</td><td>Disconnect</td></tr>
              <tr className="border-t border-gray-700"><td className="p-3">0x03</td><td>INPUT</td><td>C→S</td><td>Player input</td></tr>
              <tr className="border-t border-gray-700"><td className="p-3">0x04</td><td>WELCOME</td><td>S→C</td><td>Connection accepted</td></tr>
              <tr className="border-t border-gray-700"><td className="p-3">0x05</td><td>SNAPSHOT</td><td>S→C</td><td>World state</td></tr>
              <tr className="border-t border-gray-700"><td className="p-3">0x06</td><td>PLAYER_EVENT</td><td>S→C</td><td>Player events</td></tr>
              <tr className="border-t border-gray-700"><td className="p-3">0x07-0x11</td><td>LOBBY_*</td><td>Both</td><td>Room management</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Protocol
