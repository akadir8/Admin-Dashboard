import React, { useState } from "react";


function Signup() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        
        console.log('Name', name);
        console.log('Email', email);
        console.log('Password',password);
    }
    return (
        <div>
            <h2>Kayıt Ol</h2>
            <form onSubmit={handleSubmit}>
            <div>
            <label>Ad:</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div>
            <label>Email:</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div>
            <label>Şifre:</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <button type="submit">Kayıt Ol</button>
            </form>
        </div>
    )
}

export default Signup;