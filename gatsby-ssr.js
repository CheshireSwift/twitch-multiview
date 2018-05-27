import React from 'React'

exports.onRenderBody = ({ setPreBodyComponents }) => {
  setPreBodyComponents([
    <script src='http://player.twitch.tv/js/embed/v1.js' />
  ])
}
/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

 // You can delete this file if you're not using it
