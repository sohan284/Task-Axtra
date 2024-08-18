import Slider from "react-slick";
import feature1 from "@/assets/feature1.png";
import feature2 from "@/assets/feature2.png";
import feature3 from "@/assets/feature3.png";
import feature4 from "@/assets/feature4.png";

const FeaturedWork = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Automatically switch slides
    autoplaySpeed: 3000, // Speed in milliseconds
  };

  return (
    <div className="bg-black px-10">
      <h1  data-aos="fade-up"
            data-aos-duration="1000" className="text-white font-bold ml-36 pt-10">
        FEATURED <br /> WORK
      </h1>
      <div  data-aos="fade-up"
            data-aos-duration="2000" className="text-white hidden lg:block font-bold right-10 text-[100px] absolute uppercase">
        Benjon <br /> <p className="pl-20">website</p> 2012
      </div>
      <div className="carousel-container">
        <Slider {...settings}>
          <div>
            <img src={feature1} alt="Slide 1" />
          </div>
          <div>
            <img src={feature2} alt="Slide 2" />
          </div>
          <div>
            <img src={feature3} alt="Slide 3" />
          </div>
          <div>
            <img src={feature4} alt="Slide 3" />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default FeaturedWork;
