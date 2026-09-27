import { useState } from 'react';
import { money } from '../data';

export default function ImageCard({ item, onAdd }) {
  const [cursor, setCursor] = useState({x: 0, y: 0, show: false});
  const move = (e) => { const r = e.currentTarget.getBoundingClientRect(); setCursor({x: e.clientX-r.left, y: e.clientY-r.top, show: true}); };
  return <article className="image-card" draggable onDragStart={(e) => e.dataTransfer.setData('text/plain', JSON.stringify(item))} onMouseMove={move} onMouseLeave={() => setCursor({...cursor, show:false})}>
    <div className="card-image-wrap">
      <img src={item.image} alt={item.title} draggable="false" />
      {cursor.show && <span className="circle-cursor" style={{left: cursor.x, top: cursor.y}}>VIEW</span>}
      <button className="add-floating" onClick={() => onAdd(item)}>+</button>
    </div>
    <div className="card-meta"><div><h3>{item.title}</h3><p>{item.category}</p></div><strong>{money(item.price)}</strong></div>
  </article>;
}
