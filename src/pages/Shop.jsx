import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import ProductCard from '../components/ProductCard';

const Shop = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Simplified parallax transforms for better performance
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -75]);

  const products = Array.from({ length: 9 }).map((_, i) => ({
    id: i + 1,
    name: `ARTIFACT_0${i + 1}`,
    price: `$${(i + 1) * 150 + 99}`,
  }));

  return (
    <div
      ref={containerRef}
      className="min-h-[200vh] bg-black relative isolate py-40 overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="fixed inset-0 pointer-events-none opacity-10 font-mono text-xs text-white break-all z-0 mask-gradient-to-b">
        {Array(100)
          .fill('010110101001010101VOID10101010001010DATA10101NULL')
          .join(' ')}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="fixed top-40 left-10 md:left-20 mix-blend-difference z-20 pointer-events-none">
          <h1 className="text-8xl md:text-[10rem] font-display font-bold text-white leading-none tracking-tighter opacity-20">
            THE
            <br />
            DUMP
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-7xl mx-auto pt-40">
          {/* Column 1 */}
          <motion.div
            style={{ y: y1 }}
            className="space-y-32 flex flex-col pt-20 will-change-transform"
          >
            {products.slice(0, 3).map((p) => (
              <div
                key={p.id}
                className="hover:scale-105 transition-transform duration-500"
              >
                <ProductCard {...p} />
              </div>
            ))}
          </motion.div>

          {/* Column 2 */}
          <motion.div
            style={{ y: y2 }}
            className="space-y-32 flex flex-col will-change-transform"
          >
            {products.slice(3, 6).map((p) => (
              <div
                key={p.id}
                className="relative left-10 hover:scale-105 transition-transform duration-500"
              >
                <div className="absolute -top-10 -right-10 text-6xl font-display text-lime-400 opacity-50 z-20 mix-blend-difference pointer-events-none">
                  #{p.id}
                </div>
                <ProductCard {...p} />
              </div>
            ))}
          </motion.div>

          {/* Column 3 */}
          <motion.div
            style={{ y: y3 }}
            className="space-y-32 flex flex-col pt-40 will-change-transform"
          >
            {products.slice(6, 9).map((p) => (
              <div
                key={p.id}
                className="hover:scale-105 transition-transform duration-500"
              >
                <ProductCard {...p} />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
