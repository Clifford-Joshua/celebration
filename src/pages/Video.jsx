import React from "react";
import styled from "styled-components";
import backgroundImage from "../assets/user.jpeg";
import love from "../assets/crystal.jpg";
import user2 from "../assets/userDark.jpeg";
import Song from "../assets/Song.mp4";
import message from "../assets/message_logo.jpg";

import { useTypewriter } from "react-simple-typewriter";
import { Link } from "react-router-dom";

const Video = () => {
  const [text] = useTypewriter({
    words: [
      ` I’ll love you forever… and then just a little more after that
                ♾️💋🌹`,
    ],
    loop: 0,
  });

  return (
    <Wrapper>
      <div className="w-full min-h-[100vh] relative">
        {/* ======================================================================= */}
        {/* Background image container */}
        <div
          className="w-full h-[100%] absolute"
          style={{
            background: `url(${backgroundImage})center/cover no-repeat`,
          }}
        ></div>

        {/* ======================================================================= */}
        {/*  container */}
        <div className="relative  bg-[#0e0e0e9c] p-[1rem]">
          <div className="w-[100%] flex flex-col gap-[1rem] items-center">
            <div className="w-[100%]  text-white  poppins text-[1.5rem] font-bold text-shadow-[1px_1px_5px_black] capitalize">
              <h1>To My sweet pumpkin 💖😍</h1>
            </div>

            <h1 className="capitalize dancing-script text-[2rem] text-amber-300">
              Mrs Trouble
            </h1>

            <div className="flex flex-col gap-[1.5rem]">
              <p className="playfair-display text-[0.9rem] text-white">
                From the very first moment I met you, my heart whispered, “there
                you are…” 💫💗 Since then, nothing has ever been the same 😍.
                Your name says it all — Blessing — because that’s exactly what
                you are to me: a miracle sent straight from the heavens 💐👼🏽✨
                Sometimes, I just sit quietly and wonder 🥹… what did I ever do
                to deserve someone like you? And truthfully, I still don’t have
                an answer 😭 but one thing I know for sure is… I’m endlessly,
                hopelessly, and completely grateful that you’re mine 💑💘
              </p>

              <img
                src={backgroundImage}
                alt="user"
                className="h-[250px] object-cover rounded-[10px]  drop-shadow-gray-500 shadow-[0px_0px_10px_black] "
              />

              <p className="playfair-display text-[0.9rem] text-white">
                You light up my world without even trying 🌞 The way you smile
                😍, laugh 😂, speak with such warmth and strength — it touches
                the deepest part of me 🥺💓. With you, my heart feels safe, at
                peace, and completely understood 💖🏡 You are the calm to my
                chaos, the melody to my silence, the magic in my every day ✨🎶
                I love how you believe in me, even when I can’t see it for
                myself 🥹💪🏽 Your love gives me courage, it heals me, lifts me,
                and reminds me that I’m never alone ❤️‍🩹 You’ve taught me that
                love doesn’t have to be perfect — it just needs to be true,
                steady, and chosen again and again 💞👫
              </p>

              <img
                src={user2}
                alt="user"
                className="h-[250px] object-cover rounded-[10px]  drop-shadow-gray-500 shadow-[0px_0px_10px_black] "
              />

              <p className="playfair-display text-[0.9rem] text-white">
                Every moment with you is a memory I hold close 💎💭 From our
                soft, late-night talks 🌙🫂 to the silly laughs 🤪💕, the
                spontaneous kisses 😘, and even the quiet moments of just being
                near you 🥰 — it all fills me up in the best way Sometimes I
                wish I could freeze time ⏳ just to stay wrapped in those
                precious moments with you a little longer 😩💖 But since I
                can’t, I promise to cherish every second we share, every laugh,
                every touch, every heartbeat 💓
              </p>

              <video
                src={Song}
                autoPlay
                loop
                className="h-[250px] object-cover rounded-[10px]  drop-shadow-gray-500 shadow-[0px_0px_10px_black] "
              ></video>

              <p className="playfair-display text-[0.9rem] text-white">
                I want to dream with you 💭, build with you 🏠, travel the world
                with you ✈️🌍, and grow through life with you by my side 👵🏽👴🏽
                You’re not just the love of my life — you are my life 🫶🏽💘
                Thank you for being my safe space, my joy, my peace, my heart’s
                favorite person 🥺💌 Thank you for choosing me — today,
                tomorrow, and always 🌅❤️
              </p>

              <img
                src={love}
                alt="user"
                className="h-[250px] object-cover rounded-[10px]  drop-shadow-gray-500 shadow-[0px_0px_10px_black] "
              />

              <h2 className="great-vibes-regular text-[1.5rem] h-[100px] text-amber-300">
                {text}
              </h2>

              <img
                src={message}
                alt="user"
                className="h-[250px] object-cover rounded-[10px]  drop-shadow-gray-500 shadow-[0px_0px_10px_black] "
              />
            </div>

            <Link
              to={"/new_month_wishes"}
              className="text-[1.4rem] capitalize text-amber-300 text-4xl font-bold drop-shadow-[0px_0px_7px_white]  flex animate-bounce mt-[1rem]"
            >
              ↪️Click!!!
            </Link>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default Video;
