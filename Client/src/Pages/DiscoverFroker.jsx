import React from 'react';
import Header from '../Components/Header';
import './DiscoverFroker.css'; // Make sure this file includes the required CSS for the slider
import Footer from '../Components/Footer';

function DiscoverFroker() {
  return (
    <div className="font-sans">
      {/* Navbar */}
      <Header />

      {/* Main Content */}
      <main>
        <section className="relative py-16">
          <div className="container mx-auto flex items-center justify-center text-center space-x-4">
            <img
              src="https://res.cloudinary.com/dapbrn8a9/image/upload/v1718962431/A4_-_3_s91tbk.png"
              alt="Left Image"
              className="w-1/4 h-auto object-cover"
            />

            <div className="flex flex-col justify-center items-center">
              <h1 className="text-4xl font-bold mb-4">
                Enjoy The Thrill of Exciting Challenges & Social Shopping
              </h1>
              <h2 className="text-2xl mb-4">
                <span className="font-gilroy text-gray-600">Rediscover Memories | </span>
                <span className="font-gilroy text-orange-600">Explore Recommendations!</span>
              </h2>
              <a
                href="https://play.google.com/store/apps/details?id=com.froker"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="font-gilroy bg-orange-500 text-white text-2xl py-4 px-16 rounded-3xl">
                  Download App
                </button>
              </a>
            </div>

            <img
              src="https://res.cloudinary.com/dapbrn8a9/image/upload/v1718962419/A4_-_4_b9eiwv.png"
              alt="Right Image"
              className="w-1/4 h-auto object-cover"
            />
          </div>
        </section>

        {/* Videos Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto text-center">
            <div className="flex justify-center">
              <video className="w-full max-w-full" loop autoPlay muted>
                <source
                  src="https://res.cloudinary.com/dapbrn8a9/video/upload/v1719157440/webanimaiton_oo91v8.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </section>

        {/* Discover Froshare */}
        <div className="flex w-full h-full bg-[#FF5C0026]">
          <div className="ml-[5%] flex flex-col justify-center items-start w-full lg:w-1/2 p-5 md:p-8 lg:p-12">
            <div className="text-[#3D3D3D] font-Gilroy text-5xl md:text-5xl font-semibold mb-4">
              <div>A Platform to Turn</div>
              <div>Your Passion into</div>
              <div>Profits</div>
            </div>
            <div className="mt-4 mb-6">
            <a
                href="/"
                target="_blank"
                rel="noopener noreferrer"
              >
              <button className="w-[14rem] h-[3rem] sm:w-[17rem] sm:h-[3.8rem] bg-[#F76F32] text-white font-Gilroy font-medium text-sm sm:text-lg lg:text-xl rounded-full flex justify-center items-center">
                Discover Froshare <span className="pl-2 text-lg">{'->'}</span>
              </button>
              </a>
            </div>
            <div className="relative h-20">
              <div className="text-[#3D3D3D] text-2xl sm:text-3xl font-medium font-Gilroy mt-6 leading-relaxed animate-slide-up">
                <div>Maximize Earning</div>
                <div>Effortless <span className="text-[#F76F32]">Affiliate Marketing !!</span></div>
              </div>
            </div>
          </div>
          <div className="hidden lg:flex justify-center items-center w-full lg:w-1/2 p-5 md:p-8 lg:p-0">
            <img
              className="object-cover w-full"
              src="https://res.cloudinary.com/dapbrn8a9/image/upload/v1712295088/Group_1171277340_3_xycpcs.png"
              alt="web_image"
            />
          </div>
        </div>

        {/* Slider Section */}
        <div className="py-12 flex flex-col lg:flex-row">
          {/* Left Side: Video Section */}
          <div className="w-full flex justify-center items-center">
  <div className="relative w-full max-w-4xl">
    <video
      className="w-full h-auto max-h-[80vh] object-contain"
      loop
      autoPlay
      playsInline
    >
      <source
        src="https://res.cloudinary.com/dapbrn8a9/video/upload/q_auto:low/v1706085314/frokervideos/ww_cdrid9.mp4"
        type="video/mp4"
      />
      Your browser does not support the video tag.
    </video>
  </div>
</div>



          {/* Right Side: Heading and Slider */}
          <div className="w-full :w-1/2 mt-0 p-0  flex text-6xl font-gilroy flex-col justify-center bg-white">
            <div className=" mb-8">
              <h2 className=" mb-2">
                <span className="text-[#3D3D3D] block">Level Up Your</span>
                <span className="block text-[#FF5C00]">Experience</span>
              </h2>
              <p className="">
                <span className="text-[#3D3D3D]">Discover</span>
                <span className="text-[#FF5C00]"> Froker's </span>
                  <span className="text-[#3D3D3D]">  Superpower!</span>
              </p>
            </div>

            {/* Slider */}
            <div className="relative overflow-hidden">
              <ul className="slider flex space-x-4">
                <li className="flex-shrink-0 w-16 h-16">
                  <img
                    src="https://res.cloudinary.com/dapbrn8a9/image/upload/v1719577882/Group_1171276772_1_sqeohu.png"
                    alt="avatar"
                    className="w-full h-full object-cover"
                  />
                </li>
                <li className="flex-shrink-0 w-16 h-16">
                  <img
                    src="https://res.cloudinary.com/dapbrn8a9/image/upload/v1719578056/Group_1171276764_mqcgaa.png"
                    alt="shots"
                    className="w-full h-full object-cover"
                  />
                </li>
                <li className="flex-shrink-0 w-16 h-16">
                  <img
                    src="https://res.cloudinary.com/dapbrn8a9/image/upload/v1718959059/Group_1171276765_dzopia.png"
                    alt="social media"
                    className="w-full h-full object-cover"
                  />
                </li>
                <li className="flex-shrink-0 w-16 h-16">
                  <img
                    src="https://res.cloudinary.com/dapbrn8a9/image/upload/v1718959059/Group_1171276766_u3mpff.png"
                    alt="food"
                    className="w-full h-full object-cover"
                  />
                </li>
                {/* Repeat items as needed */}
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer/>
    </div>
  );
}

export default DiscoverFroker;
