import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../redux/ProductSlice';
import ProductCard from '../components/ProductCard';
import SearchBar from '../components/SearchBar';
import Navbar from '../components/Navbar';
import Sliders from '../components/Sliders';
import Festival from '../components/Festival';
import TrendingProducts from '../components/TrendingProducts';
import Testimonials from '../components/Testimonials';

const Products = () => {
  const dispatch = useDispatch();
  const { items: products, loading } = useSelector((state) => state.product);

  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedPrice, setSelectedPrice] = useState('All');

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  // 🔁 Get all unique categories
  const categories = ['All', ...new Set(products.map((p) => p.category))];

  // 🧠 Filtering Logic
  const filtered = products.filter((product) => {
    const matchesSearch = product.title.toLowerCase().includes(search.toLowerCase());
    const matchesCategory =
      selectedCategory === 'All' || product.category === selectedCategory;
    const matchesPrice =
      selectedPrice === 'All' ||
      (selectedPrice === '<500' && product.price < 500) ||
      (selectedPrice === '500-1000' && product.price >= 500 && product.price <= 1000) ||
      (selectedPrice === '>1000' && product.price > 1000);

    return matchesSearch && matchesCategory && matchesPrice;
  });

  return (
    <div className="overflow-x-hidden ">
      <Navbar/>

      <Sliders/>

      <Festival/>

      <TrendingProducts/>

      <Testimonials/>
      
      <div className='p-4 sm:p-10 max-w-7xl mx-auto'>
        <h1 className="text-3xl font-bold mb-6 text-center">Best Seller</h1>

        {/* 🔍 SearchBar */}
        <div className="flex flex-col md:flex-row gap-4 mb-6 items-center">
        <SearchBar onSearch={setSearch} />

        {/* 🧩 Filters */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          {/* Category Filter */}
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="border border-gray-300 rounded px-4 py-2"
          >
            {categories.map((cat) => (
              <option key={cat}>{cat}</option>
            ))}
          </select>

          {/* Price Filter */}
          <select
            value={selectedPrice}
            onChange={(e) => setSelectedPrice(e.target.value)}
            className="border border-gray-300 rounded px-4 py-2"
          >
            <option value="All">All Prices</option>
            <option value="<500">Below ₹500</option>
            <option value="500-1000">₹500–₹1000</option>
            <option value=">1000">Above ₹1000</option>
          </select>
        </div>
        </div>

        {/* 📦 Product Grid */}
        {loading ? (
          <p className="text-center text-xl text-blue-600">Loading...</p>
        ) : filtered.length === 0 ? (
          <p className="text-center text-red-500 text-lg">No products match your filters.</p>
        ) : (
          <div className="grid gap-6 gap-y-24 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}

      </div>
      
    </div>
  );
};

export default Products;
