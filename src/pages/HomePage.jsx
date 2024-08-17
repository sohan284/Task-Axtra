import AboutUs from "@/components/HomePage/AboutUs";
import Banner from "@/components/HomePage/Banner";
import BannerMD from "@/components/HomePage/BannerMD";
import Brands from "@/components/HomePage/Brands";
import FeaturedWork from "@/components/HomePage/FeaturedWork";
import OurServices from "@/components/HomePage/OurServices";
import WhyChoseUs from "@/components/HomePage/WhyChoseUs";
import Footer from "@/shared/Footer";
import Header from "@/shared/Header";

function HomePage() {
  return (
    <div>
      <Header />
      <Banner />
      <Brands />
      <AboutUs />
      <OurServices />
      <FeaturedWork />
      <BannerMD />
      <WhyChoseUs />
      <Footer/>
    </div>
  );
}

export default HomePage;
