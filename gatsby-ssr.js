import React from 'react'

exports.onRenderBody = ({ setPreBodyComponents }) => {
  setPreBodyComponents([
    <script src='http://player.twitch.tv/js/embed/v1.js' />
  ])
}
