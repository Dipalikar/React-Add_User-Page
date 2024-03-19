
import './Card.css'
const Card=(props)=>{
    
    return(
        <div className={`card ${props.className}`}> 
            {props.children}
        </div>
    )
}

export default Card;

// '${card} ${props.className}'
// {props.className}
// const first="Dipali";
// const age=22;
// const string=`I'm ${first}, I am "${age}+" years old.`