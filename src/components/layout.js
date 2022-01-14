/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */
/*
  {
        resolve: 'gatsby-source-contentful',
        options:{
          spaceId :'eccm8bbfgbb2',
          accessToken: 'iAjL4UbYn75PFcZF13vGerKew40ESsVxOCfsLbKs_as',
        }
    },
*/
import React from "react"
// import PropTypes from "prop-types"
import Footer from './footer'

const Layout = ({ children }) => {
  return (
    <>
      {children}
      <Footer/>
    </>
  )
}

export default Layout