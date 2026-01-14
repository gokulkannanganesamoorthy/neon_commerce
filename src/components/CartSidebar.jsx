import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '../context/CartContext';
import { ShoppingBag, X, Plus, Minus, Trash2 } from 'lucide-react';
import productSneaker from '../assets/product-sneaker.png';

const CartSidebar = () => {
  const { isOpen, toggleCart, items, updateQuantity, removeItem, cartTotal } =
    useCart();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={toggleCart}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
          />

          {/* Sidebar */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-neon-dark/95 backdrop-blur-xl border-l border-white/10 shadow-2xl z-[70] flex flex-col"
          >
            {/* Header */}
            <div className="flex justify-between items-center p-6 border-b border-white/10">
              <h2 className="text-2xl font-display font-bold flex items-center gap-2">
                <ShoppingBag className="text-neon-pink" size={24} />
                YOUR CART
              </h2>
              <button
                onClick={toggleCart}
                className="p-2 hover:bg-white/10 rounded-full transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-48 text-gray-500">
                  <p>Your cart is empty.</p>
                  <button
                    onClick={toggleCart}
                    className="mt-4 text-neon-blue hover:underline"
                  >
                    Start Shopping
                  </button>
                </div>
              ) : (
                items.map((item) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex gap-4 bg-white/5 border border-white/5 p-4 rounded-lg items-center"
                  >
                    <div className="w-20 h-20 bg-white/5 rounded-md p-2 flex-shrink-0">
                      <img
                        src={productSneaker}
                        alt={item.name}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-sm tracking-wide">
                        {item.name}
                      </h3>
                      <p className="text-neon-pink font-mono text-sm">
                        {item.price}
                      </p>

                      <div className="flex items-center gap-3 mt-2">
                        <button
                          onClick={() => updateQuantity(item.id, -1)}
                          className="w-6 h-6 flex items-center justify-center bg-white/10 rounded hover:bg-neon-blue hover:text-black transition-colors"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="text-sm font-mono w-4 text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, 1)}
                          className="w-6 h-6 flex items-center justify-center bg-white/10 rounded hover:bg-neon-blue hover:text-black transition-colors"
                        >
                          <Plus size={12} />
                        </button>
                      </div>
                    </div>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="p-2 text-gray-500 hover:text-red-500 transition-colors"
                    >
                      <Trash2 size={18} />
                    </button>
                  </motion.div>
                ))
              )}
            </div>

            {/* Footer */}
            <div className="p-6 border-t border-white/10 bg-black/40">
              <div className="flex justify-between items-center mb-6">
                <span className="text-gray-400 uppercase tracking-wider text-sm">
                  Total
                </span>
                <span className="text-3xl font-display font-bold text-white">
                  ${cartTotal.toLocaleString()}
                </span>
              </div>
              <button className="w-full py-4 bg-neon-blue text-black font-bold uppercase tracking-widest hover:bg-white transition-colors relative overflow-hidden group">
                <span className="relative z-10">Checkout</span>
                <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartSidebar;
