import { useEffect, useRef } from "react";
import why from "@/assets/why.png.png";

const WhyChoseUs = () => {
  const scrollContainerRef = useRef(null);
  const scrollSpeed = 3;

  useEffect(() => {
    const container = scrollContainerRef.current;

    const handleWheel = (e) => {
      if (!container) return;

      // Calculate the amount to scroll based on the wheel delta
      const delta = e.deltaY; // Use deltaY for vertical scrolling

      // Check if the wheel scroll is horizontal or vertical
      const isHorizontalScroll = Math.abs(e.deltaX) > Math.abs(e.deltaY);

      if (isHorizontalScroll) {
        // Prevent the default vertical scrolling behavior
        e.preventDefault();
        container.scrollLeft += delta * scrollSpeed; // Adjust scroll speed by changing multiplier
      } else {
        // Allow vertical scrolling of the page
        container.scrollLeft += delta * scrollSpeed; // Adjust scroll speed by changing multiplier
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, [scrollSpeed]);

  return (
    <div
      ref={scrollContainerRef}
      className="mt-[30%] overflow-scroll lg:mt-[1000px] flex"
      style={{
        display: "flex",
        overflowX: "auto",
        cursor: "grab", // Use grab cursor to indicate scrollable content
        scrollSnapType: "x mandatory",
        scrollBehavior: "smooth",
        whiteSpace: "nowrap",
        width: "100vw",
        height: "100vh",
      }}
    >
      <div
        style={{
          flex: "0 0 auto",
          width: "100vw",
          height: "100vh",
          backgroundColor: "#fffcf0",
        }}
      >
        <div className="font-bold text-9xl bg-[#fffcf0] text-center flex justify-center flex-col h-full">
          <h1>
            {" "}
            WHY <br /> CHOOSE US
          </h1>
        </div>
      </div>
     
      <div
        style={{
          flex: "0 0 auto",
          width: "100vw",
          height: "100vh",
          backgroundColor: "#e7e7e4",
        }}
      >
        <div className="grid lg:grid-cols-2 bg-[#e7e7e4] container mx-auto">
          <div>
            <div className="flex flex-col justify-center w-full  mt-24">
              <div className="grid grid-cols-2 gap-5 lg:gap-y-24">
                <div>
                  <h1 className="lg:text-8xl font-semibold">25k</h1>
                  <p className="text-gray-500 font-semibold lg:mt-8 lg:text-xl">
                    Project <br /> Completed
                  </p>
                </div>
                <div>
                  <h1 className="lg:text-8xl font-semibold">8k</h1>
                  <p className="text-gray-500 font-semibold lg:mt-8 lg:text-xl">
                    Happy <br /> Customer
                  </p>
                </div>
                <div>
                  <h1 className="lg:text-8xl font-semibold">15</h1>
                  <p className="text-gray-500 font-semibold lg:mt-8 lg:text-xl">
                    Years <br /> Experinces
                  </p>
                </div>
                <div>
                  <h1 className="lg:text-8xl text-xl font-semibold">98</h1>
                  <p className="text-gray-500 font-semibold lg:mt-8 lg:text-xl">
                    Awardd <br /> Achievement
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center w-full mt-24">
            <div>
              <img width={500} src={why} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          flex: "0 0 auto",
          width: "100vw",
          height: "100vh",
          backgroundColor: "#e4dcdc",
        }}
      >
        <div className=" bg-[#e4dcdc] h-screen text-center flex justify-center flex-col ">
          <h4 className="text-2xl">Have you project in mind?</h4>
          <h1 className="lg:text-7xl">
            {" "}
            Lets make something
            <br />
            great together!
          </h1>
          <div>
            <button className="rounded-full col-span-3 mt-12 font-semibold text-sm border border-gray-800 h-36 w-36 hover:bg-black hover:text-white delay-200">
              Contact <br /> With Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChoseUs;
