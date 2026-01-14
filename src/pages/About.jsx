import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="min-h-screen bg-white text-black py-40 px-4 md:px-12 relative overflow-hidden">
      {/* Background Texture */}
      <div className="fixed inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0.1),transparent_50%)]" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Massive Typography */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-32"
        >
          <h1 className="text-[15vw] md:text-[12rem] font-display font-bold leading-[0.85] tracking-tighter mb-8">
            MANI
            <br />
            FESTO
          </h1>
          <div className="w-32 h-1 bg-lime-400" />
        </motion.div>

        {/* Content Blocks */}
        <div className="space-y-32">
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            <div className="md:col-span-1">
              <span className="font-mono text-xs tracking-widest text-gray-500">
                ARTICLE_01
              </span>
            </div>
            <div className="md:col-span-2">
              <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 leading-tight">
                We reject the ordinary.
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed">
                NEON COMMERCE exists at the intersection of the physical and the
                void. We curate artifacts for those who refuse to conform to the
                present timeline. Our collections are not products—they are
                statements of existence beyond conventional reality.
              </p>
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            <div className="md:col-span-1">
              <span className="font-mono text-xs tracking-widest text-gray-500">
                ARTICLE_02
              </span>
            </div>
            <div className="md:col-span-2">
              <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 leading-tight">
                Fashion from the singularity.
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                Each piece is recovered from the digital void, reconstructed in
                physical form. We don't follow trends. We create temporal
                anomalies.
              </p>
              <div className="flex gap-4 font-mono text-sm">
                <div className="px-4 py-2 bg-black text-lime-400">
                  VOID_CERTIFIED
                </div>
                <div className="px-4 py-2 border border-black">EST_2499</div>
              </div>
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            <div className="md:col-span-1">
              <span className="font-mono text-xs tracking-widest text-gray-500">
                ARTICLE_03
              </span>
            </div>
            <div className="md:col-span-2">
              <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 leading-tight">
                Join the evolution.
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed">
                This is not a store. This is a portal. Step through.
              </p>
            </div>
          </motion.section>
        </div>

        {/* Large Number Decoration */}
        <div className="fixed bottom-0 right-0 text-[30vw] font-display font-bold text-black/5 leading-none pointer-events-none">
          25
        </div>
      </div>
    </div>
  );
};

export default About;
