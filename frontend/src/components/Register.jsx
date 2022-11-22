import React, { useState } from "react";

export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className="auth-form-container">
            <h2>Register</h2>
            <form className="register-form" onSubmit={handleSubmit}>
                <label htmlFor="name">Full Name</label>
                <input value={name}  name="name" id="name" placeholder="full name"/>
                <label for="email">email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="youremail@gmail.com" id="email" name="email"/>
                <label for="password">password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} placeholder="********" id="password" name="password"/>
                <button type="submit">Register</button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here!</button>
        </div>
    )
}