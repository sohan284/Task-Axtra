import banner from "@/assets/banner.png";
function Banner() {
  return (
    <div>
      <div className="lg:mt-[10%] mt-[30%] lg:ml-[100px]  z-5 container relative">
        <div className="flex items-center  w-56">
          <span className="font-semibold  text-2xl tracking-wide mr-8">
            DIGITAL
          </span>
          <div className="flex-1 ml-2 border-t border-black"></div>
        </div>
        <span className="lg:text-[200px] xl:text-[250px] md:text-[120px] sm:text-[120px] text-[80px] text-black font-bold">
          MARK
        </span>
        <h1 className="lg:text-[200px] xl:text-[250px] md:text-[120px] sm:text-[120px] text-[80px] text-black font-bold top-32 lg:top-60 sm:right-24 right-1 xl:right-56 lg:right-24 absolute">
          ETING
        </h1>
        <p className="text-gray-500 text-[18px] w-96 absolute sm:top-72 top-60 lg:top-96">
          Static and dynamic secure code review can prevent a day before your
          product is even released. We can integrate with your dev environment
        </p>
      </div>
      <div className="lg:mt-[180px] xl:mt-[80px] w-full mt-[200px] flex flex-row-reverse">
        <img className="w-[1000px]" src={banner} alt="" />
      </div>
    </div>
  );
}
export default Banner;
