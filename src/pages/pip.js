import React from 'react'
import R from 'ramda'

import PipEmbed from '../components/PipEmbed'

import './pip.css'

let channels = []

class PipPage extends React.Component {
  constructor(props) {
    super(props)

    if (typeof window !== 'undefined' && window.URLSearchParams) {
      const params = new URLSearchParams(window.location.search)
      const streams = params.get('streams')
      channels = streams.split(',')
    }

    this.state = {
      muted: false,
      videoSelection: channels[0],
      audioSelection: channels[0],
    }
  }

  render() {
    return (
      <div className="container">
        {channels.map(channel => (
          <PipEmbed
            key={channel}
            channel={channel}
            selected={channel === this.state.videoSelection}
            audio={!this.state.muted && channel === (this.state.audioSelection || this.state.videoSelection)}
            select={() => this.setState({ videoSelection: channel })}
            mouseEnter={() => { this.setState({ audioSelection: channel }) }}
            mouseLeave={() => {
              if (this.state.audioSelection === channel) {
                this.setState({ audioSelection: null })
              }
            }}
          />
        ))}
        <button
          style={{
            height: 30,
            width: 40,
            display: 'block',
            background: '#88008866',
            border: 'none',
            position: 'absolute',
            bottom: 40,
            left: 0,
            zIndex: 100,
          }}
          onClick={() => { this.setState({ muted: !this.state.muted }) }}
        >
          {this.state.muted ? '🔈' : '🔊'}
        </button>
      </div>
    )
  }
}

export default PipPage
