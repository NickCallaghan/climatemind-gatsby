import React from "react"
import styled from "styled-components"

const HowStyles = styled.div`
  background-color: var(--color-white);
  padding: var(--padding-regular-xy);
  color: var(--color-dark2);
  .how__wrapper {
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

export const how = () => {
  return (
    <HowStyles>
      <div className="how__wrapper">
        <div>
          <h2>How will it work?</h2>
          <h3>
            Climate Mind consists of a web application and a knowledge base.
          </h3>
          <p>
            The finished product will guide users through the process of
            personalizing climate conversations with others and responding to
            common climate change myths. Then it will provide achievable action
            proposals that align with the values and interests of the user.
          </p>
          <p>
            The knowledge base will collect knowledge available on climate
            change and interpret it as sets of concepts and the relationships
            between them.
          </p>
          <button>Go to the app</button>
        </div>
        {/* <img src={require("../../images/app-preview.jpg")} /> */}
      </div>
    </HowStyles>
  )
}

export default how
