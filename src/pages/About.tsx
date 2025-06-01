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
                Founded in 2014, Vishnu M C Photography was born from a simple
                belief: that every love story deserves to be told with artistry,
                authenticity, and heart. What started as a passion project has
                grown into a legacy of capturing life's most precious moments.
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
                Passion Meets Purpose
              </h2>
              <p className="text-lg text-gray-600 font-inter leading-relaxed mb-12">
                Founded in 2014, Vishnu M C Photography was born from a simple
                belief: that every love story deserves to be told with artistry,
                authenticity, and heart. What started as a passion project has
                grown into a legacy of capturing life's most precious moments.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
                <div className="text-center">
                  <h3 className="text-2xl font-cormorant font-semibold mb-4">
                    Authentic Storytelling
                  </h3>
                  <p className="text-gray-600 font-inter">
                    We believe in capturing real emotions and genuine moments that
                    reflect who you truly are.
                  </p>
                </div>
                <div className="text-center">
                  <h3 className="text-2xl font-cormorant font-semibold mb-4">
                    Timeless Artistry
                  </h3>
                  <p className="text-gray-600 font-inter">
                    Our approach combines classic techniques with modern vision to
                    create images that stand the test of time.
                  </p>
                </div>
                <div className="text-center">
                  <h3 className="text-2xl font-cormorant font-semibold mb-4">
                    Personal Connection
                  </h3>
                  <p className="text-gray-600 font-inter">
                    We take time to understand your story, ensuring every image
                    reflects your unique love and personality.
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
