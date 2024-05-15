import React, { useState } from "react";
import ProjectForm from "./ProjectForm";
import ProjectList from "./ProjectList";

export default function ProjectContainer() {
  const [projects, setProjects] = useState([]); // moved up from ProjectList

  const onLoadProjects = () => {
    // moved up and renamed from ProjectList
    fetch("http://localhost:4000/projects")
      .then((res) => res.json())
      .then((projects) => setProjects(projects));
  };

  return (
    <div>
      <ProjectForm />
      <ProjectList
        projects={projects} // pass down so it can be mapped over
        onLoadProjects={onLoadProjects} // pass down to click handler fn
      />
    </div>
  );
}
