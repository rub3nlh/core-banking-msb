import React from 'react';
import { Home, CreditCard, Send, PieChart } from 'lucide-react';

interface NavigationProps {
  currentView: string;
  setCurrentView: (view: string) => void;
}

export const Navigation: React.FC<NavigationProps> = ({ currentView, setCurrentView }) => {
  return (
    <nav className="fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-dark-200 border border-gray-800 rounded-full px-6 py-4 shadow-xl">
      <div className="flex items-center space-x-8">
        <button 
          className={`flex flex-col items-center transition-colors ${
            currentView === 'home' 
              ? 'text-primary-500' 
              : 'text-gray-400 hover:text-gray-300'
          }`}
          onClick={() => setCurrentView('home')}
        >
          <Home className="w-6 h-6" />
        </button>
        <button 
          className={`flex flex-col items-center transition-colors ${
            currentView === 'cards' 
              ? 'text-primary-500' 
              : 'text-gray-400 hover:text-gray-300'
          }`}
          onClick={() => setCurrentView('cards')}
        >
          <CreditCard className="w-6 h-6" />
        </button>
        <button 
          className={`flex flex-col items-center transition-colors ${
            currentView === 'send' 
              ? 'text-primary-500' 
              : 'text-gray-400 hover:text-gray-300'
          }`}
          onClick={() => setCurrentView('send')}
        >
          <Send className="w-6 h-6" />
        </button>
        <button 
          className={`flex flex-col items-center transition-colors ${
            currentView === 'analysis' 
              ? 'text-primary-500' 
              : 'text-gray-400 hover:text-gray-300'
          }`}
          onClick={() => setCurrentView('analysis')}
        >
          <PieChart className="w-6 h-6" />
        </button>
      </div>
    </nav>
  );
};