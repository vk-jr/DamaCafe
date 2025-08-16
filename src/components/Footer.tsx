import { Instagram, Facebook, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-5xl font-cormorant font-bold">DAMA CAFE</h3>
            <p className="text-gray-200 font-inter leading-relaxed">
              Savor the flavor of dad's care and ma's love. A cozy café serving delicious
              momos, waffles, and more with warmth and passion.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/damacafe.in/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-200 hover:text-white transition-colors duration-300"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://www.facebook.com/615574311393945/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-200 hover:text-white transition-colors duration-300"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-cormorant font-semibold text-white">Our Specialties</h4>
            <ul className="space-y-2 font-inter">
              <li><Link to="/menu" className="text-gray-200 hover:text-white transition-colors duration-300">Signature Momos</Link></li>
              <li><Link to="/menu" className="text-gray-200 hover:text-white transition-colors duration-300">Gourmet Waffles</Link></li>
              <li><Link to="/menu" className="text-gray-200 hover:text-white transition-colors duration-300">Bubble Tea</Link></li>
              <li><Link to="/menu" className="text-gray-200 hover:text-white transition-colors duration-300">Hot Chocolate</Link></li>
              <li><Link to="/menu" className="text-gray-200 hover:text-white transition-colors duration-300">Special Beverages</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-cormorant font-semibold">Quick Links</h4>
            <ul className="space-y-2 font-inter">
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors duration-300">Home</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors duration-300">About</Link></li>
              <li><Link to="/moments" className="text-gray-300 hover:text-white transition-colors duration-300">Gallery</Link></li>
              <li><Link to="/films" className="text-gray-300 hover:text-white transition-colors duration-300">Films</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors duration-300">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-cormorant font-semibold">Contact</h4>
            <ul className="space-y-2 font-inter">
              <li className="flex items-center space-x-2">
                <Phone size={16} />
                <a href="tel:+919846842162" className="text-gray-300 hover:text-white transition-colors duration-300">
                  +91 9846842162
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin size={16} />
                <span className="text-gray-300">
                  Devi Tower, Basement Floor, Kaimanam Junction Signal,
                  Kaimanam, Thiruvananthapuram
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail size={16} />
                <a href="mailto:contact@damacafe.in" className="text-gray-300 hover:text-white transition-colors duration-300">
                  contact@damacafe.in
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400 font-inter">
            © {new Date().getFullYear()} DaMa Cafe. All rights reserved. | 
            <a href="#" className="hover:text-white transition-colors duration-300 ml-1">Privacy Policy</a> | 
            <a href="#" className="hover:text-white transition-colors duration-300 ml-1">Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
