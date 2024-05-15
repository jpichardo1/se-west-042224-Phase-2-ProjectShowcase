import { useState } from "react";
import ProjectForm from "./ProjectForm";
import ProjectList from "./ProjectList";

export default function ProjectContainer() {
  const [projects, setProjects] = useState([]); 

  const loadProjects = () => {
    fetch("http://localhost:4000/projects")
      .then((res) => res.json())
      .then((projects) => setProjects(projects));
  };

  return (
    <div>
      <ProjectForm />
      <ProjectList
        projects={projects} 
        onLoadProjects={loadProjects} 
      />
    </div>
  );
}
