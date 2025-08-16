import Layout from '@/components/Layout';
import { motion } from 'framer-motion';
import { image25 } from '../assets/imageImports';

const About = () => {
  return (
    <Layout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative h-screen overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={image25}
              alt="About Us Hero"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50" />
          </div>

          <div className="relative z-10 flex items-center justify-center h-full px-4">
            <div className="text-center">
              <motion.h1
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl md:text-6xl font-cormorant font-light text-white mb-6"
              >
                Our Story
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-lg text-white/95 font-inter max-w-2xl mx-auto"
              >
                DaMa Cafe was born from the beautiful blend of Dad's banking expertise
                and Ma's culinary passion. What started as a dream to share their
                warmth and creativity with the community has grown into
                Thiruvananthapuram's coziest culinary destination.
              </motion.p>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto text-center"
            >
              <h2 className="text-3xl md:text-5xl font-cormorant font-light mb-8">
                Where Comfort Meets Flavor
              </h2>
              <p className="text-lg text-gray-600 font-inter leading-relaxed mb-12">
                Located in the heart of Thiruvananthapuram at Devi Tower, DaMa Cafe brings together
                the warmth of home-cooked meals with innovative culinary creations. From our
                signature momos to crispy waffles and refreshing bubble teas, every item on our
                menu is crafted with love and served with care.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
                <div className="text-center">
                  <h3 className="text-2xl font-cormorant font-semibold mb-4">
                    Quality & Innovation
                  </h3>
                  <p className="text-gray-600 font-inter">
                    We take pride in our secret recipes and continuous experimentation
                    to bring you unique and delightful flavors.
                  </p>
                </div>
                <div className="text-center">
                  <h3 className="text-2xl font-cormorant font-semibold mb-4">
                    Family Values
                  </h3>
                  <p className="text-gray-600 font-inter">
                    Every dish is crafted with the same care and love that you'd
                    find in a family kitchen, making you feel right at home.
                  </p>
                </div>
                <div className="text-center">
                  <h3 className="text-2xl font-cormorant font-semibold mb-4">
                    Customer Experience
                  </h3>
                  <p className="text-gray-600 font-inter">
                    We create a warm, welcoming atmosphere where every customer
                    is treated like family and every visit feels special.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default About;
