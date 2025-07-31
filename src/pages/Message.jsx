import React from "react";
import styled from "styled-components";
import background from "../assets/userDark.jpeg";
import video from "../assets/WhatsApp Video 2025-07-31 at 8.48.03 PM.mp4";
import user1 from "../assets/WhatsApp Image 2025-07-31 at 11.33.39 PM.jpeg";
import user2 from "../assets/userDarkCrop.jpeg";
const Message = () => {
  return (
    <Wrapper>
      <div className="h-[100vh] relative">
        <div
          className="h-[100%] w-[100%] absolute"
          style={{ background: `url(${background})center/cover no-repeat` }}
        ></div>
        <div className="h-[100%] relative z-10 bg-[#0000005e] text-white p-[1rem] flex flex-col items-center justify-center gap-[1rem] poppins">
          <h1 className="text-[1.5rem]">Happy New Month, My Love!</h1>

          <p className="text-center text-[1rem]">
            Happy new month, my love. May this month bring you peace, smiles,
            and more of my love. I’m lucky to have you — always. ❤️
          </p>

          <div className="flex  gap-[0.5rem] items-center h-[67%]">
            <div className="h-[100%] w-[50%]">
              <video
                src={video}
                autoPlay
                loop
                muted
                className="h-[100%] w-[100%] object-cover rounded-[10px]  drop-shadow-gray-500 shadow-[0px_0px_10px_black] "
              ></video>
            </div>
            <div className="h-[100%] w-[50%] flex flex-col gap-[0.5rem]">
              <img
                src={user1}
                alt="user"
                className="h-[49%] object-cover rounded-[10px]  drop-shadow-gray-500 shadow-[0px_0px_10px_black] "
              />

              <img
                src={user2}
                alt="user"
                className="h-[49%] object-cover rounded-[10px]  drop-shadow-gray-500 shadow-[0px_0px_10px_black] "
              />
            </div>
          </div>
          <p className="text-center text-[1rem]">Enjoy your day 💖</p>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f0f0f0; 
  font-size: 2rem;
  color: #333; */
`;

export default Message;
