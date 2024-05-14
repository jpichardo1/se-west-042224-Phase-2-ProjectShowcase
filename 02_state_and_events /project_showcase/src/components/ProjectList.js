import { useState } from "react";
import ProjectListItem from "./ProjectListItem";

import projects from "../projects";

const ProjectList = () => {
  const [searchQuery, setSearchQuery] = useState(""); // always initialize state with the data type it will be when set, or null

  const searchResults = projects.filter(
    (project) =>
      project.name.toLowerCase().includes(searchQuery.toLowerCase()) || // .includes returns a boolean, perfect for the .filter fn!
      project.about.toLowerCase().includes(searchQuery.toLowerCase()) // we can search both project names and abouts with the logical-OR || operator
  );
  console.log("🚀 ~ ProjectList ~ searchResults:", searchResults);

  const projectListItems = searchResults.map((project) => {
    // map over the filtered array to determine which projects will get rendered as <ProjectListItem />s
    return (
      <ProjectListItem
        key={project.id}
        project={project}
      />
    );
  });

  const handleChange = (e) => setSearchQuery(e.target.value);

  return (
    <section>
      <h2>Projects</h2>

      <div className="filter">
        <button>All</button>
        <button>Phase 5</button>
        <button>Phase 4</button>
        <button>Phase 3</button>
        <button>Phase 2</button>
        <button>Phase 1</button>
      </div>
      <input
        onChange={handleChange}
        type="text"
        placeholder="Search..."
      />

      <ul className="cards">{projectListItems}</ul>
    </section>
  );
};

export default ProjectList;
