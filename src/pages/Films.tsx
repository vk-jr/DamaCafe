import Layout from '@/components/Layout';
import { motion } from 'framer-motion';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';
import { 
  image1, image2, image3, image4, image5, image6, image7, image8, 
  image9, image10, image11, image12, image13, image14, image15,
  image16, image17, image18, image19, urumi1 
} from '@/assets/imageImports';
import { useState, useRef, useEffect } from 'react';

const Films = () => {
  const [isMuted, setIsMuted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  
  // Ensure video plays on component mount
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log("Video autoplay failed:", error);
      });
    }
  }, []);

  const toggleSound = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const videos = [
    {
      title: "Signature DaMa Momos",
      thumbnail: image7, // Image of momos
      duration: "2:15"
    },
    {
      title: "Behind Our Bubble Tea Magic",
      thumbnail: image13, // Modern drink setup
      duration: "3:45"
    },
    {
      title: "Perfect Crispy Waffles",
      thumbnail: image15, // Food preparation
      duration: "4:20"
    },
  ];

  return (
    <Layout>
      <div className="min-h-screen">
        {/* Hero Section - Full screen from top with Background Video */}
        <section className="relative h-screen overflow-hidden">
          {/* Background Video */}
          <div className="absolute inset-0 w-full h-full bg-black">
            <div className="relative w-full h-full">
              <video
                ref={videoRef}
                autoPlay
                loop
                muted={isMuted}
                playsInline
                onClick={togglePlayPause}
                className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto max-w-none -translate-x-1/2 -translate-y-1/2 object-cover scale-[1.4] cursor-pointer"
                style={{ 
                  minWidth: '120%',
                  minHeight: '120%',
                }}
              >
                <source src={urumi1} type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-black/50" />
              
              {/* Play/Pause Button Overlay */}
              <div 
                onClick={togglePlayPause}
                className="absolute inset-0 z-10 flex items-center justify-center cursor-pointer group"
              >
                <div className="bg-black/20 rounded-full p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {isPlaying ? (
                    <Pause className="w-8 h-8 text-white" />
                  ) : (
                    <Play className="w-8 h-8 text-white" />
                  )}
                </div>
              </div>
              
              {/* Sound Control Button */}
              <button
                onClick={toggleSound}
                className="absolute bottom-8 right-8 z-20 p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
              >
                {isMuted ? <VolumeX className="w-6 h-6 text-white" /> : <Volume2 className="w-6 h-6 text-white" />}
              </button>
            </div>
          </div>

          {/* Hero Content */}
          <div className="relative z-10 flex items-center justify-center h-full">
            <div className="container mx-auto px-4 text-center">
              <motion.h1
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl md:text-6xl font-cormorant font-light mb-6 text-white"
              >
                Behind The Flavors
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-lg text-white/90 font-inter mb-12 max-w-2xl mx-auto"
              >
                Step into our kitchen and discover the magic behind our signature dishes
              </motion.p>
            </div>
          </div>
        </section>

        {/* Video Gallery */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {videos.map((video, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="group cursor-pointer"
                >
                  <div className="relative aspect-video overflow-hidden rounded-lg mb-4">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center">
                        <Play size={24} className="text-black ml-1" />
                      </div>
                    </div>
                    <div className="absolute bottom-4 right-4 bg-black/70 text-white px-2 py-1 rounded text-sm font-inter">
                      {video.duration}
                    </div>
                  </div>
                  <h3 className="text-xl font-cormorant font-medium mb-2">{video.title}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Photo Gallery */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-6xl font-cormorant font-light mb-6">
                Our Special Moments
              </h2>
              <p className="text-lg text-gray-600 font-inter max-w-2xl mx-auto">
                Glimpses of our delicious creations and happy customers
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                { img: image1, title: "Classic Momo Platter" },
                { img: image2, title: "Special Bubble Tea" },
                { img: image3, title: "Crispy Waffle Delight" },
                { img: image4, title: "Chef's Special Momo" },
                { img: image5, title: "Weekend Special" },
                { img: image6, title: "Customer Favorites" },
                { img: image8, title: "Dessert Special" },
                { img: image9, title: "Tea Time Treats" },
                { img: image10, title: "Family Platter" },
                { img: image11, title: "Sweet Indulgence" },
                { img: image12, title: "Café Ambience" },
                { img: image14, title: "Happy Hours" },
                { img: image16, title: "Signature Dish" },
                { img: image17, title: "Festival Special" },
                { img: image18, title: "Weekend Brunch" },
                { img: image19, title: "Customer Celebrations" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group cursor-pointer relative overflow-hidden"
                >
                  <div className="aspect-square overflow-hidden rounded-lg">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <p className="text-white text-center font-inter px-4">
                        {item.title}
                      </p>
                    </div>
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

export default Films;
