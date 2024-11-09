

import { BsArrowRight } from "react-icons/bs";

const Hero = () => {
  return (
    <div className="container pt-8 flex">
      <div className="grid xl:grid-cols-3 xl:grid-rows-2 gap-8">
        {/* Main Image with Overlay */}
        <div className="relative xl:col-span-2 xl:row-start-1 xl:row-end-[-1]">
          <div className="relative w-5/6 h-5/6 rounded-lg overflow-hidden ms-29">
            <img
              className="w-11/12 h-11/12 object-cover"
              src="41-1.webp"
              alt="hero image"
            />
            <div className="absolute bottom-5 left-5 sm:bottom-8 sm:left-8 bg-white bg-opacity-70 rounded-lg p-4">
              <p className="text-gray-600 font-semibold text-xl sm:text-2xl">
                Starting At
              </p>
              <div className="font-medium text-red-500 text-2xl sm:text-4xl">
                RS.12000
              </div>
            </div>
          </div>
          {/* Button below the image */}
          <div className="bg-accentDark hover:bg-accent text-white rounded-full w-fit flex items-center gap-4 px-4 py-2 text-[14px] sm:px-6 sm:py-3 mt-4 cursor-pointer">
            Shop Now <BsArrowRight />
          </div>
        </div>

        {/* Secondary Image */}
        <div className="relative">
          <div className="relative w-3/5 h-3/5 rounded-lg overflow-hidden ms-20">
            <img
              className="w-full h-full object-cover"
              src="/facewash.avif"
              alt="hero image"
            />
          </div>
          <div className="font-medium text-red-500 text-2xl sm:text-4xl ms-20 mt-2">
            RS.399
          </div>
          {/* Button below the image */}
          <div className="mt-2 ms-20 bg-accentDark hover:bg-accent text-white rounded-full w-fit flex items-center gap-2 px-3 py-1 text-[12px] sm:px-4 sm:py-2 cursor-pointer">
            Shop Now <BsArrowRight />
          </div>
        </div>

        <div className="relative">
          <div className="relative w-3/5 h-3/5 rounded-lg overflow-hidden ms-20">
            <img
              className="w-full h-full object-cover"
              src="/storage.jpg"
              alt="hero image"
            />
          </div>
          <div className="font-medium text-red-500 text-2xl sm:text-4xl ms-20 mt-2">
            RS.299
          </div>
          {/* Button below the image */}
          <div className="mt-2 ms-20 bg-accentDark hover:bg-accent text-white rounded-full w-fit flex items-center gap-2 px-3 py-1 text-[12px] sm:px-4 sm:py-2 cursor-pointer">
            Shop Now <BsArrowRight />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Hero;
