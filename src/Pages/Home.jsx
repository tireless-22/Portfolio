import React from 'react'
import styled from 'styled-components'
import Education from '../Components/HomeComponents/Education'
import HiThere from '../Components/HomeComponents/HiThere'

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

				<HiThere>
					
				</HiThere>
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