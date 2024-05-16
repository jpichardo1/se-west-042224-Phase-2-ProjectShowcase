import { useState } from "react";

const initState = {
  name: "",
  about: "",
  phase: "",
  link: "",
  image: "",
};

const ProjectForm = ({ onAddProject }) => {
  const [formData, setFormData] = useState(initState);

  const handleInputChange = (e) => {
    // e.target will return an object, the element that triggered the event with properties
    // including name and value. Object destructuring is used to extract them from e.target
    const { name, value } = e.target;
    // This is the same as doing:
    // const name = e.target.name
    // const value = e.target.value

    // The setter function is then invoked and a new object will  be created with the
    // contents of the previous formData spread into it and the new key/value added to avoid overwriting the
    // previous form field values
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddProject(formData);
    // after we have delivered the formData to the ProjectContainer component with the callback fn
    // and updated state, clear the form by setting the values
    // back to empty strings:
    setFormData(initState);
  };

  return (
    <section>
      <form
        className="form"
        onSubmit={handleSubmit}
      >
        <h3>Add New Project</h3>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
        />
        <label htmlFor="about">About</label>
        <textarea
          id="about"
          name="about"
          value={formData.about}
          onChange={handleInputChange}
        />
        <label htmlFor="phase">Phase</label>
        <select
          name="phase"
          id="phase"
          value={formData.phase}
          onChange={handleInputChange}
        >
          <option>Select One</option>
          <option value="1">Phase 1</option>
          <option value="2">Phase 2</option>
          <option value="3">Phase 3</option>
          <option value="4">Phase 4</option>
          <option value="5">Phase 5</option>
        </select>

        <label htmlFor="link">Project Homepage</label>
        <input
          type="text"
          id="link"
          name="link"
          value={formData.link}
          onChange={handleInputChange}
        />

        <label htmlFor="image">Screenshot</label>
        <input
          type="text"
          id="image"
          name="image"
          value={formData.image}
          onChange={handleInputChange}
        />
        <button type="submit">Add Project</button>
      </form>
    </section>
  );
};

export default ProjectForm;
