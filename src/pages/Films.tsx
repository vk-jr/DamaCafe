import Layout from '@/components/Layout';
import { motion } from 'framer-motion';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';
import { image23, image24, image25, urumi1 } from '@/assets/imageImports';
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
      title: "Sarah & Michael - Napa Valley",
      thumbnail: image23,
      duration: "3:45"
    },
    {
      title: "Emma & James - Garden Wedding",
      thumbnail: image24,
      duration: "4:12"
    },
    {
      title: "Lisa & David - Beach Ceremony",
      thumbnail: image25,
      duration: "5:30"
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
                Wedding Films
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-lg text-white/90 font-inter mb-12 max-w-2xl mx-auto"
              >
                Cinematic storytelling that brings your love story to life through motion and emotion
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
      </div>
    </Layout>
  );
};

export default Films;
