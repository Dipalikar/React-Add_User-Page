import React, { useState } from "react";
import './AddUser.css'
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
const AddUser=(props) =>{

    const[enteredUsername,setEnteredUsername]=useState('');
    const[enteredAge,setEnteredAge]=useState('');
    const[error, setError] = useState();

    const addUserHandler=(event)=>{
        event.preventDefault();
        if(enteredUsername.trim().length===0 || enteredAge.trim().length === 0){
             setError({
                title:'Invalid Input', 
                message:'Please fill out all fields'
            });
             return;
        }
        if(+enteredAge<1){
            setError({
                title:'Invalid Age', 
                message:'Please enter valid age(>0)'
            });
            return;
        }
        props.onAddUser(enteredUsername,enteredAge);
        setEnteredAge('');
        setEnteredUsername('');
    }

    const usernameChangeHandler =(event)=> {
        setEnteredUsername(event.target.value);
    }   
    
    const ageChangeHandler =(event)=> {
        setEnteredAge(event.target.value);
    } 

    const errorHandler =() =>{
        setError(null);
    }

    return(
        <div>
          <div className=".backdrop">
        {error && <ErrorModal title={error.title }message={error.message} onConfirm={errorHandler}/>}
            <Card className='input'>
            <form onSubmit={addUserHandler}>
                <label htmlFor="username">Username</label>
                <input type="text" id="username"value={enteredUsername} onChange={usernameChangeHandler}/>

                <label htmlFor="age">Age(Years) </label>
                <input type="number" id="age" value={enteredAge} onChange={ageChangeHandler}/>

                <Button type='submit'>Add  User</Button>
            </form>
        </Card>  
        </div>  
        </div>
        
        
        
    );
};

export default  AddUser; 