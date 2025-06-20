import React from 'react';
import testimonialData from '../data/testimonials.json';

const renderStars = (rating) => {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  const empty = 5 - full - (half ? 1 : 0);
  return (
    <>
      {'★'.repeat(full)}
      {half && '½'}
      {'☆'.repeat(empty)}
    </>
  );
};

const Testimonials = () => {
  return (
    <div className="w-full px-6 py-20 bg-white">
      <h2 className="text-4xl font-semibold text-center mb-16 font-premium">
        What Our Customers Say
      </h2>

      <div className="overflow-x-auto scrollbar-hide overflow-visible">
        <div className="flex gap-10 w-max px-2">
          {testimonialData.map((user) => (
           <div
            key={user.id}
            className="relative w-[360px] h-[380px] bg-gray-50 rounded-2xl shadow-md flex-shrink-0 group hover:shadow-xl transition duration-300 flex flex-col justify-end items-center pb-6 px-6 pt-10 mt-[72px]"
            >
            {/* Profile Image - centered & overflowing from top */}
            <div className="absolute inset-x-0 -top-[72px] flex justify-center">
                <img
                src={user.image}
                alt={user.name}
                className="w-48 h-[230px] rounded-3xl object-cover border-2 border-gray-200  shadow-xl"
                />
            </div>

            {/* Text content at bottom */}
            <div className="text-center mt-auto">
                <p className="text-gray-700 italic text-sm mb-4 leading-relaxed">
                “{user.quote}”
                </p>
                <div className="text-yellow-500 text-sm font-semibold mb-1">
                {renderStars(user.rating)}
                </div>
                <h3 className="text-lg font-semibold">{user.name}</h3>
                <p className="text-gray-500 text-sm">{user.role}</p>
            </div>
            </div>


          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
