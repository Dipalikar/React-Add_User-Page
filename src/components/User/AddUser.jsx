import React, { useState,useRef } from "react";
import './AddUser.css'
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import Wrappers from "../Helpers/Wrappers";
const AddUser=(props) =>{

    const nameInputRef=useRef();
    const ageInputRef=useRef();
    const[error, setError] = useState();

    const addUserHandler=(event)=>{
        event.preventDefault();
        const enteredName=nameInputRef.current.value;
        const enteredUserAge=ageInputRef.current.value;
        if(enteredName.trim().length===0 || enteredUserAge.trim().length === 0){
             setError({
                title:'Invalid Input', 
                message:'Please fill out all fields'
            });
             return;
        }
        if(+enteredUserAge<1){
            setError({
                title:'Invalid Age', 
                message:'Please enter valid age(>0)'
            });
            return;
        }
        props.onAddUser(enteredName,enteredUserAge);
        ageInputRef.current.value=''
        nameInputRef.current.value='';
        
    }

    const errorHandler =() =>{
        setError(null);
    }

    return(
        <Wrappers>
          <div className=".backdrop">
            {error && <ErrorModal title={error.title }message={error.message} onConfirm={errorHandler}/>}
            <Card className='input'>
            <form onSubmit={addUserHandler}>
                <label htmlFor="username">Username</label>
                <input type="text" id="username"ref={nameInputRef}/>

                <label htmlFor="age">Age(Years) </label>
                <input type="number" id="age"ref={ageInputRef} />

                <Button type='submit'>Add  User</Button>
            </form>
        </Card>  
        </div>  
        </Wrappers>
        
        
        
    );
};

export default  AddUser; 