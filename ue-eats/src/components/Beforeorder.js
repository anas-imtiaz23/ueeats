import React from "react";
import { useNavigate } from "react-router-dom";

// Import images (keep your existing imports)
import image from './Images/secondbackground.jpeg';
import image1 from './Images/lays.jpg';
import image2 from './Images/tea.jpg';
import image3 from './Images/baryani.jpeg';
import image4 from './Images/mango.jpeg';
import image5 from './Images/samoa.jpeg';
import image6 from './Images/mutton nahari.jpeg';
import image7 from './Images/cold drinks.jpeg';
import image8 from './Images/shawarma.jpeg';
import image9 from './Images/juices.jpeg';
import image10 from './Images/stick fries.jpeg';
import image11 from './Images/Simple burger.jpeg';

const FoodMenu = () => {
  const navigate = useNavigate();

  const menuItems = [
    { 
      name: "Signature Burger", 
      role: "Juicy beef patty with special sauce", 
      img: image, 
      intro: "Our bestseller with fresh lettuce, tomatoes, and melted cheese",
      price: "220 Rs",
      rating: 4.8
    },
    { 
      name: "Premium Lays", 
      role: "Hand-cut potato chips", 
      img: image1, 
      intro: "Crispy golden chips with a sprinkle of sea salt",
      price: "120 Rs",
      rating: 4.5
    },
    { 
      name: "Artisan Tea", 
      role: "Handcrafted tea blends", 
      img: image2, 
      intro: "Premium leaves brewed to perfection",
      price: "200 Rs",
      rating: 4.7
    },
    { 
      name: "Royal Biryani", 
      role: "Fragrant basmati rice with chicken", 
      img: image3, 
      intro: "Slow-cooked with authentic spices and herbs",
      price: "500 Rs",
      rating: 4.9
    },
    { 
      name: "Tropical Mango Juice", 
      role: "Fresh mango delight", 
      img: image4, 
      intro: "100% natural with no added preservatives",
      price: "340 Rs",
      rating: 4.6
    },
    { 
      name: "Craft Sodas", 
      role: "Premium cold beverages", 
      img: image7, 
      intro: "Small-batch brewed with natural flavors",
      price: "220 Rs",
      rating: 4.4
    },
    { 
      name: "Golden Samosa", 
      role: "Crispy pastry pockets", 
      img: image5, 
      intro: "Stuffed with spiced potatoes and peas",
      price: "60 Rs",
      rating: 4.7
    },
    { 
      name: "Heritage Nahari", 
      role: "Slow-cooked mutton stew", 
      img: image6, 
      intro: "Traditional recipe with overnight marination",
      price: "500 Rs",
      rating: 4.9
    },
    { 
      name: "Gourmet Shawarma", 
      role: "Marinated chicken wraps", 
      img: image8, 
      intro: "Served with garlic sauce and fresh veggies",
      price: "300 Rs",
      rating: 4.8
    },
    { 
      name: "Fresh Juices", 
      role: "Cold-pressed varieties", 
      img: image9, 
      intro: "Daily prepared with seasonal fruits",
      price: "230 Rs",
      rating: 4.6
    },
    { 
      name: "Crunchy Fries", 
      role: "Seasoned potato sticks", 
      img: image10, 
      intro: "Double-fried for extra crispiness",
      price: "250 Rs",
      rating: 4.5
    },
    { 
      name: "Classic Burger", 
      role: "Timeless favorite", 
      img: image11, 
      intro: "Simple, fresh, and always satisfying",
      price: "220 Rs",
      rating: 4.6
    }
  ];

  const handleOrderClick = (itemName) => {
    const isLoggedIn = localStorage.getItem("token");
    if (isLoggedIn) {
      navigate("/payment", { state: { item: itemName } });
    } else {
      navigate("/loginn", { state: { from: "menu", item: itemName } });
    }
  };

  return (
    <section 
      id="menu" 
      className="py-16 relative overflow-hidden"
      style={{
        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed"
      }}
    >
      {/* Animated floating food icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div 
            key={i}
            className="absolute text-yellow-400 opacity-20"
            style={{
              fontSize: `${Math.random() * 20 + 10}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 10 + 10}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          >
            {['🍔', '🍟', '🍕', '🥗', '🍣', '🍩', '🍦', '🍜', '🍛', '🍹', '☕', '🍪'][i % 12]}
          </div>
        ))}
      </div>
      
      <div className="container mx-auto px-6 lg:px-16 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-extrabold mb-4 text-white">
            <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-transparent bg-clip-text">
              Our Delicious Menu
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Handcrafted with premium ingredients and served with passion
          </p>
        </div>
        
        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {menuItems.map((item) => (
            <div
              key={item.name}
              className="group bg-white bg-opacity-10 backdrop-filter backdrop-blur-sm rounded-xl shadow-2xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-opacity-20 border border-white border-opacity-10"
            >
              {/* Image Section with overlay */}
              <div className="relative overflow-hidden h-48">
                <img
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  src={item.img}
                  alt={item.name}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="bg-yellow-500 text-xs font-semibold px-2 py-1 rounded-full">
                    {item.rating} ★
                  </span>
                </div>
                <div className="absolute bottom-4 right-4 text-white font-bold text-lg">
                  {item.price}
                </div>
              </div>
              
              {/* Card Content */}
              <div className="p-6 text-white">
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-bold mb-1">{item.name}</h3>
                </div>
                <p className="text-yellow-300 text-sm mb-2">{item.role}</p>
                <p className="text-gray-200 text-sm mb-4">{item.intro}</p>
                <button
                  onClick={() => handleOrderClick(item.name)}
                  className="w-full py-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-black font-bold rounded-lg shadow-lg hover:from-yellow-600 hover:to-orange-600 transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                  </svg>
                  Order Now
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {/* Special Offer Banner */}
        <div className="mt-16 p-6 bg-gradient-to-r from-red-600 to-orange-500 rounded-xl shadow-xl flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0">
            <h3 className="text-2xl font-bold text-white">Special Offer!</h3>
            <p className="text-yellow-100">Order 3 items and get 15% discount</p>
          </div>
          <button 
            onClick={() => navigate("/offers")}
            className="px-6 py-3 bg-white text-orange-600 font-bold rounded-lg hover:bg-gray-100 transition"
          >
            View All Offers
          </button>
        </div>
      </div>
      
      {/* CSS for floating animation */}
      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(10deg); }
          100% { transform: translateY(0) rotate(0deg); }
        }
      `}</style>
    </section>
  );
};

export default FoodMenu;