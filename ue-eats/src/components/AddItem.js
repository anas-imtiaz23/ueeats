import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiX, FiUpload, FiPlus, FiDollarSign, FiTag, FiAlignLeft, FiBox } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import image from './Images/loginback.jpg';

function AddItems() {
    const [credentials, setCredentials] = useState({
        name: "",
        role: "",
        intro: "",
        Price: "",
        image: null,
        imagePreview: null
    });
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const navigate = useNavigate();

    const API_BASE_URL = 'http://localhost:5000/api/auth/item';

    const onChange = (e) => {
        if (e.target.name === 'image') {
            const file = e.target.files[0];
            if (file) {
                const allowedTypes = ['image/jpeg', 'image/png', 'image/jpg'];
                if (!allowedTypes.includes(file.type)) {
                    setError('Only JPEG, PNG, and JPG images are allowed');
                    return;
                }
                
                const reader = new FileReader();
                reader.onloadend = () => {
                    setCredentials({ 
                        ...credentials, 
                        image: file,
                        imagePreview: reader.result 
                    });
                };
                reader.readAsDataURL(file);
                setError(null);
            }
        } else {
            setCredentials({ ...credentials, [e.target.name]: e.target.value });
        }
    };

    const fetchItems = async () => {
        try {
            const response = await fetch(API_BASE_URL);
            if (!response.ok) throw new Error(`Error: ${response.status}`);
            const json = await response.json();
            setItems(json.items || []);
        } catch (err) {
            console.error('Error fetching items:', err);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        setSuccess(false);

        const { name, role, intro, Price, image } = credentials;
        if (!name || !role || !intro || !Price || !image) {
            setError('All fields are required');
            setLoading(false);
            return;
        }

        const numericPrice = parseFloat(Price);
        if (isNaN(numericPrice)) {
            setError('Price must be a valid number');
            setLoading(false);
            return;
        }

        const formData = new FormData();
        formData.append('name', name);
        formData.append('role', role);
        formData.append('intro', intro);
        formData.append('Price', numericPrice);
        formData.append('image', image);

        try {
            const response = await fetch(API_BASE_URL, { 
                method: 'POST', 
                body: formData 
            });
            const json = await response.json();

            if (!response.ok) {
                throw new Error(json.message || 'Failed to add item');
            }

            setSuccess(true);
            fetchItems();
            setCredentials({ 
                name: "", 
                role: "", 
                intro: "", 
                Price: "", 
                image: null,
                imagePreview: null 
            });
            
            setTimeout(() => setSuccess(false), 3000);
        } catch (err) {
            setError(err.message || 'An error occurred. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchItems();
    }, []);

    return (
        <div 
            className="min-h-screen flex flex-col items-center justify-center p-4 relative bg-cover bg-center bg-no-repeat overflow-hidden"
            style={{ 
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.92), rgba(0, 0, 0, 0.92)), url(${image})`,
                backgroundAttachment: 'fixed'
            }}
        >
            {/* Animated background particles */}
            <div className="absolute inset-0 overflow-hidden opacity-20">
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute bg-indigo-500 rounded-full"
                        style={{
                            width: Math.random() * 5 + 1 + 'px',
                            height: Math.random() * 5 + 1 + 'px',
                            top: Math.random() * 100 + '%',
                            left: Math.random() * 100 + '%',
                        }}
                        animate={{
                            y: [0, (Math.random() * 100 - 50)],
                            x: [0, (Math.random() * 100 - 50)],
                            opacity: [0.2, 0.8, 0.2],
                        }}
                        transition={{
                            duration: Math.random() * 10 + 10,
                            repeat: Infinity,
                            repeatType: 'reverse',
                            ease: 'easeInOut'
                        }}
                    />
                ))}
            </div>

            {/* Close button with animation */}
            <motion.button 
                onClick={() => navigate('/AdminPanel')}
                className="absolute top-6 right-6 bg-gray-900 hover:bg-gray-800 text-white p-3 rounded-full transition-all duration-300 shadow-lg z-50 flex items-center justify-center border border-gray-700"
                aria-label="Close"
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
            >
                <FiX className="text-xl" />
            </motion.button>

            <motion.div 
                className="w-full max-w-4xl mx-auto z-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <div className="text-center mb-10">
                    <motion.h1 
                        className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500 mb-3"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                    >
                        Add New Product
                    </motion.h1>
                    <motion.p 
                        className="text-gray-400 text-lg max-w-2xl mx-auto"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                    >
                        Expand your collection with premium items. Fill out the details below to add a new product.
                    </motion.p>
                </div>

                <motion.div 
                    className="bg-gray-900 bg-opacity-90 backdrop-filter backdrop-blur-lg rounded-xl shadow-2xl overflow-hidden border border-gray-800"
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                >
                    <div className="bg-gradient-to-r from-indigo-800 to-purple-900 p-6 text-center relative overflow-hidden">
                        <div className="absolute inset-0 opacity-20">
                            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white to-transparent opacity-10"></div>
                        </div>
                        <h2 className="text-2xl font-bold text-white relative z-10 flex items-center justify-center">
                            <FiBox className="mr-3" /> Product Information
                        </h2>
                    </div>

                    <form onSubmit={handleSubmit} className="p-8 space-y-6">
                        <AnimatePresence>
                            {success && (
                                <motion.div 
                                    className="bg-green-900 bg-opacity-50 text-green-100 p-4 rounded-lg text-center border border-green-800 flex items-center justify-center"
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    Product added successfully!
                                </motion.div>
                            )}

                            {error && (
                                <motion.div 
                                    className="bg-red-900 bg-opacity-50 text-red-100 p-4 rounded-lg text-center border border-red-800 flex items-center justify-center"
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    {error}
                                </motion.div>
                            )}
                        </AnimatePresence>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.7 }}
                            >
                                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2 flex items-center">
                                    <FiTag className="mr-2" /> Product Name
                                </label>
                                <div className="relative">
                                    <input
                                        type="text"
                                        name="name"
                                        value={credentials.name}
                                        onChange={onChange}
                                        placeholder="Enter product name"
                                        className="w-full px-4 py-3 pl-10 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent text-white placeholder-gray-500 transition-all duration-300"
                                        required
                                    />
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <FiTag className="text-gray-500" />
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.8 }}
                            >
                                <label htmlFor="role" className="block text-sm font-medium text-gray-400 mb-2 flex items-center">
                                    <FiBox className="mr-2" /> Category
                                </label>
                                <div className="relative">
                                    <input
                                        type="text"
                                        name="role"
                                        value={credentials.role}
                                        onChange={onChange}
                                        placeholder="Enter product category"
                                        className="w-full px-4 py-3 pl-10 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent text-white placeholder-gray-500 transition-all duration-300"
                                        required
                                    />
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <FiBox className="text-gray-500" />
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.9 }}
                                className="md:col-span-2"
                            >
                                <label htmlFor="intro" className="block text-sm font-medium text-gray-400 mb-2 flex items-center">
                                    <FiAlignLeft className="mr-2" /> Description
                                </label>
                                <div className="relative">
                                    <textarea
                                        name="intro"
                                        value={credentials.intro}
                                        onChange={onChange}
                                        placeholder="Enter detailed product description"
                                        className="w-full px-4 py-3 pl-10 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent text-white placeholder-gray-500 transition-all duration-300 min-h-[100px]"
                                        required
                                    />
                                    <div className="absolute top-3 left-3 flex items-center pointer-events-none">
                                        <FiAlignLeft className="text-gray-500" />
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 1.0 }}
                            >
                                <label htmlFor="Price" className="block text-sm font-medium text-gray-400 mb-2 flex items-center">
                                    <FiDollarSign className="mr-2" /> Price
                                </label>
                                <div className="relative">
                                    <input
                                        type="number"
                                        name="Price"
                                        value={credentials.Price}
                                        onChange={onChange}
                                        placeholder="0.00"
                                        className="w-full px-4 py-3 pl-10 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent text-white placeholder-gray-500 transition-all duration-300"
                                        step="0.01"
                                        min="0"
                                        required
                                    />
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <FiDollarSign className="text-gray-500" />
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 1.1 }}
                                className="md:col-span-2"
                            >
                                <label htmlFor="image" className="block text-sm font-medium text-gray-400 mb-2">
                                    Product Image
                                </label>
                                <motion.div 
                                    className="flex items-center justify-center w-full"
                                    whileHover={{ scale: 1.01 }}
                                >
                                    <label 
                                        className={`flex flex-col items-center justify-center w-full h-40 border-2 ${isHovered ? 'border-indigo-500' : 'border-gray-700'} border-dashed rounded-lg cursor-pointer bg-gray-800 hover:bg-gray-750 transition-all duration-300 relative overflow-hidden group`}
                                        onMouseEnter={() => setIsHovered(true)}
                                        onMouseLeave={() => setIsHovered(false)}
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 to-purple-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                        <div className="relative z-10 flex flex-col items-center justify-center pt-5 pb-6">
                                            <FiUpload className={`w-10 h-10 mb-3 ${isHovered ? 'text-indigo-400' : 'text-gray-500'} transition-colors duration-300`} />
                                            <p className={`mb-2 text-sm ${isHovered ? 'text-indigo-300' : 'text-gray-400'} transition-colors duration-300`}>
                                                <span className="font-semibold">Click to upload</span> or drag and drop
                                            </p>
                                            <p className="text-xs text-gray-500">
                                                PNG, JPG, JPEG (MAX. 10MB)
                                            </p>
                                        </div>
                                        <input 
                                            id="image" 
                                            name="image" 
                                            type="file" 
                                            className="hidden" 
                                            onChange={onChange} 
                                            accept="image/*" 
                                            required 
                                        />
                                    </label>
                                </motion.div>
                                {credentials.imagePreview && (
                                    <motion.div 
                                        className="mt-4 flex justify-center"
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="relative group">
                                            <img 
                                                src={credentials.imagePreview} 
                                                alt="Preview" 
                                                className="h-48 w-full rounded-lg border border-gray-700 object-cover shadow-lg"
                                            />
                                            <button
                                                type="button"
                                                onClick={() => setCredentials({...credentials, image: null, imagePreview: null})}
                                                className="absolute top-2 right-2 bg-red-600 hover:bg-red-700 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                            >
                                                <FiX className="text-sm" />
                                            </button>
                                        </div>
                                    </motion.div>
                                )}
                            </motion.div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.2 }}
                            className="pt-4"
                        >
                            <motion.button
                                type="submit"
                                disabled={loading}
                                className={`w-full flex justify-center items-center py-4 px-6 rounded-lg shadow-sm text-lg font-medium text-white bg-gradient-to-r from-indigo-600 to-purple-700 hover:from-indigo-700 hover:to-purple-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all ${loading ? 'opacity-80 cursor-not-allowed' : ''} relative overflow-hidden group`}
                                whileHover={!loading ? { scale: 1.02 } : {}}
                                whileTap={!loading ? { scale: 0.98 } : {}}
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <span className="relative z-10 flex items-center">
                                    {loading ? (
                                        <>
                                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            Adding Product...
                                        </>
                                    ) : (
                                        <>
                                            <FiPlus className="mr-3" />
                                            Add Product
                                        </>
                                    )}
                                </span>
                            </motion.button>
                        </motion.div>
                    </form>
                </motion.div>
            </motion.div>
        </div>
    );
}

export default AddItems;