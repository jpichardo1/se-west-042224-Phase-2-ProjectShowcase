import ProjectCard from "./ProjectCard";
import projects from "../projects";

export default function ProjectList() {
  console.log("🚀 ~ projects:", projects);

  const projectCards = projects.map((projectObj) => (
    <ProjectCard
      key={projectObj.id}
      project={projectObj}
    />
  ));

  console.log("🚀 ~ ProjectList ~ projectCards:", projectCards);

  return (
    <section>
      <h1>All Projects</h1>
      <div className="filters">
        <button>All</button>
        <button>Phase 1</button>
        <button>Phase 2</button>
        <button>Phase 3</button>
        <button>Phase 4</button>
        <button>Phase 5</button>
      </div>
      <ul className="cards">
        {/* <ProjectCard image={projects[0].image} name={projects[0].name} /> */}
        {/* <ProjectCard project={projects[0]} />
            <ProjectCard project={projects[1]} />
            <ProjectCard project={projects[2]} />
            <ProjectCard project={projects[3]} /> */}
        {projectCards}
        {/* {projects.map(projectObj => {
                return <ProjectCard project={projectObj}/>
            })} */}
      </ul>
    </section>
  );
}
