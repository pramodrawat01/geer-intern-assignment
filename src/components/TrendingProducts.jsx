import React, { useState } from 'react';
import productsData from '../data/trendingProducts.json';

const TrendingProducts = () => {
  const [visibleCount, setVisibleCount] = useState(4);
  const showAll = visibleCount === 10;

  const toggleView = () => {
    setVisibleCount(showAll ? 4 : 10);
  };

  return (
    <div className="w-full px-6 py-10 mt-[100px]">
      <h2 className="text-4xl font-semibold mb-6 text-center font-premium">
        Trending Products
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-[50px]">
        {productsData.slice(0, visibleCount).map((product) => (
          <div
            key={product.id}
            className="border rounded-xl overflow-hidden shadow hover:shadow-lg transition group"
          >
            <div className="overflow-hidden">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="p-4">
              <div className="flex justify-between items-start">
                <div className=''>
                  <h3 className="text-lg font-semibold flex items-center gap-1">
                    {product.title}
                  </h3>
                  <p className="text-gray-600 font-medium">{product.price}</p>
                </div>
                
                <span className="text-yellow-500 text-sm">
                    {'⭐'.repeat(product.rating || 4)}
                  </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-8">
        <button
          onClick={toggleView}
          className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition"
        >
          {showAll ? 'Show Less' : 'See More'}
        </button>
      </div>
    </div>
  );
};

export default TrendingProducts;
