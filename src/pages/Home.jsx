import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import heroArtifact from '../assets/hero-singularity.png';
import ProductCard from '../components/ProductCard';
import chromeKicks from '../assets/product-chrome.png';
import voidWalker from '../assets/product-void.png';
import acidRain from '../assets/product-acid.png';
import neuralLink from '../assets/product-neural.png';

const Home = () => {
  const { scrollY } = useScroll();

  // Parallax Effects
  const yArtifact = useTransform(scrollY, [0, 1000], [0, 400]);
  const scaleArtifact = useTransform(scrollY, [0, 500], [1, 1.2]);
  const rotateArtifact = useTransform(scrollY, [0, 1000], [0, 45]);

  // Text splits apart
  const xTextLeft = useTransform(scrollY, [0, 600], [0, -400]);
  const xTextRight = useTransform(scrollY, [0, 600], [0, 400]);
  const opacityText = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="h-screen relative flex items-center justify-center overflow-hidden bg-black">
        {/* Background Noise */}
        <div className="absolute inset-0 z-0 bg-neutral-900 opacity-20">
          <svg className="w-full h-full opacity-20 filter contrast-150 brightness-150">
            <filter id="noise">
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.8"
                numOctaves="4"
                stitchTiles="stitch"
              />
            </filter>
            <rect width="100%" height="100%" filter="url(#noise)" />
          </svg>
        </div>

        {/* Main Artifact (Depth-0) */}
        <motion.div
          style={{ y: yArtifact, scale: scaleArtifact, rotate: rotateArtifact }}
          className="relative z-10 w-[80vw] md:w-[45vw] max-w-3xl aspect-square will-change-transform mix-blend-lighten"
        >
          <img
            src={heroArtifact}
            alt="Singularity Artifact"
            className="w-full h-full object-contain filter contrast-125 saturate-150 drop-shadow-[0_0_50px_rgba(50,205,50,0.1)]"
          />
        </motion.div>

        {/* Typography Overlay (Depth-1) */}
        <div className="absolute inset-0 flex flex-col items-center justify-center z-20 pointer-events-none mix-blend-difference">
          <motion.h1
            style={{ x: xTextLeft, opacity: opacityText }}
            className="text-[12vw] leading-[0.8] font-display font-bold text-white tracking-tighter will-change-transform"
          >
            SINGU
          </motion.h1>
          <motion.h1
            style={{ x: xTextRight, opacity: opacityText }}
            className="text-[12vw] leading-[0.8] font-display font-bold text-white tracking-tighter ml-[10vw] will-change-transform"
          >
            LARITY
          </motion.h1>
        </div>

        {/* Scroll Prompt */}
        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-12 left-12 md:left-20 flex flex-col gap-2 z-30"
        >
          <span className="text-xs font-mono uppercase tracking-widest text-lime-400">
            Scroll to Enter
          </span>
          <div className="w-[1px] h-20 bg-lime-400" />
        </motion.div>
      </section>

      {/* Featured Section: Breaks the Grid */}
      <section className="py-32 px-4 md:px-12 bg-black relative z-10">
        <div className="max-w-7xl mx-auto mb-20">
          <h2 className="text-6xl md:text-8xl font-display font-bold text-white mb-4">
            ARTIFACTS <span className="text-lime-400">UNEARTHED</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-xl font-mono">
            [ARCHIVE_ID: 2501-X] <br />
            Recovered from the digital void. Restored for physical
            manifestation.
          </p>
        </div>

        {/* Staggered/Broken Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-32 gap-x-12">
          <div className="md:col-span-2 relative">
            <div className="absolute -top-12 -left-12 text-9xl font-bold text-white/5 font-display z-0 pointer-events-none">
              01
            </div>
            <ProductCard
              id={1}
              name="CHROME_KICKS_X1"
              price="$450"
              image={chromeKicks}
            />
          </div>
          <div className="md:translate-y-40 relative">
            <div className="absolute -top-12 -right-12 text-9xl font-bold text-white/5 font-display z-0 pointer-events-none">
              02
            </div>
            <ProductCard
              id={2}
              name="VOID_WALKER_VEST"
              price="$890"
              image={voidWalker}
            />
          </div>
          <div className="relative">
            <div className="absolute -bottom-12 -left-12 text-9xl font-bold text-white/5 font-display z-0 pointer-events-none">
              03
            </div>
            <ProductCard
              id={3}
              name="NEURAL_LINK_HUD"
              price="$1,200"
              image={neuralLink}
            />
          </div>
          <div className="md:col-span-2 md:-translate-y-20 relative">
            <div className="absolute -top-12 -right-12 text-9xl font-bold text-white/5 font-display z-0 pointer-events-none">
              04
            </div>
            <ProductCard
              id={4}
              name="ACID_RAIN_COAT"
              price="$680"
              image={acidRain}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
