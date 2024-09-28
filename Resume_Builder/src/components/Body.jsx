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
            email: 'realEmail@gmail.com',
            phone: '+1 123-456-7891',
            address: 'Erie,PA',
            summary: 'Specialize in fullstack web development and love to learn more skills and honed my skills in React js.',
            skills: ['Java', 'JavaScript', 'C++', 'React', 'HTML', 'CSS'],
        },
        //-------------------------------------
        education: {
            college: 'Penn State Behrend',
            degree: 'Bachelor of Computer Science',
            gpa: '3.6',
            graduation: 'December 2025',          
        },
        //-------------------------------------
        languages: ['English','Vietnamese','French','German','Chinese','Japanese'], //Array because allow users to add more.
        //-------------------------------------
        experiences: [ //let user add more experience
            {
                company: 'RealCompany',
                job: 'Software Developer',
                duration: 'Aug 2022 - Present',
                location: 'New York, USA',
                achievements: ['Worked with team on low-level design of in-house migration accelerator (Java and MySQL).','Create a robot that could take over the world.', 'make a deal with world leaders to dominate the tech field.']
            },
            {
                company: 'Capgemini',
                job: 'Software Engineering Intern',
                duration: 'Mar 2022 - Jun 2022',
                location: 'Remote',
                achievements: ['Engaged in the conceptualization and execution of POCs in the following technologies:','Java 8 / JEE, Hibernate','Spring MVC, Spring Boot, MuleSoft (Rest APIs)'],
            },
            {
                company: 'RealCompany',
                job: 'Software Engineering Intern',
                duration: 'Aug 2021 - Dec 2021',
                location: 'Remote',
                achievements: ['Engaged in the conceptualization and execution of POCs in the following technologies:','Java 8 / JEE, Hibernate','Spring MVC, Spring Boot, MuleSoft (Rest APIs)'],
            }
        ],
        
    });

    const handlePersonalChange = (updatedInfo) => {

        // setFormData((prevData) => ({ ...prevData, personal: updatedInfo })); this works too
        setFormData({ ...formData, personal: updatedInfo });
    }

    const handleEducationChange = (updatedInfo) => {
        // setFormData((prevData) => ({...prevData, education: updatedInfo}));
        setFormData({ ...formData, education: updatedInfo });
    }

    const handleLanguageChange = (updatedInfo) => {
        // setFormData((prevData) => ({...prevData, languages: updatedInfo}));
        setFormData({ ...formData, languages: updatedInfo });
    }

    const handleExperienceChange = (updatedInfo) => {
        // setFormData((prevData) => ({...prevData, experiences: updatedInfo}));
        setFormData({ ...formData, experiences: updatedInfo });
    }

    return(
        <div className="body-container">
             <Form 
             //pass the form  and multiple function to the form
                formData={formData}
                handlePersonalChange={handlePersonalChange}
                handleEducationChange={handleEducationChange}
                handleLanguageChange={handleLanguageChange}
                handleExperienceChange={handleExperienceChange}
            />

            <Resume formData={formData} />

        </div>
    );
}