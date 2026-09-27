import { useEffect, useState } from 'react';
import { NavLink, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import Home from './pages/Home';
import Collection from './pages/Collection';
import Cart from './pages/Cart';
import LocationPicker from './pages/LocationPicker';
import Login from './pages/Login';
import Signup from './pages/Signup';

function Header({ cartCount, user, onLogout }) {
  const [menu, setMenu] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => setMenu(false), [location.pathname]);

  const links = [['/', 'Entrance'], ['/collection', 'The Collection'], ['/location', 'Location'], ['/signup', 'Membership']];
  return <header className="site-header">
    <button className="mobile-brand" onClick={() => navigate('/')}>16th<br/>HOLE</button>
    <nav className={`nav-links ${menu ? 'open' : ''}`}>
      {links.map(([to, label]) => <NavLink key={to} to={to} className={({isActive}) => isActive ? 'active' : ''}>{label}</NavLink>)}
      <NavLink to="/cart" className={({isActive}) => isActive ? 'active cart-link' : 'cart-link'}>Cart <span>{cartCount}</span></NavLink>
      {user ? <button className="text-button" onClick={onLogout}>Log out</button> : <NavLink to="/login">Log in</NavLink>}
    </nav>
    <button className="brand" onClick={() => navigate('/')}>16th<br/>HOLE</button>
    <button className="menu-button" aria-label="Open menu" onClick={() => setMenu(!menu)}><span></span><span></span></button>
  </header>
}

export default function App() {
  const [cart, setCart] = useState(() => JSON.parse(localStorage.getItem('16thHoleCart') || '[]'));
  const [user, setUser] = useState(() => JSON.parse(localStorage.getItem('16thHoleCurrentUser') || 'null'));
  useEffect(() => localStorage.setItem('16thHoleCart', JSON.stringify(cart)), [cart]);
  useEffect(() => user ? localStorage.setItem('16thHoleCurrentUser', JSON.stringify(user)) : localStorage.removeItem('16thHoleCurrentUser'), [user]);

  const addToCart = (image) => setCart((items) => {
    const found = items.find(item => item.id === image.id);
    return found ? items.map(item => item.id === image.id ? {...item, quantity: item.quantity + 1} : item) : [...items, {...image, quantity: 1}];
  });
  const changeQty = (id, delta) => setCart(items => items.map(item => item.id === id ? {...item, quantity: Math.max(1, item.quantity + delta)} : item));
  const remove = (id) => setCart(items => items.filter(item => item.id !== id));
  const logout = () => setUser(null);

  return <div className="app-shell">
    <Header cartCount={cart.reduce((n, i) => n + i.quantity, 0)} user={user} onLogout={logout} />
    <main><Routes>
      <Route path="/" element={<Home />} />
      <Route path="/collection" element={<Collection onAdd={addToCart} />} />
      <Route path="/cart" element={<Cart cart={cart} onQty={changeQty} onRemove={remove} />} />
      <Route path="/location" element={<LocationPicker />} />
      <Route path="/login" element={<Login onLogin={setUser} />} />
      <Route path="/signup" element={<Signup onSignup={setUser} />} />
    </Routes></main>
    <footer><span>16th HOLE</span><span>A quiet collection of photographs.</span><span>© 2026</span></footer>
  </div>;
}
