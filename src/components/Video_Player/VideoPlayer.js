import React from "react";
import ReactPlayer from "react-player";
import "./VideoPlayer.css";
// eslint-disable-next-line no-unused-vars
import { App_Button } from "../Shared/Button";
// import styled from "styled-components";
import { motion } from "framer-motion";

import {
  Wrapper,
  BackgroundOverlay,
  ContentContainer,
  Title,
} from "./VideoPlayer.styled";
import { useDispatch } from "react-redux";

const headerTitle = "team4q";

const word = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.3,
    },
  },
};

const letter = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 0.6, y: 0 },
};

export const VideoPlayer = () => {
  const dispatch = useDispatch();

  const navigateToMain = () => {
    dispatch({ type: "SIGN_IN" });
  };

  return (
    <Wrapper>
      <ReactPlayer
        playing={true}
        url={[{ src: "/videos/video_home.mp4", type: "video/mp4" }]}
        width="100%"
        height="100vh"
        loop={true}
        muted={true}
      />
      <BackgroundOverlay />
      <ContentContainer>
        <Title
          as={motion.h1}
          initial="hidden"
          animate="visible"
          variants={word}
        >
          {headerTitle.split("").map((char, i) => {
            return (
              <motion.span key={char + "-" + i} variants={letter}>
                {char}
              </motion.span>
            );
          })}
        </Title>
        {/* <Button onClick={() => dispatch({ type: "SIGN_IN" })}>Sign In</Button> */}
        <App_Button title="sign in" onclick={navigateToMain} />
      </ContentContainer>
    </Wrapper>
  );
};
