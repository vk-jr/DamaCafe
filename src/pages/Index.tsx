import Layout from '@/components/Layout';
import WeddingHero from '@/components/WeddingHero';
import Menu from '@/components/Menu';
import Testimonials from '@/components/Testimonials';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { image3 } from '../assets/imageImports';

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
                With Love from DaMa Cafe
              </h2>
              <p className="text-lg text-gray-600 font-inter leading-relaxed mb-8">
                Welcome to our cafe, where you can Savor the flavor of dad’s care and ma’s love.
                 Our cafe is more than just a place to enjoy delicious food and drinks.
                  Our story began when Ma, who was an entrepreneur,
                   had a passion for cooking and wanted to share her love through her dishes.
                   Dad was working as a bank employee who had a knack for caring for people.
                   They decided to open a cafe together to follow their passion.
                   We have a variety of Momos, from steamed to fried, 
                   with different fillings and sauces.
                    We have crispy and fluffy waffles, Topped with different flavors, Whipped cream, and chocolates. We have refreshing and delicious bubble tea, with different flavors and toppings. We have rich and creamy hot chocolate, with caramel, Matcha, nuts, etc. Come and visit our cafe and try out our dishes. You'll love it.
              </p>
              <div className="grid grid-cols-3 gap-8 mb-8">
                <div className="text-center">
                  <h3 className="text-3xl font-cormorant font-semibold text-black">2000+</h3>
                  <p className="text-gray-600 font-inter">Customers satisfied</p>
                </div>
                <div className="text-center">
                  <h3 className="text-3xl font-cormorant font-semibold text-black">2+</h3>
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
                src={image3}
                alt="Wedding Photography"
                className="w-full rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-black rounded-lg flex items-center justify-center">
                <span className="text-white font-cormorant text-2xl">Since<br/>2024</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Menu />
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
              Ready to Make your story?
            </h2>
            <p className="text-lg text-gray-300 font-inter max-w-2xl mx-auto mb-12">
              Let's create something beautiful together. 
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="px-8 py-3 bg-white text-black hover:bg-gray-100 transition-all duration-300 font-inter font-medium">
                Book Your Event
              </Link>
              <Link to="/contact" className="px-8 py-3 border-2 border-white text-white hover:bg-white hover:text-black transition-all duration-300 font-inter font-medium">
                View Pricing
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
