import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const HeaderStyles = styled.div`
  a:hover,
  a:focus,
  a:active,
  a:visited {
    text-decoration: none;
  }
  nav {
    display: grid;
    grid-template-columns: 3fr 2fr;
    align-items: center;
    max-width: 1240px;
    padding: 0 1em;
    margin: 0.5em auto;
    .siteTitle {
      font-weight: 500;
      font-size: 32px;
      a {
        color: var(--color-dark2);
      }
    }
    .mainNav {
      display: grid;
      margin: auto 0;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      align-items: center;
      font-family: "bilo", sans-serif;
      font-weight: 500;
      li.navItem {
        text-align: center;
        margin-bottom: 0;
        list-style-type: none;
        a {
          color: var(--color-dark1);
          padding-bottom: 1px;
          position: relative;
        }
        a:before {
          content: "";
          position: absolute;
          width: 100%;
          height: 2px;
          bottom: 0;
          left: 0;
          background-color: var(--color-secondary);
          visibility: hidden;
          transform: scaleX(0);
          transition: all 0.3s ease-in-out;
        }
        a:hover:before {
          visibility: visible;
          transform: scaleX(1);
        }
      }
      @media (max-width: 875px) {
        display: none;
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
        <li className="navItem">
          <a href="#">The App</a>
        </li>
        <li className="navItem">
          <a href="#">About</a>
        </li>
        <li className="navItem">
          <a href="#">Team</a>
        </li>
        <li className="navItem">
          <a href="#">Get Involved</a>
        </li>
      </ul>
    </nav>
  </HeaderStyles>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `Site Title`,
}

export default Header
