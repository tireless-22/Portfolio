import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from "react-icons/ai";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 10px;
`;
const ToggleOn = styled.div`
  display: flex;
  width: 250px;
  height: calc(100vh - 56px);
  flex-direction: column;
  background-color: red;
`;
const ToggleOff = styled.div`
  display: flex;
  width: 80px;
  height: calc(100vh - 56px);
  flex-direction: column;
  background-color: blue;
`;

const SideNav = () => {
  const [toggle, setToggle] = useState(true);

  return (
    <Container>
      {toggle ? (
        <AiOutlineMenuFold size="40px" onClick={() => setToggle(!toggle)} />
      ) : (
        <AiOutlineMenuUnfold size="40px" onClick={() => setToggle(!toggle)} />
      )}

      {toggle ? (
        <ToggleOn>
          
        </ToggleOn>
      ) : (
        <ToggleOff>
         
        </ToggleOff>
      )}
    </Container>
  );
};

export default SideNav;
