import { useState } from "react"
import { useNavigate } from "react-router-dom"





export default function Login( props ) {
    const [name, setname] = useState('')
    const [email, setemail] = useState('')


    const navigate = useNavigate()
    
function handleChange(event) {
    event.preventDefault();
   if (!name || !email) return;
   props.setUser({ name: name,
email: email });
navigate('/dashboard')

    
}



    return (

        <div>
            <form onSubmit={handleChange}>
                <h2>Please Login</h2>
                <input type="text" name="username" onChange={(event) => setname(event.target.value)} value={name}/>
                <label htmlFor="username">Name</label>
                <input type="text" name="emailname" onChange={(event) => setemail(event.target.value)} value={email}/>
                <label htmlFor="emailname">Emailname</label>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}