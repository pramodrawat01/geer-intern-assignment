import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProductById } from '../redux/ProductSlice';
import { useDispatch, useSelector } from 'react-redux';

const ProductDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { selectedProduct: product } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(fetchProductById(id));
  }, [dispatch, id]);

  if (!product) return <p className="text-center mt-20 text-blue-600">Loading product...</p>;

  return (
    <div className="max-w-4xl mx-auto p-6 flex flex-col md:flex-row gap-10 mt-10">
      <img
        src={product.image}
        alt={product.title}
        className="h-[300px] w-[300px] object-contain mx-auto md:mx-0"
      />
      <div>
        <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
        <p className="text-green-600 text-2xl font-semibold mb-2">₹{product.price}</p>
        <p className="text-gray-700 mb-4">{product.description}</p>
        <span className="inline-block px-3 py-1 bg-gray-200 rounded-full text-sm">
          Category: {product.category}
        </span>
      </div>
    </div>
  );
};

export default ProductDetail;
