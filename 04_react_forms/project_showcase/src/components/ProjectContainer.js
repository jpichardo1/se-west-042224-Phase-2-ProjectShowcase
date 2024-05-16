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

  const addProject = (newProject) => {
    newProject.id = projects[projects.length - 1].id + 1;
    setProjects([...projects, newProject]);
  };

  return (
    <div>
      <ProjectForm onAddProject={addProject} />
      <ProjectList
        projects={projects}
        onLoadProjects={loadProjects}
      />
    </div>
  );
}
