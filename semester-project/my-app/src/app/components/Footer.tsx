import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { Roboto } from 'next/font/google';

const roboto = Roboto({ subsets: ['latin'], weight: "400" });

const Footer: React.FC = () => {
  return (
    <footer className={`${roboto.className} bg-slate-800 text-white py-8 w-full`}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-bold">Nateo</h2>
            <p className="text-sm">© 2023 Nateo. All rights reserved.</p>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-400">Home</a>
            <a href="#" className="hover:text-gray-400">About</a>
            <a href="#" className="hover:text-gray-400">Products</a>
            <a href="#" className="hover:text-gray-400">Contact</a>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <div>
            <h3 className="text-lg font-semibold mb-2">About Us</h3>
            <ul>
              <li><a href="#" className="hover:text-gray-400">About Us</a></li>
              <li><a href="#" className="hover:text-gray-400">Join Our Team</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Customer Service</h3>
            <ul>
              <li><a href="#" className="hover:text-gray-400">Customer Information</a></li>
              <li><a href="#" className="hover:text-gray-400">Delivery</a></li>
              <li><a href="#" className="hover:text-gray-400">Returns</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Contacts</h3>
            <ul>
              <li><a href="#" className="hover:text-gray-400">Contact Us</a></li>
              <li><a href="#" className="hover:text-gray-400">Find Store</a></li>
            </ul>
          </div>
        </div>
        <div className="flex justify-center mt-8 space-x-4">
          <a href="#" className="text-gray-400 hover:text-white"><FaFacebook size={24} /></a>
          <a href="#" className="text-gray-400 hover:text-white"><FaTwitter size={24} /></a>
          <a href="#" className="text-gray-400 hover:text-white"><FaInstagram size={24} /></a>
          <a href="#" className="text-gray-400 hover:text-white"><FaLinkedin size={24} /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;