import Image from 'next/image';

export default function Gallery({ items }) {
  return (
    <section id="galeri" className="section section-light">
      <div className="container">
        <div className="section-heading">
          <span className="sec-tag">Galeri rasa</span>
          <h2 className="sec-title">
            Tampilan menu yang bikin <em>ingin langsung pesan</em>
          </h2>
          <p className="sec-desc">
            Untuk saat ini galeri difokuskan ke hidangan andalan agar pelanggan
            cepat melihat karakter menu yang dijual.
          </p>
        </div>

        <div className="gallery-grid">
          {items.map((item) => (
            <figure key={item.title} className="gal-item">
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <figcaption className="gal-overlay">
                <span className="gal-label">{item.title}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
