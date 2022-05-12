import React from 'react'
import Typewriter from "typewriter-effect"
import styled from 'styled-components'


const Type=styled.div`
  font-size: 50px;
  font-style: italic;
  color: green;


`


const HiThere = () => {
  return (
    <Type>
      <Typewriter
        options={{
          strings: ["Hello this is naveen karthik", "World is a good place like heaven"],
          autoStart: true,
          loop: true,
        }}
      />
    </Type>
  );
}

export default HiThere