import { useEffect, useState } from "react";
import service1 from "@/assets/service1.jpg";
import service2 from "@/assets/service2.png";
import service3 from "@/assets/service3.png";
import service4 from "@/assets/service4.png";

function OurServices() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [currentImage, setCurrentImage] = useState(null); // Initial state is null, so no image is shown

  const handleMouseMove = (e) => {
    setPosition({
      x: e.clientX,
      y: e.clientY,
    });
  };

  const handleMouseEnter = (image) => {
    setCurrentImage(image);
  };

  const handleMouseLeave = () => {
    setCurrentImage(null); // Reset image to null when leaving the div
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="container mx-auto mb-20">
      {currentImage && (
        <div className="cursor-image-container lg:block hidden">
          <img
            src={currentImage}
            alt="Cursor"
            className="cursor-image"
            style={{
              left: `${position.x}px`,
              top: `${position.y}px`,
            }}
          />
        </div>
      )}
      <div className="flex justify-center">
        <div className="">
          <div className="h-36 border-l border-gray-200 lg:ml-36 hidden lg:block"></div>
          <h4 className="uppercase mt-10 text-lg font-semibold text-gray-600">
            Services
          </h4>
          <h2 className="uppercase text-3xl lg:text-5xl font-bold mt-5">
            Our marketing <br /> Services
          </h2>
          <div className="mt-12 pb-24 lg:border-l border-gray-200 lg:pl-10 lg:ml-36 text-[#7c7c7c]">
            <p className="font-medium text-lg lg:pt-12">
              Consumers today rely heavily on digital means to <br />
              research products. We research a brand of bldend <br />
              engaging with it, according to the meanwhile, 51% <br />
              of consumers say they use Google to research <br />
              products before buying.
            </p>
          </div>
        </div>
      </div>

      <div
        onMouseEnter={() => handleMouseEnter(service1)}
        onMouseLeave={handleMouseLeave}
        className="hover-div grid grid-cols-1 lg:grid-cols-12 border-t mt-10 py-10"
      >
        <h1 className="col-span-4 lg:ml-24 uppercase text-xl lg:text-3xl font-bold mt-5">
          Search Engine <br />
          Optimization
        </h1>
        <div className="col-span-5 font-semibold text-[#3f3f3f]">
          <p>
            We help brands stand out through aweful, <br /> elegant visual
            design. Our design mainly philosophy. <br />
          </p>
          <p className="mt-5">
            + Logo Design <br />
            + Advertisement <br />+ Promotion
          </p>
        </div>
        <button className="rounded-full col-span-3 mt-12 font-semibold text-sm border border-gray-800 h-36 w-36 hover:bg-black hover:text-white delay-200">
          Details
        </button>
      </div>

      <div
        onMouseEnter={() => handleMouseEnter(service2)}
        onMouseLeave={handleMouseLeave}
        className="hover-div grid grid-cols-1 lg:grid-cols-12 border-t mt-10 py-10"
      >
        <h1 className="col-span-4 lg:ml-24 uppercase text-xl lg:text-3xl font-bold mt-5">
          Email <br />
          Marketing
        </h1>
        <div className="col-span-5 font-semibold text-[#3f3f3f]">
          <p>
            We help brands stand out through aweful, <br /> elegant visual
            design. Our design mainly philosophy. <br />
          </p>
          <p className="mt-5">
            + Logo Design <br />
            + Advertisement <br />+ Promotion
          </p>
        </div>
        <button className="rounded-full col-span-3 mt-12 font-semibold text-sm border border-gray-800 h-36 w-36 hover:bg-black hover:text-white delay-200">
          Details
        </button>
      </div>

      <div
        onMouseEnter={() => handleMouseEnter(service3)}
        onMouseLeave={handleMouseLeave}
        className="hover-div grid grid-cols-1 lg:grid-cols-12 border-t mt-10 py-10"
      >
        <h1 className="col-span-4 lg:ml-24 uppercase text-xl lg:text-3xl font-bold mt-5">
          Content <br />
          Marketing
        </h1>
        <div className="col-span-5 font-semibold text-[#3f3f3f]">
          <p>
            We help brands stand out through aweful, <br /> Our design mainly
            philosophy. <br />
          </p>
          <p className="mt-5">
            + Logo Design <br />
            + Advertisement <br />+ Promotion
          </p>
        </div>
        <button className="rounded-full col-span-3 mt-12 font-semibold text-sm border border-gray-800 h-36 w-36 hover:bg-black hover:text-white delay-200">
          Details
        </button>
      </div>

      <div
        onMouseEnter={() => handleMouseEnter(service4)}
        onMouseLeave={handleMouseLeave}
        className="hover-div grid grid-cols-1 lg:grid-cols-12 border-y mt-10 py-10"
      >
        <h1 className="col-span-4 lg:ml-24 uppercase text-xl lg:text-3xl font-bold mt-5">
          Social <br />
          Marketing
        </h1>
        <div className="col-span-5 font-semibold text-[#3f3f3f]">
          <p>
            We help brands stand out through aweful, <br /> elegant visual
            design. Our design mainly philosophy. <br />
          </p>
          <p className="mt-5">
            + Logo Design <br />
            + Advertisement <br />+ Promotion
          </p>
        </div>
        <button className="rounded-full col-span-3 mt-12 font-semibold text-sm border border-gray-800 h-36 w-36 hover:bg-black hover:text-white delay-200">
          Details
        </button>
      </div>
    </div>
  );
}

export default OurServices;
