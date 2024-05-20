import { useState } from "react";
import { FaPencilAlt, FaTrash } from "react-icons/fa";

function ProjectCard({ 
  project, 
  onEditProject,
  onUpdateProject,
  onDeleteProject
}) {
  const { id, image, about, name, link, phase, claps } = project;

  const [clapCount, setClapCount] = useState(claps)

  const handleClap = () => {
    setClapCount(clapCount => clapCount + 1);
    // refactor to persist on backend
  };

  const handleEditClick = () => {
    onEditProject(project);
  };

  const handleDeleteClick = () => {
    if (window.confirm("Are you sure you want to delete this project?")) { 
      // optimistic version of DELETE
     
      // pessimistic version of DELETE
      
    }
  };

  return (
    <li className="card">
      <figure className="image">
        <img src={image} alt={name} />
        <button onClick={handleClap} className="claps">
          👏{clapCount}
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
