import {useState} from 'react'
import axios from 'axios'

const SignUp = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");

    const endpoint = "http://localhost:4000/sign-up";

    async function signUp(){
        try {
            const payload = {
                firstName,
                lastName,
                Email,
                Password
            }

            const response = await axios.post(endpoint, payload, {
                // headers:{
                    // "Content-Type":"application/json", 
                    // "Authorization":`Bearer ${}`
                // }
            })
            console.log(response.data)
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <>
            <div className='mx-auto container w-100 shadow-lg border border-dark mt-5' style={{height:"400px"}}>
                <h6 className="display-6 text-center text-muted mb-5">Sign Up</h6>
                <input onChange={(e)=>setFirstName(e.target.value)} type="text" className="form-control w-100 mb-3 border border-dark" />
                <input onChange={(e)=>setLastName(e.target.value)} type="text" className="form-control w-100 mb-3 border border-dark" />
                <input onChange={(e)=>setEmail(e.target.value)} type="text" className="form-control w-100 mb-3 border border-dark" />
                <input onChange={(e)=>setPassword(e.target.value)} type="text" className="form-control w-100 mb-3 border border-dark" />
                <button onClick={signUp} className="btn btn-dark">Submit</button>
            </div>
        </>
    )
}

export default SignUp