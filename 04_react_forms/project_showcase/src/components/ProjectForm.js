import { useState } from 'react';

const ProjectForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    about: "",
    phase: "",
    link: "",
    image: ""
  })

  const handleInputChange = e => {
    const { name, value } = e.target
    setFormData({...formData, [name]: value})
  }
  
  return (
    <section>
      <form className="form">
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
