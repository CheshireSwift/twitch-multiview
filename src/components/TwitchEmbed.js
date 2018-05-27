import React from 'react'

class TwitchEmbed extends React.Component {
  componentDidMount() {
    if (window.Twitch) {
      const { embedUid, width, height, channel } = this.props
      this.player = new Twitch.Player(embedUid, {
        width,
        height,
        channel,
      })

      this.player.pause()

      const listen = event => { this.player.addEventListener(event, this.handleEvent(event)) }

      listen(Twitch.Player.PLAYING)
      listen(Twitch.Player.PAUSE)
      listen(Twitch.Player.OFFLINE)
      listen(Twitch.Player.ONLINE)
    }
  }

  componentDidUpdate() {
    if (this.props.active) {
      this.player.play()
    } else {
      this.player.pause()
    }
  }

  handleEvent(event) {
    return () => {
      //div.player-streaminfo div.player-streaminfo__game a.qa-game-name

      switch (event) {
        case Twitch.Player.PLAYING:
          if (!this.props.active) { this.player.pause() }
          break
      }

      this.props.eventHandler(event)
    }
  }

  render() {
    return (
      <div
        id={this.props.embedUid}
        style={{
          display: this.props.active ? 'block' : 'none',
        }}
      />
    )
  }
}

export default TwitchEmbed
