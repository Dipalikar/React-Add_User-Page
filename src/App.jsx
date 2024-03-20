import React,{useState} from 'react'
import AddUser from './components/User/AddUser'
import './App.css'
import UsersList from './components/User/UsersList'
import Wrappers from './components/Helpers/Wrappers'

const App=() =>{
  const [usersList , setUsersList] = useState([]);

  const addUserHandler=(uName,uAge)=>{
    setUsersList(prevUsersList=>{
      return [...prevUsersList,{name:uName,age:uAge,id:Math.random().toString()}]
    })

  }

  return(
    <Wrappers>
        <AddUser onAddUser={addUserHandler}/>
        <UsersList users={usersList}/>
    </Wrappers>
      
    
  )
}

export default App
