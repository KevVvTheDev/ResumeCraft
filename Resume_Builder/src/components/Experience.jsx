import PropTypes from 'prop-types';

export default function Experience({ experiences, handleExperienceChange }) {
    const handleInputChange = (index,field,value) => {
        const newExperiences = [...experiences]; //create a shallow copy of the experience array
        newExperiences[index][field] = value; //update the value of the field
        handleExperienceChange(newExperiences); //update the state
    };
    const handleAddAchievement = (e, index) => {
        e.preventDefault();
        const newExperiences = [...experiences];
        newExperiences[index].achievements.push('');
        handleExperienceChange(newExperiences);
      };
    
      const handleAddExperience = (e) => {
        e.preventDefault();
        handleExperienceChange([
          ...experiences,
          { company: '', job: '', duration: '', location: '', achievements: [''] },
        ]);
      };
    
      return (
        <div className="experience-div">
          <h1>Experience</h1>
          {/* pay attention to line 27 because may brake */}
          {experiences.map((experiences, index) => (
            <div key={index} className="experience-section">
              <label htmlFor={`company-${index}`}>Company</label>
              <input
                type="text"
                id={`company-${index}`}
                value={experiences.company}
                onChange={(e) => handleInputChange(index, 'company', e.target.value)}
              />
    
              <label htmlFor={`job-${index}`}>Job</label>
              <input
                type="text"
                id={`job-${index}`}
                value={experiences.job}
                onChange={(e) => handleInputChange(index, 'job', e.target.value)}
              />
    
              <label htmlFor={`duration-${index}`}>Duration</label>
              <input
                type="text"
                id={`duration-${index}`}
                value={experiences.duration}
                onChange={(e) => handleInputChange(index, 'duration', e.target.value)}
              />
    
              <label htmlFor={`location-${index}`}>Location</label>
              <input
                type="text"
                id={`location-${index}`}
                value={experiences.location}
                onChange={(e) => handleInputChange(index, 'location', e.target.value)}
              />
    
              <div className="achievements-section">
                <label>Achievements</label>
                 {/* pay attention to line 65 because may brake */}
                {experiences.achievements?.map((achievement, achIndex) => (
                  <input
                    key={achIndex}
                    type="text"
                    value={achievement}
                    onChange={(e) => handleAchievementChange(index, achIndex, e.target.value)}
                  />
                ))}
                <button onClick={(e) => handleAddAchievement(e, index)}>+ New Achievement</button>
              </div>
            </div>
          ))}
          <button onClick={handleAddExperience}>+ New Experience</button>
        </div>
      );

    
}