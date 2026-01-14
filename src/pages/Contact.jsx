import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [terminalText, setTerminalText] = useState('');
  const fullText =
    '> ESTABLISHING ENCRYPTED CONNECTION...\n> NEURAL LINK ACTIVE\n> READY FOR INPUT_';

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < fullText.length) {
        setTerminalText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-black text-lime-400 py-20 px-4 font-mono relative overflow-hidden">
      {/* Scanlines Effect */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(50,205,50,0.1)_50%)] bg-[length:100%_4px] animate-scan" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Terminal Header */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-12 border border-lime-400/30 p-6 bg-lime-400/5"
        >
          <pre className="text-xs md:text-sm whitespace-pre-wrap leading-relaxed">
            {terminalText}
          </pre>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2 }}
          className="space-y-8"
        >
          <div>
            <label className="block text-xs mb-2 tracking-widest">
              {'>'} IDENTITY_PROTOCOL [EMAIL]
            </label>
            <input
              type="email"
              className="w-full bg-transparent border border-lime-400/30 p-4 text-lime-400 focus:border-lime-400 focus:outline-none transition-colors font-mono placeholder:text-lime-400/30"
              placeholder="user@void.net"
            />
          </div>

          <div>
            <label className="block text-xs mb-2 tracking-widest">
              {'>'} SUBJECT_LINE
            </label>
            <input
              type="text"
              className="w-full bg-transparent border border-lime-400/30 p-4 text-lime-400 focus:border-lime-400 focus:outline-none transition-colors font-mono placeholder:text-lime-400/30"
              placeholder="INQUIRY_TYPE"
            />
          </div>

          <div>
            <label className="block text-xs mb-2 tracking-widest">
              {'>'} DATA_PAYLOAD [MESSAGE]
            </label>
            <textarea
              rows="6"
              className="w-full bg-transparent border border-lime-400/30 p-4 text-lime-400 focus:border-lime-400 focus:outline-none transition-colors font-mono resize-none placeholder:text-lime-400/30"
              placeholder="ENTER_TRANSMISSION_DATA..."
            />
          </div>

          <button className="w-full py-4 bg-lime-400 text-black font-bold uppercase tracking-widest hover:bg-white transition-colors relative overflow-hidden group">
            <span className="relative z-10">TRANSMIT_DATA</span>
            <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
          </button>

          <div className="text-xs text-lime-400/50 text-center pt-4">
            [ENCRYPTED_END_TO_END] • [QUANTUM_SECURE] • [NO_LOGS]
          </div>
        </motion.div>

        {/* Decorative Code Block */}
        <div className="mt-20 text-[8px] text-lime-400/20 leading-tight overflow-hidden max-h-32">
          <pre>
            {`01001110 01000101 01010101 01010010 01000001 01001100
01001100 01001001 01001110 01001011 00100000 01000001
01000011 01010100 01001001 01010110 01000101 00100000
01010110 01001111 01001001 01000100 00100000 01000011
01001111 01001101 01001101 01000101 01010010 01000011
01000101 00100000 01010000 01010010 01001111 01010100
01001111 01000011 01001111 01001100 00100000 00110010
00110101 00110000 00110001`}
          </pre>
        </div>
      </div>
    </div>
  );
};

export default Contact;
