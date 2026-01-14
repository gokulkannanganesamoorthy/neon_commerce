import React from 'react';
import { motion } from 'framer-motion';
import { useCart } from '../context/CartContext';
import productSneaker from '../assets/product-sneaker.png';

const ProductCard = ({ id, name, price }) => {
  const { addItem } = useCart();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="group relative aspect-[4/5] bg-white/5 border border-white/10 rounded-xl overflow-hidden backdrop-blur-sm cursor-pointer will-change-transform"
    >
      {/* Dynamic Border Glow */}
      <div className="absolute inset-0 border border-transparent group-hover:border-lime-400/50 rounded-xl transition-colors duration-300 z-20 pointer-events-none" />

      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/90 z-10 opacity-60 group-hover:opacity-80 transition-opacity pointer-events-none" />

      {/* Image Container */}
      <div className="absolute inset-x-0 top-0 bottom-24 flex items-center justify-center p-8 z-0">
        <img
          src={productSneaker}
          alt={name}
          loading="lazy"
          className="w-full h-full object-contain filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)] group-hover:drop-shadow-[0_0_20px_rgba(50,205,50,0.3)] transition-all duration-500 group-hover:scale-110 will-change-transform"
        />
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-x-0 bottom-0 p-6 z-20 flex flex-col justify-end pointer-events-none">
        <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
          <div className="overflow-hidden mb-1">
            <h3
              className="text-2xl font-display font-bold text-white group-hover:text-lime-400 transition-colors duration-300"
              data-text={name}
            >
              {name}
            </h3>
          </div>

          {/* Price & Action */}
          <div className="flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">
            <span className="text-lime-400 font-bold font-mono tracking-wider">
              {price}
            </span>
            <button
              onClick={(e) => {
                e.stopPropagation();
                addItem({ id, name, price });
              }}
              className="pointer-events-auto px-4 py-2 bg-white/10 hover:bg-lime-400 hover:text-black border border-white/20 text-xs uppercase tracking-widest transition-all duration-300 backdrop-blur-md rounded-sm"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      {/* Glitch Overlay Effect */}
      <div className="absolute inset-0 bg-lime-400/5 opacity-0 group-hover:opacity-10 pointer-events-none transition-opacity duration-100 mix-blend-overlay" />
    </motion.div>
  );
};

export default ProductCard;
