import './UsersList.css';
import Card from '../UI/Card';

const UsersList= (props)=>{
    return(
    <Card className={`users`}>
        <ul>
            {props.users.map(users=>
                <li key={users.id}>
                    {users.name} ({users.age} years old)
                </li>
            )}
        </ul>
    </Card>
    )
};

export default  UsersList;