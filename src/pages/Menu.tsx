import Layout from '@/components/Layout';
import { motion } from 'framer-motion';
import Menu from '@/components/Menu';
import { image16 } from '../assets/imageImports';

const MenuPage = () => {
  return (
    <Layout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative h-[60vh] overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={image16}
              alt="DaMa Cafe Menu"
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
                Our Menu
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-lg text-white/95 font-inter max-w-2xl mx-auto"
              >
                Discover our delicious selection of momos, platters, and special combinations
              </motion.p>
            </div>
          </div>
        </section>

        {/* Menu Section */}
        <Menu />
      </div>
    </Layout>
  );
};

export default MenuPage;
