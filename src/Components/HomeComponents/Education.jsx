import React from 'react'
import styled from 'styled-components'
import logo1 from "../../Images/Home/gpve_logo.jpg"
import logo2 from "../../Images/Home/tirumala_logo.png"

const Container=styled.div`
	
`
const Main=styled.div`
	

	display: flex;
	flex-direction: row;
	justify-content: center;
	margin-bottom: 10px;

`

const ImageContainer = styled.div`


`


const Image=styled.img`
	
	width:150px;
	height: 150px;
	border-radius:50%;
`

const ContentContainer=styled.div`
	background-color: white;

`
const HeadingType1 = styled.p`
font-size: 26px;
	
`
const HeadingType2=styled.p`
	font-size: 20px;
`

const HeadingType3=styled.p`
	font-size:16px;
`

const Education = () => {
	return (
    <Container>
      <Main>
        <ImageContainer>
          <Image src={logo1}></Image>
        </ImageContainer>
        <ContentContainer>
          <HeadingType1>
            Gayatri Vidya Parishad College of Engineering
          </HeadingType1>
          <HeadingType2>Bachelors in Electronis</HeadingType2>
          <HeadingType3>August 2019 - April 2023</HeadingType3>
          <HeadingType3>Side heading1</HeadingType3>

          <ul>
            <li>Bullet points Bullet points Bullet points Bullet points</li>
            <li>Bullet points Bullet points Bullet points Bullet points</li>
          </ul>
          <HeadingType3>Side heading1</HeadingType3>

          <ul>
            <li>Bullet points Bullet points Bullet points Bullet points</li>
            <li>Bullet points Bullet points Bullet points Bullet points</li>
          </ul>
        </ContentContainer>
      </Main>

      <Main>
        <ImageContainer>
          <Image src={logo1}></Image>
        </ImageContainer>
        <ContentContainer>
          <HeadingType1>
            Gayatri Vidya Parishad College of Engineering
          </HeadingType1>
          <HeadingType2>Bachelors in Electronis</HeadingType2>
          <HeadingType3>August 2019 - April 2023</HeadingType3>
          <HeadingType3>Side heading1</HeadingType3>

          <ul>
            <li>Bullet points Bullet points Bullet points Bullet points</li>
            <li>Bullet points Bullet points Bullet points Bullet points</li>
          </ul>
          <HeadingType3>Side heading1</HeadingType3>

          <ul>
            <li>Bullet points Bullet points Bullet points Bullet points</li>
            <li>Bullet points Bullet points Bullet points Bullet points</li>
          </ul>
        </ContentContainer>
      </Main>
    </Container>
  );
}

export default Education