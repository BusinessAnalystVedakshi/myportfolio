// components/Contact.js
import { Mail, Phone, MapPin, Linkedin, ExternalLink } from 'lucide-react';

const Contact = () => {
  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Let's Connect</h2>
      
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-xl border border-blue-200">
            <h3 className="text-2xl font-bold text-blue-800 mb-6 text-center">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center">
                  <Mail className="w-7 h-7 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800 text-lg">Email</p>
                  <a href="mailto:gawdevedakshi@gmail.com" className="text-blue-600 hover:text-blue-800 transition-colors text-lg">
                    gawdevedakshi@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-green-600 rounded-full flex items-center justify-center">
                  <Phone className="w-7 h-7 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800 text-lg">Phone</p>
                  <a href="tel:+917249225900" className="text-green-600 hover:text-green-800 transition-colors text-lg">
                    +91 7249225900
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-red-600 rounded-full flex items-center justify-center">
                  <MapPin className="w-7 h-7 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800 text-lg">Location</p>
                  <span className="text-gray-600 text-lg">Mumbai, India</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-pink-100 p-8 rounded-xl border border-purple-200">
            <h4 className="text-2xl font-bold text-purple-800 mb-6 text-center">Professional Network</h4>
            <a 
              href="https://www.linkedin.com/in/gawdevedakshi" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-6 bg-white rounded-xl hover:shadow-lg transition-all duration-200 border border-purple-200 group hover:scale-105"
            >
              <Linkedin className="w-12 h-12 text-blue-600" />
              <div className="flex-grow">
                <p className="font-bold text-gray-800 text-xl">LinkedIn Profile</p>
                <p className="text-gray-600 text-lg">Connect with me professionally</p>
                <p className="text-purple-600 text-sm font-medium mt-1">linkedin.com/in/gawdevedakshi</p>
              </div>
              <ExternalLink className="w-6 h-6 text-gray-400 group-hover:text-blue-600 transition-colors" />
            </a>
            
            <div className="mt-8 bg-white bg-opacity-60 p-6 rounded-xl">
              <h5 className="font-bold text-gray-800 text-lg mb-3">Let's Discuss</h5>
              <div className="space-y-2 text-gray-700">
                <p>• Business Analysis Opportunities</p>
                <p>• Process Optimization Projects</p>
                <p>• Fintech Collaborations</p>
                <p>• Professional Networking</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Call to Action Section */}
        <div className="mt-8 bg-gradient-to-r from-indigo-50 to-purple-50 p-8 rounded-xl border border-indigo-200 text-center">
          <h3 className="text-2xl font-bold text-indigo-800 mb-4">Ready to Connect?</h3>
          <p className="text-gray-700 text-lg mb-6">I'm always open to discussing new opportunities and professional collaborations.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:gawdevedakshi@gmail.com"
              className="inline-flex items-center justify-center gap-3 px-12 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 border-2 border-blue-600 hover:border-blue-700 min-w-48"
            >
              Send Email
            </a>
            <a 
              href="https://www.linkedin.com/in/gawdevedakshi"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-12 py-4 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-all duration-200 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 border-2 border-purple-600 hover:border-purple-700 min-w-48"
            >
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;