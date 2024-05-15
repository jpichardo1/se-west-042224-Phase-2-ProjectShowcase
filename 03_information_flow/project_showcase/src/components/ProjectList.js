import { useState } from 'react';
import ProjectListItem from "./ProjectListItem";

const ProjectList = ({onLoadProjects, projects}) => {
  // const [projects, setProjects] = useState([]); // lifted up to ProjectContainer
  const [searchQuery, setSearchQuery] = useState("")

  const handleClick = () => {
    onLoadProjects(); // calls loadProjects fn
  };
  
  // const loadProjects = () => { // lifted up to ProjectContainer
  //   fetch("http://localhost:4000/projects")
  //     .then((res) => res.json())
  //     .then((projects) => setProjects(projects));
  // }

  const handleSearch = (e) => {
    setSearchQuery(e.target.value)
  }

  const searchResults = projects.filter(project => {
    return project.name.toLowerCase().includes(searchQuery.toLowerCase())
  })

  const renderProjects = (projects) => {
    return projects.map(project => (
      <ProjectListItem
        key={project.id}
        {...project} // the spread operator copies all the key/values from the project object into the props object
        // project={project} // this could also work, but more destructuring required on ProjectListItem

      />
    ))
  }

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
      <input
        type="text"
        placeholder="Search..."
        onChange={handleSearch}
      />

      <ul className="cards">{renderProjects(searchResults)}</ul>
    </section>
  );
};

export default ProjectList;