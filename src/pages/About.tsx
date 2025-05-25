
import Layout from '@/components/Layout';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <Layout>
      <div className="min-h-screen">
        {/* Hero Section - Full screen from top */}
        <section className="relative h-screen bg-cover bg-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')"}}>
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative z-10 flex items-center justify-center h-full">
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-cormorant font-light text-white text-center"
            >
              Our Story
            </motion.h1>
          </div>
        </section>

        {/* Content */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto text-center"
            >
              <h2 className="text-3xl md:text-5xl font-cormorant font-light mb-8">
                Passion Meets Purpose
              </h2>
              <p className="text-lg text-gray-600 font-inter leading-relaxed mb-12">
                Founded in 2014, Magmode Photography was born from a simple belief: that every love story deserves to be told with artistry, authenticity, and heart. What started as a passion project has grown into a legacy of capturing life's most precious moments.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
                <div className="text-center">
                  <h3 className="text-2xl font-cormorant font-semibold mb-4">Authentic Storytelling</h3>
                  <p className="text-gray-600 font-inter">We believe in capturing real emotions and genuine moments that reflect who you truly are.</p>
                </div>
                <div className="text-center">
                  <h3 className="text-2xl font-cormorant font-semibold mb-4">Timeless Artistry</h3>
                  <p className="text-gray-600 font-inter">Our approach combines classic techniques with modern vision to create images that stand the test of time.</p>
                </div>
                <div className="text-center">
                  <h3 className="text-2xl font-cormorant font-semibold mb-4">Personal Connection</h3>
                  <p className="text-gray-600 font-inter">We take time to understand your story, ensuring every image reflects your unique love and personality.</p>
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
