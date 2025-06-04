
import React from 'react';
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1">
            <h3 className="text-2xl font-bold mb-4 text-orange-400">Ghar se Khanna</h3>
            <p className="text-gray-300 mb-4">By Cambliss</p>
            <p className="text-gray-400 text-sm">
              Bringing the warmth of homemade food to your doorstep. 
              Authentic, fresh, and delivered with love.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-green-400">Our Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-orange-400 transition-colors">Daily Tiffin Service</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Corporate Catering</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Event Catering</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Special Diet Meals</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Premium Membership</a></li>
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-green-400">Service Areas</h4>
            <ul className="space-y-2 text-gray-300">
              <li>📍 Hyderabad - All Areas</li>
              <li>📍 New Delhi - Central Delhi</li>
              <li>📍 Gurgaon - IT Hub</li>
              <li>📍 Noida - Sector 1-100</li>
              <li className="text-orange-400">📈 Expanding Soon...</li>
            </ul>
          </div>

          {/* Contact & Support */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-green-400">Get in Touch</h4>
            <ul className="space-y-2 text-gray-300">
              <li>📞 +91-9876543210</li>
              <li>📧 hello@gharsekhanna.com</li>
              <li>💬 WhatsApp: +91-9876543211</li>
              <li>🕐 Mon-Sun: 6 AM - 10 PM</li>
            </ul>
            
            <div className="mt-6">
              <h5 className="font-semibold mb-3">Stay Updated</h5>
              <div className="flex space-x-2">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="px-3 py-2 bg-gray-800 text-white rounded border border-gray-600 flex-1 text-sm"
                />
                <Button size="sm" className="bg-orange-600 hover:bg-orange-700">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Ghar se Khanna by Cambliss. All rights reserved.
            </div>
            
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">Refund Policy</a>
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">Partner With Us</a>
            </div>
          </div>
          
          <div className="text-center mt-6 text-gray-500 text-sm">
            <p>Made with ❤️ for food lovers who miss the taste of home</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
