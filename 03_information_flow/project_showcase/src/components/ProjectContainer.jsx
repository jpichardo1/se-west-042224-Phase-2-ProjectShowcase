import { useState } from "react";
import ProjectForm from "./ProjectForm";
import ProjectList from "./ProjectList";

function ProjectContainer() {
  const [projects, setProjects] = useState([]); // lifted up from ProjectList; we need it here so ProjectForm will have access to it

  const loadProjects = () => { // lifted up from ProjectList
    fetch("http://localhost:4000/projects")
      .then((res) => res.json())
      .then((projects) => setProjects(projects));
  };

  return (
    <>
      <ProjectForm />
      <ProjectList
        projects={projects} // passed back down to ProjectList
        onLoadProjects={loadProjects} // passed down as callback in props
      />
    </>
  );
}

export default ProjectContainer;
