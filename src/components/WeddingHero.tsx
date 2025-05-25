
import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MoveRight, PhoneCall, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const WeddingHero = () => {
  const [titleNumber, setTitleNumber] = useState(0);
  const [currentImage, setCurrentImage] = useState(0);
  
  const titles = useMemo(
    () => ["TIMELESS", "ELEGANT", "AUTHENTIC", "ROMANTIC", "ETERNAL"],
    []
  );

  // Sample wedding images - replace with actual images
  const heroImages = [
    "https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
    "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
    "https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
    "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
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
      {/* Image Carousel Background */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImage}
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <img
              src={heroImages[currentImage]}
              alt="Wedding Photography"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevImage}
        className="absolute left-8 top-1/2 transform -translate-y-1/2 z-30 text-white/80 hover:text-white transition-all duration-300 hover:scale-110"
      >
        <ChevronLeft size={40} />
      </button>
      <button
        onClick={nextImage}
        className="absolute right-8 top-1/2 transform -translate-y-1/2 z-30 text-white/80 hover:text-white transition-all duration-300 hover:scale-110"
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
              index === currentImage ? 'bg-white' : 'bg-white/50'
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
            >
              <Button variant="secondary" size="sm" className="gap-4 mb-8 bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20">
                Award-Winning Photography <MoveRight className="w-4 h-4" />
              </Button>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 1 }}
              className="text-4xl md:text-7xl lg:text-8xl max-w-4xl font-cormorant font-light tracking-wide mb-6"
            >
              <span className="block mb-2">CAPTURING</span>
              <span className="relative flex w-full justify-center overflow-hidden">
                {titles.map((title, index) => (
                  <motion.span
                    key={index}
                    className="absolute font-medium"
                    initial={{ opacity: 0, y: 100 }}
                    animate={
                      titleNumber === index
                        ? { y: 0, opacity: 1 }
                        : { y: titleNumber > index ? -100 : 100, opacity: 0 }
                    }
                    transition={{ type: "spring", stiffness: 80, damping: 20 }}
                  >
                    {title}
                  </motion.span>
                ))}
              </span>
              <span className="block mt-2">MOMENTS</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="text-lg md:text-xl leading-relaxed max-w-2xl mb-12 font-inter font-light opacity-90"
            >
              Where love stories become timeless art. 
              Every glance, every touch, every smile—captured with passion and preserved forever.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button size="lg" className="gap-4 bg-white text-black hover:bg-gray-100 font-inter" variant="outline">
                View Our Work <MoveRight className="w-4 h-4" />
              </Button>
              <Button size="lg" className="gap-4 bg-transparent border-2 border-white text-white hover:bg-white hover:text-black font-inter">
                Book a Consultation <PhoneCall className="w-4 h-4" />
              </Button>
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
