import React from "react";
import Navbar from "../component/navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleRight, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Footer from "../component/footer";
import "./home.css";
const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="w-full flex justify-center items-center py-3">
        <div className="flex justify-between px-12 rounded-xl bg-exploreash w-[80%] py-7 flex-wrap">
          <div className="flex flex-col font-black w-[45%] break-words">
            <p className="font-black lg: text-[93px] md: text-[45px] sm:[10px]">
              <span className="bg-white">LET'S</span> EXPLORE
              <span className="bg-yellow-300"> UNIQUE </span> CLOTHES.
            </p>
            <h1>Live for influential and innovative fashion!</h1>
            <button className="bg-black rounded-md text-white text-[14.25px] font-medium w-[104.97px] h-[38.95px]">
              Shop Now!
            </button>
          </div>
          <div className="w-[55%] bg-happy-girl bg-no-repeat bg-contain bg-center">
            {/* <img src="../herobg.png" alt="bg" /> */}
          </div>
        </div>
      </div>
      <div className="bg-iconyellow h-[186px] w-full px-16 flex items-center justify-evenly flex-wrap">
        <div className="bg-first-icon w-[118.26px] h-[69.51px] bg-no-repeat bg-center bg-cover"></div>
        <div className="bg-fourth-icon w-[150px] h-[52.67px] bg-no-repeat bg-center bg-cover"></div>
        <div className="bg-fifth-icon w-[176px] h-[61.8px] bg-no-repeat bg-center bg-cover"></div>
        <div className="bg-second-icon w-[235px] h-[69.96px] bg-no-repeat bg-center bg-cover"></div>
        <div className="bg-third-icon w-[127px] h-[70.68px] bg-no-repeat bg-center bg-cover"></div>
        <div className="bg-sixth-icon w-[166px] h-[63px] bg-no-repeat bg-center bg-cover"></div>
      </div>
      <div className="flex items-center bg-iconbg">
        <div className="bg-happy-girl2 w-[50%] h-[968px] bg-cover bg-no-repeat bg-center"></div>
        <div className="w-[50%] h-[968px] gap-5 flex justify-center flex-col px-10">
          <h1 className="font-black text-[90.61px] w-[616.53px] h-[286.63px] ">
            <span className="bg-white">PAYDAY</span> SALE NOW
          </h1>
          <p className="w-[70%] h-[90.68px] font-medium px-3 text-[25px]">
            Spend minimal $100 get 30% off voucher code for your next purchase
          </p>
          <div className="flex flex-col gap-2 w-[65%]">
            <p className=" text-[25px] font-bold leading-3">
              1 June - 10 June 2021
            </p>
            <p className=" text-[25px] font-normal">
              *Terms and Conditions apply
            </p>
          </div>
          <button className="bg-black rounded-md text-white font-semibold w-[265.62px] h-[95.33px]">
            SHOP NOW
          </button>
        </div>
      </div>

      <div className="flex w-full flex-col gap-10 pt-12 px-10">
        <p className="text-[35px] font-bold ">NEW ARRIVALS</p>
        <div className=" flex flex-row justify-between h-[800px] w-full">
          <div className="w-[30%] flex flex-col gap-5">
            <div className="bg-girl1 w-full h-[700px] rounded-md bg-contain bg-no-repeat bg-center "></div>
            <div className="flex items-center justify-center h-[50px]">
              <div className="h-full w-[85%] flex flex-col gap-2">
                <p className="font-bold text-[15px] text-black">Hoodies & Sweatshirt</p>
                <p className="text-gray-500 text-[12px] " >Explore Now!</p>
              </div>
              <div className="h-full flex justify-center items-center">
                    <FontAwesomeIcon icon={faArrowRight} size="2xl" color="grey"/>
              </div>
            </div>
          </div>

          <div className="w-[30%] flex flex-col gap-5">
            <div className="bg-girl2 w-full h-[700px] rounded-md bg-contain bg-no-repeat bg-center "></div>
            
            <div className="flex items-center justify-center h-[50px]">
              <div className="h-full w-[85%] flex flex-col gap-2">
                <p className="font-bold text-[15px] text-black">Hoodies & Sweatshirt</p>
                <p className="text-gray-500 text-[12px] " >Explore Now!</p>
              </div>
              <div className="h-full flex justify-center items-center">
                    <FontAwesomeIcon icon={faArrowRight} size="2xl" color="grey"/>
              </div>
            </div>
          </div>


          <div className="w-[30%] flex flex-col gap-5">
            <div className="bg-girl3 w-full h-[700px] rounded-md bg-contain bg-no-repeat bg-center "></div>
            <div className="flex items-center justify-center h-[50px]">
              <div className="h-full w-[85%] flex flex-col gap-2">
                <p className="font-bold text-[15px] text-black">Hoodies & Sweatshirt</p>
                <p className="text-gray-500 text-[12px] " >Explore Now!</p>
              </div>
              <div className="h-full flex justify-center items-center">
                    <FontAwesomeIcon icon={faArrowRight} size="2xl" color="grey"/>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex w-full flex-col gap-10 pt-12 px-10">
        <p className="text-[35px] font-bold ">Young's Favourite</p>
        <div className=" flex flex-row justify-between h-[600px] w-full">
          <div className="w-[45%] flex flex-col gap-5">
            <div className="bg-girl4 w-full h-[700px] rounded-md bg-contain bg-no-repeat bg-center "></div>
            <div className="flex items-center justify-center h-[120px]">
              <div className="h-full w-[75%] flex flex-col gap-2">
                <p className="font-bold text-[15px] text-black">Trending on instagram</p>
                <p className="text-gray-500 text-[12px] " >Explore Now!</p>
              </div>
              <div className="h-full flex justify-center items-center">
                    <FontAwesomeIcon icon={faArrowRight} size="2xl" color="grey"/>
              </div>
            </div>
          </div>

          <div className="w-[45%] flex flex-col gap-5">
            <div className="bg-girl5 w-full h-[700px] rounded-md bg-contain bg-no-repeat bg-center "></div>
            
            <div className="flex items-center justify-center h-[120px]">
              <div className="h-full w-[85%] flex flex-col gap-2">
                <p className="font-bold text-[15px] text-black">All Under $40</p>
                <p className="text-gray-500 text-[12px] " >Explore Now!</p>
              </div>
              <div className="h-full flex justify-center items-center">
                    <FontAwesomeIcon icon={faArrowRight} size="2xl" color="grey"/>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="bg-shoppingyellow text-white py-12 px-5 md:px-20 text-center">
      <h2 className="text-2xl md:text-3xl font-semibold mb-4">
        JOIN SHOPPING COMMUNITY TO GET MONTHLY PROMO
      </h2>
      <p className="text-white mb-6">
        Type your email down below and be a part of the young wild generation.
      </p>

      <div className="flex flex-col md:flex-row justify-center items-center gap-4">
        <input
          type="email"
          placeholder="Add your email here"
          className="w-full md:w-96 px-4 py-3 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 text-black"
        />
        <button className="bg-black hover:bg-slate-900 text-white font-semibold px-6 py-3 rounded-lg transition">
          SEND
        </button>
      </div>
    </div>
      <Footer/>
    </div>
  );
};

export default Home;
