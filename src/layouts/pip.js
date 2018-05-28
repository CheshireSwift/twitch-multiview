import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import './index.css'

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title="Picture in Picture"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    {children()}
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query PipTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
