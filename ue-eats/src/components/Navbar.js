// import React, { useState, useEffect } from "react";
// import { NavLink, useNavigate } from "react-router-dom";
// import logo from "./Images/logo1.jpg";
// import { FiShoppingCart, FiUser, FiLogOut } from "react-icons/fi";
// import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
// import { RiRestaurantLine } from "react-icons/ri";

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const checkLogin = () => {
//       const token = localStorage.getItem('token');
//       setIsLoggedIn(!!token);
//     };

//     const handleScroll = () => {
//       setScrolled(window.scrollY > 10);
//     };

//     checkLogin();
//     window.addEventListener('loginStatusChanged', checkLogin);
//     window.addEventListener('scroll', handleScroll);

//     return () => {
//       window.removeEventListener('loginStatusChanged', checkLogin);
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   const handleShopClick = () => {
//     navigate("/AddCart");
//   };

//   const handleLogout = () => {
//     localStorage.removeItem('token');
//     window.dispatchEvent(new Event('loginStatusChanged'));
//     setIsLoggedIn(false);
//     navigate("/hero");
//     console.log("User logged out");
//   };

//   return (
//     <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-gray-900 shadow-xl py-2' : 'bg-gray-900/90 backdrop-blur-sm py-3'}`}>
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16">
//           {/* Logo and Branding */}
//           <div className="flex-shrink-0 flex items-center space-x-3">
//             <img src={logo} alt="UNI EATS Logo" className="h-10 w-10 rounded-full object-cover border-2 border-white/20" />
//             <span className="text-white font-bold text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
//               UNI EATS
//             </span>
//           </div>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex items-center space-x-8">
//             <NavLink
//               to="/hero"
//               className={({ isActive }) =>
//                 `text-white px-1 font-medium text-lg relative group transition-colors duration-300 ${
//                   isActive ? 'text-blue-400' : 'hover:text-blue-300'
//                 }`
//               }
//             >
//               Home
//               <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
//             </NavLink>

//             <NavLink
//               to="/Services"
//               className={({ isActive }) =>
//                 `text-white px-1 font-medium text-lg relative group transition-colors duration-300 ${
//                   isActive ? 'text-blue-400' : 'hover:text-blue-300'
//                 }`
//               }
//             >
//               Services
//               <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
//             </NavLink>

//             <NavLink
//               to="/about"
//               className={({ isActive }) =>
//                 `text-white px-1 font-medium text-lg relative group transition-colors duration-300 ${
//                   isActive ? 'text-blue-400' : 'hover:text-blue-300'
//                 }`
//               }
//             >
//               About
//               <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
//             </NavLink>

//             <NavLink
//               to="/contactus"
//               className={({ isActive }) =>
//                 `text-white px-1 font-medium text-lg relative group transition-colors duration-300 ${
//                   isActive ? 'text-blue-400' : 'hover:text-blue-300'
//                 }`
//               }
//             >
//               Contact
//               <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
//             </NavLink>

//             {isLoggedIn ? (
//               <>
//                 <button
//                   onClick={handleShopClick}
//                   className="text-white relative p-2 rounded-full hover:bg-gray-700 transition-colors duration-300"
//                 >
//                   <FiShoppingCart className="w-6 h-6" />
//                   <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
//                     3
//                   </span>
//                 </button>

//                 <button
//                   onClick={handleLogout}
//                   className="flex items-center space-x-1 text-white bg-gradient-to-r from-red-500 to-red-600 px-4 py-2 rounded-lg hover:from-red-600 hover:to-red-700 transition-all duration-300 shadow-lg hover:shadow-red-500/20"
//                 >
//                   <FiLogOut className="w-5 h-5" />
//                   <span>Logout</span>
//                 </button>
//               </>
//             ) : (
//               <div className="flex items-center space-x-4">
//                 <NavLink
//                   to="/Loginn"
//                   className="flex items-center space-x-1 text-white bg-gradient-to-r from-blue-500 to-purple-600 px-4 py-2 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-blue-500/20"
//                 >
//                   <FiUser className="w-5 h-5" />
//                   <span>Login</span>
//                 </NavLink>

//                 <NavLink
//                   to="/Singupp"
//                   className="text-white px-4 py-2 rounded-lg border-2 border-blue-400 hover:bg-blue-400/10 transition-colors duration-300"
//                 >
//                   Sign Up
//                 </NavLink>
//               </div>
//             )}
//           </div>

//           {/* Mobile menu button */}
//           <div className="md:hidden flex items-center">
//             {isLoggedIn && (
//               <button
//                 onClick={handleShopClick}
//                 className="text-white relative p-2 mr-4 rounded-full hover:bg-gray-700 transition-colors duration-300"
//               >
//                 <FiShoppingCart className="w-6 h-6" />
//                 <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
//                   3
//                 </span>
//               </button>
//             )}
            
//             <button
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//               className="text-white p-2 rounded-md hover:bg-gray-700 focus:outline-none"
//             >
//               {isMenuOpen ? (
//                 <HiX className="w-6 h-6" />
//               ) : (
//                 <HiOutlineMenuAlt3 className="w-6 h-6" />
//               )}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Navigation */}
//       <div
//         className={`md:hidden fixed inset-0 bg-gray-900/95 backdrop-blur-sm z-40 transition-all duration-500 ease-in-out ${
//           isMenuOpen ? 'opacity-100 translate-y-16' : 'opacity-0 -translate-y-full pointer-events-none'
//         }`}
//       >
//         <div className="container mx-auto px-4 py-8">
//           <div className="flex flex-col space-y-8">
//             <NavLink
//               to="/hero"
//               onClick={() => setIsMenuOpen(false)}
//               className={({ isActive }) =>
//                 `text-white text-xl font-medium px-4 py-3 rounded-lg transition-colors duration-300 ${
//                   isActive ? 'bg-blue-500/20 text-blue-400' : 'hover:bg-gray-800'
//                 }`
//               }
//             >
//               Home
//             </NavLink>

//             <NavLink
//               to="/Services"
//               onClick={() => setIsMenuOpen(false)}
//               className={({ isActive }) =>
//                 `text-white text-xl font-medium px-4 py-3 rounded-lg transition-colors duration-300 ${
//                   isActive ? 'bg-blue-500/20 text-blue-400' : 'hover:bg-gray-800'
//                 }`
//               }
//             >
//               Services
//             </NavLink>

//             <NavLink
//               to="/about"
//               onClick={() => setIsMenuOpen(false)}
//               className={({ isActive }) =>
//                 `text-white text-xl font-medium px-4 py-3 rounded-lg transition-colors duration-300 ${
//                   isActive ? 'bg-blue-500/20 text-blue-400' : 'hover:bg-gray-800'
//                 }`
//               }
//             >
//               About
//             </NavLink>

//             <NavLink
//               to="/contactus"
//               onClick={() => setIsMenuOpen(false)}
//               className={({ isActive }) =>
//                 `text-white text-xl font-medium px-4 py-3 rounded-lg transition-colors duration-300 ${
//                   isActive ? 'bg-blue-500/20 text-blue-400' : 'hover:bg-gray-800'
//                 }`
//               }
//             >
//               Contact
//             </NavLink>

//             {!isLoggedIn ? (
//               <>
//                 <NavLink
//                   to="/Loginn"
//                   onClick={() => setIsMenuOpen(false)}
//                   className="text-white text-center text-xl font-medium bg-gradient-to-r from-blue-500 to-purple-600 px-4 py-3 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 mt-4"
//                 >
//                   Login
//                 </NavLink>

//                 <NavLink
//                   to="/Singupp"
//                   onClick={() => setIsMenuOpen(false)}
//                   className="text-white text-center text-xl font-medium border-2 border-blue-400 px-4 py-3 rounded-lg hover:bg-blue-400/10 transition-colors duration-300"
//                 >
//                   Sign Up
//                 </NavLink>
//               </>
//             ) : (
//               <button
//                 onClick={() => {
//                   handleLogout();
//                   setIsMenuOpen(false);
//                 }}
//                 className="text-white text-center text-xl font-medium bg-gradient-to-r from-red-500 to-red-600 px-4 py-3 rounded-lg hover:from-red-600 hover:to-red-700 transition-all duration-300 mt-4 flex items-center justify-center space-x-2"
//               >
//                 <FiLogOut className="w-5 h-5" />
//                 <span>Logout</span>
//               </button>
//             )}
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "./Images/logo1.jpg";
import { FiShoppingCart, FiUser, FiLogOut } from "react-icons/fi";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import { FaWhatsapp } from "react-icons/fa"; // Added WhatsApp icon

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const checkLogin = () => {
      const token = localStorage.getItem('token');
      setIsLoggedIn(!!token);
    };

    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    checkLogin();
    window.addEventListener('loginStatusChanged', checkLogin);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('loginStatusChanged', checkLogin);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleShopClick = () => {
    navigate("/AddCart");
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    window.dispatchEvent(new Event('loginStatusChanged'));
    setIsLoggedIn(false);
    navigate("/hero");
    console.log("User logged out");
  };

  const openWhatsApp = () => {
    const phoneNumber = "+923145866629";
    const message = "Hello Uni Eats, I have a question about...";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-gray-900 shadow-xl py-2' : 'bg-gray-900/90 backdrop-blur-sm py-3'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Branding */}
          <div className="flex-shrink-0 flex items-center space-x-3">
            <img src={logo} alt="UNI EATS Logo" className="h-10 w-10 rounded-full object-cover border-2 border-white/20" />
            <span className="text-white font-bold text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              UE EATS
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink
              to="/hero"
              className={({ isActive }) =>
                `text-white px-1 font-medium text-lg relative group transition-colors duration-300 ${
                  isActive ? 'text-blue-400' : 'hover:text-blue-300'
                }`
              }
            >
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
            </NavLink>

            <NavLink
              to="/Services"
              className={({ isActive }) =>
                `text-white px-1 font-medium text-lg relative group transition-colors duration-300 ${
                  isActive ? 'text-blue-400' : 'hover:text-blue-300'
                }`
              }
            >
              Services
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                `text-white px-1 font-medium text-lg relative group transition-colors duration-300 ${
                  isActive ? 'text-blue-400' : 'hover:text-blue-300'
                }`
              }
            >
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
            </NavLink>

            <NavLink
              to="/contactus"
              className={({ isActive }) =>
                `text-white px-1 font-medium text-lg relative group transition-colors duration-300 ${
                  isActive ? 'text-blue-400' : 'hover:text-blue-300'
                }`
              }
            >
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
            </NavLink>

            {/* WhatsApp Button - Desktop */}
            <button
              onClick={openWhatsApp}
              className="flex items-center space-x-1 text-white bg-gradient-to-r from-green-500 to-green-600 px-4 py-2 rounded-lg hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-lg hover:shadow-green-500/20"
            >
              <FaWhatsapp className="w-5 h-5" />
              <span>Chat with Us</span>
            </button>

            {isLoggedIn ? (
              <>
                <button
                  onClick={handleShopClick}
                  className="text-white relative p-2 rounded-full hover:bg-gray-700 transition-colors duration-300"
                >
                  <FiShoppingCart className="w-6 h-6" />
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    3
                  </span>
                </button>

                <button
                  onClick={handleLogout}
                  className="flex items-center space-x-1 text-white bg-gradient-to-r from-red-500 to-red-600 px-4 py-2 rounded-lg hover:from-red-600 hover:to-red-700 transition-all duration-300 shadow-lg hover:shadow-red-500/20"
                >
                  <FiLogOut className="w-5 h-5" />
                  <span>Logout</span>
                </button>
              </>
            ) : (
              <div className="flex items-center space-x-4">
                <NavLink
                  to="/Loginn"
                  className="flex items-center space-x-1 text-white bg-gradient-to-r from-blue-500 to-purple-600 px-4 py-2 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-blue-500/20"
                >
                  <FiUser className="w-5 h-5" />
                  <span>Login</span>
                </NavLink>

                <NavLink
                  to="/Singupp"
                  className="text-white px-4 py-2 rounded-lg border-2 border-blue-400 hover:bg-blue-400/10 transition-colors duration-300"
                >
                  Sign Up
                </NavLink>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            {isLoggedIn && (
              <button
                onClick={handleShopClick}
                className="text-white relative p-2 mr-4 rounded-full hover:bg-gray-700 transition-colors duration-300"
              >
                <FiShoppingCart className="w-6 h-6" />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  3
                </span>
              </button>
            )}
            
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white p-2 rounded-md hover:bg-gray-700 focus:outline-none"
            >
              {isMenuOpen ? (
                <HiX className="w-6 h-6" />
              ) : (
                <HiOutlineMenuAlt3 className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden fixed inset-0 bg-gray-900/95 backdrop-blur-sm z-40 transition-all duration-500 ease-in-out ${
          isMenuOpen ? 'opacity-100 translate-y-16' : 'opacity-0 -translate-y-full pointer-events-none'
        }`}
      >
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col space-y-8">
            <NavLink
              to="/hero"
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) =>
                `text-white text-xl font-medium px-4 py-3 rounded-lg transition-colors duration-300 ${
                  isActive ? 'bg-blue-500/20 text-blue-400' : 'hover:bg-gray-800'
                }`
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/Services"
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) =>
                `text-white text-xl font-medium px-4 py-3 rounded-lg transition-colors duration-300 ${
                  isActive ? 'bg-blue-500/20 text-blue-400' : 'hover:bg-gray-800'
                }`
              }
            >
              Services
            </NavLink>

            <NavLink
              to="/about"
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) =>
                `text-white text-xl font-medium px-4 py-3 rounded-lg transition-colors duration-300 ${
                  isActive ? 'bg-blue-500/20 text-blue-400' : 'hover:bg-gray-800'
                }`
              }
            >
              About
            </NavLink>

            <NavLink
              to="/contactus"
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) =>
                `text-white text-xl font-medium px-4 py-3 rounded-lg transition-colors duration-300 ${
                  isActive ? 'bg-blue-500/20 text-blue-400' : 'hover:bg-gray-800'
                }`
              }
            >
              Contact
            </NavLink>

            {/* WhatsApp Button - Mobile */}
            <button
              onClick={() => {
                openWhatsApp();
                setIsMenuOpen(false);
              }}
              className="flex items-center justify-center space-x-2 text-white text-xl font-medium bg-gradient-to-r from-green-500 to-green-600 px-4 py-3 rounded-lg hover:from-green-600 hover:to-green-700 transition-all duration-300"
            >
              <FaWhatsapp className="w-5 h-5" />
              <span>Chat on WhatsApp</span>
            </button>

            {!isLoggedIn ? (
              <>
                <NavLink
                  to="/Loginn"
                  onClick={() => setIsMenuOpen(false)}
                  className="text-white text-center text-xl font-medium bg-gradient-to-r from-blue-500 to-purple-600 px-4 py-3 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 mt-4"
                >
                  Login
                </NavLink>

                <NavLink
                  to="/Singupp"
                  onClick={() => setIsMenuOpen(false)}
                  className="text-white text-center text-xl font-medium border-2 border-blue-400 px-4 py-3 rounded-lg hover:bg-blue-400/10 transition-colors duration-300"
                >
                  Sign Up
                </NavLink>
              </>
            ) : (
              <button
                onClick={() => {
                  handleLogout();
                  setIsMenuOpen(false);
                }}
                className="text-white text-center text-xl font-medium bg-gradient-to-r from-red-500 to-red-600 px-4 py-3 rounded-lg hover:from-red-600 hover:to-red-700 transition-all duration-300 mt-4 flex items-center justify-center space-x-2"
              >
                <FiLogOut className="w-5 h-5" />
                <span>Logout</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;