// components/Skills.js
import React from 'react';

const Skills = () => {
  const technicalSkills = [
    { name: 'Requirement Management - JIRA/Confluence', color: 'blue' },
    { name: 'User Acceptance Testing (UAT) Planning & Execution', color: 'green' },
    { name: 'Business Process Modeling - BPMN/UML', color: 'purple' },
    { name: 'Basic Query Validation - MySQL', color: 'orange' },
    { name: 'Data Analysis - Microsoft Excel (Pivot Tables, Lookups)', color: 'pink' },
    { name: 'Executive Reporting - Microsoft PowerPoint', color: 'indigo' },
    { name: 'Workflow Diagramming - Microsoft Visio', color: 'teal' },
    { name: 'Agile Methodologies', color: 'red' }
  ];

  const functionalSkills = [
    { name: 'Business Requirements Gathering', color: 'green' },
    { name: 'Stakeholder Management & Communication', color: 'blue' },
    { name: 'Project Scope & Schedule Coordination', color: 'purple' },
    { name: 'Impact & Gap Analysis', color: 'orange' },
    { name: 'Business Requirement Documents/Test Cases/User Stories', color: 'pink' },
    { name: 'Change Management', color: 'indigo' },
    { name: 'Problem Solving & Critical Thinking', color: 'teal' },
    { name: 'Risk & Issue Documentation', color: 'red' }
  ];

  const getColorClasses = (color) => {
    const colorMap = {
      blue: 'bg-blue-500',
      green: 'bg-green-500',
      purple: 'bg-purple-500',
      orange: 'bg-orange-500',
      pink: 'bg-pink-500',
      indigo: 'bg-indigo-500',
      teal: 'bg-teal-500',
      red: 'bg-red-500'
    };
    return colorMap[color] || 'bg-gray-500';
  };

  const SkillItem = ({ skill }) => (
    <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
      <div className={`w-3 h-3 ${getColorClasses(skill.color)} rounded-full flex-shrink-0`}></div>
      <span className="text-gray-700 font-medium">{skill.name}</span>
    </div>
  );

  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Skills & Expertise</h2>
      
      <div className="grid lg:grid-cols-2 gap-8">
        <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-6 rounded-xl border border-blue-200">
          <h3 className="text-2xl font-bold text-blue-800 mb-6 flex items-center">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
              <span className="text-white font-bold text-sm">T</span>
            </div>
            Technical Skills
          </h3>
          <div className="space-y-2">
            {technicalSkills.map((skill, index) => (
              <SkillItem key={index} skill={skill} />
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-br from-green-50 to-emerald-100 p-6 rounded-xl border border-green-200">
          <h3 className="text-2xl font-bold text-green-800 mb-6 flex items-center">
            <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center mr-3">
              <span className="text-white font-bold text-sm">F</span>
            </div>
            Functional Skills
          </h3>
          <div className="space-y-2">
            {functionalSkills.map((skill, index) => (
              <SkillItem key={index} skill={skill} />
            ))}
          </div>
        </div>
      </div>

      {/* Core Competencies Section */}
      <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-xl border border-purple-200">
        <h3 className="text-2xl font-bold text-purple-800 mb-6 text-center">Core Competencies</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold text-xl">BA</span>
            </div>
            <h4 className="font-bold text-gray-800 mb-2">Business Analysis</h4>
            <p className="text-gray-600 text-sm">Requirements gathering, gap analysis, and process optimization</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold text-xl">PM</span>
            </div>
            <h4 className="font-bold text-gray-800 mb-2">Project Management</h4>
            <p className="text-gray-600 text-sm">Agile methodologies, stakeholder coordination, and delivery management</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold text-xl">API</span>
            </div>
            <h4 className="font-bold text-gray-800 mb-2">API Integration</h4>
            <p className="text-gray-600 text-sm">RESTful services, system migration, and technical documentation</p>
          </div>
        </div>
      </div>

      {/* Proficiency Levels */}
      <div className="bg-gradient-to-r from-indigo-50 to-blue-50 p-6 rounded-xl border border-indigo-200">
        <h3 className="text-2xl font-bold text-indigo-800 mb-6 text-center">Proficiency Levels</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="font-semibold text-gray-700 w-1/3">Business Analysis</span>
            <div className="w-2/3 bg-gray-200 rounded-full h-3">
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 h-3 rounded-full" style={{width: '90%'}}></div>
            </div>
            <span className="text-sm text-gray-600 ml-3">Expert</span>
          </div>
          
          <div className="flex items-center justify-between">
            <span className="font-semibold text-gray-700 w-1/3">Stakeholder Management</span>
            <div className="w-2/3 bg-gray-200 rounded-full h-3">
              <div className="bg-gradient-to-r from-green-500 to-green-600 h-3 rounded-full" style={{width: '85%'}}></div>
            </div>
            <span className="text-sm text-gray-600 ml-3">Expert</span>
          </div>
          
          <div className="flex items-center justify-between">
            <span className="font-semibold text-gray-700 w-1/3">Process Optimization</span>
            <div className="w-2/3 bg-gray-200 rounded-full h-3">
              <div className="bg-gradient-to-r from-purple-500 to-purple-600 h-3 rounded-full" style={{width: '88%'}}></div>
            </div>
            <span className="text-sm text-gray-600 ml-3">Expert</span>
          </div>
          
          <div className="flex items-center justify-between">
            <span className="font-semibold text-gray-700 w-1/3">Technical Documentation</span>
            <div className="w-2/3 bg-gray-200 rounded-full h-3">
              <div className="bg-gradient-to-r from-orange-500 to-orange-600 h-3 rounded-full" style={{width: '80%'}}></div>
            </div>
            <span className="text-sm text-gray-600 ml-3">Advanced</span>
          </div>
          
          <div className="flex items-center justify-between">
            <span className="font-semibold text-gray-700 w-1/3">Data Analysis</span>
            <div className="w-2/3 bg-gray-200 rounded-full h-3">
              <div className="bg-gradient-to-r from-pink-500 to-pink-600 h-3 rounded-full" style={{width: '75%'}}></div>
            </div>
            <span className="text-sm text-gray-600 ml-3">Advanced</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;