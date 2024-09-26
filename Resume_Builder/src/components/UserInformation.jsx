import React, { useState } from 'react'
import '../styles/UserInformation.css'


export default function UserInformation({userInfo,setUserInfo}) {
    
    return (
        <div className='userInformation'>
            <div className='personalSection'>
                <AskingName userInfo = {userInfo} setUserInfo = {setUserInfo} section ={'personal'}/>
            </div>
        </div>
    );

}

function AskingName(props) {
 
  const handleChange = (event) => {
    const { name, value } = event.target;
    const newInfo = { ...props.userInfo, [name]: value };
    //props.setUserInfo({...props.userInfo, [name]: value});
    props.setUserInfo(newInfo);
  };
  
    return (
      <div className="Section">
          <h3>{props.section}</h3>

      <form>
        <label>Enter your name:
        <input type="text" name = "name" value={props.userInfo.name} onChange={handleChange} />
        <input type="text" name = "email" value={props.userInfo.email} onChange={handleChange} />
        </label>
      </form>
      
      </div>
    );
  }
  
  
  // function AskingUserInfo(props) {
  //   const [open, setOpen] = useState(false); 
  
  //   return (
  //     <>
  //       <h3>{props.section}</h3>
  //     {/* {open ? } */}
  //       <Button
  //         onClick={() => setOpen(!open)}
  //         aria-controls="example-collapse-text"
  //         aria-expanded={open}
  //       >
  //         edit
  //       </Button>
  //       <Collapse in={open}>
  //         <div id="example-collapse-text">
  //           <h3>name: </h3>
  //           <input type="text" />
  //         </div>
  //       </Collapse>
  //     </>
  //   );
  // }


  // return (
  //   <div className="Section">
  //       <h3>{props.section}</h3>
  //     { open ? (
  //       <div className="editName">  
  //         <button className="editButton" onClick={handleToggle}>edit</button>
          
  //         <h3>Name:</h3>
  //         <input type="text" value={props.name} onChange={(event) => props.setName(event.target.value)} />   
            
  //       </div>
  //     ) : (
  //       <button className="editButton" onClick={handleToggle}>Edit</button>
  //     )}
  //   </div>
  // );