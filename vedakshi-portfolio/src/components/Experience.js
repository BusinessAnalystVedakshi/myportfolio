// components/Experience.js
import React from 'react';
import { Calendar, CheckCircle } from 'lucide-react';

const Experience = () => {
  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Professional Experience</h2>
      
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 to-purple-400"></div>
        
        <div className="space-y-12">
          <div className="relative pl-16">
            <div className="absolute left-6 w-4 h-4 bg-blue-500 rounded-full border-4 border-white shadow-lg"></div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-200 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-2 mb-3">
                <Calendar className="w-5 h-5 text-blue-600" />
                <span className="text-blue-600 font-semibold">November 2022 - June 2025</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Associate Business Analyst</h3>
              <p className="text-blue-700 font-semibold text-lg mb-4">TSS Consultancy Pvt Ltd • Mumbai, India</p>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700">Spearheaded customer onboarding by 7% with curated documentation and API integration guide on SAAS platform</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700">Accelerated business growth by 3% through customer migration to newer solution with RESTful web services on Azure</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700">Increased customer retention by 4% with clear business requirement gathering and stakeholder coordination</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700">Enhanced onboarding journey by 3% through cross-functional team leadership and UAT planning</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700">Reduced project onboarding time by 50% with planned cross-functional communication</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700">Streamlined consumption with SQL billing queries, reducing server costs by 10%</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-4 pt-4 border-t border-blue-200">
                <h4 className="font-semibold text-gray-800 mb-2">Key Technologies & Tools:</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">JIRA/Confluence</span>
                  <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">RESTful APIs</span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-800 text-sm rounded-full">Azure Cloud</span>
                  <span className="px-3 py-1 bg-orange-100 text-orange-800 text-sm rounded-full">MySQL</span>
                  <span className="px-3 py-1 bg-pink-100 text-pink-800 text-sm rounded-full">BPMN/UML</span>
                </div>
              </div>
            </div>
          </div>

          <div className="relative pl-16">
            <div className="absolute left-6 w-4 h-4 bg-purple-500 rounded-full border-4 border-white shadow-lg"></div>
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl border border-purple-200 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-2 mb-3">
                <Calendar className="w-5 h-5 text-purple-600" />
                <span className="text-purple-600 font-semibold">2016 - 2020</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Sales, Marketing & SEO Roles</h3>
              <p className="text-purple-700 font-semibold mb-2">Bharti Airtel Ltd & RedCap Technologies</p>
              <p className="text-gray-700 mb-4">Built foundational business and analytical skills across various customer-facing and digital marketing roles.</p>
              
              <div className="space-y-2">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-600 text-sm">Developed strong customer relationship management skills</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-600 text-sm">Gained experience in data analysis and performance metrics</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-600 text-sm">Enhanced communication and stakeholder management abilities</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;