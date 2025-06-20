import React from 'react';
import img1 from '../assets/post01.jpg';
import img2 from '../assets/post02.jpg';
import img3 from '../assets/post03.jpg';
import img4 from '../assets/post04.jpg';

const Festival = () => {
  return (
    <div className="w-full px-4 py-6">

    <div className="text-center mt-8">
      <h2 className="text-4xl md:text-5xl font-premium text-gray-900 tracking-wide">
        Purchase with Festival Season
      </h2>
      <p className="mt-2 text-lg text-gray-600 font-light">
        Celebrate joy with offers crafted just for you.
      </p>
    </div>


      <div className="flex gap-6 justify-center items-end mt-[100px]">
        {/* Image 1 */}
        <div className="relative group overflow-hidden rounded-xl w-[300px] h-[500px]">
          <img
            src={img1}
            alt="Festival One"
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <Overlay title="Festival One" desc="Joyful vibes" />
        </div>

        {/* Image 2 */}
        <div className="relative group overflow-hidden rounded-xl w-[300px] h-[600px]">
          <img
            src={img2}
            alt="Festival Two"
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <Overlay title="Festival Two" desc="Cultural spirit" />
        </div>

        {/* Image 3 */}
        <div className="relative group overflow-hidden rounded-xl w-[300px] h-[550px]">
          <img
            src={img3}
            alt="Festival Three"
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <Overlay title="Festival Three" desc="Lights and colors" />
        </div>

        {/* Image 4 */}
        <div className="relative group overflow-hidden rounded-xl w-[300px] h-[520px]">
          <img
            src={img4}
            alt="Festival Four"
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <Overlay title="Festival Four" desc="Tradition & unity" />
        </div>
      </div>
    </div>
  );
};

const Overlay = ({ title, desc }) => (
  <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-2">
    <h2 className="text-xl font-bold">{title}</h2>
    <p className="text-sm mt-1">{desc}</p>
  </div>
);

export default Festival;
