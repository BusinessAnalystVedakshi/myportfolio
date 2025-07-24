// components/Certifications.js
import React from 'react';
import { Award } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      name: 'Microsoft Certified: Azure Fundamentals',
      issuer: 'Microsoft',
      year: '2024',
      color: 'blue',
      verified: true
    },
    {
      name: 'Certified Technical Writer',
      issuer: 'Henry Harvin',
      year: '2022',
      color: 'green',
      verified: true
    },
    {
      name: 'Business Analyst Professional Program',
      issuer: 'IBAT',
      year: '2017',
      color: 'purple',
      verified: true
    },
    {
      name: 'Business Process Modelling',
      issuer: 'UML Activity Diagrams and BPMN',
      year: '2023',
      color: 'orange',
      verified: false
    },
    {
      name: 'Business Analysis: Developing Irresistible Business Cases',
      issuer: 'Online Course',
      year: '2023',
      color: 'pink',
      verified: false
    },
    {
      name: 'Requirements Mastery',
      issuer: 'Write, Document, Manage, & Prioritize',
      year: '2023',
      color: 'indigo',
      verified: false
    },
    {
      name: 'Introduction to Agile',
      issuer: 'Scrum and Kanban',
      year: '2022',
      color: 'teal',
      verified: false
    }
  ];

  const getColorClasses = (color) => {
    const colorMap = {
      blue: 'from-blue-50 to-blue-100 border-blue-200',
      green: 'from-green-50 to-green-100 border-green-200',
      purple: 'from-purple-50 to-purple-100 border-purple-200',
      orange: 'from-orange-50 to-orange-100 border-orange-200',
      pink: 'from-pink-50 to-pink-100 border-pink-200',
      indigo: 'from-indigo-50 to-indigo-100 border-indigo-200',
      teal: 'from-teal-50 to-teal-100 border-teal-200'
    };
    return colorMap[color] || 'from-gray-50 to-gray-100 border-gray-200';
  };

  const getIconColor = (color) => {
    const colorMap = {
      blue: 'text-blue-600',
      green: 'text-green-600',
      purple: 'text-purple-600',
      orange: 'text-orange-600',
      pink: 'text-pink-600',
      indigo: 'text-indigo-600',
      teal: 'text-teal-600'
    };
    return colorMap[color] || 'text-gray-600';
  };

  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Certifications & Training</h2>
      
      <div className="grid md:grid-cols-2 gap-6">
        {certifications.map((cert, index) => (
          <div 
            key={index}
            className={`bg-gradient-to-br ${getColorClasses(cert.color)} p-6 rounded-xl border hover:shadow-lg transition-all duration-200 hover:scale-105`}
          >
            <div className="flex items-start gap-4">
              <Award className={`w-8 h-8 ${getIconColor(cert.color)} flex-shrink-0 mt-1`} />
              <div className="flex-grow">
                <h3 className="font-bold text-gray-800 mb-1 leading-tight">{cert.name}</h3>
                <p className={`${getIconColor(cert.color)} font-medium text-sm mb-2`}>{cert.issuer}</p>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600 text-sm">{cert.year}</span>
                  {cert.verified && (
                    <div className="flex items-center gap-1">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-green-600 text-xs font-medium">Verified</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Professional Development Section */}
      <div className="bg-gradient-to-r from-gray-50 to-blue-50 p-6 rounded-xl border border-gray-200">
        <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Continuous Learning</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold text-2xl">7+</span>
            </div>
            <h4 className="font-bold text-gray-800 mb-2">Certifications</h4>
            <p className="text-gray-600 text-sm">Professional development across business analysis and technology</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold text-2xl">3+</span>
            </div>
            <h4 className="font-bold text-gray-800 mb-2">Years Learning</h4>
            <p className="text-gray-600 text-sm">Consistent skill development and industry knowledge updates</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold text-lg">MS</span>
            </div>
            <h4 className="font-bold text-gray-800 mb-2">Microsoft Certified</h4>
            <p className="text-gray-600 text-sm">Azure cloud platform fundamentals certification</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certifications;