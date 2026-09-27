import { useMemo, useState } from 'react';
import { categories, images } from '../data';
import ImageCard from '../components/ImageCard';

export default function Collection({ onAdd }) {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('All');
  const filtered = useMemo(() => images.filter(item => (category === 'All' || item.category === category) && `${item.title} ${item.category}`.toLowerCase().includes(query.toLowerCase())), [query, category]);
  const drop = (e) => { e.preventDefault(); try { const item = JSON.parse(e.dataTransfer.getData('text/plain')); if (item?.id) onAdd(item); } catch {} };
  return <div className="collection-page section-pad">
    <div className="page-intro"><p className="eyebrow">THE COLLECTION</p><h1>Collected quietly.</h1><p>Search the archive, filter by mood, and keep the frames that stay with you.</p></div>
    <div className="collection-tools"><label className="search"><span>⌕</span><input value={query} onChange={e => setQuery(e.target.value)} placeholder="Search photographs..." /></label><div className="filters">{categories.map(c => <button className={category===c?'selected':''} onClick={() => setCategory(c)} key={c}>{c}</button>)}</div></div>
    <div className="drop-zone" onDragOver={e => e.preventDefault()} onDrop={drop}><span>Drag a photograph here to add it to your collection</span></div>
    {filtered.length ? <div className="image-grid">{filtered.map(item => <ImageCard key={item.id} item={item} onAdd={onAdd} />)}</div> : <div className="empty-state">No photographs found. Try another search.</div>}
  </div>;
}
