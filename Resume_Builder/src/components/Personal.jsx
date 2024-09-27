import { useState } from 'react';
import PropTypes from 'prop-types';

export default function Personal({ personal, handlePersonalChange }) {
    const [skill, setSkill] = useState(personal.skills);
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        handlePersonalChange({...personal,[name]: value});
    }

    const handleSkillChange=(index,value) => {
        const newSkill = [...skill]; //create a shallow copy of the skill array
        newSkill[index] = value; //update the value of the field
        setSkill(newSkill) //update the state
        handlePersonalChange({...personal,skills: newSkill});
    }

    const handleAddSkill = (event) => {
        event.preventDefault();
        const newSkill = [...skill]; // get a shallow copy of the skill array
        newSkill.push(''); // push new item to the array
        setSkill(newSkill); //set the new array to current state
       
        handlePersonalChange({ ...personal, skills: newSkill });
      };

    
    
      return (
        <div className='personal-div'>
          <h1>Personal</h1>
          <div className='details-list'>
            <label htmlFor="name">Name:</label>
            <input type="text" id='name' name = "name" value={personal.name} onChange={handleInputChange} />
    
            <label htmlFor="address">Address:</label>
            <input type="text" id='address' name = "address" value={personal.address} onChange={handleInputChange} />
    
            <label htmlFor="phone">Phone:</label>
            <input type="tel" id='phone' name = "phone" value={personal.phone} onChange={handleInputChange} />
    
            <label htmlFor="email">Email:</label>
            <input type="text" id='email' name = "email" value={personal.email} onChange={handleInputChange} />
    
            <label htmlFor="summary">Summary:</label>
            <textarea id='summary' name = "summary" value={personal.summary} onChange={handleInputChange} />
    
            <div className="skills-div">
              <label>Skills</label>
              <div className="skill-inputs">
                {skill.map((skill, index) => (
                  <input
                    key={index}
                    type="text"
                    value={skill}
                    onChange={(e) => handleSkillChange(index, e.target.value)}
                  />
                ))}
              </div>
              <button onClick={(e) => handleAddSkill(e)} className="add-skill-btn">+ New Skill</button>
            </div>
          </div>
        </div>
      );
}

Personal.propTypes = {
    personal: PropTypes.object.isRequired,
    handlePersonalChange: PropTypes.func.isRequired,
  };