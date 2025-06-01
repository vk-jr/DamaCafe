import Layout from '@/components/Layout';
import WeddingHero from '@/components/WeddingHero';
import FeaturedGallery from '@/components/FeaturedGallery';
import Testimonials from '@/components/Testimonials';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { image1 } from '../assets/imageImports';

const Index = () => {
  return (
    <Layout>
      <WeddingHero />
      
      {/* About Preview Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-cormorant font-light mb-6">
                Crafting Timeless Love Stories
              </h2>
              <p className="text-lg text-gray-600 font-inter leading-relaxed mb-8">
                For over a decade, we've been blessed to witness and capture the most intimate moments of love. 
                Our approach combines documentary storytelling with fine art photography, creating images that 
                are both authentic and breathtakingly beautiful.
              </p>
              <div className="grid grid-cols-3 gap-8 mb-8">
                <div className="text-center">
                  <h3 className="text-3xl font-cormorant font-semibold text-black">200+</h3>
                  <p className="text-gray-600 font-inter">Weddings Captured</p>
                </div>
                <div className="text-center">
                  <h3 className="text-3xl font-cormorant font-semibold text-black">10+</h3>
                  <p className="text-gray-600 font-inter">Years Experience</p>
                </div>
                <div className="text-center">
                  <h3 className="text-3xl font-cormorant font-semibold text-black">5★</h3>
                  <p className="text-gray-600 font-inter">Client Rating</p>
                </div>
              </div>
              <Link to="/about">
                <button className="px-8 py-3 border-2 border-black text-black hover:bg-black hover:text-white transition-all duration-300 font-inter font-medium">
                  Learn Our Story
                </button>
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >              
              <img
                src={image1}
                alt="Wedding Photography"
                className="w-full rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-black rounded-lg flex items-center justify-center">
                <span className="text-white font-cormorant text-2xl">Since<br/>2014</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <FeaturedGallery />
      <Testimonials />

      {/* CTA Section */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-cormorant font-light mb-6">
              Ready to Tell Your Story?
            </h2>
            <p className="text-lg text-gray-300 font-inter max-w-2xl mx-auto mb-12">
              Let's create something beautiful together. Your love story deserves to be captured 
              with the artistry and passion it deserves.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-white text-black hover:bg-gray-100 transition-all duration-300 font-inter font-medium">
                Book Your Session
              </button>
              <button className="px-8 py-3 border-2 border-white text-white hover:bg-white hover:text-black transition-all duration-300 font-inter font-medium">
                View Investment
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
