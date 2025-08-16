import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

interface MenuItem {
  name: string;
  price: number;
  description?: string;
  isNew?: boolean;
  isChefSpecial?: boolean;
  pieces?: number;
  savings?: number;
  originalPrice?: number;
}

interface MenuCategory {
  title: string;
  items: MenuItem[];
}

const Menu = () => {
  const menuCategories: MenuCategory[] = [
    {
      title: "Veg Momos",
      items: [
        { name: "Veg Fried Momos", price: 89, pieces: 6 },
        { name: "Veg Steamed Momos", price: 99, pieces: 6 },
        { name: "Veg Peri Peri Momos", price: 119, pieces: 6 },
        { name: "Veg Sweet Chilli Momos", price: 129, pieces: 6 },
        { name: "Veg Manchurian Momos", price: 139, pieces: 6, isChefSpecial: true },
        { name: "Veg Schezwan Momos", price: 139, pieces: 6 },
        { name: "Veg Barbeque Momos", price: 139, pieces: 6, isChefSpecial: true },
        { name: "Cheesy Creamy Veg Momos", price: 139, pieces: 6, isNew: true },
        { name: "Chilli Cheesy Veg Momos", price: 139, pieces: 6, isNew: true },
        { name: "DaMa's Golden Heaven", price: 149, pieces: 6, isChefSpecial: true }
      ]
    },
    {
      title: "Chicken Momos",
      items: [
        { name: "Chicken Fried Momos", price: 104, pieces: 6 },
        { name: "Chicken Steamed Momos", price: 119, pieces: 6 },
        { name: "Chicken Peri Peri Momos", price: 129, pieces: 6 },
        { name: "Chicken Sweet Chilli Momos", price: 139, pieces: 6 },
        { name: "Chicken Manchurian Momos", price: 149, pieces: 6, isChefSpecial: true },
        { name: "Chicken Schezwan Momos", price: 149, pieces: 6 },
        { name: "Chicken Barbeque Momos", price: 149, pieces: 6 },
        { name: "Cheesy Creamy Chicken Momos", price: 149, pieces: 6, isNew: true },
        { name: "Chilli Cheesy Chicken Momos", price: 149, pieces: 6, isNew: true },
        { 
          name: "DaMa's Golden Heaven Chicken", 
          price: 159, 
          pieces: 6, 
          isChefSpecial: true,
          description: "Crispy fried momos, with cashews and aromatic spices, Served with a combination of fusion sauces."
        }
      ]
    },
    {
      title: "Special Platters & Combos",
      items: [
        { 
          name: "Veg Momo Platter", 
          price: 199, 
          originalPrice: 254,
          description: "Fried, Peri-Peri, Sweet Chilli 12 pieces with 4p each",
          savings: 65
        },
        { 
          name: "Veg Chinese Platter", 
          price: 249, 
          originalPrice: 324,
          description: "Fried, Schezwan, Manchurian 12 pieces with 4p each",
          savings: 75
        },
        { 
          name: "Veg Creamy Platter", 
          price: 329, 
          originalPrice: 419,
          description: "Peri-Peri, Barbeque, Cheesy Creamy 15 pieces with 5pcs each",
          savings: 90
        },
        { 
          name: "Friend's Platter (Veg)", 
          price: 499, 
          originalPrice: 649,
          description: "Steamed, Fried, Manchurian, Schezwan, Peri-peri, Sweet Chili + Green Apple Lime (1 no)",
          pieces: 24
        },
        { 
          name: "Chicken Momo Platter", 
          price: 219, 
          originalPrice: 284,
          description: "Fried, Peri-Peri, Sweet Chilli 12 pieces with 4p each",
          savings: 65
        },
        { 
          name: "Chicken Chinese Platter", 
          price: 259, 
          originalPrice: 334,
          description: "Fried, Schezwan, Manchurian 12 pieces with 4p each",
          savings: 75
        },
        { 
          name: "Chicken Creamy Platter", 
          price: 339,
          description: "Peri-Peri, Barbeque, Cheesy Creamy",
          savings: 90
        },
        { 
          name: "Friend's Platter (Chicken)", 
          price: 549, 
          originalPrice: 699,
          description: "Steamed, Fried, Manchurian, Schezwan, Peri-peri, Sweet Chilli + Green Apple Lime (1 no)",
          pieces: 24
        }
      ]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-cormorant font-light mb-6">
            Our Menu
          </h2>
          <p className="text-lg text-gray-600 font-inter max-w-2xl mx-auto">
            Savor our delicious selection of momos and special platters
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {menuCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={category.title === "Special Platters & Combos" ? "lg:col-span-2" : ""}
            >
              <h3 className="text-2xl font-cormorant font-semibold mb-6 text-center">
                {category.title}
              </h3>
              <div className="space-y-6">
                {category.items.map((item, itemIndex) => (
                  <motion.div
                    key={itemIndex}
                    className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-4 border-b border-gray-200 hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h4 className="text-lg font-inter font-medium">
                          {item.name}
                        </h4>
                        {item.isNew && (
                          <span className="px-2 py-1 text-xs bg-green-100 text-green-800 rounded">
                            New
                          </span>
                        )}
                        {item.isChefSpecial && (
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        )}
                      </div>
                      {item.description && (
                        <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                      )}
                      {item.pieces && (
                        <p className="text-sm text-gray-500">{item.pieces} pieces</p>
                      )}
                    </div>
                    <div className="mt-2 sm:mt-0 text-right">
                      {item.originalPrice ? (
                        <div className="flex flex-col items-end">
                          <div className="flex items-center gap-2">
                            <span className="text-sm line-through text-gray-400">
                              ₹{item.originalPrice}
                            </span>
                            <span className="text-lg font-semibold">₹{item.price}</span>
                          </div>
                          {item.savings && (
                            <span className="text-xs text-green-600">
                              Save ₹{item.savings}
                            </span>
                          )}
                        </div>
                      ) : (
                        <span className="text-lg font-semibold">₹{item.price}</span>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
