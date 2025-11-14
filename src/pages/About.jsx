import './About.css'
import { useState, useEffect } from 'react'
import { FaGithub, FaLinkedin, FaDownload } from 'react-icons/fa'

function About() {
  const [lightMode, setLightMode] = useState(false)

  useEffect(() => {
    document.body.classList.toggle('light-mode', lightMode)
  }, [lightMode])

  return (
    <section className="about">
      {/* Profile Image + Resume */}
      <div className="profile-container">
        <img src="/profile.jpg" alt="Profile" className="profile-pic" />
        <a href="/resume.pdf" download className="download-btn">
          <FaDownload /> Resume
        </a>
      </div>

      {/* Heading + Mode Toggle */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2>About Me</h2>
        <button
          onClick={() => setLightMode(prev => !prev)}
          style={{
            background: 'none',
            border: '1px solid var(--primary-color)',
            color: 'var(--primary-color)',
            padding: '0.4rem 1rem',
            borderRadius: '6px',
            cursor: 'pointer',
            fontWeight: '600',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}
        >
          {lightMode ? '🌙 Dark' : '☀️ Light'}
        </button>
      </div>

      {/* Contact Info */}
      <div className="contact-info">
        <p><strong>Name:</strong> Ganthi Sai Rohith</p>
        <p><strong>Phone:</strong> +91-7416930897</p>
        <p><strong>Reg No.:</strong> 20223096</p>
        <p><strong>Personal Email:</strong> sairohith520@gmail.com</p>
        <p><strong>College Email:</strong> ganthi.20223096@mnnit.ac.in</p>
        <p>
          <strong>GitHub:</strong>{' '}
          <a href="https://github.com/sairohith521" target="_blank" rel="noopener noreferrer">
            <FaGithub style={{ verticalAlign: 'middle' }} /> sairohith521
          </a>
        </p>
        <p>
          <strong>LinkedIn:</strong>{' '}
          <a href="https://www.linkedin.com/in/sai-rohith-936473280/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin style={{ verticalAlign: 'middle' }} /> sairohith520
          </a>
        </p>
      </div>

      {/* Education */}
      <div className="section">
        <h3>Education</h3>
        <ul>
          <li>
            <strong>Motilal Nehru National Institute of Technology Allahabad</strong><br />
            B.Tech in Computer Science and Engineering<br />
            <em>Nov 2022 – July 2026</em><br />
            CPI: 7.16 (till VIth Semester)
          </li>
          <li>
            <strong>Sri Chaitanya Junior Kalashala,telangana</strong><br />
            Intermediate (Telangana State), 2022<br />
            Percentage: 96.7%
          </li>
          <li>
            <strong>Sri Chaitanya High school</strong><br />
            High School (Telangana State), 2020<br />
            Percentage: 100
          </li>
        </ul>
      </div>

     
    </section>
  )
}

export default About
