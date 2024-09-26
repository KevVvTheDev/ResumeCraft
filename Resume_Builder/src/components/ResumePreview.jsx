import { useState } from 'react'
import '../styles/ResumePreview.css'

export default function ResumePreview({userInfo}) {
    return (
        <div className="ResumePreview">
            <h1 style={{textAlign: "center", padding: "20px"}}>Resume Preview</h1>
            <div className ="previewForm generatedPadding"> 
                <div className ="personalInfo">
                    <h2>{userInfo.name}</h2>
                    <p className='paragraphStyle generatedPadding'>Pennsylvania , USA | +1 234 567 890 | {userInfo.email}</p>
                    <hr/>
                    <p className='paragraphStyle generatedPadding'>Full Stack Developer with expertise in Java, React, and integration technologies.<br/>
                    Also skilled in JavaScript and Python, demonstrating adaptability across various frameworks and platforms.</p>
                    <hr/>
                </div>
            </div>
        </div>
    );
}