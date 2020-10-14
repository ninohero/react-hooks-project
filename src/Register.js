import React, { useState, useEffect } from 'react';

const Register = () => {
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: ''
  })
  const [user, setUser] = useState(null);

  useEffect(() => {
    console.log('form', form);
  })

  const handleChange =  (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value
    });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setUser(form)
  }

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Register</h2>
      <form
        style={{
          display: 'grid',
          alignItems: 'center',
          justifyItems: 'center'
        }}
        onSubmit={(event => handleSubmit(event))}
      >
        <input type="text"
          placeholder="Username"
          name="username"
          onChange={handleChange}
        />
        <input type="email"
          placeholder="Email Address"
          name="email"
          onChange={handleChange}
        />
        <input type="password"
          placeholder="Password"
          name="password"
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>

      {user && JSON.stringify(user, null, 2)}
    </div>
  )
}

export default Register;
