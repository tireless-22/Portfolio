import React from 'react'
import styled from 'styled-components'
import Education from '../Components/HomeComponents/Education'
import HiThere from '../Components/HomeComponents/HiThere'

const Container=styled.div`
	/* display: flex; */
	flex-direction: column;
	display: abcolute;
	z-index: -1;
	left:0px;
	top:0px;

		
`

const HeadingContainer=styled.div`
	display: flex;
	justify-content: space-around;
`

const Heading = styled.h1`
/* color:white; */
	
`


const Home = () => {
		return (
			<Container>
				{/* <Heading>hello</Heading> */}

				<HiThere/>
				<HeadingContainer>
					<Heading>
						Education
					</Heading>
				</HeadingContainer>
				<Education/> 
				

				</Container>
		)
}

export default Home