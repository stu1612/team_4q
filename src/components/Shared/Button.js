import React from "react";
// eslint-disable-next-line no-unused-vars
// import PropTypes from "prop-types";
import styled from "styled-components";
import { motion } from "framer-motion";

const Button = styled(motion.button)`
  background-color: transparent;
  border-width: 1px;
  border-color: red;
  width: 150px;
  height: 50px;
  border-radius: 5px;
  color: white;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  position: relative;
`;

// const ButtonOverlay = styled(motion.div)`
//   background-color: red;
//   position: absolute;
//   border-color: red;
//   width: 150px;
//   height: 50px;
//   border-radius: 5px;
// `;

// eslint-disable-next-line react/prop-types
export const App_Button = ({ title, onclick }) => {
  return (
    <Button whileHover={{ scale: 1.2, cursor: "pointer" }} onClick={onclick}>
      {title}
    </Button>
  );
};

// Button.propTypes = {
//   children: PropTypes.string.isRequired,
// };
