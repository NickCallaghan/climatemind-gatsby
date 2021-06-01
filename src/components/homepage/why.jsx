import React from "react"
import styled from "styled-components"
import WaveTop from "../homepage/waveTop"
import WaveBottom from "../homepage/waveBottom"

const WhyStyles = styled.section`
  background-color: var(--color-main);
  padding: var(--padding-regular-xy);
  .why__content {
    max-width: 735px;
    margin: 0 auto;
  }
`

export const why = () => {
  return (
    <>
      <WhyStyles>
        <div className="why__content">
          <h2>Why do we need Climate Mind?</h2>
          <p>
            It can be a real challenge to communicate the realities of climate
            change to people around you, especially those who have different
            values and personal interests.
          </p>
          <p>
            Often, people don’t realize actionable solutions already exist that
            don’t require an overhaul of their personality or beliefs.
          </p>
          <h3>Our aim is to make conversations about climate change easier.</h3>
        </div>
      </WhyStyles>
    </>
  )
}

export default why
