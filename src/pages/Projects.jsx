import '../styles/Projects.css'

function Projects() {
  const projects = [
    { id: 1, title: 'Project 1', description: 'A simple web app built with HTML and CSS.' },
    { id: 2, title: 'Project 2', description: 'A to-do list app using JavaScript.' },
  ]

  return (
    <div className="container">
      <h1>My Projects</h1>
      <div className="project-list">
        {projects.map(project => (
          <div key={project.id} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects