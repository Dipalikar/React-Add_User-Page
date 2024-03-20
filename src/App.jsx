import React,{Fragment, useState}from 'react'
import AddUser from './components/User/AddUser'
import './App.css'
import UsersList from './components/User/UsersList'


const App=() =>{
  const [usersList , setUsersList] = useState([]);

  const addUserHandler=(uName,uAge)=>{
    setUsersList(prevUsersList=>{
      return [...prevUsersList,{name:uName,age:uAge,id:Math.random().toString()}]
    })

  }

  return(
    <React.Fragment> 
        <AddUser onAddUser={addUserHandler}/>
        <UsersList users={usersList}/>
    </React.Fragment>
  //we can also write this as <> </> || <Fragment></Fragment> in place of <React.Fragment> </React.Fragment>  
    
  )
}

export default App
