import React from "react"
import styled from "styled-components"
import ClimateMindHero from "../../images/logos/climateMind-world.svg"

const HeroStyles = styled.section`
  background-color: var(--color-dark1);
  min-height: 375px;
  position: relative;
  h1.hero__slogan {
    color: var(--color-white);
    width: 50%;
    position: absolute;
    top: 40%;
    right: 10%;
  }
  svg.hero__image {
    width: 65%;
    margin: 0 auto;
  }
`

const hero = () => {
  return (
    <HeroStyles>
      <h1 className="hero__slogan">Powering Climate Conversations</h1>
      <ClimateMindHero className="hero__image" />
    </HeroStyles>
  )
}

export default hero
