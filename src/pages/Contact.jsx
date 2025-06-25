// import { useState } from 'react'
// import axios from 'axios'
// import '../styles/Contact.css'

// function Contact() {
//   const [formData, setFormData] = useState({ name: '', email: '', message: '' })

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value })
//   }

//   const handleSubmit = async (e) => {
//     e.preventDefault()
//     try {
//       await axios.post('http://localhost:5000/contacts', formData)
//       alert('Message sent!')
//       setFormData({ name: '', email: '', message: '' })
//     } catch (err) {
//       alert('Error sending message')
//       console.error(err)
//     }
//   }

//   return (
//     <div className="container">
//       <h1>Contact Me</h1>
//       <p>Send me a message!</p>
//       <form className="contact-form" onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label>Name:</label>
//           <input
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label>Email:</label>
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label>Message:</label>
//           <textarea
//             name="message"
//             value={formData.message}
//             onChange={handleChange}
//             required
//           ></textarea>
//         </div>
//         <button type="submit">Send</button>
//       </form>
//     </div>
//   )
// }

// export default Contact
import { useState, useEffect } from 'react'
import axios from 'axios'
import '../styles/Contact.css'

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  
  // Инициализация анимаций
  useEffect(() => {
    const initScrollAnimations = () => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      }, {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
      });

      document.querySelectorAll('.fade-in').forEach(element => {
        observer.observe(element);
      });
    };

    initScrollAnimations();
    window.addEventListener('resize', initScrollAnimations);
    return () => window.removeEventListener('resize', initScrollAnimations);
  }, []);

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
      <h1 className="fade-in">Contact us</h1>
      <p className="fade-in" style={{ transitionDelay: '0.1s' }}>Send a message!</p>
      
      <form 
        className="contact-form fade-in" 
        style={{ transitionDelay: '0.2s' }}
        onSubmit={handleSubmit}
      >
        <div className="form-group fade-in" style={{ transitionDelay: '0.3s' }}>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="dark-border-input"
          />
        </div>
        
        <div className="form-group fade-in" style={{ transitionDelay: '0.4s' }}>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="dark-border-input"
          />
        </div>
        
        <div className="form-group fade-in" style={{ transitionDelay: '0.5s' }}>
          <label>Message:</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="dark-border-input"
          ></textarea>
        </div>
        
        <button 
          type="submit" 
          className="fade-in dark-border-button"
          style={{ transitionDelay: '0.6s' }}
        >
          Send
        </button>
      </form>
    </div>
  )
}

export default Contact