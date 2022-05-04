import React from 'react'
import styled from 'styled-components'
import Education from '../Components/HomeComponents/Education'


const Container=styled.div`
	display: flex;
	flex-direction: column;
	;
`

const HeadingContainer=styled.div`
	display: flex;
	justify-content: space-around;
`

const Heading=styled.h1`
	
`


const Home = () => {
		return (
			<Container>
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