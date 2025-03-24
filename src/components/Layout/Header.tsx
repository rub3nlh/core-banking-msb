import React from 'react';
import { Bell, Settings } from 'lucide-react';

export const Header = () => {
  return (
    <header className="bg-dark-200 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500" />
            <div>
              <h1 className="text-xl font-semibold text-white">Fina</h1>
              <p className="text-sm text-gray-400">Bienvenido de nuevo</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button className="p-2 rounded-full hover:bg-dark-100 transition-colors">
              <Bell className="w-6 h-6 text-gray-400" />
            </button>
            <button className="p-2 rounded-full hover:bg-dark-100 transition-colors">
              <Settings className="w-6 h-6 text-gray-400" />
            </button>
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 flex items-center justify-center">
              <span className="text-white font-medium">JS</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};