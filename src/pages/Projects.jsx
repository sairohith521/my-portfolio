// src/pages/Projects.jsx
import './Projects.css'
import { FaGithub } from 'react-icons/fa'

function Projects() {
  return (
    <section className="projects">
      <h2>Projects</h2>

      <div className="project-grid">
        <div className="project-card">
          <h3>Prescripto – Hospital Booking Website</h3>
          <p><strong>Date:</strong> January 2025</p>
          <p><strong>Stack:</strong> MERN Stack, Vite.js</p>
          <p>
            Developed a secure and scalable hospital booking platform enabling real-time appointment
            scheduling and user authentication.
          </p>
          <ul>
            <li>JWT authentication with role-based access control.</li>
            <li>MongoDB + Mongoose for backend; React.js for frontend.</li>
          </ul>
          <a
            href="https://github.com/sairohith521/Medico-Project-Rohith-"
            target="_blank"
            rel="noopener noreferrer"
            className="github-link"
          >
            <FaGithub size={24} />
          </a>
        </div>

      <div className="project-card">
  <h3>EduVantage Hub – Centralized Data & Connectivity Hub</h3>
  <p><strong>Date:</strong> Dec 2022 – Feb 2023</p>
  <p><strong>Stack:</strong> Node.js, Express.js, MongoDB, JavaScript (ES6+), HTML5, CSS3</p>
  <p>
    Developed a centralized data hub providing a single point of convergence for academic resources,
    aligning with IoT and data connectivity principles.
  </p>
  <ul>
    <li>Engineered backend logic for course enrollment, progress tracking, and schedule analytics.</li>
    <li>Designed a scalable Node.js + Express.js backend with MongoDB for data management.</li>
    <li>Implemented secure Role-Based Access Control (RBAC) for students and administrators.</li>
    <li>Followed MVC architecture and conducted peer reviews to ensure maintainable code.</li>
  </ul>
  <a
    href="https://github.com/sairohith521/College-Website"
    target="_blank"
    rel="noopener noreferrer"
    className="github-link"
  >
    <FaGithub size={24} />
  </a>
</div>

      </div>
    </section>
  )
}

export default Projects
