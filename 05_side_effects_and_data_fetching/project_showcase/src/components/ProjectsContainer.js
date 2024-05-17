import { useState } from "react";

import ProjectForm from "./ProjectForm";
import ProjectList from "./ProjectList";

const ProjectsContainer = () => {
  const [projects, setProjects] = useState([]);

  const onLoadProjects = () => {
    fetch("http://localhost:4000/projects")
      .then((res) => res.json())
      .then((projectsData) => setProjects(projectsData));
  };

  const onAddProject = (project) => {
    // console.log("🚀 ~ file: ProjectsContainer.js:16 ~ onAddProject ~ project:", project)
    project.id = projects[projects.length -1].id + 1
    setProjects([...projects, project]);
  };

  return (
    <>
      <ProjectForm onAddProject={onAddProject} />
      <ProjectList
        onLoadProjects={onLoadProjects}
        projects={projects}
      />
    </>
  );
};

export default ProjectsContainer;
