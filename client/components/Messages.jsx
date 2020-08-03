import React from 'react'

class Messages extends React.Component {
  render () {
    const { messages } = this.props
    // 1st item in message has undefined member
    // console.log(messages)
    return (
      <ul
        className='Messages-list'>
        {messages.map(m => this.renderMessage(m))}
      </ul>
    )
  }
// Member is not defined
renderMessage = (message) => {
  // console.log(message)
  const { member, text } = message
  const { currentMember } = this.props
  console.log(member, currentMember)
  // const messageFromMe = member.id === currentMember.id
  const className = (member.id === currentMember.id)
    ? 'Messages-message currentMember' : 'Messages-message'

  return (
    <li className = {className}>
      <span
        className='avatar'
        // style={{background: member.clientData.color}}
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
