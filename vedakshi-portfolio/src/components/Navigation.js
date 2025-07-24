// components/Navigation.js
import React from 'react';

const Navigation = ({ tabs, activeTab, setActiveTab }) => {
  const tabIcons = {
    about: '👋',
    experience: '💼',
    skills: '🚀',
    certifications: '🏆',
    education: '🎓',
    contact: '📧'
  };

  return (
    <nav className="bg-white shadow-lg border-t-4 border-gradient sticky top-0 z-10">
      <div className="max-w-6xl mx-auto px-6 py-2">
        <div className="flex justify-center items-center">
          <div className="flex bg-gray-50 rounded-full p-1 shadow-inner nav-container">
            {tabs.map((tab, index) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 transform whitespace-nowrap flex items-center gap-2 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg scale-105'
                    : 'text-gray-600 hover:text-blue-600 hover:bg-white hover:shadow-md hover:scale-102'
                }`}
                style={{
                  animationDelay: `${index * 100}ms`
                }}
              >
                <span className="text-lg">{tabIcons[tab.id]}</span>
                <span className="hidden sm:inline">{tab.label}</span>
                <span className="sm:hidden">{tab.label.charAt(0)}</span>
                
                {activeTab === tab.id && (
                  <>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-20 animate-pulse"></div>
                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white rounded-full shadow-lg"></div>
                  </>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
      
      {/* Gradient border effect */}
      <div className="h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500"></div>
    </nav>
  );
};

export default Navigation;