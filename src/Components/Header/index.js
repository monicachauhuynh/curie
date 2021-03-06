import React from "react";
import styled from "styled-components";

const StyledHeader = styled.nav`
  background-color: white;
  min-height: 1.7rem;
  width: 100%;
  text-align: center;
  align-items: center;
  padding-top: 0.2rem;
  a {
    font-size: 0.8rem;
    text-decoration: none;
    &:hover {
      color: pink;
    }
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <a
        className="navbar-brand"
        href="https://openai.com/api/"
        target="_blank"
        rel="noreferrer"
      >
        Powered by OpenAI GPT-3
      </a>
    </StyledHeader>
  );
};

export default Header;
