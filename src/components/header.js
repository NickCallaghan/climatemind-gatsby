import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const HeaderStyles = styled.header`
  background-color: #ffff;
  padding: 0.5em 1.2em;
  nav {
    display: flex;
    justify-content: space-around;
    align-items: center;
    .siteTitle {
      color: var(--color-dark2);
      font-weight: 500;
      min-width: 300px;
      a {
        text-decoration: none;
      }
    }
    .mainNav {
      font-family: bilo, sans-serif;
      width: 400px;
      display: flex;
      justify-content: space-around;
      align-items: center;
      margin: 0;
      padding: 1.2em;
      li {
        display: none;
        list-style: none;
        background-color: "red";
        padding: 0 0.5em;
        margin: 0;
        a,
        a:visited,
        a:hover,
        a:active {
          text-decoration: none;
          margin: 0;
          height: 100%;
          color: var(--color-dark1);
        }
      }
    }
    .burger {
      .line {
        width: 27px;
        height: 3px;
        background-color: var(--color-dark2);
        margin: 4px 0;
      }
    }
  }
`

const Header = ({ siteTitle }) => (
  <HeaderStyles>
    <nav>
      <h1 className="siteTitle" style={{ margin: 0 }}>
        <Link to="/">{siteTitle}</Link>
      </h1>
      <ul className="mainNav">
        <li>
          <a href="#">The App</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Team</a>
        </li>
        <li>
          <a href="#">Get Involved</a>
        </li>
      </ul>

      <div className="burger">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </nav>
  </HeaderStyles>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
