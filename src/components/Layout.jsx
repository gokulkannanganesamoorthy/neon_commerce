import React, { useEffect, useRef, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import Lenis from 'lenis';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '../context/CartContext';
import CartSidebar from './CartSidebar';
import textureChrome from '../assets/texture-chrome.png';

const CustomCursor = () => {
  const cursorRef = useRef(null);
  useEffect(() => {
    const moveCursor = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
    };
    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);
  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-[9999] mix-blend-difference -translate-x-1/2 -translate-y-1/2 hidden md:block"
    >
      <div className="w-full h-full bg-white rounded-full blur-[2px]" />
    </div>
  );
};

const Layout = ({ children }) => {
  const { toggleCart, cartCount } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Initialize Lenis Smooth Scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  return (
    <div className="min-h-screen bg-black text-white font-body selection:bg-lime-400 selection:text-black cursor-none">
      <CustomCursor />
      <CartSidebar />

      {/* Liquid Chrome Texture Overlay */}
      <div className="fixed inset-0 z-0 opacity-20 pointer-events-none mix-blend-soft-light">
        <div className="absolute inset-0 bg-noise animate-noise" />
      </div>

      {/* Corner Navigation: Top Left (Logo) */}
      <div className="fixed top-8 left-8 z-50">
        <NavLink
          to="/"
          className="text-2xl font-bold font-display tracking-tighter text-white mix-blend-difference"
        >
          NEON<span className="text-lime-400">.</span>
        </NavLink>
      </div>

      {/* Corner Navigation: Top Right (Menu Trigger) */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="fixed top-8 right-8 z-50 w-12 h-12 flex flex-col justify-center items-end gap-1.5 mix-blend-difference hover:gap-2 transition-all group"
      >
        <span
          className={`h-[2px] bg-white transition-all ${
            isMenuOpen ? 'w-full rotate-45 translate-y-2' : 'w-full'
          }`}
        />
        <span
          className={`h-[2px] bg-white transition-all ${
            isMenuOpen ? 'opacity-0' : 'w-8 group-hover:w-full'
          }`}
        />
        <span
          className={`h-[2px] bg-white transition-all ${
            isMenuOpen
              ? 'w-full -rotate-45 -translate-y-2'
              : 'w-4 group-hover:w-full'
          }`}
        />
      </button>

      {/* Corner Navigation: Bottom Right (Cart) */}
      <button
        onClick={toggleCart}
        className="fixed bottom-8 right-8 z-50 mix-blend-difference font-mono text-xs tracking-widest hover:text-lime-400 transition-colors"
      >
        CART [{cartCount.toString().padStart(2, '0')}]
      </button>

      {/* Full Screen Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ clipPath: 'circle(0% at 100% 0%)' }}
            animate={{ clipPath: 'circle(150% at 100% 0%)' }}
            exit={{ clipPath: 'circle(0% at 100% 0%)' }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 bg-white z-40 flex items-center justify-center"
          >
            <div className="absolute inset-0 opacity-10">
              <img src={textureChrome} className="w-full h-full object-cover" />
            </div>
            <nav className="relative z-10 flex flex-col items-center gap-4">
              {[
                { name: 'Home', path: '/' },
                { name: 'Shop', path: '/shop' },
                { name: 'Collections', path: '/collections' },
                { name: 'About', path: '/about' },
                { name: 'Encrypted', path: '/contact' },
              ].map((item, index) => (
                <div key={item.name} className="overflow-hidden">
                  <motion.div
                    initial={{ y: '100%' }}
                    animate={{ y: 0 }}
                    exit={{ y: '100%' }}
                    transition={{
                      duration: 0.5,
                      delay: 0.1 + index * 0.1,
                      ease: [0.76, 0, 0.24, 1],
                    }}
                  >
                    <NavLink
                      to={item.path}
                      onClick={() => setIsMenuOpen(false)}
                      className="text-6xl md:text-8xl font-display font-bold text-black uppercase hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-black hover:to-gray-500 transition-all"
                    >
                      {item.name}
                    </NavLink>
                  </motion.div>
                </div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="relative z-10">{children}</main>

      {/* Footer */}
      <footer className="relative z-10 py-8 border-t border-white/10 bg-black">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-gray-500 font-mono">
            Developed by{' '}
            <a
              href="https://gokulkannanganesamoorthy.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lime-400 hover:text-white transition-colors underline"
            >
              Gokul Kannan Ganesamoorthy
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
