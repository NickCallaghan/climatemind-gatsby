import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const Header = ({ siteTitle }) => (
  <div>
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
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `Site Title`,
}

export default Header
