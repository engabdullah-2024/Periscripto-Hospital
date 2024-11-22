import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const ContactUs = () => {
  return (
    <div className="px-20 py-10 font-sans">
      {/* Header Section */}
      <div className="text-center">
        <h1 className="text-5xl font-bold text-orange-500">Contact Us</h1>
        <p className="text-xl mt-4 text-blue-500">We'd love to hear from you. Get in touch with us!</p>
      </div>

      {/* Contact Information Section */}
      <div className="mt-16 text-center">
        <h2 className="text-4xl font-semibold text-orange-500">Our Contact Information</h2>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16">
          <div className="flex items-center text-xl gap-4">
            <FaMapMarkerAlt className="text-blue-500 text-3xl" />
            <p>123 Health Ave, Periscripto City</p>
          </div>
          <div className="flex items-center text-xl gap-4">
            <FaPhoneAlt className="text-blue-500 text-3xl" />
            <p>(123) 456-7890</p>
          </div>
          <div className="flex items-center text-xl gap-4">
            <FaEnvelope className="text-blue-500 text-3xl" />
            <p>info@periscriptohospital.com</p>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="mt-16 text-center">
        <h2 className="text-4xl font-semibold text-orange-500">Send Us a Message</h2>
        <form className="mt-8 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div>
              <label className="block text-xl font-medium text-blue-500">Name</label>
              <input type="text" className="mt-2 p-4 w-full border-2 border-gray-300 rounded-lg" placeholder="Your Name" />
            </div>
            <div>
              <label className="block text-xl font-medium text-blue-500">Email</label>
              <input type="email" className="mt-2 p-4 w-full border-2 border-gray-300 rounded-lg" placeholder="Your Email" />
            </div>
          </div>
          <div className="mt-8">
            <label className="block text-xl font-medium text-blue-500">Message</label>
            <textarea className="mt-2 p-4 w-full border-2 border-gray-300 rounded-lg" placeholder="Your Message" rows="6"></textarea>
          </div>
          <button type="submit" className="mt-8 px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors duration-300">Send Message</button>
        </form>
      </div>

      {/* Social Media Section */}
      <div className="mt-16 text-center">
        <h2 className="text-4xl font-semibold text-orange-500">Follow Us on Social Media</h2>
        <div className="mt-8 flex justify-center gap-8 text-3xl">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
            <FaFacebook />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600">
            <FaTwitter />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-800">
            <FaInstagram />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900">
            <FaLinkedin />
          </a>
        </div>
      </div>

      {/* Google Map Section */}
      <div className="mt-16 text-center">
        <h2 className="text-4xl font-semibold text-orange-500">Find Us on Google Maps</h2>
        <div className="mt-8">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3221.659650262296!2d-73.98513808465045!3d40.74881797932604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259b61bdccaf9%3A0x5498b50d0c9e32ab!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1627917491383!5m2!1sen!2sus"
            width="100%"
            height="400"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
