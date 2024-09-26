import PropTypes from 'prop-types';

export default function Experience({ experience, handleExperienceChange }) {
    const handleInputChange = (index,field,value) => {
        const newExperiences = [...experience]; //create a shallow copy of the experience array
        newExperiences[index][field] = value; //update the value of the field
        handleExperienceChange(newExperiences); //update the state
    };
    const handleAddAchievement = (e, index) => {
        e.preventDefault();
        const newExperiences = [...experienceData];
        newExperiences[index].achievements.push('');
        handleExperienceChange(newExperiences);
      };
    
      const handleAddExperience = (e) => {
        e.preventDefault();
        handleExperienceChange([
          ...experienceData,
          { company: '', job: '', duration: '', location: '', achievements: [''] },
        ]);
      };
    
      return (
        <div className="experience-div">
          <h1>Experience</h1>
          {experienceData.map((experience, index) => (
            <div key={index} className="experience-section">
              <label htmlFor={`company-${index}`}>Company</label>
              <input
                type="text"
                id={`company-${index}`}
                value={experience.company}
                onChange={(e) => handleInputChange(index, 'company', e.target.value)}
              />
    
              <label htmlFor={`job-${index}`}>Job</label>
              <input
                type="text"
                id={`job-${index}`}
                value={experience.job}
                onChange={(e) => handleInputChange(index, 'job', e.target.value)}
              />
    
              <label htmlFor={`duration-${index}`}>Duration</label>
              <input
                type="text"
                id={`duration-${index}`}
                value={experience.duration}
                onChange={(e) => handleInputChange(index, 'duration', e.target.value)}
              />
    
              <label htmlFor={`location-${index}`}>Location</label>
              <input
                type="text"
                id={`location-${index}`}
                value={experience.location}
                onChange={(e) => handleInputChange(index, 'location', e.target.value)}
              />
    
              <div className="achievements-section">
                <label>Achievements</label>
                {experience.achievements.map((achievement, achIndex) => (
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