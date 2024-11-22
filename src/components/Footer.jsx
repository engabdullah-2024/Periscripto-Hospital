import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock, FaChevronRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <div className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
        
        {/* Contact Information Section */}
        <div>
          <h3 className="text-2xl font-bold text-orange-500 mb-4">Contact Info</h3>
          <ul>
            <li className="flex items-center mb-2 text-lg">
              <FaMapMarkerAlt className="text-orange-500 mr-3" />
              123 Health Ave, Periscripto City
            </li>
            <li className="flex items-center mb-2 text-lg">
              <FaPhoneAlt className="text-orange-500 mr-3" />
              (123) 456-7890
            </li>
            <li className="flex items-center mb-2 text-lg">
              <FaEnvelope className="text-orange-500 mr-3" />
              info@periscriptohospital.com
            </li>
            <li className="flex items-center mb-2 text-lg">
              <FaClock className="text-orange-500 mr-3" />
              Mon - Fri: 9 AM - 6 PM
            </li>
          </ul>
        </div>

        {/* Quick Links Section */}
        <div>
          <h3 className="text-2xl font-bold text-orange-500 mb-4">Quick Links</h3>
          <ul>
            <li className="flex items-center mb-2 text-lg">
             <Link to="/"> <FaChevronRight className="text-orange-500 mr-3" /></Link>
              Home
            </li>
            <li className="flex items-center mb-2 text-lg">
             <Link to="/about"> <FaChevronRight className="text-orange-500 mr-3" /></Link>
              About Us
            </li>
            <li className="flex items-center mb-2 text-lg">
              <Link to="/services"><FaChevronRight className="text-orange-500 mr-3" /></Link>
              Services
            </li>
            <li className="flex items-center mb-2 text-lg">
             <Link to="/contact"> <FaChevronRight className="text-orange-500 mr-3" /></Link>
              Contact Us
            </li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div>
          <h3 className="text-2xl font-bold text-orange-500 mb-4">Follow Us</h3>
          <div className="flex gap-6">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 text-3xl">
              <FaFacebook />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600 text-3xl">
              <FaTwitter />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-800 text-3xl">
              <FaInstagram />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900 text-3xl">
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* Newsletter Section */}
        <div>
          <h3 className="text-2xl font-bold text-orange-500 mb-4">Newsletter</h3>
          <p className="text-lg mb-4">Subscribe to our newsletter for the latest updates and news!</p>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full p-4 mb-4 border-2 border-gray-300 rounded-lg text-black"
          />
          <button className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600">Subscribe</button>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="mt-12 border-t border-gray-600 pt-6 text-center text-gray-400 text-lg">
        <p>&copy; 2024 Periscripto Hospital. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
