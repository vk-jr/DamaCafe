import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { image20, image21, image22 } from '../assets/imageImports';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah & Michael",
      wedding: "Destination Wedding",
      content: "Working with Vishnu M C Photography was the best decision we made for our wedding. They captured every special moment beautifully.",
      rating: 5,
      image: image20
    },
    {
      name: "Emma & James",
      wedding: "Garden Wedding",
      content: "The attention to detail and creativity in every shot is amazing. Our photos are everything we dreamed of and more.",
      rating: 5,
      image: image21
    },
    {
      name: "Rachel & David",
      wedding: "Beach Wedding",
      content: "The photos capture not just the moments, but the emotions and atmosphere of our special day. Absolutely stunning work!",
      rating: 5,
      image: image22
    }
  ];

  return (
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
            Love Stories
          </h2>
          <p className="text-lg text-gray-600 font-inter max-w-2xl mx-auto">
            What our couples say about their experience with us
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="text-yellow-400 fill-current" />
                ))}
              </div>
              
              <p className="text-gray-700 font-inter mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-cormorant font-semibold text-lg">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-500 font-inter text-sm">
                    {testimonial.wedding}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
