// components/Header.js
import React from 'react';
import { Download } from 'lucide-react';

const Header = () => {
  const handleDownloadResume = () => {
    // Updated path for GitHub Pages
    const resumeUrl = '/myportfolio/Vedakshi_Gawde_Resume.pdf'; // Updated path for GitHub Pages
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Vedakshi_Gawde_Business_Analyst_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <header className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-black opacity-10"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 left-10 w-20 h-20 bg-white opacity-10 rounded-full"></div>
        <div className="absolute top-20 right-20 w-16 h-16 bg-white opacity-5 rounded-full"></div>
        <div className="absolute bottom-10 left-1/4 w-12 h-12 bg-white opacity-10 rounded-full"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-6 py-12 relative z-10">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-4 animate-fade-in">Vedakshi Gawde</h1>
          <p className="text-2xl text-blue-100 mb-6">Business Analyst</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <div className="inline-flex items-center px-6 py-2 bg-white bg-opacity-20 rounded-full">
              <span className="text-lg">Fintech • Process Optimization • Stakeholder Management</span>
            </div>
            <button 
              onClick={handleDownloadResume}
              className="flex items-center gap-2 px-6 py-3 bg-white text-blue-600 rounded-full hover:bg-blue-50 transition-all duration-200 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <Download className="w-5 h-5" />
              Download Resume
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;