import React from "react"
import styled from "styled-components"

const BannerStyles = styled.aside`
  width: 100%;
  background-color: var(--color-dark2);
  color: var(--color-white);
  text-align: center;
  p {
    max-width: 1200px;
    margin: 0 auto;
    padding: 32px 36px;
  }
  a,
  a:visited {
    color: var(--color-secondary);
  }
  a:hover,
  a:focus,
  a:active {
    color: var(--color-white);
    text-decoration: underline;
  }
`

export const sponsor = () => {
  return (
    <BannerStyles>
      <p>
        Our cloud computing is proudly sponsored by Microsoft through an{" "}
        <a href="https://www.microsoft.com/en-us/ai/ai-for-earth-grants">
          AI for Earth grant.
        </a>
      </p>
    </BannerStyles>
  )
}

export default sponsor
