import "./app.css";
import { useState } from "react";

const App = () => {

  const[username, setUserName] = useState("");
  const [user, setUser] = useState(""); 

  return (
    <div>
      <div className="login">
        <input 
          type="text"  
          placeholder="username" 
          onChange={(e) => setUserName(e.target.value)}
        />
        <button onClick={() => setUser(username)}>Login</button>
      </div>
    </div>
  )
}

export default App
