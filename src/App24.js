import React from "react";
import { useState } from "react";
import Login from "./Login";
import Home from "./Home";
export default function App24() {
  const [user, setUser] = useState();
  const [password, setPassword] = useState();
  const [flag, setFlag] = useState(true);
  const [error, setError] = useState();
  const validateUser = () => {
    if (user === "john@gmail.com" && password === "1234") {
      setFlag(false);
    }else {
        setError("Access Denied: Invalid Username or Password");
      }
  };
  return (
    <div>
      {flag ? (
        <>
          <p>
            <input
              type="text"
              onChange={(e) => setUser(e.target.value)}
              placeholder="Username"
            ></input>
          </p>
          <p>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            ></input>
          </p>
          <button onClick={validateUser}>Login</button>
          { <p style={{ color: "red" }}>{error}</p>}
        </>
      ) : (
        <Home />
        // the above is like { flag ? (<Login />) : (<Home />) }
       // so here instead of login directly we giving this code
      )}
    </div>
  );
}
