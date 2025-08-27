import React from 'react';
import { MapPin, Phone, Mail, Clock, ExternalLink } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-teal-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">RD</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Rivonia Diagnostics</h3>
                <p className="text-gray-300">& Sleep Centre</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              A privately owned indigenous medical facility providing world-class 
              diagnostic services in Ibadan and its environs. NHIS accredited with 
              seasoned medical experts.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://wa.me/2349161791708"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg font-medium transition-colors"
              >
                WhatsApp
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin size={20} className="text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">
                    Plot 13 Block 53 Oluyole Estate Extension,<br />
                    Ibadan, Oyo State, Nigeria
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Phone size={20} className="text-blue-400 mt-1 flex-shrink-0" />
                <div className="text-gray-300">
                  <p>+234-916-1791-708</p>
                  <p>+234-916-1836-523</p>
                  <p>+234-904-6440-966</p>
                  <p>+234-708-7855-848</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Mail size={20} className="text-blue-400 mt-1 flex-shrink-0" />
                <div className="text-gray-300">
                  <p>rivoniahealth@gmail.com</p>
                  <p>rivoniadiagnostics@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links & Hours */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Access</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Clock size={20} className="text-blue-400 mt-1 flex-shrink-0" />
                <div className="text-gray-300">
                  <p className="font-medium">Operating Hours</p>
                  <p className="text-sm">Mon-Fri: 8:00 AM - 6:00 PM</p>
                  <p className="text-sm">Sat: 9:00 AM - 4:00 PM</p>
                  <p className="text-sm">Sun: Emergency only</p>
                </div>
              </div>
              
              <a
                href="https://www.google.com/maps/dir//Plot+13,+Oluyole+Estate,+Block+53+Extension,+Oluyole,+Ibadan+110115,+Oyo/@7.365629,3.7551051,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x10398da26c4bc949:0x582f0a67b21c5422!2m2!1d3.837507!2d7.3656365?entry=ttu&g_ep=EgoyMDI1MDgyNC4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors"
              >
                <span>Get Directions</span>
                <ExternalLink size={16} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Rivonia Diagnostics & Sleep Centre. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm mt-2 md:mt-0">
              NHIS Accredited • Oyo State Ministry of Health Registered
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;