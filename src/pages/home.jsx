import './Home.css'
import { useState, useEffect } from 'react'

function Home() {
  const [lightMode, setLightMode] = useState(false)

  useEffect(() => {
    document.body.classList.toggle('light-mode', lightMode)
  }, [lightMode])

  return (
    <section className="home">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2>Welcome to My Portfolio</h2>
        <button onClick={() => setLightMode(prev => !prev)} style={{
          background: 'none',
          border: '1px solid var(--primary-color)',
          color: 'var(--primary-color)',
          padding: '0.4rem 1rem',
          borderRadius: '6px',
          cursor: 'pointer',
          fontWeight: '600'
        }}>
          {lightMode ? 'Dark Mode' : 'Light Mode'}
        </button>
      </div>

      <p>Hello! I'm a passionate developer building awesome web apps.</p>

      <div className="section">
        <h3>Technical Skills</h3>
        <ul>
          <li><strong>Languages:</strong> C++, HTML, CSS, JavaScript, ReactJS</li>
          <li><strong>Frameworks:</strong> Express.js, Node.js</li>
          <li><strong>Cloud / Databases:</strong> MongoDB, SQL</li>
        </ul>
      </div>

      <div className="section">
        <h3>Areas of Interest</h3>
        <p>Data Structures & Algorithms, Object-Oriented Programming, Operating Systems, Web Development</p>
      </div>

      <div className="section">
        <h3>Coding Profiles</h3>
        <ul>
          <li>
            <a href="https://www.codechef.com/users/rishiii03" target="_blank" rel="noopener noreferrer">
              CodeChef: rohith_rishi520
            </a>
          </li>
          <li>
            <a href="https://leetcode.com/u/rishiii03/" target="_blank" rel="noopener noreferrer">
              LeetCode: rohith_rishi520
            </a>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Home
