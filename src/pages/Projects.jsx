import '../styles/Projects.css'
import { useEffect } from 'react';

function Projects() {
  const projects = [
    { 
      id: 1, 
      title: 'Project 1', 
      description: 'A simple web app built with HTML and CSS.',
      image: 'img/prcjt1.png'
    },
    { 
      id: 2, 
      title: 'Project 2', 
      description: 'A to-do list app using JavaScript.',
      image: 'img/project2.jpg'
    },
    // Добавьте больше проектов по аналогии
  ]

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

  return (
    <div className="container">
      <h1 className="fade-in">My Projects</h1>
      
      <div className="project-list fade-in">
        {projects.map((project, index) => (
          <div 
            key={project.id} 
            className="project-card fade-in"
            style={{ transitionDelay: `${0.1 + index * 0.2}s` }}
          >
            <div className="project-image-container">
              <img 
                src={project.image} 
                alt={project.title} 
                className="project-image"
              />
            </div>
            
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects