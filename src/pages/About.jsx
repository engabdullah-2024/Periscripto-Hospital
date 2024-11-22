import React from 'react';
import { FaHeartbeat, FaHospital, FaShieldAlt, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { MdAccessibility } from "react-icons/md";

const About = () => {
  return (
    <div className="px-20 py-10 font-sans">
      {/* Header Section */}
      <div className="text-center">
        <h1 className="text-5xl font-bold text-orange-500">About Periscripto Hospital</h1>
        <p className="text-xl mt-4 text-blue-500">Your trusted healthcare partner</p>
      </div>

      {/* Mission & Vision Section */}
      <div className="mt-16 flex flex-col sm:flex-row gap-10">
        <div className="flex-1 text-center sm:text-left">
          <h2 className="text-3xl font-semibold text-orange-500">Our Mission</h2>
          <p className="text-xl mt-4">At Periscripto Hospital, our mission is to provide high-quality healthcare services with compassion and integrity. We strive to make a positive difference in the lives of every patient we serve, offering cutting-edge medical treatments and personalized care.</p>
        </div>
        <div className="flex-1 text-center sm:text-left">
          <h2 className="text-3xl font-semibold text-orange-500">Our Vision</h2>
          <p className="text-xl mt-4">To become the leading healthcare provider in the region, known for our commitment to excellence, advanced technology, and patient-centered care. We aim to set new standards in healthcare, improving the well-being of the community we serve.</p>
        </div>
      </div>

      {/* Services Section */}
      <div className="mt-16 text-center">
        <h2 className="text-4xl font-semibold text-orange-500">Our Services</h2>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          <div className="p-6 bg-white shadow-xl rounded-xl text-center transform transition-transform duration-300 ease-in-out hover:scale-105 hover:bg-blue-100 hover:shadow-2xl">
            <FaHeartbeat className="text-4xl text-blue-500 mx-auto mb-4 transform transition-transform duration-300 ease-in-out hover:text-blue-700" />
            <h3 className="text-2xl font-semibold mt-4">Cardiology</h3>
            <p className="mt-4 text-xl">Comprehensive heart care, including diagnostics, treatment, and rehabilitation for various heart conditions.</p>
          </div>
          <div className="p-6 bg-white shadow-xl rounded-xl text-center transform transition-transform duration-300 ease-in-out hover:scale-105 hover:bg-blue-100 hover:shadow-2xl">
            <FaHospital className="text-4xl text-blue-500 mx-auto mb-4 transform transition-transform duration-300 ease-in-out hover:text-blue-700" />
            <h3 className="text-2xl font-semibold mt-4">Emergency Care</h3>
            <p className="mt-4 text-xl">24/7 emergency services to address critical health issues and provide immediate treatment.</p>
          </div>
          <div className="p-6 bg-white shadow-xl rounded-xl text-center transform transition-transform duration-300 ease-in-out hover:scale-105 hover:bg-blue-100 hover:shadow-2xl">
            <FaShieldAlt className="text-4xl text-blue-500 mx-auto mb-4 transform transition-transform duration-300 ease-in-out hover:text-blue-700" />
            <h3 className="text-2xl font-semibold mt-4">Preventive Healthcare</h3>
            <p className="mt-4 text-xl">Preventive services, screenings, and vaccinations to help you maintain a healthy lifestyle.</p>
          </div>
        </div>
      </div>

      {/* Contact Information Section */}
      <div className="mt-16 text-center">
        <h2 className="text-4xl font-semibold text-orange-500">Contact Us</h2>
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-16">
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

      {/* Accessibility & Equal Care Section */}
      <div className="mt-16 text-center">
        <h2 className="text-3xl font-semibold text-orange-500">Accessibility & Equal Care</h2>
        <div className="mt-4">
          <MdAccessibility className="text-4xl text-blue-500 mx-auto" />
          <p className="text-xl mt-4">We are committed to providing equal care and services to all individuals, regardless of their background or needs. Our facilities are designed to accommodate patients with varying levels of mobility and accessibility requirements.</p>
        </div>
      </div>
    </div>
  );
};

export default About;
