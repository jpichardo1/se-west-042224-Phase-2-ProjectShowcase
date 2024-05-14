import { useState } from "react";

const ProjectListItem = ({ project }) => {
  const { image, name, about, link, phase } = project;

  const [clapCount, setClapCount] = useState(0); // each <ProjectListItem /> component needs to hold it's own state for clapCounts

  function handleIncrementClaps() {
    // our click event handler fn
    setClapCount(clapCount + 1);
  }

  return (
    <li className="card">
      <figure className="image">
        <img
          src={image}
          alt={name}
        />
        <button
          onClick={handleIncrementClaps} // adding click-event listener to each button; it is fine to make your element attributes multi-line for readability
          className="claps"
        >
          👏{0}
        </button>
      </figure>

      <section className="details">
        <h4>{name}</h4>
        <p>{about}</p>
        {link ? ( // a multi-line ternary to conditionally render links only if a link is provided in props
          <p>
            <a href={link}>Link</a>
          </p>
        ) : null}
      </section>

      <footer className="extra">
        <span className="badge blue">Phase {phase}</span>
      </footer>
    </li>
  );
};

export default ProjectListItem;
