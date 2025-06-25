import { useState, useEffect } from 'react'
import axios from 'axios'
import '../styles/Messages.css'

function Messages() {
  const [messages, setMessages] = useState([])
  
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

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const res = await axios.get('http://localhost:5000/contacts')
        setMessages(res.data)
        
        // Переинициализируем анимации после загрузки сообщений
        setTimeout(() => {
          const initScrollAnimations = () => {
            const observer = new IntersectionObserver((entries) => {
              entries.forEach(entry => {
                if (entry.isIntersecting) {
                  entry.target.classList.add('visible');
                }
              });
            }, { threshold: 0.1 });
            
            document.querySelectorAll('.message-item').forEach(element => {
              observer.observe(element);
            });
          };
          
          initScrollAnimations();
        }, 100);
      } catch (err) {
        console.error(err)
      }
    }
    fetchMessages()
  }, [])

  return (
    <div className="container">
      <h1 className="fade-in">Messages</h1>
      
      <ul className="message-list fade-in" style={{ transitionDelay: '0.1s' }}>
        {messages.map((message, index) => (
          <li 
            key={message._id} 
            className="message-item fade-in"
            style={{ transitionDelay: `${0.2 + index * 0.1}s` }}
          >
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