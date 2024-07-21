import React from 'react'
import Header from '../Components/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Footer from '../Components/Footer';

function Home() {
  return (
    <>
    <Header/>
     {/* Discover Froshare */}
     <div className="flex w-full h-full">
          <div className="ml-[5%] flex flex-col justify-center items-start w-full lg:w-1/2 p-5 md:p-8 lg:p-12">
            <div className="text-[#3D3D3D] font-Gilroy text-5xl md:text-5xl mb-4">
              <div className='text-black text-7xl font-bold'>Elevate your</div>
              <div className='text-orange-500 text-2xl font-bold font-gilroy py-3'>
                Influence
                <span className="text-2xl font-bold cursor-pointer hover:text-orange-700">{" >> "}</span>
                Connection
                <span className="text-2xl font-bold cursor-pointer hover:text-orange-700">{" >> "}</span>
                Earning!!
            </div>
            <div className='text-black text-xl  font-bold font-gilroy '>Connect with top brands, expand reach & earn big!
              Simplify posting & sharing links with Froshare</div>
            </div>
            <div className="mt-4 mb-6">
            <a
                href="https://play.google.com/store/apps/details?id=com.froker"
                target="_blank"
                rel="noopener noreferrer"
              >
              <button className="w-[14rem] h-[3rem] sm:w-[17rem] sm:h-[3.0rem] bg-[#F76F32] text-white font-Gilroy font-medium text-sm sm:text-lg lg:text-xl rounded-full flex justify-center items-center">
                Get Started <FontAwesomeIcon icon={faArrowRight} className="w-6 h-6 pl-2 text-white-600" />
              </button>
              </a>
            </div>
  
          </div>
          <div className="hidden lg:flex justify-center items-center w-full lg:w-1/2 p-5 md:p-8 lg:p-10">
            <img
              className="object-cover w-full"
              src="https://res.cloudinary.com/dapbrn8a9/image/upload/q_auto:low/v1712230785/Group_1171277340_2_qfluim.png"
              alt="web_image"
            />
          </div>
        </div>
        {/**Benifits of using froker */}
        <div className="bg-[#ff5c0026] flex flex-col items-center space-y-4 p-6">
      {/* Heading */}
      <div className="text-orange-500 text-5xl font-bold">
        Benefits of Using Froshare
      </div>

      {/* Subheading */}
      <div className="text-2xl font-medium text-gray-700">
        Effortless Affiliate Marketing!!
      </div>

      {/* Image */}
      <div className="w-full p-10">
        <img
          src="https://res.cloudinary.com/dapbrn8a9/image/upload/q_auto:low/v1719646697/35_1_wpvz3l.png"
          alt="ye ek svg hai"
          className="w-full h-auto object-cover"
        />
      </div>
    </div>
        <Footer/>
    </>
  )
}

export default Home
