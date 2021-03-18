import React,{useState} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

export default function SignupForm() {

	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');
	const [fName, setfName] = useState('')
	const [lName, setlName] = useState('')

	const handleSubmit = async (event) => {
		event.preventDefault();

		try{
		axios.post(
			'https://api.chatengine.io/projects/people/',
			{ 'username': `${username}`, 'secret': `${password}`, 'first_name': `${fName}`, 'last_name': `${lName}` },
			{ headers: { "Private-Key": 'd0e8ae60-fc7e-4bc6-a7b2-5c587527d9a1 ' } }
		)
		localStorage.setItem('username', username);
		localStorage.setItem('password', password);
  
		window.location.reload();
		setError('');
		} catch (err) {
			setError("Couldn't create an account. Please Try again later");
		  }
	}



	return (
	     <div className="wrapper">
			<div className="form">
				<h1 className="title">Chat Application</h1>
				<form onSubmit={handleSubmit}>
				<input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="input" placeholder="Username" required />
				<input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="Password" required />
				<input type="text" value={fName} onChange={(e) => setfName(e.target.value)} className="input" placeholder="First Name" required />
				<input type="text" value={lName} onChange={(e) => setlName(e.target.value)} className="input" placeholder="Last Name" required />

				<div align="center">
					<button type="submit" className="button">
					<span>I'm Coming...</span>
					</button>
				</div>
				<div align='center'>  
				    {/* Already have an account? <Link to="/login">Log in</Link> */}
				</div>
				</form>
				<h3 align='center'>{error}</h3>
			</div>
			</div>

	)
}
