import React from "react"
import styled from "styled-components"
import WaveBottomSvg from "../../images/wave/wave-bottom.svg"
import WaveMobileSvg from "../../images/wave/wave-bottom-mobile.svg"

const WaveTop = styled.section`
  background-color: var(--color-main);
  .svg__desktop {
    /* width: 100%; */
    /* margin-bottom: 3em; */
    @media (max-width: 600px) {
      display: none;
      border: 2px solid red;
    }
  }
`

const waveTop = () => {
  return (
    <WaveTop>
      <WaveBottomSvg className="svg__desktop" />
      {/* <WaveMobileSvg className="svg__mobile" /> */}
    </WaveTop>
  )
}

export default waveTop
