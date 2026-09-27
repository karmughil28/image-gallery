import { Link } from 'react-router-dom';
import { money } from '../data';

export default function Cart({ cart, onQty, onRemove }) {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  return <div className="cart-page section-pad">
    <div className="page-intro"><p className="eyebrow">YOUR COLLECTION</p><h1>Kept for later.</h1><p>Review your selected photographs before choosing an exact location.</p></div>
    {!cart.length ? <div className="empty-state large">Your collection is empty.<br/><Link to="/collection">Browse the archive →</Link></div> : <>
      <div className="cart-layout"><div className="cart-items">{cart.map(item => <article className="cart-item" key={item.id}><img src={item.image} alt={item.title}/><div className="cart-info"><div><p className="eyebrow">{item.category}</p><h2>{item.title}</h2><p>{money(item.price)} each</p></div><div className="qty"><button onClick={() => onQty(item.id,-1)}>−</button><span>{item.quantity}</span><button onClick={() => onQty(item.id,1)}>+</button></div><button className="remove" onClick={() => onRemove(item.id)}>Remove</button></div></article>)}</div>
      <aside className="cart-summary"><p className="eyebrow">SUMMARY</p><div className="summary-line"><span>Photographs</span><span>{cart.reduce((n,i)=>n+i.quantity,0)}</span></div><div className="summary-line total"><span>Total</span><strong>{money(total)}</strong></div><Link className="dark-button" to="/location">Continue to location</Link></aside></div>
    </>}
  </div>;
}
