import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Company Info */}
          <div>
            <div className="flex items-center justify-center md:justify-start space-x-3 mb-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">RD</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">Rivonia Diagnostics</h3>
                <p className="text-sm text-gray-600">Improving Life Together</p>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-3">
            <div className="flex items-center justify-center md:justify-start space-x-3">
              <MapPin size={18} className="text-primary flex-shrink-0" />
              <span className="text-gray-600">Lagos, Nigeria</span>
            </div>
            
            <div className="flex items-center justify-center md:justify-start space-x-3">
              <Phone size={18} className="text-primary flex-shrink-0" />
              <span className="text-gray-600">+234 812 345 6789</span>
            </div>
            
            <div className="flex items-center justify-center md:justify-start space-x-3">
              <Mail size={18} className="text-primary flex-shrink-0" />
              <span className="text-gray-600">info@rivoniadiagnostics.com</span>
            </div>
          </div>

          {/* WhatsApp Link */}
          <div className="flex justify-center md:justify-end">
            <a
              href="https://wa.me/2348123456789"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-white px-6 py-2 rounded-lg font-medium hover:bg-primary-dark transition-colors"
            >
              Contact on WhatsApp
            </a>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8 text-center">
          <p className="text-gray-600">
            © 2024 Rivonia Diagnostics. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;