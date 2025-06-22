import { useState, useEffect } from 'react'
import axios from 'axios'
import '../styles/Messages.css'

function Messages() {
  const [messages, setMessages] = useState([])

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const res = await axios.get('http://localhost:5000/contacts')
        setMessages(res.data)
      } catch (err) {
        console.error(err)
      }
    }
    fetchMessages()
  }, [])

  return (
    <div className="container">
      <h1>Messages</h1>
      <ul className="message-list">
        {messages.map(message => (
          <li key={message._id} className="message-item">
            <p><strong>Name:</strong> {message.name}</p>
            <p><strong>Email:</strong> {message.email}</p>
            <p><strong>Message:</strong> {message.message}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Messages