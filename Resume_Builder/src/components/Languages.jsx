import { useState } from 'react';
import PropTypes from 'prop-types';

export default function Languages({ languages, handleLanguagesChange }) {
    const [language, setLanguage] = useState(languages);
    // const [exist, setExist] = useState(false);
    const handleLanguageChange = (index, updatedInfo) => {
        const newLanguage = [...language];
        newLanguage[index] = updatedInfo;
        setLanguage(newLanguage);
        handleLanguagesChange(newLanguage);
    }
    
    const handleAddLanguage = () => {
        setLanguage([...language, '']);
        handleLanguageChange([...language, '']);
    }
    
    return (
        <div className="languages-div">
      <h1>Languages:</h1>
      <div className="details-list">
        {language.map((language, index) => (
          <input
            key={index}
            type="text"
            value={language}
            onChange={(event) => handleLanguageChange(index, event.target.value)}
          />
        ))}
      </div>

      <button onClick={handleAddLanguage} className="add-language-btn">+ New Language</button>
    </div>
        
    );
}

//to validate
Languages.propTypes = {
    Languages: PropTypes.array.isRequired,
    handleLanguagesChange: PropTypes.func.isRequired
};