import Image from 'next/image';

export default function FeaturedMenu({ items }) {
  return (
    <section id="unggulan" className="section section-light">
      <div className="container">
        <div className="section-heading">
          <span className="sec-tag">Menu unggulan</span>
          <h2 className="sec-title">
            Pilihan yang paling sering <em>dicari pelanggan</em>
          </h2>
          <p className="sec-desc">
            Enam menu ini jadi titik masuk terbaik untuk mengenal rasa Saung
            Berkah Waras.
          </p>
        </div>

        <div className="featured-grid">
          {items.map((item) => (
            <article key={item.title} className="featured-card">
              <div className="featured-image">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="featured-body">
                <span className="featured-accent">{item.accent}</span>
                <h3>{item.title}</h3>
                <p>{item.note}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
