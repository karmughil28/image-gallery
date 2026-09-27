import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Login({ onLogin }) {
  const [form, setForm] = useState({email:'',password:''}); const [error,setError]=useState(''); const navigate=useNavigate();
  const submit = e => { e.preventDefault(); const users=JSON.parse(localStorage.getItem('16thHoleUsers')||'[]'); const found=users.find(u=>u.email===form.email && u.password===form.password); if(!found){setError('Email or password is incorrect.');return;} onLogin({name:found.name,email:found.email}); navigate('/collection'); };
  return <Auth title="Welcome back." subtitle="Enter your membership details to continue."><form onSubmit={submit}><label>Email<input type="email" required value={form.email} onChange={e=>setForm({...form,email:e.target.value})}/></label><label>Password<input type="password" required value={form.password} onChange={e=>setForm({...form,password:e.target.value})}/></label>{error&&<p className="form-error">{error}</p>}<button className="dark-button">Enter the collection</button></form><p className="auth-switch">New here? <Link to="/signup">Create membership</Link></p></Auth>;
}
function Auth({title,subtitle,children}){return <div className="auth-page section-pad"><div className="auth-card"><p className="eyebrow">MEMBERSHIP</p><h1>{title}</h1><p>{subtitle}</p>{children}</div></div>}
