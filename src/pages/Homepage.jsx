import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import userImage from "../assets/userDark.jpeg";
import background from "../assets/background.jpg";
const Homepage = () => {
  return (
    <Wrapper>
      <div className="w-full h-[100vh] relative">
        {/* ======================================================================= */}
        {/* Background image container */}
        <div
          className="w-full h-[100%] bg-black absolute"
          style={{ background: `url(${background})center/cover no-repeat` }}
        ></div>

        {/* ======================================================================= */}
        {/*  container */}
        <div className="w-full h-[100%] bg-[#00000052] relative flex items-center justify-center">
          <div className="w-[90%] flex flex-col items-center justify-center gap-4">
            <h1 className="great-vibes-regular text-[3rem] text-white">
              To the love of my life
            </h1>

            <img
              src={userImage}
              alt="user image"
              className="h-[400px] w-[90%] object-cover rounded-[20px]"
            />

            <h1 className="poppins text-[1.4rem] text-pink-500 text-4xl font-bold drop-shadow-[2px_2px_4px_black] capitalize">
              😍 Happy girlfriend's day 💖
            </h1>

            <Link
              to={"/video_page"}
              className="text-[1.4rem] capitalize text-white text-4xl font-bold drop-shadow-[0px_0px_7px_white]  flex animate-bounce"
            >
              ↪️Click!!!
            </Link>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* color: #00000055; */
`;

export default Homepage;
