import React from 'react';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Services from './Services';


const Home = () => {
  return (<div>

  
    <div className="px-20 py-4 flex justify-between flex-col sm:flex-row font-roboto gap-8">
      {/* Left Section */}
      <div className="mt-32 animate-slideInLeft">
        <h1 className="sm:text-5xl text-3xl font-bold mt-5">
          Welcome To 
          <h1 className="sm:text-5xl text-3xl font-bold text-orange-500">
            Periscripto <span className="text-blue-500">Hospital</span>
          </h1>
        </h1>
        <p className="mt-5 text-2xl">
        At Periscripto Hospital, we provide high-quality, patient-centered healthcare with expert care from experienced doctors and staff. Our state-of-the-art facilities offer a wide range of services, including 24/7 emergency care, specialized treatments, and innovative medical technology.

We are committed to your health and well-being, ensuring personalized care in a safe and compassionate environment. Choose us for comprehensive medical services, cutting-edge treatments, and affordable healthcare.

Your health is our priority.
        </p>
        <button className="bg-orange-500 text-white text-3xl font-bold p-3 rounded-xl mt-3">
          Book Now
        </button>
      </div>

      {/* Image Section */}
      <img
        className="animate-slideInRight w-[500px] h-[500px] mt-20 rounded-[12px] border-l-4 border-orange-500"
        src="https://img.freepik.com/free-photo/african-american-doctor-sitting-senior-man-explaining-body-trauma-diagnosis-showing-xray_482257-1954.jpg?t=st=1732301475~exp=1732305075~hmac=2ce5112d3000772799ad890d3358e55153641758e8a9b93c931b28c2d4f8096c&w=740"
        alt="Hospital"
      />
      
    </div>
    <About/>
    <Services/>
  <Contact/>
    </div>
  );
};

export default Home;
