import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import image from './Images/loginback.jpg';

function Signupp() {
    const [credentials, setCredentials] = useState({ name: "", email: "", password: "", cpassword: "" });
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const validateForm = () => {
        const newErrors = {};
        if (!credentials.name.trim()) newErrors.name = "Name is required";
        if (!credentials.email.match(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/)) 
            newErrors.email = "Invalid email address";
        if (credentials.password.length < 6) 
            newErrors.password = "Password must be at least 6 characters";
        if (credentials.password !== credentials.cpassword) 
            newErrors.cpassword = "Passwords do not match";
        
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        setLoading(true);

        try {
            const response = await fetch(`http://localhost:5000/api/auth/createuser`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ 
                    name: credentials.name, 
                    email: credentials.email, 
                    password: credentials.password 
                })
            });

            const json = await response.json();
            console.log(json);

            if (json.Success) {
                localStorage.setItem('token', json.authtoken);
                navigate("/hero");
            } else {
                alert(json.error || 'Registration failed. Please try again.');
            }
        } catch (error) {
            console.error("Error during registration:", error);
            alert('An error occurred. Please try again later.');
        } finally {
            setLoading(false);
        }
    };

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
        // Clear error when user starts typing
        if (errors[e.target.name]) {
            setErrors({...errors, [e.target.name]: null});
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-900 pt-20 pb-8 px-4" 
             style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundAttachment: "fixed"
             }}>
            <div className="w-full max-w-md">
                <div className="bg-gray-800 rounded-xl shadow-2xl overflow-hidden">
                    <div className="p-1 bg-gradient-to-r from-purple-600 to-blue-500"></div>
                    
                    <div className="p-8">
                        <div className="flex justify-center mb-6">
                            <div className="bg-gradient-to-r from-purple-600 to-blue-500 p-2 rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
                                </svg>
                            </div>
                        </div>
                        
                        <h2 className="text-3xl font-bold text-center text-white mb-2">Create Account</h2>
                        <p className="text-center text-gray-400 mb-8">Join us today and unlock exclusive features</p>
                        
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Full Name</label>
                                <input
                                    type="text"
                                    className={`w-full px-4 py-3 rounded-lg bg-gray-700 border ${errors.name ? 'border-red-500' : 'border-gray-600'} focus:outline-none focus:ring-2 focus:ring-blue-500 text-white`}
                                    value={credentials.name}
                                    onChange={onChange}
                                    name="name"
                                    id="name"
                                    placeholder="John Doe"
                                />
                                {errors.name && <p className="mt-1 text-sm text-red-400">{errors.name}</p>}
                            </div>
                            
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email Address</label>
                                <input
                                    type="email"
                                    className={`w-full px-4 py-3 rounded-lg bg-gray-700 border ${errors.email ? 'border-red-500' : 'border-gray-600'} focus:outline-none focus:ring-2 focus:ring-blue-500 text-white`}
                                    value={credentials.email}
                                    onChange={onChange}
                                    name="email"
                                    id="email"
                                    placeholder="your@email.com"
                                />
                                {errors.email && <p className="mt-1 text-sm text-red-400">{errors.email}</p>}
                            </div>
                            
                            <div>
                                <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-1">Password</label>
                                <input
                                    type="password"
                                    className={`w-full px-4 py-3 rounded-lg bg-gray-700 border ${errors.password ? 'border-red-500' : 'border-gray-600'} focus:outline-none focus:ring-2 focus:ring-blue-500 text-white`}
                                    value={credentials.password}
                                    onChange={onChange}
                                    name="password"
                                    id="password"
                                    placeholder="••••••••"
                                />
                                {errors.password && <p className="mt-1 text-sm text-red-400">{errors.password}</p>}
                            </div>
                            
                            <div>
                                <label htmlFor="cpassword" className="block text-sm font-medium text-gray-300 mb-1">Confirm Password</label>
                                <input
                                    type="password"
                                    className={`w-full px-4 py-3 rounded-lg bg-gray-700 border ${errors.cpassword ? 'border-red-500' : 'border-gray-600'} focus:outline-none focus:ring-2 focus:ring-blue-500 text-white`}
                                    value={credentials.cpassword}
                                    onChange={onChange}
                                    name="cpassword"
                                    id="cpassword"
                                    placeholder="••••••••"
                                />
                                {errors.cpassword && <p className="mt-1 text-sm text-red-400">{errors.cpassword}</p>}
                            </div>
                            
                            <button 
                                type="submit" 
                                className={`w-full bg-gradient-to-r from-purple-600 to-blue-500 text-white py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-600 transition duration-300 ${loading ? 'opacity-70 cursor-not-allowed' : ''}`} 
                                disabled={loading}
                            >
                                {loading ? (
                                    <span className="flex items-center justify-center">
                                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Creating Account...
                                    </span>
                                ) : 'Sign Up'}
                            </button>
                        </form>
                        
                        <div className="mt-6 text-center">
                            <p className="text-gray-400">
                                Already have an account? 
                                <a href="/login" className="text-blue-400 hover:text-blue-300 ml-1 font-medium">Sign in</a>
                            </p>
                        </div>
                    </div>
                    
                    <div className="px-8 py-4 bg-gray-700 text-center">
                        <p className="text-gray-400 text-xs">
                            By signing up, you agree to our <a href="#" className="text-blue-400 hover:underline">Terms of Service</a> and <a href="#" className="text-blue-400 hover:underline">Privacy Policy</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Signupp;