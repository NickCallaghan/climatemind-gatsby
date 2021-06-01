/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet"
import Header from "./header"
import Hero from "./homepage/hero"
import Why from "./homepage/why"
import What from "./homepage/what"
import How from "./homepage/how"
import SponsorBanner from "./homepage/sponsor"
import "normalize.css"
import "../styles/base.css"
import "../styles/theme.css"
import styled from "styled-components"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Helmet>
        <link href="https://use.typekit.net/eic0glm.css" rel="stylesheet" />
        <title>Climate Mind - Powering Climate Conversations</title>
      </Helmet>
      {/* Header */}
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      {/* Hero Image */}
      <Hero />
      {/* Why We need Climate Mind */}
      <Why />
      {/* What Is Climate mind */}
      <What />
      {/* How it works */}
      <How />
      {/* Sponsor Banner */}
      <SponsorBanner />
      {/* Who we are */}
      {/* Get Involved */}
      {/* Footer */}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
