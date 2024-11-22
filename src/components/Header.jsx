import React, { useState } from 'react';
import { MdLocalHospital, MdClose } from "react-icons/md";
import { Link } from 'react-router-dom';
import { CiMenuKebab } from "react-icons/ci";

const Header = () => {
  // State to manage the menu open/close
  const [menuOpen, setMenuOpen] = useState(false);

  // Toggle the menu open/close state
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className="bg-white bg-opacity-60 backdrop-blur-md shadow z-10 w-full px-4 sm:px-20 py-4 flex justify-between items-center  ">
      <div className="flex gap-3">
       <Link to="/"><h1 className="sm:text-4xl text-orange-500 mt-1">
          <MdLocalHospital />
        </h1></Link> 
       <Link to="/"><h1 className="sm:text-4xl font-bold text-orange-500">
          Periscripto <span className="text-blue-500">Hospital</span>
        </h1></Link> 
      </div>

      {/* Desktop Menu */}
      <ul className="gap-6 hidden sm:flex">
        <Link to="/"> <li className="text-blue-500 hover:text-orange-500 text-2xl">Home</li></Link>
        <Link to="/about"><li className="text-blue-500 hover:text-orange-500 text-2xl">About</li></Link>
        <Link to="/contact"><li className="text-blue-500 hover:text-orange-500 text-2xl">Contact</li></Link>
     <Link to="services "><h1 className='text-blue-500 hover:text-orange-500 text-2xl'>Services</h1></Link>
      </ul>

      {/* Mobile Menu Button */}
      <h1 className="sm:hidden text-3xl cursor-pointer" onClick={toggleMenu}>
        <CiMenuKebab />
      </h1>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 bg-gray-700 bg-opacity-50 z-20">
          <div className="bg-white p-5 w-60 h-full fixed left-0 top-0 flex flex-col gap-6">
            <h1 className="text-3xl text-right cursor-pointer" onClick={toggleMenu}>
              <MdClose />
            </h1>
            <Link to="/" onClick={toggleMenu}><li className="text-blue-500 text-xl hover:text-orange-500">Home</li></Link>
            <Link to="/about" onClick={toggleMenu}><li className="text-blue-500 text-xl hover:text-orange-500">About</li></Link>
            <Link to="/contact" onClick={toggleMenu}><li className="text-blue-500 text-xl hover:text-orange-500">Contact</li></Link>
            <Link to="services "><h1 className='text-blue-500 hover:text-orange-500 text-2xl'>Services</h1></Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;
