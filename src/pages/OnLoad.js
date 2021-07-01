import React from "react";
// import { useDispatch } from "react-redux";
import { VideoPlayer } from "../components/Video_Player/VideoPlayer";
// import { Button } from "../components/Shared/Button";
// import styled from "styled-components";

// const OnLoadBTN = styled(Button)`
//   position: absolute;
//   bottom: 20%;
//   z-index: 5;
//   pointer-events: auto;
// `;

export const OnLoad = () => {
  // const dispatch = useDispatch();

  return (
    <>
      <VideoPlayer />
      {/* <OnLoadBTN onClick={() => dispatch({ type: "SIGN_IN" })}>Hello</OnLoadBTN> */}
      {/* <OnLoadBTN onClick={handleClick}>Hello</OnLoadBTN> */}
    </>
  );
};
