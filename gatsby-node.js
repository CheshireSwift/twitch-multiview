/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

exports.onCreatePage = ({ page }) => {
  if (page.path.startsWith('/pip')) {
    page.layout = 'pip'
  }
}
 // You can delete this file if you're not using it
