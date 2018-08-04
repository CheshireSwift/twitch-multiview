import React from 'react'

import ChannelSwitcher from '../components/ChannelSwitcher'

function channels() {
  if (typeof window !== 'undefined' && window.URLSearchParams) {
    const params = new URLSearchParams(window.location.search)
    const streams = params.get('streams')
    return streams.split(',')
  }

  return []
}

const IndexPage = () => (
  <ChannelSwitcher
    channels={channels()}
  />
)

export default IndexPage
