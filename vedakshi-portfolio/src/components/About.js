// components/About.js
import React from 'react';
import { TrendingUp, Users, Database, CheckCircle } from 'lucide-react';

const About = () => {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full mb-4">
          <span className="text-purple-700 font-semibold">Business Analyst • 3+ Years Experience</span>
        </div>
        <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
          Business Analyst with 3 years of fintech experience driving process improvements and API-based transformation initiatives. 
          Delivered 8+ projects with up to 25% efficiency gains by aligning business needs with system workflows. 
          Skilled in documenting requirements, gap analysis, and leading user acceptance testing across cross-functional teams.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Key Achievements</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200 hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-3">
              <TrendingUp className="w-8 h-8 text-blue-600 mr-3" />
              <h4 className="font-bold text-blue-800 text-2xl">25%</h4>
            </div>
            <p className="text-blue-700 font-medium">Migration Process Acceleration</p>
            <p className="text-blue-600 text-sm mt-1">Advanced project planning & implementation</p>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl border border-green-200 hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-3">
              <Users className="w-8 h-8 text-green-600 mr-3" />
              <h4 className="font-bold text-green-800 text-2xl">7%</h4>
            </div>
            <p className="text-green-700 font-medium">Customer Onboarding Improvement</p>
            <p className="text-green-600 text-sm mt-1">API integration & documentation</p>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl border border-purple-200 hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-3">
              <Database className="w-8 h-8 text-purple-600 mr-3" />
              <h4 className="font-bold text-purple-800 text-2xl">10%</h4>
            </div>
            <p className="text-purple-700 font-medium">Server Cost Reduction</p>
            <p className="text-purple-600 text-sm mt-1">SQL billing queries & optimization</p>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-xl border border-orange-200 hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-3">
              <CheckCircle className="w-8 h-8 text-orange-600 mr-3" />
              <h4 className="font-bold text-orange-800 text-2xl">50%</h4>
            </div>
            <p className="text-orange-700 font-medium">Project Onboarding Time Reduction</p>
            <p className="text-orange-600 text-sm mt-1">Cross-functional team coordination</p>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-xl border border-indigo-200">
        <h3 className="text-xl font-bold text-indigo-800 mb-6 text-center">Professional Focus Areas</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-3">
              <Database className="w-8 h-8 text-white" />
            </div>
            <h4 className="font-semibold text-indigo-700 mb-2">Fintech Solutions</h4>
            <p className="text-indigo-600 text-sm">API Integration & Migration</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-3">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h4 className="font-semibold text-purple-700 mb-2">Stakeholder Management</h4>
            <p className="text-purple-600 text-sm">Cross-functional Leadership</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-pink-600 rounded-full flex items-center justify-center mx-auto mb-3">
              <TrendingUp className="w-8 h-8 text-white" />
            </div>
            <h4 className="font-semibold text-pink-700 mb-2">Process Optimization</h4>
            <p className="text-pink-600 text-sm">Efficiency & Growth</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;