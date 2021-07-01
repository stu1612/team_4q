import styled from "styled-components";
import { motion } from "framer-motion";

export const Wrapper = styled.div`
  position: relative;
  overflow: hidden;
`;

export const BackgroundOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  z-index: 1;
`;

export const ContentContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  z-index: 2;
  width: 100%;
`;

export const Title = styled(motion.h1)`
  font-family: Uptown;
  color: white;
  font-size: clamp(3rem, 25vw, 20rem);
`;
