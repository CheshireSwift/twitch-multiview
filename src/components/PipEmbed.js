import React from 'react'

const uid = (channel) => `twitch-embed-${channel}`

const buttonStyle = {
  height: 30,
  width: 40,
  display: 'block',
  background: '#88008866',
  border: 'none',
}
export class PipEmbed extends React.Component {
  constructor(props) {
    super(props)

    this.state = { locked: false }
  }

  componentDidMount() {
    this.player = new Twitch.Player(uid(this.props.channel), {
      width: '100%',
      height: '100%',
      channel: this.props.channel,
    })

    this.player.setMuted(!this.props.audio)
  }

  render() {
    this.player && this.player.setMuted(!this.props.audio)
    return (
      <div
        className={(this.props.selected ? 'primary' : 'secondary') + (this.state.locked ? ' lock' : '')}
        onMouseEnter={this.props.mouseEnter}
        onMouseLeave={this.props.mouseLeave}
      >
        <div id={uid(this.props.channel)} style={{ position: 'absolute', width: '100%', height: '100%' }} />
        {!this.props.selected && (
          <div
            style={{
              position: 'relative',
                //width: 20,
                //height: 20,
                background: 'charcoal',
                color: 'cyan',
                cursor: 'pointer',
            }}
          >
            <button style={buttonStyle} onClick={this.props.select}>🔍</button>
            <button
              style={buttonStyle}
              onClick={() => this.setState({ locked: !this.state.locked })}
            >
              {this.state.locked
                  ? '🔒'
                  : '🔓'
              }
            </button>
          </div>
        )}
      </div>
    )
  }
}

export default PipEmbed
