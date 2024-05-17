import { useState, useEffect } from "react";
import ProjectListItem from "./ProjectListItem";

const ProjectList = ({ projects, onSelect, onSearch }) => {
  // const [searchQuery, setSearchQuery] = useState(""); // lifted up
  const [searchInputText, setSearchInputText] = useState("")

  useEffect(() => { // debouncing the search input
    const scheduledUpdate = setTimeout(() => {
      console.log("scheduledUpdate")
      onSearch(searchInputText)
    }, 500)
    return () => {
      console.log("cancelled previous update")
      clearTimeout(scheduledUpdate)
    }
  }, [searchInputText])

  // const handleSearch = (e) => { // lifted up
  //   setSearchQuery(e.target.value);
  // };

  // const searchResults = projects.filter((project) => { // replaced by fetch in parent
  //   return project.name.toLowerCase().includes(searchQuery.toLowerCase());
  // });

  const projectListItems = projects.map((project) => (
    <ProjectListItem
      key={project.id}
      {...project}
    />
  ));



  return (
    <section>
      {/* <button onClick={onLoadProjects}>Load Projects</button> */}
      <h2>Projects</h2>

      <div className="filter">
        <button onClick={() => onSelect("")}>All</button>
        <button onClick={() => onSelect("5")}>Phase 5</button>
        <button onClick={() => onSelect("4")}>Phase 4</button>
        <button onClick={() => onSelect("3")}>Phase 3</button>
        <button onClick={() => onSelect("2")}>Phase 2</button>
        <button onClick={() => onSelect("1")}>Phase 1</button>
      </div>
      <input
        type="text"
        placeholder="Search..."
        value={searchInputText}
        onChange={(e) => setSearchInputText(e.target.value)}
      />

      <ul className="cards">{projectListItems}</ul>
    </section>
  );
};

export default ProjectList;
