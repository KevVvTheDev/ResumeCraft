import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import PropTypes from 'prop-types';
import '../styles/resume.css';

export default function Resume({formData}){
    //use object destructuring to extract information from formData object
    const { personal, education, languages, experience} = formData;

  const handleDownload = () => {
    const resume = document.querySelector('.resume-sheet');

    const resumeWidth = resume.offsetWidth;
    const resumeHeight = resume.offsetHeight;

    html2canvas(resume, {
      scale: 2,
      useCORS: true, 
      width: resumeWidth, 
      height: resumeHeight,
    }).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');

      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'px',
        format: [canvas.width, canvas.height], 
      });

      pdf.addImage(imgData, 'PNG', 0, 0, canvas.width, canvas.height);
      pdf.save('resume.pdf');
    });
  };

  return(

    <div className='resume-div'>
    <div className='resume-sheet'>
      <div className="header-section">
        <h1>{personal.name}</h1>
        <div className="header-content">
          <p>{personal.address}</p>
          <p>|</p>
          <p>{personal.phone}</p>
          <p>|</p>
          <p>{personal.email}</p>
        </div>
      </div>

      <hr />

      <div className="summary">
        <p>{personal.summary}</p>
      </div>

      <hr />

      <div className="body-section">
        <div className="body-left">
          <div className="skills-div">
            <h2>Skills</h2>
            <ul>
              {personal.skills.map((skill, index) => (
                <li key={index}>{'•' + ' ' + skill}</li>
              ))}
            </ul>
          </div>

          <hr />

          <div className="education-div">
            <h2>Education</h2>
            <div className='clg-div'>
              <h3>{education.college}</h3>
              <div className="clg-details">
                <p>{education.degree}</p>
                <p className='gpa'>{education.gpa}</p>
              </div>
            </div>
          </div>

          <hr />

          <div className="languages-div">
            <h2>Languages</h2>
            <ul>
              {languages.map((language, index) => (
                <li key={index}>{'•' + ' ' + language}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="body-right">
          <div className="experience-div">
            <h2>Experience</h2>
            <ul>
              {experience.map((exp, index) => (
                <li key={index}>
                  <h3 className='company'>{exp.company}</h3>
                  <p className='bar'>|</p>
                  <p className='job'>{exp.job}</p>
                  <p className='duration'>{exp.duration}</p>
                  <p className='location'>{exp.location}</p>
                  <div className='ach-div'>
                    <h4>Achievements:</h4>
                    <ul>
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex}>{'•' + ' ' + achievement}</li>
                      ))}
                    </ul>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* <hr /> */}

    </div>

    <div className="download-cv">
      <button className='download-btn' onClick={handleDownload}>Download CV</button>
      <p>❤ Get your Resume in PDF format by just clicked the button! ❤</p>
    </div>
  </div>
);
}