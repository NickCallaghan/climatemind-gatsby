import React from "react"
import styled from "styled-components"

const HeroStyles = styled.section`
  background-color: var(--color-dark1);
  min-height: 375px;
`

const hero = () => {
  return (
    <HeroStyles>
      <h1>Powering Climate Conversations</h1>
    </HeroStyles>
  )
}

export default hero
