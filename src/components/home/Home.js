import React, { useEffect, useState } from 'react'
import Login from '../login/Login';

function Home() {

    const [name, setName] = useState("")
    const [logout, setLogout] = useState(false)

    useEffect(() => {
        setName(localStorage.getItem('Name').replace(/"/g, ""))
      }, []);


    function handleLogout() {
        setLogout(true)
    }

    return (
        <>
        {
            logout ? <Login/> : 
          <>
            <div>
                <button className="btn btn-dark float-right" onClick={handleLogout}>Logout</button>
            </div>
            <div className="h2">Welcome {name}</div>
          </>
        }         
        </>
    )
}

export default Home
