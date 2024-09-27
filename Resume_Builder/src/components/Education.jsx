import PropTypes from 'prop-types';

export default function Education({education, handleEducationChange}) {
    //handleEducationChange is the function that will update the input in real time
    // education is the object that passed from the parent component
    const handleInput = (event) => {
        const { name, value } = event.target;
        handleEducationChange({...education, [name]: value});
        // handleEducationChange({ ...education, [event.target.id]: event.target.value });
    }
    return(     
        <div className="education-div"> {/* main div that contains all the inputs for education */}
        <h1>Education</h1>

        <div className="details-list">

        <label htmlFor="college">College/University:</label>
        <input 
          type="text" 
          name="college" 
          id='college'
          value={education.college} 
          onChange={handleInput} 
        />

        <label htmlFor="degree">Degree:</label>
        <input 
          type="text" 
          name="degree"
          id="degree" 
          value={education.degree} 
          onChange={handleInput}  
        />

        <label htmlFor="gpa">GPA:</label>
        <input 
          type="text" 
          id="gpa" 
          name = "gpa"
          value={education.gpa} 
          onChange={handleInput}  
        />

        <label htmlFor="graduation">Graduation:</label>
        <input 
          type="text" 
          id="graduation" 
          value={education.graduation} 
          onChange={handleInput} 
        />
      </div>
    </div>

  );
        
}

//use prop-types to validate props in the object and the type of the props
Education.PropTypes ={
    education: PropTypes.shape({
        college: PropTypes.string.isRequired,
        degree: PropTypes.string.isRequired,
        gpa: PropTypes.string.isRequired,
        graduation: PropTypes.string.isRequired
    }).isRequired,
    handleEducationChange: PropTypes.func.isRequired
};