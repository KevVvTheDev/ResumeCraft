import { useState } from 'react';
import Form from './Form.jsx';
import Resume from './Resume.jsx';
import '../styles/body.css';

export default function Body() {
    //this would be the default information that sent to the form
    //formData is an object that contains multiple objects for information
    const [formData, setFormData] = useState({
        personal: {
            name: 'Kevin Tran',
            email: 'realEmail@gmail',
            phone: '+1 123 456 7891',
            address: 'Erie,PA',
            summary: 'Specialize in fullstack web development and love to learn more skills and honed my skills in React js.',
            skills: ['Java', 'JavaScript', 'C++', 'React', 'HTML', 'CSS'],
        },
        education: {
            college: 'Penn State Behrend',
            degree: 'Bachelor of Computer Science',
            major: 'Computer Science',
            gpa: '3.6',
            
        },
        languages: ['English','Vietnamese'], //Array because allow users to add more.

        experiences: [ //let user add more experience
            {
                company: 'RealCompany',
                role: 'Sr Software Developer',
                duration: 'Aug 2022 - Present',
                location: 'New York, USA',
                achievement: ['Worked with team on low-level design of in-house migration accelerator (Java and MySQL).','Create a robot that could take over the world.', 'make a deal with world leaders to dominate the tech field.'],
            }
        ],
        

    });

    const handlePersonalChange = (updatedInfo) => {
    //     setFormData({ ...formData, personal: updatedInfo });
    //     const newData = {...formData, personal: updatedInfo};
    //     setFormData(newData);
    // 
        setFormData((prevData) => ({ ...prevData, personal: updatedInfo }));
    }

    const handleEducationChange = (updatedInfo) => {
        setFormData((prevData) => ({...prevData, education: updatedInfo}));
    }

    const handleLanguageChange = (updatedInfo) => {
        setFormData((prevData) => ({...prevData, languages: updatedInfo}));
    }

    const handleExperienceChange = (updatedInfo) => {
        setFormData((prevData) => ({...prevData, experiences: updatedInfo}));
    }

    return(
        <div>
             {/* <Form 
             //pass the form  and multiple function to the form
                formData={formData}
                handlePersonalChange={handlePersonalChange}
                handleEducationChange={handleEducationChange}
                handleLanguageChange={handleLanguageChange}
                handleExperienceChange={handleExperienceChange}
            />
                
            <Resume formData={formData} /> */}

        </div>
    );
}