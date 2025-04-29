// import React, { useState } from "react";
// import { useCart } from "./Context/CartContext"; // Import Cart Context
// import { useNavigate } from "react-router-dom";
// import Contactt from "./Contactt"; // Import Contactt component
// import image from "./Images/loginback.jpg"; // Import Background Image
// import { loadStripe } from "@stripe/stripe-js";
// import { Elements, CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

// // Load Stripe.js
// const stripePromise = loadStripe("pk_test_XXXXXXXXXXXXXXXXXXXXXXXX"); // Replace with your Stripe Publishable Key

// // Stripe Payment Form Component
// const StripePaymentForm = ({ handlePaymentSuccess }) => {
//   const stripe = useStripe();
//   const elements = useElements();
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     if (!stripe || !elements) {
//       return;
//     }

//     setLoading(true);

//     try {
//       // Call your backend to create a Payment Intent
//       const response = await fetch("http://localhost:5000/api/auth/pay", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ amount: 1000 }), // Replace with your total amount
//       });

//       if (!response.ok) {
//         throw new Error("Failed to create payment intent");
//       }

//       const { clientSecret } = await response.json();

//       // Confirm the payment on the client side
//       const { error: stripeError, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
//         payment_method: {
//           card: elements.getElement(CardElement),
//         },
//       });

//       if (stripeError) {
//         setError(stripeError.message);
//       } else if (paymentIntent.status === "succeeded") {
//         handlePaymentSuccess();
//       }
//     } catch (error) {
//       setError(error.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="mt-4">
//       <CardElement className="p-2 border rounded" />
//       {error && <p className="text-red-500 mt-2">{error}</p>}
//       <button
//         type="submit"
//         disabled={!stripe || loading}
//         className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 w-full"
//       >
//         {loading ? "Processing..." : "Pay with Stripe"}
//       </button>
//     </form>
//   );
// };

// const PaymentPage = () => {
//   const { cartItems } = useCart(); // Get cart items from context
//   const [paymentMethod, setPaymentMethod] = useState("");
//   const navigate = useNavigate();

//   // Calculate Grand Total
//   const calculateGrandTotal = () =>
//     cartItems.reduce((sum, item) => sum + parseFloat(item.Price) * item.quantity, 0);

//   // Handle Payment Process
//   const handlePayment = () => {
//     if (!paymentMethod) {
//       alert("Please select a payment method.");
//       return;
//     }

//     if (paymentMethod === "Cash on Delivery") {
//       alert("Order placed successfully! Payment will be collected on delivery.");
//       navigate("/success");
//     }
//   };

//   // Handle Stripe Payment Success
//   const handleStripePaymentSuccess = () => {
//     alert("Payment successful via Stripe!");
//     navigate("/success");
//   };

//   return (
//     <div
//       className="flex flex-col min-h-screen"
//       style={{
//         backgroundImage: `url(${image})`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//       }}
//     >
//       <div className="container mx-auto p-6">
//         <h2 className="text-2xl font-bold mb-6 text-center text-white">Payment Page</h2>

//         {/* Cart Items List */}
//         <div className="bg-white shadow-md p-4 rounded-lg">
//           <h3 className="text-lg font-semibold mb-2">Your Items</h3>
//           {cartItems.length === 0 ? (
//             <p className="text-gray-600">Your cart is empty.</p>
//           ) : (
//             <ul>
//               {cartItems.map((item) => (
//                 <li key={item.name} className="border-b py-2 flex justify-between">
//                   <span>{item.name} (x{item.quantity})</span>
//                   <span>{parseFloat(item.Price) * item.quantity} PKR</span>
//                 </li>
//               ))}
//             </ul>
//           )}
//           <p className="font-bold mt-4">Total: {calculateGrandTotal()} PKR</p>
//         </div>

//         {/* Payment Method Selection */}
//         <div className="mt-6">
//           <h3 className="text-lg font-semibold mb-2 text-white">Select Payment Method</h3>
//           <label className="block mb-2 text-white">
//             <input
//               type="radio"
//               name="payment"
//               value="Stripe"
//               onChange={(e) => setPaymentMethod(e.target.value)}
//             />{" "}
//             Stripe
//           </label>
//           <label className="block text-white">
//             <input
//               type="radio"
//               name="payment"
//               value="Cash on Delivery"
//               onChange={(e) => setPaymentMethod(e.target.value)}
//             />{" "}
//             Cash on Delivery
//           </label>
//         </div>

//         {/* Stripe Payment Form */}
//         {paymentMethod === "Stripe" && (
//           <Elements stripe={stripePromise}>
//             <StripePaymentForm handlePaymentSuccess={handleStripePaymentSuccess} />
//           </Elements>
//         )}

//         {/* Contactt Form for User Details */}
//         <div className="mt-10">
//           <h3 className="text-lg font-semibold text-center text-white mb-4">Enter Your Details</h3>
//           <Contactt />
//         </div>

//         {/* Pay Now Button for Cash on Delivery */}
//         {paymentMethod === "Cash on Delivery" && (
//           <button
//             onClick={handlePayment}
//             className="mt-6 bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 w-full"
//           >
//             Place Order
//           </button>
//         )}
//       </div>
//     </div>
//   );
// };

// export default PaymentPage;
import React, { useState, useEffect } from "react";
import { useCart } from "./Context/CartContext";
import { useNavigate } from "react-router-dom";
import Contactt from "./Contactt";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { motion } from "framer-motion";
import { FiCreditCard, FiTruck, FiCheck, FiShoppingCart } from "react-icons/fi";

// Load Stripe.js
const stripePromise = loadStripe("pk_test_XXXXXXXXXXXXXXXXXXXXXXXX");

// Stripe Payment Form Component
const StripePaymentForm = ({ handlePaymentSuccess }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) return;

    setLoading(true);
    setError(null);

    try {
      const response = await fetch("http://localhost:5000/api/auth/pay", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: 1000 }),
      });

      if (!response.ok) throw new Error("Failed to create payment intent");
      const { clientSecret } = await response.json();

      const { error: stripeError, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: { card: elements.getElement(CardElement) },
      });

      if (stripeError) throw new Error(stripeError.message);
      if (paymentIntent.status === "succeeded") handlePaymentSuccess();
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.form 
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mt-6"
    >
      <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
        <CardElement 
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#fff',
                '::placeholder': { color: '#a0aec0' },
              },
              invalid: { color: '#e53e3e' },
            },
          }}
          className="p-3 bg-gray-700 rounded"
        />
      </div>
      
      {error && (
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-red-400 mt-2 text-sm"
        >
          {error}
        </motion.p>
      )}
      
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        type="submit"
        disabled={!stripe || loading}
        className={`mt-6 w-full py-3 px-6 rounded-lg font-medium transition-all ${
          loading ? 'bg-indigo-700' : 'bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700'
        } text-white shadow-lg`}
      >
        {loading ? (
          <span className="flex items-center justify-center">
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Processing Payment...
          </span>
        ) : (
          "Pay Securely with Stripe"
        )}
      </motion.button>
    </motion.form>
  );
};

const PaymentPage = () => {
  const { cartItems } = useCart();
  const [paymentMethod, setPaymentMethod] = useState("");
  const [isMounted, setIsMounted] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  const calculateGrandTotal = () =>
    cartItems.reduce((sum, item) => sum + parseFloat(item.Price) * item.quantity, 0);

  const handlePayment = () => {
    if (!paymentMethod) {
      alert("Please select a payment method.");
      return;
    }
    if (paymentMethod === "Cash on Delivery") {
      alert("Order placed successfully! Payment will be collected on delivery.");
      navigate("/success");
    }
  };

  const handleStripePaymentSuccess = () => {
    alert("Payment successful via Stripe!");
    navigate("/success");
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden opacity-20">
        {[...Array(20)].map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-indigo-500"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 300 + 100}px`,
              height: `${Math.random() * 300 + 100}px`,
              filter: 'blur(80px)',
              opacity: 0.3,
            }}
          />
        ))}
      </div>

      {/* Added pt-20 (5rem) padding to create space below navbar */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 py-12 sm:px-6 lg:px-8 pt-20">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isMounted ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 to-purple-400">
            Secure Checkout
          </h1>
          <p className="mt-4 text-xl text-gray-400 max-w-3xl mx-auto">
            Complete your purchase with confidence
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Order Summary */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isMounted ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-gray-800 rounded-xl shadow-2xl overflow-hidden"
          >
            <div className="p-6 border-b border-gray-700">
              <h2 className="text-2xl font-bold flex items-center">
                <FiShoppingCart className="mr-2" />
                Order Summary
              </h2>
            </div>
            
            <div className="p-6">
              {cartItems.length === 0 ? (
                <p className="text-gray-400">Your cart is empty.</p>
              ) : (
                <ul className="divide-y divide-gray-700">
                  {cartItems.map((item) => (
                    <motion.li 
                      key={item.name}
                      whileHover={{ x: 5 }}
                      className="py-4 flex justify-between items-center"
                    >
                      <div>
                        <p className="font-medium">{item.name}</p>
                        <p className="text-sm text-gray-400">Qty: {item.quantity}</p>
                      </div>
                      <p className="font-medium">
                        {parseFloat(item.Price) * item.quantity} PKR
                      </p>
                    </motion.li>
                  ))}
                </ul>
              )}
              
              <div className="mt-6 pt-4 border-t border-gray-700">
                <div className="flex justify-between text-lg font-bold">
                  <span>Total</span>
                  <span className="text-indigo-400">{calculateGrandTotal()} PKR</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Payment Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isMounted ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Payment Methods */}
            <div className="bg-gray-800 rounded-xl shadow-2xl overflow-hidden">
              <div className="p-6 border-b border-gray-700">
                <h2 className="text-2xl font-bold">Payment Method</h2>
              </div>
              
              <div className="p-6 space-y-4">
                <motion.div 
                  whileHover={{ scale: 1.01 }}
                  className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                    paymentMethod === "Stripe" 
                      ? "border-indigo-500 bg-indigo-500/10" 
                      : "border-gray-700 hover:border-gray-600"
                  }`}
                  onClick={() => setPaymentMethod("Stripe")}
                >
                  <div className="flex items-center">
                    <div className={`p-2 rounded-full mr-4 ${
                      paymentMethod === "Stripe" ? "bg-indigo-500" : "bg-gray-700"
                    }`}>
                      <FiCreditCard className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-medium">Credit/Debit Card</h3>
                      <p className="text-sm text-gray-400">Pay securely with Stripe</p>
                    </div>
                    {paymentMethod === "Stripe" && (
                      <div className="ml-auto bg-indigo-500 rounded-full p-1">
                        <FiCheck className="text-white text-sm" />
                      </div>
                    )}
                  </div>
                </motion.div>
                
                <motion.div 
                  whileHover={{ scale: 1.01 }}
                  className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                    paymentMethod === "Cash on Delivery" 
                      ? "border-indigo-500 bg-indigo-500/10" 
                      : "border-gray-700 hover:border-gray-600"
                  }`}
                  onClick={() => setPaymentMethod("Cash on Delivery")}
                >
                  <div className="flex items-center">
                    <div className={`p-2 rounded-full mr-4 ${
                      paymentMethod === "Cash on Delivery" ? "bg-indigo-500" : "bg-gray-700"
                    }`}>
                      <FiTruck className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-medium">Cash on Delivery</h3>
                      <p className="text-sm text-gray-400">Pay when you receive your order</p>
                    </div>
                    {paymentMethod === "Cash on Delivery" && (
                      <div className="ml-auto bg-indigo-500 rounded-full p-1">
                        <FiCheck className="text-white text-sm" />
                      </div>
                    )}
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Payment Form */}
            {paymentMethod === "Stripe" && (
              <Elements stripe={stripePromise}>
                <StripePaymentForm handlePaymentSuccess={handleStripePaymentSuccess} />
              </Elements>
            )}

            {paymentMethod === "Cash on Delivery" && (
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handlePayment}
                className="w-full py-3 px-6 bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 text-white font-medium rounded-lg shadow-lg transition-all"
              >
                Place Order (Cash on Delivery)
              </motion.button>
            )}

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="bg-gray-800 rounded-xl shadow-2xl overflow-hidden"
            >
              <div className="p-6 border-b border-gray-700">
                <h2 className="text-2xl font-bold">Your Details</h2>
                <p className="text-sm text-gray-400 mt-1">
                  We'll use this information to process your order
                </p>
              </div>
              <div className="p-6">
                <Contactt />
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Security Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-12 flex flex-wrap justify-center gap-6 items-center text-gray-400"
        >
          <div className="flex items-center">
            <svg className="w-5 h-5 mr-2 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
            </svg>
            <span>Secure Payment</span>
          </div>
          <div className="flex items-center">
            <svg className="w-5 h-5 mr-2 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
            </svg>
            <span>Data Encrypted</span>
          </div>
          <div className="flex items-center">
            <svg className="w-5 h-5 mr-2 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path>
            </svg>
            <span>SSL Certified</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PaymentPage;