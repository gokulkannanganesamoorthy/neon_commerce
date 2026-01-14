import React from 'react';
import { motion } from 'framer-motion';
import collectionBg from '../assets/collection-bg.png';

const Collections = () => {
  return (
    <div className="min-h-screen bg-black text-white relative">
      {/* Full-bleed Image */}
      <div className="h-screen relative flex items-center justify-center overflow-hidden">
        <motion.img
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5 }}
          src={collectionBg}
          alt="Collection"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50" />

        {/* Overlay Text */}
        <div className="relative z-10 text-center px-4">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-lime-400 tracking-[0.5em] uppercase text-xs font-mono mb-4 block"
          >
            Season 26
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="text-7xl md:text-9xl font-display font-bold leading-none tracking-tighter mb-8"
          >
            VOID
            <br />
            WALKER
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="text-xl text-gray-300 max-w-2xl mx-auto mb-12 font-light"
          >
            Engineered for zero-gravity environments. <br />
            Where the physical meets the ethereal.
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
            className="px-12 py-4 border border-white text-white font-mono text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300"
          >
            Explore Collection
          </motion.button>
        </div>
      </div>

      {/* Details Section */}
      <div className="py-32 px-4 md:px-12 bg-black">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20">
          <div>
            <h2 className="text-5xl font-display font-bold mb-6">
              The Concept
            </h2>
            <p className="text-xl text-gray-400 leading-relaxed">
              Void Walker represents our most ambitious collection to date. Each
              piece is designed to exist in multiple dimensions simultaneously—
              functional in physical space, transcendent in digital realms.
            </p>
          </div>
          <div className="space-y-8">
            <div className="border-l-2 border-lime-400 pl-6">
              <h3 className="font-mono text-xs text-lime-400 mb-2">
                MATERIALS
              </h3>
              <p className="text-gray-300">
                Holographic mesh, carbon fiber, bioluminescent threading
              </p>
            </div>
            <div className="border-l-2 border-lime-400 pl-6">
              <h3 className="font-mono text-xs text-lime-400 mb-2">RELEASE</h3>
              <p className="text-gray-300">Q4 2501 • Limited to 100 units</p>
            </div>
            <div className="border-l-2 border-lime-400 pl-6">
              <h3 className="font-mono text-xs text-lime-400 mb-2">
                AVAILABILITY
              </h3>
              <p className="text-gray-300">Pre-order via Neural Link only</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collections;
