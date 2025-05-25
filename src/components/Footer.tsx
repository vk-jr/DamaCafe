
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-cormorant font-bold">MAGMODE</h3>
            <p className="text-gray-300 font-inter leading-relaxed">
              Capturing life's most precious moments with artistry and passion. 
              Creating timeless memories that last forever.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-cormorant font-semibold">Services</h4>
            <ul className="space-y-2 font-inter">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Wedding Photography</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Engagement Sessions</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Portrait Photography</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Event Photography</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Wedding Films</a></li>
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
            <h4 className="text-lg font-cormorant font-semibold">Get in Touch</h4>
            <div className="space-y-3 font-inter">
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone size={16} />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail size={16} />
                <span>hello@magmodephoto.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin size={16} />
                <span>New York, NY</span>
              </div>
            </div>
            <div className="pt-4">
              <h5 className="font-semibold mb-2">Business Hours</h5>
              <p className="text-gray-300 text-sm">Mon - Fri: 9AM - 6PM</p>
              <p className="text-gray-300 text-sm">Weekends: By Appointment</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400 font-inter">
            © 2024 Magmode Photography. All rights reserved. | 
            <a href="#" className="hover:text-white transition-colors duration-300 ml-1">Privacy Policy</a> | 
            <a href="#" className="hover:text-white transition-colors duration-300 ml-1">Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
