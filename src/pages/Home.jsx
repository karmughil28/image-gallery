import { Link } from 'react-router-dom';
import { images } from '../data';

export default function Home() {
  return <div className="home-page">
    <section className="hero section-pad">
      <p className="eyebrow">PRIVATE IMAGE COLLECTION</p>
      <h1>Private, <em>not distant.</em><br/>The calm side of collecting.</h1>
      <p className="hero-copy">A considered collection of photographs for people who prefer the quieter frame.</p>
      <Link className="pill-button" to="/collection">Approach the collection</Link>
    </section>
    <section className="editorial-gallery">
      {images.slice(0,5).map((item, i) => <img key={item.id} className={`editorial-img editorial-${i+1}`} src={item.image} alt={item.title} />)}
    </section>
    <section className="manifesto section-pad"><div><p className="eyebrow">THE COLLECTION</p><h2>Images with room to breathe.</h2></div><p>Landscape, people, architecture and moments between them. Each photograph is selected for its sense of place, light and restraint.</p></section>
  </div>;
}
