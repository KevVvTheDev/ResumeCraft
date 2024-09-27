import Personal from './Personal.jsx';
import Education from './Education.jsx';
import Languages from './Languages.jsx';
import Experience from './Experience.jsx';
import PropTypes from 'prop-types';
import '../styles/form.css';

export default function Form({formData,handlePersonalChange,handleEducationChange,handleLanguageChange,handleExperienceChange}){
//pass the obj and all the functions. Could just have props in parameter instead.
    return(
        <form>
            <Personal personal={formData.personal} handlePersonalChange={handlePersonalChange}/>
            <Education education={formData.education} handleEducationChange={handleEducationChange}/>
            <Languages languages={formData.languages} handleLanguageChange={handleLanguageChange}/>
            <Experience experiences={formData.experiences} handleExperienceChange={handleExperienceChange}/>
        </form>
    );

}

//to validate the type of the props * easier to debug
Form.PropTypes = {
    formData: PropTypes.object.isRequired,
    handlePersonalChange: PropTypes.func.isRequired,
    handleEducationChange: PropTypes.func.isRequired,
    handleLanguageChange: PropTypes.func.isRequired,
    handleExperienceChange: PropTypes.func.isRequired,
  };