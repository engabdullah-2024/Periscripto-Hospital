import React from 'react';
import { FaHeartbeat, FaHospital, FaShieldAlt, FaUserMd, FaStethoscope, FaSyringe, FaAmbulance } from 'react-icons/fa';
import { IoMdBriefcase } from 'react-icons/io';

const Services = () => {
  return (
    <div className="bg-gray-100 py-16 font-sans">

      {/* Header Section */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold text-orange-500">Our Healthcare Services</h1>
        <p className="text-xl mt-4 text-blue-500">Providing top-notch medical care and wellness solutions</p>
      </div>

      {/* Cardiology Section */}
      <div className="service-section text-center mb-16">
        <div className="flex items-center justify-center text-orange-500 text-5xl mb-6 h-24 mx-auto">
          <FaHeartbeat />
        </div>
        <h2 className="text-3xl font-semibold text-orange-500">Cardiology</h2>
        <p className="mt-4 text-lg max-w-3xl mx-auto">
          Our Cardiology Department offers comprehensive care for heart disease diagnosis, treatment, and rehabilitation.
        </p>
      </div>

      {/* Emergency Care Section */}
      <div className="service-section text-center mb-16 bg-white py-8 px-6 shadow-xl rounded-xl">
        <div className="flex items-center justify-center text-blue-500 text-5xl mb-6 h-24 mx-auto">
          <FaHospital />
        </div>
        <h2 className="text-3xl font-semibold text-blue-500">Emergency Care</h2>
        <p className="mt-4 text-lg max-w-3xl mx-auto">
          We provide 24/7 emergency medical care for critical situations, with highly trained staff ready to respond quickly.
        </p>
      </div>

      {/* Preventive Healthcare Section */}
      <div className="service-section text-center mb-16">
        <div className="flex items-center justify-center text-green-500 text-5xl mb-6 h-24 mx-auto">
          <FaShieldAlt />
        </div>
        <h2 className="text-3xl font-semibold text-green-500">Preventive Healthcare</h2>
        <p className="mt-4 text-lg max-w-3xl mx-auto">
          Offering preventive screenings, vaccines, and wellness programs to keep you healthy and catch potential risks early.
        </p>
      </div>

      {/* Medical Check-ups Section */}
      <div className="service-section text-center mb-16 bg-white py-8 px-6 shadow-xl rounded-xl">
        <div className="flex items-center justify-center text-purple-500 text-5xl mb-6 h-24 mx-auto">
          <FaUserMd />
        </div>
        <h2 className="text-3xl font-semibold text-purple-500">Medical Check-ups</h2>
        <p className="mt-4 text-lg max-w-3xl mx-auto">
          Routine medical check-ups to ensure you're in top health and to prevent the onset of chronic conditions.
        </p>
      </div>

      {/* Health Diagnostics Section */}
      <div className="service-section text-center mb-16">
        <div className="flex items-center justify-center text-red-500 text-5xl mb-6 h-24 mx-auto">
          <FaStethoscope />
        </div>
        <h2 className="text-3xl font-semibold text-red-500">Health Diagnostics</h2>
        <p className="mt-4 text-lg max-w-3xl mx-auto">
          State-of-the-art diagnostic tools for accurate diagnosis, helping our doctors determine the best treatment for you.
        </p>
      </div>

      {/* Vaccinations Section */}
      <div className="service-section text-center mb-16 bg-white py-8 px-6 shadow-xl rounded-xl">
        <div className="flex items-center justify-center text-yellow-500 text-5xl mb-6 h-24 mx-auto">
          <FaSyringe />
        </div>
        <h2 className="text-3xl font-semibold text-yellow-500">Vaccinations</h2>
        <p className="mt-4 text-lg max-w-3xl mx-auto">
          Offering a wide range of vaccinations to protect you from various diseases and maintain public health.
        </p>
      </div>

      {/* Ambulance Services Section */}
      <div className="service-section text-center mb-16">
        <div className="flex items-center justify-center text-teal-500 text-5xl mb-6 h-24 mx-auto">
          <FaAmbulance />
        </div>
        <h2 className="text-3xl font-semibold text-teal-500">Ambulance Services</h2>
        <p className="mt-4 text-lg max-w-3xl mx-auto">
          Our fleet of well-equipped ambulances is available 24/7 to provide emergency transportation.
        </p>
      </div>

      {/* Health Packages Section */}
      <div className="service-section text-center mb-16 bg-white py-8 px-6 shadow-xl rounded-xl">
        <div className="flex items-center justify-center text-orange-600 text-5xl mb-6 h-24 mx-auto">
          <IoMdBriefcase />
        </div>
        <h2 className="text-3xl font-semibold text-orange-600">Health Packages</h2>
        <p className="mt-4 text-lg max-w-3xl mx-auto">
          Choose from a variety of health packages designed to meet your specific health needs, including screening and check-ups.
        </p>
      </div>
      
    </div>
  );
};

export default Services;
