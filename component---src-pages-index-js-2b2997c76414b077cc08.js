webpackJsonp([35783957827783],{254:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.ChannelSwitcher=void 0;var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},c=n(4),s=a(c),u=n(256),h=a(u),p=t.ChannelSwitcher=function(e){function t(n){r(this,t);var a=o(this,e.call(this,n));a.state={selectedChannel:n.channels[0],channelData:{}};var i=0;return n.channels.forEach(function(e){a.state.channelData[e]={online:null,priority:i},i++}),a.channelPlayer=a.channelPlayer.bind(a),a.channelSelector=a.channelSelector.bind(a),a}return i(t,e),t.prototype.eventHandler=function(e){var t=this;return function(n){var a=function(n){var a;t.setState({channelData:l({},t.state.channelData,(a={},a[e]=n,a))})};switch(n){case Twitch.Player.ONLINE:a({online:!0});break;case Twitch.Player.OFFLINE:a({online:!1})}}},t.prototype.channelSelector=function(e){var t=this;return s.default.createElement("button",{style:{display:"block",width:"100%"},key:e,disabled:e===this.state.selectedChannel,onClick:function(){t.setState({selectedChannel:e})}},(this.state.channelData[e].online?"⭕️":"❌")+e)},t.prototype.channelPlayer=function(e){return s.default.createElement(h.default,{key:e,active:e===this.state.selectedChannel,eventHandler:this.eventHandler(e),embedUid:"twitch-embed-"+e,channel:e,width:"100%",height:"89%"})},t.prototype.render=function(){var e=this.props.channels;return s.default.createElement(c.Fragment,null,s.default.createElement("div",{style:{display:"inline-block",width:"30%",height:"100%"}},e.map(this.channelSelector)),s.default.createElement("div",{style:{display:"inline-block",width:"70%",height:"100%"}},e.map(this.channelPlayer)))},t}(s.default.Component);t.default=p},256:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var l=n(4),c=a(l),s=function(e){function t(){return r(this,t),o(this,e.apply(this,arguments))}return i(t,e),t.prototype.componentDidMount=function(){var e=this;if(window.Twitch){var t=this.props,n=t.embedUid,a=t.width,r=t.height,o=t.channel;this.player=new Twitch.Player(n,{width:a,height:r,channel:o}),this.player.pause();var i=function(t){e.player.addEventListener(t,e.handleEvent(t))};i(Twitch.Player.PLAYING),i(Twitch.Player.PAUSE),i(Twitch.Player.OFFLINE),i(Twitch.Player.ONLINE)}},t.prototype.componentDidUpdate=function(){this.props.active?this.player.play():this.player.pause()},t.prototype.handleEvent=function(e){var t=this;return function(){switch(e){case Twitch.Player.PLAYING:t.props.active||t.player.pause()}t.props.eventHandler(e)}},t.prototype.render=function(){return c.default.createElement("div",{id:this.props.embedUid,style:{display:this.props.active?"block":"none"}})},t}(c.default.Component);t.default=s,e.exports=t.default},261:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=n(4),o=a(r),i=n(254),l=a(i),c=function(){return o.default.createElement(l.default,{channels:["TeamSp00ky","bgcallisto","vgbootcamp","funkyp","pandaxgaming","vampirearcadia","capcomfighters","tekken","netherrealm"]})};t.default=c,e.exports=t.default}});
//# sourceMappingURL=component---src-pages-index-js-2b2997c76414b077cc08.js.map