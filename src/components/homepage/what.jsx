import React from "react"
import styled from "styled-components"
import WhatIsCMSvg from "../../images/what-is-climateMind.svg"

const WhatStyles = styled.section`
  background-color: var(--color-dark2);
  padding: var(--padding-regular-xy);
  color: var(--color-white);
  .what__wrapper {
    display: grid;
    grid-template-columns: 4fr 2fr;
    max-width: 1120px;
    margin: 0 auto;
    grid-gap: 3em;
    @media (max-width: 900px) {
      grid-template-columns: 3fr 1fr;
    }
    @media (max-width: 800px) {
      grid-template-columns: 1fr;
    }
  }
`

export const why = () => {
  return (
    <WhatStyles>
      <div className="what__wrapper">
        <article>
          <h2>What is Climate Mind?</h2>
          <p>
            We are creating a web app that helps users explore how their values
            and personal interests are being affected by climate change.
          </p>

          <p>
            We aim to inspire users to take action with a range of attractive
            solutions consistent with their values that they can get excited
            about.
          </p>

          <p>
            We are past the early stages of development and could use a few more
            hands to scale-up our progress.
          </p>
        </article>

        <aside>
          <WhatIsCMSvg />
          <h3>
            We want to make constructive conversations about climate change
            easier.
          </h3>
        </aside>
      </div>
    </WhatStyles>
  )
}

export default why
