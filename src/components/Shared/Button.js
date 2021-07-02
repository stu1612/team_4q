import React, { useState } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import colors from "../../theme/colors";
import PropTypes from "prop-types";

const StyledLink = styled(motion.button)`
  position: relative;
  border: 1px solid;
  border-radius: 25px;
  border-color: ${colors.red};
  max-width: 200px;
  padding: 1rem 2rem;
  background: transparent;
  letter-spacing: 0.13rem;
  overflow: hidden;
  max-height: 50px;
`;

const LinkContent = styled.p`
  position: relative;
  z-index: 1;
  color: ${colors.light};
  text-transform: uppercase;
  font-weight: 600;
  font-size: 12px;
`;

const LinkOverlay = styled(motion.div)`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  background: ${colors.red};
  border-radius: 25px;
  z-index: 0;
`;

export const Button = ({ title, onclick }) => {
  const [linkOverlay, setLinkOverlay] = useState(false);

  return (
    <StyledLink
      onMouseLeave={() => setLinkOverlay(false)}
      onMouseEnter={() => setLinkOverlay(true)}
      onClick={onclick}
      whileHover={{
        cursor: "pointer",
      }}
      transition={{ duration: 0.3 }}
    >
      <AnimatePresence>
        {linkOverlay && (
          <LinkOverlay
            initial={{ height: 0 }}
            animate={{ height: "100%" }}
            transition={{ duration: 0.2 }}
            exit={{ height: 0 }}
          ></LinkOverlay>
        )}
      </AnimatePresence>
      <LinkContent>{title}</LinkContent>
    </StyledLink>
  );
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
  onclick: PropTypes.string.isRequired,
};
