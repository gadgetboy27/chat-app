import React from 'react'
import Messages from './Messages'

import { randomColor, randomName } from '../utils/random'
import Input from './Input'

//Initial state when app starts
class App extends React.Component {
  constructor () {
    super()
    this.drone = new window.Scaledrone('22LIFPx7BxXo3U40', {data: this.state.member
  })
  this.drone.on('open', error => {
    if (error) {
      return console.error(error)
    }
    const member = {...this.state.member}
    member.id = this.drone.clientId
    this.setState({member})
  })
  }
  
  state = {
    messages: [],
    member: {
      username: randomName(),
      color: randomColor()
    }
  }
  // https://www.scaledrone.com/docs/api-clients/observable-rooms
  onSendMessage = (message) => {
    this.drone.publish({
      room: 'observable-room',
      message
    })
    const room = this.drone.subscribe('observable-room')
    // member here is undefined
    room.on('message', message => {
      const {data, id, timestamp, clientId, member} = message;
    console.log(message)
    const messages = this.state.messages
    messages.push({member, text: data})
    this.setState({messages})
  })
    // const messages = this.state.messages
    // messages.push({
    //   text: message,
    //   member: this.state.member
    // })
    // this.setState({ messages: messages })
  }
  //What we see onscreen from the Input method
  render() {
   // this.state.messages member[0] is undefined
    return (
      <div className='App'>
        <div className= 'App-header'>
          <h1>Chat Me Up</h1>
        </div>
        <Messages     
        messages={this.state.messages}
        currentMember={this.state.member}
        />
        <Input
        onSendMessage={this.onSendMessage}
        />         
      </div>
    )
  }
}
export default App
//An App component which will manage sending and receiving messages and rendering the inner components.