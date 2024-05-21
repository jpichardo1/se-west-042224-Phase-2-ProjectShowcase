import { useState } from "react";
import { FaPencilAlt, FaTrash } from "react-icons/fa";

function ProjectCard({ 
  project, 
  onEditProject,
  onUpdateProject,
  onDeleteProject
}) {
  const { id, image, about, name, link, phase, claps } = project;

  // const [clapCount, setClapCount] = useState(claps)

  const URLwithId = `http://localhost:4000/projects/${id}`

  const handleClap = () => {
    // setClapCount(clapCount => clapCount + 1);
    // refactor to persist on backend
    const config = {
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({claps: claps + 1})
    }
    fetch(`http://localhost:4000/projects/${id}`, config)
      .then(response => response.json())
      .then(onUpdateProject)
  };

  const handleEditClick = () => {
    onEditProject(project);
  };

  const handleDeleteClick = () => {
    if (window.confirm("Are you sure you want to delete this project?")) { 
      // optimistic version of DELETE
      // onDeleteProject(id)
      // fetch(`http://localhost:4000/projects/${id}`, {method: 'DELETE'})
      
      // pessimistic version of DELETE
      fetch(URLwithId, {method: 'DELETE'})
        .then(res => {
          if (res.ok) {
            onDeleteProject(id)
          }
        })
    }
  };

  return (
    <li className="card">
      <figure className="image">
        <img src={image} alt={name} />
        <button onClick={handleClap} className="claps">
          👏{claps}
        </button>
      </figure>

      <section className="details">
        <h4>{name}</h4>
        <p>{about}</p>
        {link ? (
          <p>
            <a href={link}>Link</a>
          </p>
        ) : null}
      </section>

      <footer className="extra">
        <span className="badge blue">Phase {phase}</span>
        <div className="manage">
          <button onClick={handleEditClick}>
            <FaPencilAlt />
          </button>
          <button onClick={handleDeleteClick}>
            <FaTrash />
          </button>
        </div>
      </footer>
    </li>
  );
};

export default ProjectCard;
