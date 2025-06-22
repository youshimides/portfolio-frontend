import { useState } from 'react'
import axios from 'axios'
import '../styles/Contact.css'

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await axios.post('http://localhost:5000/contacts', formData)
      alert('Message sent!')
      setFormData({ name: '', email: '', message: '' })
    } catch (err) {
      alert('Error sending message')
      console.error(err)
    }
  }

  return (
    <div className="container">
      <h1>Contact Me</h1>
      <p>Send me a message!</p>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Message:</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit">Send</button>
      </form>
    </div>
  )
}

export default Contact
