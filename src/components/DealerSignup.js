import { useState } from "react";
import { Navigate } from "react-router-dom/dist/umd/react-router-dom.development";

function DealerSignup() {

const [username,setUsername]=useState("");
const [password,setPassword]=useState("");
const[email,setEmail]=useState("");
const[location,setLocation] = useState("");
const [redirect,setRedirect] = useState(false);

if(redirect===true){
  return <Navigate to ={'/login'}/>
}

const handleSignup = async (e) => {
  e.preventDefault();

  const response = await fetch('https://test-backend-dusky.vercel.app/user/signup2', {
    method: 'POST',
    body: JSON.stringify({ email, password, username, location }),
    headers: { 'Content-Type': 'application/json' },
    // credentials: 'include',
  });


  if (response.ok) {
    alert("Registered Successfully");
    setRedirect(true);
  }
  else {
    alert("Registration failed");
  }

}


    return (
        <div>
        <div className="container mt-5">
        <div className="row">
        <div className="col-12">
        <h2 className="register mb-4 d-flex justify-content-center p-2">Register</h2>
        <form onSubmit={handleSignup}>
        <div className="mb-3">
          <input type="text" className="form-control" required="true" id="exampleInputText" aria-describedby="textHelp" placeholder="User Name" value={username} onChange={(e)=>{setUsername(e.target.value)}}/>
        </div>
        <div className="mb-3">
          <input type="email" className="form-control" required="true" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
        </div>
        <div className="mb-3">
          <input type="password" className="form-control" required="true" id="exampleInputPassword1" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
        </div>
        <div className="mb-3">
          <input type="text" className="form-control" required="true" id="exampleInputText" placeholder="Location" value={location} onChange={(e)=>setLocation(e.target.value)}/>
        </div>
        <div className="d-flex justify-content-center">
        <button type="submit" className="btn btn-primary">Sign Up</button>
        </div>
        <div className="d-flex justify-content-center">
        </div>
      </form>
        </div>
        </div>
        </div>
        </div>
    );
  }
  
  export default DealerSignup;
  