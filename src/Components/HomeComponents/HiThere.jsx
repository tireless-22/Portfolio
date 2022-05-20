import React from 'react'
import Typewriter from "typewriter-effect"
import styled from 'styled-components'

const Container=styled.div`
  display:flex;
  height: 100vh;
  width: 100%;

  background-color: black;



`



const MatterContainer=styled.div`
  display: flex;
  flex:1;
  justify-content: center;
  align-items: center;




`







const Hi=styled.div`
  
font-size: 50px;
color:white;
margin-bottom: 10px;

`


const Iam = styled.div`
  font-size:50px;
  color: white;
  margin-bottom: 10px;
`;

const SvgContainer=styled.div`
  
display:flex;
flex:1;

`



const Type=styled.div`
  font-size: 60px;
  font-style: italic;
  color: green;


`


const HiThere = () => {
  return (
    <Container>
      <MatterContainer>
        <Type>
          <Hi>
            Hi There!
          </Hi>
          <Iam>
            I'M NAVEEN KARTHIK
          </Iam>
          <Typewriter
            options={{
              strings: [
                "Developer",
                "Front-End Expert",
                "Full-Stack Web Developer",
                "Competitive Programmer"
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </Type>
      </MatterContainer>



      <SvgContainer>
        
      </SvgContainer>
    </Container>
  );
}

export default HiThere