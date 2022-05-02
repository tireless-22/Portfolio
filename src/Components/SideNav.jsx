import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from "react-icons/ai";
import Naveen from "../Images/SideNav/Naveen.png";
import { Link } from "react-router-dom";

import {
  SiHackerrank,
  SiLeetcode,
  SiCodechef,
  SiCodeforces,
  SiLinkedin,
  SiGithub,
} from "react-icons/si";

import {AiOutlineHome} from "react-icons/ai"

import { CgProfile } from "react-icons/cg";
import {AiOutlineFundProjectionScreen} from "react-icons/ai"
import {GrDocumentUser} from "react-icons/gr"
import { AiFillGithub } from "react-icons/ai"
import {GrServices} from "react-icons/gr"




const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 10px;
  padding-right: 10px;
  background-color: antiquewhite;
  border: 2px solid black;
		border-radius: 5px;
`;
const ToggleOn = styled.div`
  display: flex;
  width: 250px;
  height: calc(100vh - 56px);
  flex-direction: column;

`;

const ImageContainer = styled.div`
display: flex;
justify-content: center;
margin-top: 10px;

`

const Image=styled.img`
	
	width:160px;
	height: 160px;
	border-radius: 50%;
`

const SocialMediaContiner=styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	margin-top: 15px;


`

const RouteButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;


`;

const RouterButtonContainer = styled.div`

  display: flex;
  margin-top:10px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border-radius: 4px;
  /* border:black 2px solid; */
  

`;

const RouterIcon = styled.div`
margin-right:10px;
margin-left: 0px;
  

`


const RouterHeading = styled.div`
  font-size: 35px;
  color: black;
  text-decoration: none;

  /* text-decoration: none; */
`;


	


const ToggleOff = styled.div`
  display: flex;
  width: 80px;
  height: calc(100vh - 56px);
  flex-direction: column;

  /* background-color: blue; */
`;


const RouterButtonContainer2 = styled.div`
  display: flex;
  margin-top: 35px;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: transparent;
  border-radius: 4px;

  /* border:black 2px solid; */
`;

const RouterHeading2 = styled.div`
  font-size: 18px;
  color: black;
  text-decoration: none;

  /* text-decoration: none; */
`;

const RouterIcon2 = styled.div`
  margin-right: 10px;
  margin-left: 0px;
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
          <ImageContainer>
            <Image src={Naveen}></Image>
          </ImageContainer>
          <SocialMediaContiner>
            <SiLinkedin size="35px" />
            <SiGithub size="35px" />
            <SiLeetcode size="35px" />
          </SocialMediaContiner>
          <SocialMediaContiner>
            <SiCodechef size="35px" />
            <SiHackerrank size="35px" />
            <SiCodeforces size="35px" />
          </SocialMediaContiner>

          <RouteButtonsContainer>
            <Link to="/">
              <RouterButtonContainer>
                <RouterIcon>
                  <AiOutlineHome color="black" size="35px" />
                </RouterIcon>

                <RouterHeading>Home</RouterHeading>

                {/* <RouteButton>Home</RouteButton> */}
              </RouterButtonContainer>
            </Link>
            <Link to="aboutMe">
              <RouterButtonContainer>
                <RouterIcon>
                  <CgProfile color="black" size="35px" />
                </RouterIcon>
                <RouterHeading> About Me</RouterHeading>

                {/* <RouteButton>About Me</RouteButton> */}
              </RouterButtonContainer>
            </Link>
            <Link to="projects">
              <RouterButtonContainer>
                <RouterIcon>
                  <AiOutlineFundProjectionScreen color="black" size="35px" />
                </RouterIcon>
                <RouterHeading>Projects</RouterHeading>

                {/* <RouteButton>Projects</RouteButton> */}
              </RouterButtonContainer>
            </Link>
            <Link to="resume">
              <RouterButtonContainer>
                <RouterIcon>
                  <GrDocumentUser color="black" size="35px" />
                </RouterIcon>
                <RouterHeading>Resume</RouterHeading>

                {/* <RouteButton>Resume</RouteButton> */}
              </RouterButtonContainer>
            </Link>
            <Link to="github">
              <RouterButtonContainer>
                <RouterIcon>
                  <AiFillGithub color="black" size="35px" />
                </RouterIcon>
                <RouterHeading>GitHub</RouterHeading>

                {/* <RouteButton>GitHub</RouteButton> */}
              </RouterButtonContainer>
            </Link>
            <Link to="services">
              <RouterButtonContainer>
                <RouterIcon>
                  <GrServices color="black" size="35px" />
                </RouterIcon>
                <RouterHeading>Services</RouterHeading>

                {/* <RouteButton>Services</RouteButton> */}
              </RouterButtonContainer>
            </Link>
          </RouteButtonsContainer>
        </ToggleOn>
      ) : (
        <ToggleOff>
          <Link to="/">
            <RouterButtonContainer2>
              <RouterIcon2>
                <AiOutlineHome color="black" size="40px" />
              </RouterIcon2>
              <RouterHeading2>Home</RouterHeading2>
            </RouterButtonContainer2>
          </Link>
          <Link to="aboutMe">
            <RouterButtonContainer2>
              <RouterIcon2>
                <CgProfile color="black" size="40px" />
              </RouterIcon2>
              <RouterHeading2> About Me</RouterHeading2>
            </RouterButtonContainer2>
          </Link>
          <Link to="projects">
            <RouterButtonContainer2>
              <RouterIcon2>
                <AiOutlineFundProjectionScreen color="black" size="40px" />
              </RouterIcon2>
              <RouterHeading2>Projects</RouterHeading2>
            </RouterButtonContainer2>
          </Link>
          <Link to="resume">
            <RouterButtonContainer2>
              <RouterIcon2>
                <GrDocumentUser color="black" size="40px" />
              </RouterIcon2>
              <RouterHeading2>Resume</RouterHeading2>
            </RouterButtonContainer2>
          </Link>
          <Link to="github">
            <RouterButtonContainer2>
              <RouterIcon2>
                <AiFillGithub color="black" size="40px" />
              </RouterIcon2>
              <RouterHeading2>GitHub</RouterHeading2>
            </RouterButtonContainer2>
          </Link>
          <Link to="services">
            <RouterButtonContainer2>
              <RouterIcon2>
                <GrServices color="black" size="40px" />
              </RouterIcon2>
              <RouterHeading2>Services</RouterHeading2>
            </RouterButtonContainer2>
          </Link>
        </ToggleOff>
      )}
    </Container>
  );
};

export default SideNav;
