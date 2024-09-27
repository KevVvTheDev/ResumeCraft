import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import PropTypes from 'prop-types';
import '../styles/resume.css';

export default function Resume({formData}){
    //use object destructuring to extract information from formData object
    const { personal, education, languages, experiences} = formData;
    //handleDownload function to download the resume in pdf format
const handleDownload = () => {
    const resume = document.querySelector('.resume-sheet');
  
    // Create a canvas of the resume
    html2canvas(resume, {
      scale: 2, // Maintain a higher scale for better quality
      useCORS: true,
      width: resume.offsetWidth,
      height: resume.offsetHeight,
    }).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
  
      // Create a PDF document
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm', //  better measurement
        format: 'a4', // Use A4 paper size
      });
  
      // A4 dimensions in mm
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      
      // Calculate image dimensions maintaining aspect ratio
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      
      // Calculate the aspect ratio
      const aspectRatio = imgWidth / imgHeight;
  
      // Calculate new dimensions
      let newWidth, newHeight;
      if (imgWidth > imgHeight) {
        // Landscape image
        newWidth = pdfWidth; // Fit PDF width
        newHeight = pdfWidth / aspectRatio; // Maintain aspect ratio
      } else {
        // Portrait image
        newHeight = pdfHeight; // Fit PDF height
        newWidth = pdfHeight * aspectRatio; // Maintain aspect ratio
      }
  
      // Add the image to the PDF
      pdf.addImage(imgData, 'PNG', 0, 0, newWidth, newHeight);
      
      // Save the PDF
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
                <li key={index}>{'•' + skill}</li>
              ))}
            </ul>
          </div>

          <hr />

          <div className="education-div">
            <h2>Education</h2>
            <div className='clg-div'>
              <p> <strong>College/University:</strong>{education.college}</p>
              <div className="clg-details">
                <p> <strong>Degree: </strong>{education.degree}</p>
                <p className='gpa'> GPA: {education.gpa}</p>
                <p> <strong>Graduation: </strong>{education.graduation}</p>
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
              {experiences.map((exp, index) => (
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