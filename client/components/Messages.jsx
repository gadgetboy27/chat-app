import React from 'react'

class Messages extends React.Component {
  render () {
    const { messages } = this.props
    return (
      <ul className='Messages-list'>
        {messages.map((m, index) => this.renderMessage(m, index))}
      </ul>
    )
  }

  renderMessage (message, index) {
      console.log(message)
    const { member, text } = message
    const { currentMember } = this.props
    const messageFromMe = member.id === currentMember.id
    const className = messageFromMe ? 'Messages-message currentMember' : 'Messages-message'
    return (
      <li className = {className} key = {index}>
        <span
          className='avatar'
          style={{ backgroundColor: member.clientData.color }}
        />
        <div className='Message-content'>
          <div className='username'>
            {member.clientData.username}
          </div>
          <div className='text'>{text}</div>
        </div>
      </li>
    )
  }
}
export default Messages
// A Messages component which will be a list of messages.
