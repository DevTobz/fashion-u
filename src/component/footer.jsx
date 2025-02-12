import React from "react";
const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-6 text-sm">
        
        <div>
          <h2 className="text-lg font-semibold">FASHION</h2>
          <p className="mt-2 text-gray-400">
            Complete your style with awesome clothes from us.
          </p>
        </div>

        
        <div>
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <ul className="mt-2 space-y-2">
            <li><a href="#" className="hover:text-gray-300">About</a></li>
            <li><a href="#" className="hover:text-gray-300">Share Location</a></li>
            <li><a href="#" className="hover:text-gray-300">Contact Us</a></li>
            <li><a href="#" className="hover:text-gray-300">Orders Tracking</a></li>
          </ul>
        </div>

        
        <div>
          <h3 className="text-lg font-semibold">Legal</h3>
          <ul className="mt-2 space-y-2">
            <li><a href="#" className="hover:text-gray-300">Terms & Conditions</a></li>
            <li><a href="#" className="hover:text-gray-300">Privacy Policy</a></li>
          </ul>
        </div>

       
        <div>
          <h3 className="text-lg font-semibold">Support</h3>
          <ul className="mt-2 space-y-2">
            <li><a href="#" className="hover:text-gray-300">Size Guide</a></li>
            <li><a href="#" className="hover:text-gray-300">Careers</a></li>
            <li><a href="#" className="hover:text-gray-300">FAQs</a></li>
          </ul>
        </div>
      </div>

      
      <div className="mt-8 text-center text-gray-400 text-xs">
        © {new Date().getFullYear()} Fashion. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
