import React, { Fragment } from 'react'

import TwitchEmbed from '../components/TwitchEmbed'

export class ChannelSwitcher extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedChannel: props.channels[0],
      channelData: {}
    }

    let i = 0
    props.channels.forEach(channel => {
      this.state.channelData[channel] = {
        online: null,
        priority: i,
      }

      i++
    })
    this.channelPlayer = this.channelPlayer.bind(this)
    this.channelSelector = this.channelSelector.bind(this)
  }

  eventHandler(channel) {
    return event =>  {
      const updateChannelData = data => {
        this.setState({ channelData: { ...this.state.channelData, [channel]: data } })
      }

      switch (event) {
        case Twitch.Player.ONLINE:
          updateChannelData({ online: true })
          break
        case Twitch.Player.OFFLINE:
          updateChannelData({ online: false })
          break
      }
    }
  }

  channelSelector(channel) {
    return (
      <button
        style={{ display: 'block', width: '100%' }}
        key={channel}
        disabled={channel === this.state.selectedChannel}
        onClick={() => { this.setState({ selectedChannel: channel }) }}
      >
        {(this.state.channelData[channel].online ? '⭕️' : '❌') + channel}
      </button>
    )
  }

  channelPlayer(channel) {
    return (
      <TwitchEmbed
        key={channel}
        active={channel === this.state.selectedChannel}
        eventHandler={this.eventHandler(channel)}
        embedUid={`twitch-embed-${channel}`}
        channel={channel}
        width="100%"
        height="89%"
      />
    )
  }


  render() {
    const { channels } = this.props
    return (
      <Fragment>
        <div style={{ display: 'inline-block', width: '30%', height: '100%' }}>
          {channels.map(this.channelSelector)}
        </div>
        <div style={{ display: 'inline-block', width: '70%', height: '100%' }}>
          {channels.map(this.channelPlayer)}
        </div>
      </Fragment>
    )
  }
}

export default ChannelSwitcher
