import React, { useRef } from 'react';
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionValue,
  useMotionTemplate,
} from 'framer-motion';
import heroBg from '../assets/hero-bg.png';
import productSneaker from '../assets/product-sneaker.png';

const Hero = () => {
  const ref = useRef(null);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);

  // Mouse Tilt Effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e) => {
    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [15, -15]), {
    stiffness: 150,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-15, 15]), {
    stiffness: 150,
    damping: 20,
  });

  const glowX = useSpring(useTransform(mouseX, [-0.5, 0.5], [0, 100]), {
    stiffness: 150,
    damping: 20,
  });
  const glowY = useSpring(useTransform(mouseY, [-0.5, 0.5], [0, 100]), {
    stiffness: 150,
    damping: 20,
  });

  // For the specific visual style requested: "Heavy backdrop blur ... translucent white borders"

  return (
    <section
      ref={ref}
      className="min-h-screen relative flex items-center justify-center overflow-hidden py-20"
      onMouseMove={handleMouseMove}
    >
      {/* Background Parallax */}
      <motion.div style={{ y: y1 }} className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neon-dark/80 to-neon-dark z-10" />
        <img
          src={heroBg}
          alt="Background"
          className="w-full h-full object-cover opacity-60"
        />
      </motion.div>

      <div className="container mx-auto px-4 relative z-10 grid md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="space-y-6"
        >
          <h2 className="text-neon-pink tracking-widest text-sm font-bold uppercase mb-2">
            New Collection 2026
          </h2>
          <h1 className="text-7xl md:text-9xl font-bold leading-none font-display">
            CYBER <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-pink animate-pulse">
              PUNK
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-md border-l-2 border-neon-blue pl-6 backdrop-blur-sm">
            Step into the future of fashion. Engineered for the digital age,
            designed for the streets of tomorrow.
          </p>

          <div className="flex gap-6 pt-8">
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: '0 0 20px rgba(0, 255, 255, 0.5)',
              }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-neon-blue text-black font-bold uppercase tracking-wider clip-path-polygon hover:bg-white transition-colors"
              style={{
                clipPath:
                  'polygon(10% 0, 100% 0, 100% 70%, 90% 100%, 0 100%, 0 30%)',
              }}
            >
              Shop Now
            </motion.button>
            <motion.button
              whileHover={{
                scale: 1.05,
                borderColor: '#FF00FF',
                color: '#FF00FF',
                boxShadow: '0 0 20px rgba(255, 0, 255, 0.3)',
              }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-transparent border border-white/20 text-white font-bold uppercase tracking-wider hover:border-neon-pink transition-colors backdrop-blur-md"
            >
              View Lookbook
            </motion.button>
          </div>
        </motion.div>

        {/* 3D Product View */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative flex justify-center items-center perspective-1000"
          style={{ perspective: 2000 }}
        >
          {/* Floating & Tilting Card Container */}
          <motion.div
            style={{ rotateX, rotateY, y: y2 }}
            className="relative w-full max-w-lg aspect-square"
          >
            {/* Glow Effect behind */}
            <div className="absolute inset-0 bg-neon-blue/20 blur-[100px] rounded-full" />

            {/* Glass Card */}
            <div className="relative z-10 w-full h-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 flex items-center justify-center overflow-hidden shadow-2xl ring-1 ring-white/20 group">
              {/* Inner Grid Texture */}
              <div className="absolute inset-0 bg-grid-pattern opacity-10 mix-blend-overlay" />

              {/* Product Image */}
              <motion.img
                src={productSneaker}
                alt="Cyberpunk Sneaker"
                className="w-[120%] h-[120%] object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-20 transform group-hover:scale-110 transition-transform duration-700 ease-out"
                animate={{ y: [0, -20, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 6,
                  ease: 'easeInOut',
                }}
              />

              {/* Floating UI Elements on the card */}
              <div className="absolute top-6 right-6 flex flex-col items-end">
                <span className="text-4xl font-display font-bold text-white">
                  $299
                </span>
                <span className="text-neon-pink text-xs uppercase tracking-widest">
                  In Stock
                </span>
              </div>

              <div className="absolute bottom-6 left-6">
                <h3 className="text-2xl font-display font-bold text-white">
                  NEON X-1
                </h3>
                <div className="flex gap-2 mt-2">
                  <div className="w-3 h-3 rounded-full bg-neon-pink box-glow" />
                  <div className="w-3 h-3 rounded-full bg-neon-blue box-glow" />
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-neon-blue to-transparent" />
        <span className="text-[10px] uppercase tracking-[0.3em] text-neon-blue">
          Scroll
        </span>
      </motion.div>
    </section>
  );
};

export default Hero;
