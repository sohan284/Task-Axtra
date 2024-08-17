import md1 from "@/assets/md1.png";
import md2 from "@/assets/md2.png";
import md3 from "@/assets/md3.png";
import md4 from "@/assets/md4.png";
import md5 from "@/assets/md5.png";
import md6 from "@/assets/md6.png";
import { useRef } from "react";
import Slider from "react-slick";
function BannerMD() {
  let sliderRef = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="my-16 container mx-auto relative">
      <div className="hidden lg:block">
        <img src={md1} alt="" className="ml-[20%] absolute mt-[8%]" />
        <img src={md2} alt="" className="right-[30%] mt-[10%] absolute" />
        <img src={md3} alt="" className="absolute left-10 mt-[30%]" />
        <img src={md5} alt="" className="absolute right-10 mt-[30%]" />
        <img src={md4} alt="" className="absolute left-10 mt-[43%] w-56" />
        <img src={md6} alt="" className="absolute right-52 mt-[48%]" />
      </div>
     <div className="lg:hidden ">
     <Slider
          ref={(slider) => {
            sliderRef = slider;
          }}
          {...settings}
        >
          <div className="text-center" key={1}>
            <p className="font-semibold italic text-lg">
              When we talk about Alts, we do not mean a typical <br /> business
              partner, but rather a team that collaborates with <br /> us daily,
              always there for us when we encounter difficulties <br /> and
              celebrate achievements. We see in Alts our best ally <br /> for
              success!
            </p>
            <h2 className="text-3xl uppercase font-semibold mt-10">
              Maria D. Halk
            </h2>
            <h3 className="uppercase text-xs mt-3 text-gray-600">
              Managing Director
            </h3>
          </div>
          <div className="text-center" key={2}>
            <p className="font-semibold italic text-lg">
              When we talk about Alts, we do not mean a typical <br /> business
              partner, but rather a team that collaborates with <br /> us daily,
              always there for us when we encounter difficulties <br /> and
              celebrate achievements. We see in Alts our best ally <br /> for
              success!
            </p>
            <h2 className="text-3xl uppercase font-semibold mt-10">
              Maria D. Halk
            </h2>
            <h3 className="uppercase text-xs mt-3 text-gray-600 mb-10">
              Managing Director
            </h3>
          </div>
        </Slider>
          <div style={{ textAlign: "center" }}>
            <button className="button" onClick={previous}>
              <h5 className="border rounded-full border-black px-3 h-12 w-12 font-bold mr-2 pt-[15%] text-xl hover:bg-black hover:text-white">
                <i className="fas fa-arrow-left" title="Previous"></i>
              </h5>
            </button>
            <button className="button" onClick={next}>
              <h5 className="border rounded-full border-black px-3 h-12 w-12 font-bold pt-[15%] text-xl ml-2 hover:bg-black hover:text-white">
                <i className="fas fa-arrow-right" title="Next"></i>
              </h5>
            </button>
          </div>
     </div>
    
      <div className="lg:flex justify-center hidden">
        <div className="mt-[28%] absolute">
        
          <div className="text-center" key={2}>
            <p className="font-semibold italic text-lg">
              When we talk about Alts, we do not mean a typical <br /> business
              partner, but rather a team that collaborates with <br /> us daily,
              always there for us when we encounter difficulties <br /> and
              celebrate achievements. We see in Alts our best ally <br /> for
              success!
            </p>
            <h2 className="text-3xl uppercase font-semibold mt-10">
              Maria D. Halk
            </h2>
            <h3 className="uppercase text-xs mt-3 text-gray-600 mb-10">
              Managing Director
            </h3>
          </div>
          <div style={{ textAlign: "center" }}>
            <button className="button" onClick={previous}>
              <h5 className="border rounded-full border-black px-3 h-12 w-12 font-bold mr-2 pt-[15%] text-xl hover:bg-black hover:text-white">
                <i className="fas fa-arrow-left" title="Previous"></i>
              </h5>
            </button>
            <button className="button" onClick={next}>
              <h5 className="border rounded-full border-black px-3 h-12 w-12 font-bold pt-[15%] text-xl ml-2 hover:bg-black hover:text-white">
                <i className="fas fa-arrow-right" title="Next"></i>
              </h5>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default BannerMD;
