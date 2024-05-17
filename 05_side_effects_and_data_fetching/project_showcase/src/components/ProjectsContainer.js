import { useState, useEffect } from "react";

import ProjectForm from "./ProjectForm";
import ProjectList from "./ProjectList";

const ProjectsContainer = () => {
  const [projects, setProjects] = useState([]);
  const [selectedPhase, setSelectedPhase] = useState("");
  const [searchQuery, setSearchQuery] = useState("");


  useEffect(() => {
    let url = "http://localhost:4000/projects"
    if (selectedPhase && searchQuery) { // control flow determines which query terms to add based on state
      url += `?phase=${selectedPhase}&q=${searchQuery}`
    } else if (selectedPhase) {
      url += `?phase=${selectedPhase}`
    } else if (searchQuery) {
      url += `?q=${searchQuery}`
    }
    fetch(url)
      .then((res) => res.json())
      .then((projectsData) => setProjects(projectsData));
  }, [selectedPhase, searchQuery])

  // const onLoadProjects = () => { // replaced by fetch
  // };

  const onAddProject = (project) => {
    setProjects([...projects, project]);
  };

  const selectPhase = phase => setSelectedPhase(phase);

  const handleSearch = (searchText) => setSearchQuery(searchText);

  return (
    <>
      <ProjectForm onAddProject={onAddProject} />
      <ProjectList
        // onLoadProjects={onLoadProjects}
        onSelect={selectPhase}
        onSearch={handleSearch}
        searchQuery={searchQuery}
        projects={projects}
      />
    </>
  );
};

export default ProjectsContainer;
