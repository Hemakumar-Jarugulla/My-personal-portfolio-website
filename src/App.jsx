import React, { useState } from 'react';
import profileImage from './assets/profile.jpg';
const projects = [
  {
    title: 'Student Portal + AI Placement Preparation',
    type: 'FULL STACK',
    description: 'A centralized student platform for academic resources, attendance, assignments, notifications, results and AI-assisted placement preparation with role-based access.',
    tech: ['Python', 'Django', 'MySQL', 'JavaScript', 'AI/ML']
  },
  {
    title: 'FreelanceMarket IQ',
    type: 'DATA ANALYTICS',
    description: 'A job-market analytics platform that studies freelance categories, skills, budgets, locations and posting trends to help users understand demand and realistic market opportunities.',
    tech: ['Python', 'Pandas', 'SQL', 'Analytics']
  },
  {
    title: 'Air Fare Price Prediction',
    type: 'MACHINE LEARNING',
    description: 'A machine learning application that preprocesses flight data, transforms features, trains predictive models and estimates airfare prices from travel-related inputs.',
    tech: ['Python', 'NumPy', 'Pandas', 'Scikit-learn']
  },
  {
    title: 'Interactive Quiz Application',
    type: 'FRONTEND',
    description: 'A responsive quiz experience with dynamic questions, answer selection, score calculation and result feedback, designed for a smooth browser-based learning experience.',
    tech: ['HTML', 'CSS', 'JavaScript', 'React']
  }
];

const skills = ['Python', 'Django', 'Flask', 'SQL / MySQL', 'HTML5', 'CSS3', 'JavaScript', 'React.js', 'REST APIs', 'Pandas', 'NumPy', 'Scikit-learn', 'Git / GitHub', 'OOP', 'AI / ML'];

function App() {
  const [open, setOpen] = useState(false);

  return (
    <div className="site">
      <header className="nav">
        <a className="logo" href="#home">HJ<span>.</span></a>
        <button className="menu" onClick={() => setOpen(!open)} aria-label="Menu">☰</button>
        <nav className={open ? 'nav-links show' : 'nav-links'}>
          {['about','skills','projects','education','experience','contact'].map(id =>
            <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>{id}</a>
          )}
        </nav>
        <a className="nav-button" href="#contact">Hire Me ↗</a>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="hero-bg"></div>
          <div className="hero-copy">
            <p className="label">PYTHON FULL STACK DEVELOPER</p>
            <h1>Building useful<br/><span>digital products.</span></h1>
            <p className="lead">Hi, I'm <b>Hemakumar Jarugulla</b> — a Computer Science graduate focused on Python, full-stack development, SQL and AI/ML.</p>
            <div className="actions">
              <a className="primary" href="#projects">Explore Projects ↗</a>
              <a className="secondary" href="#contact">Let's Connect</a>
            </div>
            <div className="socials">
              <a href="https://github.com/Hemakumar-Jarugulla" target="_blank" rel="noreferrer">GitHub</a>
              <a href="https://www.linkedin.com/in/hemakumar-jarugulla" target="_blank" rel="noreferrer">LinkedIn</a>
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=jarugullahemakumar@gmail.com" target="_blank" rel="noreferrer">Email</a>
            </div>
            </div>
          </div>
          <div className="hero-card">
            <div className="photo-ring"><img src={profileImage} alt="Hemakumar Jarugulla"/></div>
            <div className="mini-card one"><strong>Python,Flask,DSA,GEN AI</strong><small>Full Stack</small></div>
            <div className="mini-card two"><strong></strong>HTML,CSS,JS,REACT JS<small></small></div>
          </div>
        </section>

        <section id="about" className="section about">
          <div className="section-head"><p className="label">01 / ABOUT</p><h2>Code with purpose.<br/><i>Learn with curiosity.</i></h2></div>
          <div className="about-text">
            <p>I enjoy turning ideas into practical software. My foundation is in Python, web development, databases and machine learning, with hands-on experience building academic, analytics and prediction projects.</p>
            <div className="stats">
              <div><b>15+</b><span>Core skills</span></div>
              <div><b>4</b><span>Featured projects</span></div>
              <div><b>2026</b><span>B.Tech graduate</span></div>
            </div>
          </div>
        </section>

        <section id="skills" className="section dark">
          <div className="section-head"><p className="label">02 / SKILLS</p><h2>My technical <i>toolkit.</i></h2></div>
          <div className="skill-cloud">{skills.map((s,i)=><span key={s} style={{'--i':i}}>{s}</span>)}</div>
        </section>

        <section id="projects" className="section projects">
          <div className="section-head row"><div><p className="label">03 / PROJECTS</p><h2>Selected <i>work.</i></h2></div><p>Real projects demonstrating development, analytics and machine-learning skills.</p></div>
          <div className="project-grid">
            {projects.map((p,i)=><article className="project" key={p.title}>
              <div className="project-top"><span>0{i+1}</span><em>{p.type}</em></div>
              <h3>{p.title}</h3><p>{p.description}</p>
              <div className="tags">{p.tech.map(t=><span key={t}>{t}</span>)}</div>
              <a href="#contact">Discuss project ↗</a>
            </article>)}
          </div>
        </section>

        <section id="education" className="section soft">
          <div className="section-head"><p className="label">04 / EDUCATION</p><h2>Academic <i>foundation.</i></h2></div>
          <div className="timeline">
            <div><b>2022 — 2026</b><article><h3>B.Tech — Computer Science Engineering</h3><p>Artificial Intelligence & Machine Learning</p><small>AVnthis Research and Technological Academy,Viziangaram</small></article></div>
            <div><b>2020 — 2022</b><article><h3>Board of Intermediate Education</h3><p>MPC</p><small>Sri chaitanya Junior college,Srikakulam</small></article></div>
            <div><b>2015 — 2020</b><article><h3>10th Standard</h3><p>Board of Secondary Education</p><small>Sri chaitanya Techno school,srikakulam,Andhra Pradesh</small></article></div>
          </div>
        </section>

        <section id="experience" className="section">
          <div className="section-head"><p className="label">05 / EXPERIENCE</p><h2>Currently <i>growing.</i></h2></div>
          <div className="experience"><span>CURRENT</span><div><h3>Python Full Stack Trainee</h3><p>Hands-on training in Python, Django, SQL, REST APIs, frontend development, OOP, CRUD operations, debugging and full-stack application development.</p></div></div>
          <div className="certs"><div><b>AIML Engineer</b><span>BlackBucks</span></div><div><b>Full Stack Web Development</b><span>DataPro</span></div></div>
        </section>

        <section id="contact" className="contact">
          <div><p className="label">06 / CONTACT</p><h2>Let's build something <i>great.</i></h2><p>I'm open to entry-level software, Python full-stack, AI/ML and development opportunities.</p></div>
          <div className="contact-links">
            <a href="mailto:jarugullahemakumar@gmail.com"><small>EMAIL</small><b>jarugullahemakumar@gmail.com</b>↗</a>
            <a href="tel:+917386547705"><small>PHONE</small><b>+91 7386547705</b>↗</a>
            <a href="www.linkedin.com/in/hemakumar-jarugulla " target="_blank" rel="noreferrer"><small>LINKEDIN</small><b>linkedin.com/in/hemakumar</b>↗</a>
            <a href=" https://github.com/Hemakumar-Jarugulla" target="_blank" rel="noreferrer"><small>GITHUB</small><b>github.com/hemakumar</b>↗</a>
          </div>
        </section>
      </main>

      <footer><span>© {new Date().getFullYear()} Hemakumar Jarugulla</span><span>React · Python · AI/ML</span><a href="#home">Back to top ↑</a></footer>
    </div>
  );
}
export default App;
