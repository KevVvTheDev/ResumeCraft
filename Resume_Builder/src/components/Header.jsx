import '../styles/header.css';

export default function Header(){
    //a simple and humble header 
    return (
        <header className="header">
            <h1>Turn your <span className="details-span">Details</span> into <span className="resume-span">Resume</span></h1>
        </header>
    )
}