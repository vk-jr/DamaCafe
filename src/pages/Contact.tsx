import Layout from '@/components/Layout';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Instagram, Facebook } from 'lucide-react';

const Contact = () => {
  return (
    <Layout>
      <div className="pt-20 min-h-screen">
        {/* Hero Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-cormorant font-light mb-6"
            >
              Let's Connect
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg text-gray-600 font-inter mb-12 max-w-2xl mx-auto"
            >
              Ready to tell your story? We'd love to hear about your special day and discuss how we can capture your unique love story.
            </motion.p>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Email */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex flex-col items-center p-8 bg-white rounded-lg shadow-sm"
              >
                <Mail className="w-8 h-8 text-gray-800 mb-4" />
                <h3 className="text-xl font-cormorant mb-2">Email Us</h3>
                <p className="text-gray-600 font-inter text-center">
                  <a href="mailto:hello@vishnumcphotography.com" className="hover:text-gray-800 transition-colors">
                    hello@vishnumcphotography.com
                  </a>
                </p>
              </motion.div>

              {/* Phone */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex flex-col items-center p-8 bg-white rounded-lg shadow-sm"
              >
                <Phone className="w-8 h-8 text-gray-800 mb-4" />
                <h3 className="text-xl font-cormorant mb-2">Call Us</h3>
                <p className="text-gray-600 font-inter text-center">
                  <a href="tel:+919846842162" className="hover:text-gray-800 transition-colors">
                    +91 9846842162
                  </a>
                </p>
              </motion.div>

              {/* Location */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-col items-center p-8 bg-white rounded-lg shadow-sm"
              >
                <MapPin className="w-8 h-8 text-gray-800 mb-4" />
                <h3 className="text-xl font-cormorant mb-2">Visit Us</h3>
                <p className="text-gray-600 font-inter text-center">
                  Kerala, India
                </p>
              </motion.div>
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex justify-center gap-6 mt-16"
            >
              <a href="https://www.instagram.com/vishnu_m.c/?utm_source=ig_web_button_share_sheet" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white shadow-sm hover:shadow-md transition-shadow">
                <Instagram className="w-6 h-6 text-gray-800" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white shadow-sm hover:shadow-md transition-shadow">
                <Facebook className="w-6 h-6 text-gray-800" />
              </a>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Contact;
