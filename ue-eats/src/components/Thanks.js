import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle } from 'react-feather';

function Thanks() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white flex flex-col items-center justify-center p-4">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full bg-gray-800 rounded-xl shadow-2xl overflow-hidden border border-gray-700"
      >
        <div className="p-8 text-center">
          <div className="flex justify-center mb-6">
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 0.8, repeat: Infinity, repeatDelay: 3 }}
            >
              <CheckCircle className="text-green-400" size={80} strokeWidth={1.5} />
            </motion.div>
          </div>
          
          <h1 className="text-3xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-green-300 to-blue-400">
            Order Complete!
          </h1>
          
          <p className="text-gray-300 mb-6">
            Thank you for your purchase! Your order has been received and is being processed. 
            We'll send you a confirmation email shortly.
          </p>
          
          <div className="mb-8">
            <div className="h-1 bg-gray-700 rounded-full overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 2, delay: 0.5 }}
                className="h-full bg-gradient-to-r from-purple-500 to-blue-500"
              />
            </div>
          </div>
          
          <div className="space-y-4">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => navigate('/')}
              className="w-full py-3 px-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-medium hover:shadow-lg transition-all"
            >
              Back to Home
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => navigate('/orders')}
              className="w-full py-3 px-4 bg-gray-700 rounded-lg font-medium hover:bg-gray-600 transition-all"
            >
              View Your Orders
            </motion.button>
          </div>
        </div>
        
        <div className="bg-gray-900/50 px-8 py-4 text-center text-sm text-gray-400">
          Need help? <a href="#" className="text-blue-400 hover:underline">Contact support</a>
        </div>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 text-gray-400 text-sm"
      >
        Thank you for choosing us ❤️
      </motion.div>
    </div>
  );
}

export default Thanks;