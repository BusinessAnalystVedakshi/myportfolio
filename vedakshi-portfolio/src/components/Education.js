// components/Education.js
import React from 'react';
import { Calendar } from 'lucide-react';

const Education = () => {
  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Education</h2>
      
      <div className="space-y-6">
        <div className="bg-gradient-to-br from-purple-50 to-indigo-100 p-8 rounded-xl border border-purple-200 hover:shadow-lg transition-shadow">
          <div className="flex items-center gap-2 mb-4">
            <Calendar className="w-5 h-5 text-purple-600" />
            <span className="text-purple-600 font-semibold">July 2014 - May 2016</span>
          </div>
          <h3 className="text-2xl font-bold text-gray-800 mb-2">PGDM - Systems</h3>
          <p className="text-purple-700 font-semibold text-lg mb-2">MIT School of Telecom Management</p>
          <p className="text-gray-600 mb-4">Pune, India</p>
          
          <div className="bg-white bg-opacity-50 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-800 mb-2">Key Focus Areas:</h4>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-purple-100 text-purple-800 text-sm rounded-full">Systems Management</span>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">Telecommunications</span>
              <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">Business Strategy</span>
              <span className="px-3 py-1 bg-orange-100 text-orange-800 text-sm rounded-full">Technology Management</span>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-cyan-100 p-8 rounded-xl border border-blue-200 hover:shadow-lg transition-shadow">
          <div className="flex items-center gap-2 mb-4">
            <Calendar className="w-5 h-5 text-blue-600" />
            <span className="text-blue-600 font-semibold">June 2010 - April 2014</span>
          </div>
          <h3 className="text-2xl font-bold text-gray-800 mb-2">BE (Electronics & Telecommunication)</h3>
          <p className="text-blue-700 font-semibold text-lg mb-2">G V Acharya College, Mumbai University</p>
          <p className="text-gray-600 mb-4">Mumbai, India</p>
          
          <div className="bg-white bg-opacity-50 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-800 mb-2">Core Subjects:</h4>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">Electronics Engineering</span>
              <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">Communication Systems</span>
              <span className="px-3 py-1 bg-purple-100 text-purple-800 text-sm rounded-full">Signal Processing</span>
              <span className="px-3 py-1 bg-orange-100 text-orange-800 text-sm rounded-full">Network Analysis</span>
            </div>
          </div>
        </div>
      </div>

      {/* Academic Achievements */}
      <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-xl border border-yellow-200">
        <h3 className="text-2xl font-bold text-orange-800 mb-6 text-center">Academic Foundation</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold text-lg">PGDM</span>
            </div>
            <h4 className="font-bold text-gray-800 mb-2">Management Education</h4>
            <p className="text-gray-600 text-sm">Specialized in Systems and Telecommunications Management from prestigious MIT institution</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold text-lg">BE</span>
            </div>
            <h4 className="font-bold text-gray-800 mb-2">Engineering Background</h4>
            <p className="text-gray-600 text-sm">Strong technical foundation in Electronics & Telecommunications from Mumbai University</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;