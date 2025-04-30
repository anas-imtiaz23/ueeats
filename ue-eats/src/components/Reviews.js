import React from 'react';
import { FaStar, FaQuoteLeft, FaUser } from 'react-icons/fa';

const Reviews = () => {
  // Sample reviews from Pakistani customers
  const reviews = [
    {
      id: 1,
      name: "Ali Khan",
      location: "Lahore",
      rating: 5,
      comment: "Uni Eats has completely transformed my university life! The biryani is just like home, and delivery is always on time.",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      id: 2,
      name: "Fatima Ahmed",
      location: "Islamabad",
      rating: 4,
      comment: "As a busy student, this service saves me so much time. The haleem during winter is absolutely divine!",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      id: 3,
      name: "Usman Malik",
      location: "Karachi",
      rating: 5,
      comment: "Best food delivery app for students! Their student discounts make quality food affordable.",
      avatar: "https://randomuser.me/api/portraits/men/67.jpg"
    },
    {
      id: 4,
      name: "Sana Javed",
      location: "Peshawar",
      rating: 5,
      comment: "The tikka boti and naan are to die for! Never disappoints, even during late-night study sessions.",
      avatar: "https://randomuser.me/api/portraits/women/68.jpg"
    },
    {
      id: 5,
      name: "Bilal Hassan",
      location: "Faisalabad",
      rating: 4,
      comment: "Great variety of local cuisine. Love that they include traditional dishes from all regions of Pakistan.",
      avatar: "https://randomuser.me/api/portraits/men/75.jpg"
    },
    {
      id: 6,
      name: "Ayesha Riaz",
      location: "Multan",
      rating: 5,
      comment: "Their customer service is exceptional. When my order was delayed, they compensated generously.",
      avatar: "https://randomuser.me/api/portraits/women/63.jpg"
    }
  ];

  // Function to render star ratings
  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <FaStar 
        key={i} 
        className={i < rating ? "text-yellow-400" : "text-gray-600"} 
      />
    ));
  };

  return (
    <div className="bg-gray-900 py-20 px-4 sm:px-6 lg:px-8"> {/* Increased py-16 to py-20 */}
      <div className="max-w-7xl mx-auto">
        {/* Added mt-12 for more top margin */}
        <div className="text-center mb-12 mt-12"> 
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            What Our <span className="text-green-500">University</span> Students Say
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-300 sm:mt-4">
            Real reviews from students and food lovers across Pakistan
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div 
              key={review.id}
              className="bg-gray-800 p-6 rounded-lg shadow-lg transform transition-all hover:scale-105 hover:shadow-xl"
            >
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0">
                  <img 
                    className="h-12 w-12 rounded-full object-cover border-2 border-green-500"
                    src={review.avatar} 
                    alt={review.name}
                  />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-white">{review.name}</h4>
                  <p className="text-green-400 text-sm">{review.location}</p>
                </div>
              </div>
              
              <div className="flex mb-3">
                {renderStars(review.rating)}
              </div>
              
              <div className="relative">
                <FaQuoteLeft className="absolute -top-2 -left-1 text-gray-600 text-xl" />
                <p className="text-gray-300 pl-6 italic">"{review.comment}"</p>
              </div>
              
              <div className="mt-4 pt-4 border-t border-gray-700 flex justify-end">
                <span className="text-xs text-gray-400">
                  Verified Customer
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center"> {/* Increased mt-12 to mt-16 */}
          <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 transition-colors duration-300 shadow-lg hover:shadow-green-500/30">
            Share Your Experience
            <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Reviews;