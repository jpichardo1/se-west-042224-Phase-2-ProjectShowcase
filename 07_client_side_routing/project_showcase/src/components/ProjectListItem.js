import { useState } from "react";
import { Link } from 'react-router-dom'
import { FaPencilAlt, FaTrash } from "react-icons/fa";


const ProjectListItem = ({
  project,
  onUpdateProject,
  onDeleteProject,
}) => {
  const { id, image, about, name, link, phase, claps } = project;
  const projectUrl = `http://localhost:4000/projects/${id}`
  
  // const [clapCount, setClapCount] = useState(0);

  // const handleClap = (clapCount) => setClapCount(clapCount + 1);

  const handleClap = () => {
    fetch(projectUrl, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ claps: claps + 1 })
    })
      .then(response => response.json())
      .then(onUpdateProject)
  }

  // const handleEditClick = () => {
  //   onEditProject(project);
  // };

  const handleDeleteClick = () => {
    onDeleteProject(id)
    fetch(projectUrl, {
      method: "DELETE"
    })
  };

  return (
    <li className="card">
      <figure className="image">
        <Link to={`/projects/${id}`}>
          <img src={image} alt={name} />
        </Link>
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
          <Link to={`/projects/${id}/edit`} className="button">
            <FaPencilAlt />
          </Link>
          <button onClick={handleDeleteClick}>
            <FaTrash />
          </button>
        </div>
      </footer>
    </li>
  );
};

export default ProjectListItem;
