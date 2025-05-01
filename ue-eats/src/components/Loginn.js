import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiMail, FiLock, FiLogIn, FiUserPlus } from 'react-icons/fi';
import ParticlesBg from 'particles-bg';

function Loginn() {
    const [credentials, setCredentials] = useState({ email: "", password: "" });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        if (!credentials.email || !credentials.password) {
            setError("Please fill in both email and password.");
            setLoading(false);
            return;
        }

        // Admin login check
        if (credentials.email === "admin@gmail.com" && credentials.password === "admin123") {
            navigate("/AdminPanel");
            setLoading(false);
            return;
        }

        try {
            const response = await fetch(`http://127.0.0.1:5000/api/auth/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: credentials.email,
                    password: credentials.password,
                }),
            });

            const json = await response.json();
            console.log(json);

            if (json.Success) {
                localStorage.setItem('token', json.authtoken);
                console.log("Token stored:", json.authtoken);
                window.dispatchEvent(new Event("loginStatusChanged"));
                navigate("/team");
            } else {
                setError("Invalid credentials, please try again.");
            }
        } catch (error) {
            setError("An error occurred, please try again later.");
        } finally {
            setLoading(false);
        }
    };

    const handleChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    const handleRegisterClick = () => {
        navigate("/Singupp");
    };

    return (
        <div className="min-h-screen flex flex-col bg-gray-900 relative overflow-hidden">
            {/* Dark-themed animated background particles */}
            <ParticlesBg type="cobweb" bg={true} num={50} color="#4F46E5" />
            
            {/* Navigation */}
            <nav className="bg-gray-800 bg-opacity-90 backdrop-filter backdrop-blur-lg text-white p-4 shadow-lg">
                <div className="container mx-auto flex justify-between items-center">
                    <h1 className="text-2xl font-bold">AcademyPro</h1>
                    <div className="hidden md:flex space-x-6">
                        <a href="#" className="hover:text-indigo-400 transition">Home</a>
                        <a href="#" className="hover:text-indigo-400 transition">Features</a>
                        <a href="#" className="hover:text-indigo-400 transition">About</a>
                        <a href="#" className="hover:text-indigo-400 transition">Contact</a>
                    </div>
                </div>
            </nav>
            
            {/* Main content */}
            <div className="flex-grow flex items-center justify-center p-4 z-10">
                <div className="w-full max-w-md">
                    <div className="bg-gray-800 bg-opacity-90 backdrop-filter backdrop-blur-lg rounded-xl shadow-2xl overflow-hidden border border-gray-700">
                        {/* Form header */}
                        <div className="bg-gradient-to-r from-indigo-700 to-purple-800 p-6 text-center">
                            <h2 className="text-3xl font-bold text-white">Welcome Back</h2>
                            <p className="text-indigo-200 mt-2">Sign in to access your account</p>
                        </div>
                        
                        {/* Form body */}
                        <form onSubmit={handleSubmit} className="p-8">
                            {/* Email field */}
                            <div className="mb-6">
                                <label htmlFor="email" className="block text-gray-300 text-sm font-medium mb-2">
                                    Email Address
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <FiMail className="text-gray-500" />
                                    </div>
                                    <input
                                        type="email"
                                        name="email"
                                        value={credentials.email}
                                        onChange={handleChange}
                                        className="w-full pl-10 pr-3 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
                                        placeholder="you@example.com"
                                        required
                                    />
                                </div>
                            </div>
                            
                            {/* Password field */}
                            <div className="mb-6">
                                <label htmlFor="password" className="block text-gray-300 text-sm font-medium mb-2">
                                    Password
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <FiLock className="text-gray-500" />
                                    </div>
                                    <input
                                        type="password"
                                        name="password"
                                        value={credentials.password}
                                        onChange={handleChange}
                                        className="w-full pl-10 pr-3 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
                                        placeholder="••••••••"
                                        required
                                    />
                                </div>
                            </div>
                            
                            {/* Remember me & forgot password */}
                            <div className="flex items-center justify-between mb-6">
                                <div className="flex items-center">
                                    <input
                                        id="remember-me"
                                        name="remember-me"
                                        type="checkbox"
                                        className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-600 rounded bg-gray-700"
                                    />
                                    <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-300">
                                        Remember me
                                    </label>
                                </div>
                                <div className="text-sm">
                                    <a href="#" className="font-medium text-indigo-400 hover:text-indigo-300">
                                        Forgot password?
                                    </a>
                                </div>
                            </div>
                            
                            {/* Error message */}
                            {error && (
                                <div className="mb-4 p-3 bg-red-900 bg-opacity-50 text-red-100 rounded-lg text-sm border border-red-800">
                                    {error}
                                </div>
                            )}
                            
                            {/* Submit button */}
                            <button
                                type="submit"
                                disabled={loading}
                                className={`w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-lg font-medium text-white bg-gradient-to-r from-indigo-600 to-purple-700 hover:from-indigo-700 hover:to-purple-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
                            >
                                {loading ? (
                                    <>
                                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Signing in...
                                    </>
                                ) : (
                                    <>
                                        <FiLogIn className="mr-2" />
                                        Sign In
                                    </>
                                )}
                            </button>
                            
                            {/* Register link */}
                            <div className="mt-6 text-center">
                                <p className="text-sm text-gray-400">
                                    Don't have an account?{' '}
                                    <button
                                        type="button"
                                        onClick={handleRegisterClick}
                                        className="font-medium text-indigo-400 hover:text-indigo-300 flex items-center justify-center mx-auto"
                                    >
                                        <FiUserPlus className="mr-1" />
                                        Register as Student
                                    </button>
                                </p>
                            </div>
                        </form>
                    </div>
                    
                    {/* Social login options */}
                    <div className="mt-6">
                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-700"></div>
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-2 bg-gray-900 text-gray-400">
                                    Or continue with
                                </span>
                            </div>
                        </div>
                        
                        <div className="mt-6 grid grid-cols-3 gap-3">
                            <button className="w-full inline-flex justify-center py-2 px-4 border border-gray-700 rounded-lg shadow-sm bg-gray-800 text-sm font-medium text-white hover:bg-gray-700 transition">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                                    <path fillRule="evenodd" d="M10 0C4.477 0 0 4.477 0 10c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0110 4.844c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.933.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C17.14 18.163 20 14.418 20 10c0-5.523-4.477-10-10-10z" clipRule="evenodd" />
                                </svg>
                            </button>
                            <button className="w-full inline-flex justify-center py-2 px-4 border border-gray-700 rounded-lg shadow-sm bg-gray-800 text-sm font-medium text-white hover:bg-gray-700 transition">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                                    <path fillRule="evenodd" d="M10 0C4.477 0 0 4.477 0 10c0 5.523 4.477 10 10 10 5.523 0 10-4.477 10-10 0-5.523-4.477-10-10-10zm3 8a3 3 0 11-6 0 3 3 0 016 0zm-3 5c2.761 0 5-1.119 5-2.5 0-1.381-2.239-2.5-5-2.5s-5 1.119-5 2.5c0 1.381 2.239 2.5 5 2.5z" clipRule="evenodd" />
                                </svg>
                            </button>
                            <button className="w-full inline-flex justify-center py-2 px-4 border border-gray-700 rounded-lg shadow-sm bg-gray-800 text-sm font-medium text-white hover:bg-gray-700 transition">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                                    <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Footer */}
            <footer className="bg-gray-800 bg-opacity-90 text-gray-400 p-4 text-center text-sm">
                <p>© 2023 AcademyPro. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default Loginn;
