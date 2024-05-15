import { useState } from "react";
import ProjectListItem from "./ProjectListItem";

const ProjectList = ({ projects, onLoadProjects }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleClick = () => {
    // loadProjects();
    onLoadProjects();
  };

  // const loadProjects = () => { // moved up to ProjectContainer and renamed
  //   fetch("http://localhost:4000/projects")
  //     .then((res) => res.json())
  //     .then((projects) => setProjects(projects));
  // }

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const searchResults = projects.filter((project) => {
    return project.name.toLowerCase().includes(searchQuery.toLowerCase());
  });

  const renderProjects = (projects) => {
    return projects.map((project) => (
      <ProjectListItem
        key={project.id}
        {...project}
        // project={project} // this could also work, but more destructuring required
      />
    ));
  };

  return (
    <section>
      <button onClick={handleClick}>Load Projects</button>
      <h2>Projects</h2>

      <div className="filter">
        <button>All</button>
        <button>Phase 5</button>
        <button>Phase 4</button>
        <button>Phase 3</button>
        <button>Phase 2</button>
        <button>Phase 1</button>
      </div>
      <input type="text" placeholder="Search..." onChange={handleSearch} />

      <ul className="cards">{renderProjects(searchResults)}</ul>
    </section>
  );
};

export default ProjectList;
