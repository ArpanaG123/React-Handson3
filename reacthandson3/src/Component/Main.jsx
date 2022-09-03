import React from 'react'
import { useState } from 'react';
import './Main.css'


function Main(){
    const[name,setName] = useState(null);
    const[department,setDepartment] = useState(null);
    const[rating,setRating] = useState(null);
    const [items,setitems]=useState([]);
    const[isSubmit,setIsSubmit] = useState(false)


    const updateName = (event) => {
        setName(event.target.value);
    }
    
    const updateDepart = (event) => {
        setDepartment(event.target.value);
    }

    const updateRate = (event) => {
        setRating(event.target.value);
    }

    
    const handleSubmit = (event) => {
        event.preventDefault();
        setitems((values)=>{
            return [...values,["Name : ",name, " | " , "Department : " ,department, " | ","Rating : ",rating]]

        })
        setIsSubmit(true)
    }

    function updateBack(){
        setIsSubmit(false)   
    }

    return(
        <div className='main'>
            <h1>EMPLOYEE FEEDBACK FORM</h1>
            {
                isSubmit === false ?
                <form onSubmit={handleSubmit}>
                    <label id = "naming">Name:</label>
                    <input type = "text" className= "name" value = {name} onChange= {updateName} required></input><br></br>
                    <label id = "depart">Department:</label>
                    <input type = "text" className="dep" value = {department} onChange = {updateDepart} required></input><br></br>
                    <label id = "rate">Rating:</label>
                    <input type = "number" className="rating" value = {rating} onChange = {updateRate} required></input><br></br>
                    <button id = "fsubmit">Submit</button><br></br>
                </form> : 
            <div>
                <div className  = "box">
                    {
                    items.map((saveValue) => 
                    {
                        return <div className="boxItem">{saveValue}</div>
                    })
                    } 

                </div>
                <button class = "backbut" onClick={updateBack}>Go Back</button>
            </div>
            }

        </div>
    );
}


export default Main