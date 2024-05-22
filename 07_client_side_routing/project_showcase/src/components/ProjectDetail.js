import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProjectDetail = ({ onUpdateProject }) => {
  // const [claps, setClaps] = useState(0);
  const [tempClaps, setTempClaps] = useState(0);
  const [project, setProject] = useState(null);

  const { id } = useParams();
  const projectUrl = `http://localhost:4000/projects/${id}`

  useEffect(() => {
    fetch(projectUrl)
      .then((r) => r.json())
      .then((project) => {
        setProject(project);
        setTempClaps(project.claps)
      });
  }, [id]);

  if(!project) { return <div></div>}

  const { image, name, about, link, phase } = project;

  const handleClapClick = () => {
    fetch(projectUrl, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ claps: tempClaps + 1 })
    })
      .then(response => response.json())
      .then(updatedProject => {
        onUpdateProject(updatedProject)
        setTempClaps(updatedProject.claps)
      })
  }

  return (
    <section>
      <div className="project-detail box">
        <div className="project-image">
          <img src={image} alt={name} />
          <button className="claps" onClick={handleClapClick}>
            👏{tempClaps}
          </button>
        </div>
        <div className="details">
          <h2>{name}</h2>
          <p>{about}</p>
          {link ? (
            <p>
              <a target="_blank" rel="noreferrer" href={link}>
                Project Homepage
              </a>
            </p>
          ) : null}
          <div className="extra">
            <span className="badge blue">Phase {phase}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetail;
