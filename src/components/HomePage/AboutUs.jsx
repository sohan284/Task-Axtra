import aboutUs from "@/assets/aboutUs.png";
import { useEffect, useState } from "react";
function AboutUs() {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="bg-black">
      <div className="grid lg:grid-cols-2 grid-cols-1  container mx-auto">
        <div className="scroll-container1 hidden lg:block">
          <img
            src={aboutUs}
            alt=""
            className="scrolling-image w-[70%] lg:block hidden"
            style={{ transform: `translateY(-${scrollY * 0.5}px)` }}
          />
        </div>
        <div className=" lg:hidden">
          <img src={aboutUs} alt="" className="mt-5" />
        </div>
        <div className="text-white">
          <div className="h-36 border-l border-gray-800 lg:ml-36 hidden lg:block"></div>
          <h4
            data-aos="fade-up"
            data-aos-duration="1000"
            className="uppercase mt-10 text-lg font-semibold"
          >
            Who We Are
          </h4>
          <h2
            data-aos="fade-up"
            data-aos-duration="1500"
            className="uppercase text-3xl lg:text-5xl font-bold mt-5"
          >
            We are leading <br /> digital marketing <br /> agency.
          </h2>
          <div className="mt-12 pb-24 lg:border-l border-gray-800 lg:pl-10 lg:ml-36 text-[#7c7c7c]">
            <p
              data-aos="fade-up"
              data-aos-duration="2000"
              className=" font-medium text-lg lg:pt-12"
            >
              {" "}
              We’re a team of strategic mdigital marketing <br /> working
              globally with largest brands, We believe <br /> that progress only
              happens when you refused <br />
              to play things safe. We combine ideas and <br /> behaviors, and
              insights with design, <br /> technological data to produce brand{" "}
              <br /> experiences that customers love our services.
            </p>
            <button
              data-aos="fade-up"
              data-aos-duration="2000"
              className="rounded-full mt-12 font-semibold text-sm border border-gray-800 h-36 w-36 hover:bg-white hover:text-black delay-200"
            >
              {" "}
              Explore Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AboutUs;
