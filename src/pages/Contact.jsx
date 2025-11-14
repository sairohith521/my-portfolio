// src/pages/Contact.jsx
import { useRef, useState, useEffect } from 'react'
import emailjs from '@emailjs/browser'
import './Contact.css'

function Contact() {
  const form = useRef()
  const [lightMode, setLightMode] = useState(false)

  useEffect(() => {
    document.body.classList.toggle('light-mode', lightMode)
  }, [lightMode])

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_hz136jk',
        'template_qpz4n06',
        form.current,
        '0nXK8m3Xm9Wh_0NrJ'
      )
      .then(
        (result) => {
          alert('✅ Message sent successfully!')
          form.current.reset()
        },
        (error) => {
          alert('❌ Failed to send message. Please try again.')
          console.error(error.text)
        }
      )
  }

  return (
    <section className="contact">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2>Contact Me</h2>
        <button
          onClick={() => setLightMode(prev => !prev)}
          style={{
            background: 'none',
            border: '1px solid var(--primary-color)',
            color: 'var(--primary-color)',
            padding: '0.4rem 1rem',
            borderRadius: '6px',
            cursor: 'pointer',
            fontWeight: '600'
          }}
        >
          {lightMode ? '🌙 Dark Mode' : '☀️ Light Mode'}
        </button>
      </div>

      <div className="contact-info">
        <p><strong>Name:</strong> Sai Rohith</p>
        <p><strong>Email:</strong> <a href="mailto:sairohith520@gmail.com">sairohith520@gmail.com</a></p>
        <p><strong>Phone:</strong> +91-7416930897</p>
        <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/sai-rohith-936473280/" target="_blank" rel="noopener noreferrer">sairohith520</a></p>
        <p><strong>GitHub:</strong> <a href="https://github.com/sairohith521" target="_blank" rel="noopener noreferrer">sairohith521</a></p>
      </div>

      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <label>
          Your Name:
          <input type="text" name="user_name" placeholder="Enter your name" required />
        </label>

        <label>
          Your Email:
          <input type="email" name="user_email" placeholder="Enter your email" required />
        </label>

        <label>
          Message:
          <textarea name="message" placeholder="Write your message..." rows="5" required></textarea>
        </label>

        <button type="submit">Send Message</button>
      </form>
    </section>
  )
}

export default Contact
