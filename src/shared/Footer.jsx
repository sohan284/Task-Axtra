import logo from "@/assets/logoBar.png";
function Footer() {
  const text = "LET'S TALK";
  return (
    <div className="bg-[#181818] ">
      <div className="">
        <div className="bg-[#181818] justify-center grid grid-cols-1 mx-5 lg:grid-cols-10   border-gray-800 border-b">
          <div className="col-span-3">
            <img className="my-8 mt-20 lg:pl-10" alt="" src={logo} />
            <p className="text-gray-400 lg:pl-10 pb-10">
              When do they work well, and when do they <br /> on us and finally,
              when do we actually need <br /> how can we avoid them.
            </p>
          </div>
          <div className="text-white col-span-2 lg:col-span-1">
            <div className="border border-gray-800">
              <h1 className="lg:text-xl font-semibold text-center py-10 hover:bg-white hover:text-black">
                FACEBOOK
              </h1>
            </div>
            <div className="border border-gray-800">
              <h1 className="lg:text-xl font-semibold py-10 text-center  hover:bg-white hover:text-black">
                TWITTER
              </h1>
            </div>
            <div className="border border-gray-800">
              <h1 className="lg:text-xl font-semibold py-10 text-center  hover:bg-white hover:text-black">
                LINKEDIN
              </h1>
            </div>
            <div className="border border-gray-800">
              <h1 className="lg:text-xl font-semibold text-center py-10  hover:bg-white hover:text-black">
                INSTAGRAM
              </h1>
            </div>
          </div>
          <div className="lg:col-span-5 col-span-2 mr-8 flex justify-end mt-[15%]">
            <div className="jumping-text">
              {text.split("").map((char, index) => (
                <span key={index} style={{ "--i": index }}>
                  {char}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="mx-10 mt-5 lg:flex-row flex lg:justify-between flex-col-reverse">
        <p className="text-white text-center font-semibold py-5">
          © 2022 - 2025 | Alrights reserved <br /> by Wealcoder
        </p>
        <div className="flex">
          <button className="uppercase text-white mr-5 font-semibold">
            About Us
          </button>
          <button className="uppercase text-white mx-5 font-semibold">
            Contact
          </button>
          <button className="uppercase text-white mx-5 font-semibold">
            Career
          </button>
          <button className="uppercase text-white ml-5 font-semibold">
            Faqs
          </button>
        </div>
      </div>
    </div>
  );
}
export default Footer;
