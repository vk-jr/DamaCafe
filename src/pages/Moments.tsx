
import Layout from '@/components/Layout';
import { motion } from 'framer-motion';
import { useState } from 'react';

const Moments = () => {
  const [activeFilter, setActiveFilter] = useState('ALL');
  
  const filters = ['ALL', 'WEDDINGS', 'EDITORIAL', 'PORTRAITS', 'TRAVEL'];
  
  const images = [
    { src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", category: 'WEDDINGS' },
    { src: "https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", category: 'PORTRAITS' },
    { src: "https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", category: 'WEDDINGS' },
    { src: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", category: 'EDITORIAL' },
    { src: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", category: 'TRAVEL' },
    { src: "https://images.unsplash.com/photo-1594736797933-d0ddba27b5b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", category: 'PORTRAITS' },
  ];

  const filteredImages = activeFilter === 'ALL' ? images : images.filter(img => img.category === activeFilter);

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
              Captured Moments
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg text-gray-600 font-inter mb-12"
            >
              A collection of our finest work, showcasing the beauty in every moment
            </motion.p>

            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-6 py-2 font-inter font-medium transition-all duration-300 ${
                    activeFilter === filter
                      ? 'bg-black text-white'
                      : 'border border-gray-300 text-gray-700 hover:border-black'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="pb-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredImages.map((image, index) => (
                <motion.div
                  key={index}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group cursor-pointer overflow-hidden rounded-lg"
                >
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={image.src}
                      alt="Gallery Image"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Moments;
