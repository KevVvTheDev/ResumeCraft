import { useState } from 'react'
import '../styles/App.css'
import  UserInformation from './UserInformation.jsx' //import the part that get data from user
import ResumePreview from'./ResumePreview.jsx' // preview the resume

function App() {

  return (
    <div className="App">
        <UserInformation />
        <ResumePreview />
    </div>
  )
}

export default App
