import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MoveRight, PhoneCall, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { image1, image5, image16, image23 } from '../assets/imageImports';

const WeddingHero = () => {
  const navigate = useNavigate();
  const [titleNumber, setTitleNumber] = useState(0);
  const [currentImage, setCurrentImage] = useState(0);
  
  const titles = useMemo(
    () => ["COZY", "SWEET", "TASTY", "EASY", "FAV"],
    []
  );  
  const heroImages = [
    image1,  // Wedding
    image5,  // Pre-wedding
    image16, // Traditional
    image23  // Changed from image21 to image23
  ];

  useEffect(() => {
    const titleInterval = setInterval(() => {
      setTitleNumber((prev) => (prev === titles.length - 1 ? 0 : prev + 1));
    }, 2500);

    return () => clearInterval(titleInterval);
  }, [titles.length]);

  useEffect(() => {
    const imageInterval = setInterval(() => {
      setCurrentImage((prev) => (prev === heroImages.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(imageInterval);
  }, [heroImages.length]);

  const nextImage = () => {
    setCurrentImage((prev) => (prev === heroImages.length - 1 ? 0 : prev + 1));
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev === 0 ? heroImages.length - 1 : prev - 1));
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Image Carousel Background - Fixed to prevent white flash */}
      <div className="absolute inset-0 bg-black">
        {heroImages.map((image, index) => (
          <motion.div
            key={index}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: currentImage === index ? 1 : 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <img
              src={image}
              alt="DaMa Cafe Ambience"
              className="w-full h-full object-cover object-center scale-110"
            />
            <div className="absolute inset-0 bg-black/50" />  {/* Increased overlay opacity for better contrast */}
          </motion.div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevImage}
        className="absolute left-8 top-1/2 transform -translate-y-1/2 z-30 text-white hover:text-white transition-all duration-300 hover:scale-110"
      >
        <ChevronLeft size={40} />
      </button>
      <button
        onClick={nextImage}
        className="absolute right-8 top-1/2 transform -translate-y-1/2 z-30 text-white hover:text-white transition-all duration-300 hover:scale-110"
      >
        <ChevronRight size={40} />
      </button>

      {/* Image Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-30">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentImage ? 'bg-white' : 'bg-white/70'  /* Increased inactive dot opacity */
            }`}
          />
        ))}
      </div>

      {/* Hero Content */}
      <div className="relative z-20 flex items-center justify-center h-full">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center text-white">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >              <Button variant="secondary" size="sm" className="gap-4 mb-12 bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20">
                Thiruvananthapuram's Coziest Cafe ✨
              </Button>
            </motion.div>

            {/* Main Heading with Animated Text */}
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 1 }}
              className="text-4xl md:text-6xl lg:text-8xl max-w-4xl font-cormorant font-light tracking-wide mb-8"
            >
              <span className="block mb-2">YOUR</span>
              <div className="relative h-40 md:h-20 lg:h-50 flex w-full justify-center overflow-hidden text-center">
                {titles.map((title, index) => (
                  <motion.span
                    key={index}
                    className="absolute font-medium"
                    initial={{ opacity: 0, y: 100 }}
                    transition={{ type: "spring", stiffness: 80, damping: 20 }}
                    animate={
                      titleNumber === index
                        ? { y: 0, opacity: 1 }
                        : { y: titleNumber > index ? -100 : 100, opacity: 0 }
                    }
                  >
                    {title}
                  </motion.span>
                ))}
              </div>
              <span className="block mt-4">ESCAPE</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="text-lg md:text-2xl leading-relaxed max-w-2xl mb-16 font-inter font-light opacity-90"
            >
              Savor the flavor of dad’s care and ma’s love
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}              className="flex flex-col sm:flex-row gap-4"
            >
              {/* Navigation Links */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
                <Button 
                  variant="outline" 
                  className="bg-white text-black hover:bg-black hover:text-white border-2 border-white group px-6 py-3 h-auto"
                  onClick={() => navigate('/contact')}
                >
                  Order Now
                  <MoveRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/80"
      >
        <div className="flex flex-col items-center">
          <span className="text-sm font-inter mb-2 tracking-wider">SCROLL</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-px h-8 bg-white/60"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default WeddingHero;
