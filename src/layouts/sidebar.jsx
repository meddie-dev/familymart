import React, { useState } from 'react';
import Header from '../layouts/header.jsx';

function Sidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };



  return (
    <div className="fixed top-0 left-0 w-full bg-gray-100 hidden z-50">
      {/* Sidebar */}
      <div className={`w-full bg-gray-800 text-white flex flex-col h-screen transition-transform transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="p-4">
          <h2 className="text-xl font-bold">Sidebar</h2>
        </div>
        <nav className="flex-1 px-2 py-10 space-y-2 text-center">
          <a href="#" className="block px-4 py-4 rounded hover:bg-gray-700">Home</a>
          <a href="#" className="block px-4 py-4 rounded hover:bg-gray-700">About</a>
          <a href="#" className="block px-4 py-4 rounded hover:bg-gray-700">Services</a>
          <a href="#" className="block px-4 py-4 rounded hover:bg-gray-700">Contact</a>
        </nav>
      </div>
      <Header toggleSidebar={toggleSidebar} />
    </div>
  );
}

export default Sidebar;
