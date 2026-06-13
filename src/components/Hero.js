import Image from 'next/image';
import OrderPicker from '@/components/OrderPicker';

export default function Hero({ site }) {
  const heroTitleLines = site.headline.split(', ');
  const heroStats = [
    { value: 'Rp 3K', label: 'Harga mulai dari' },
    { value: '30+', label: 'Menu pilihan' },
    { value: '4', label: 'Platform order' },
  ];

  return (
    <section className="hero hero-collage" id="home">
      <div className="hero-overlay" />
      <div className="container hero-collage-layout">
        <div className="hero-copy hero-copy-collage">
          <span className="hero-kicker hero-kicker-pill">{site.badge}</span>
          <h1 className="hero-title hero-title-collage">
            <span className="hero-title-line">{heroTitleLines[0]},</span>
            <span className="hero-title-line hero-title-accent">
              {heroTitleLines[1]}
            </span>
          </h1>
          <p className="hero-subtitle hero-subtitle-collage">
            {site.description}
          </p>

          <div className="hero-actions">
            <OrderPicker
              channels={site.orderChannels}
              className="btn-primary"
              label="Pesan Sekarang"
            />
            <a href="#menu" className="btn-secondary">
              Lihat Menu
            </a>
          </div>

          <div className="hero-stats-row">
            {heroStats.map((item) => (
              <div key={item.label} className="hero-stat-item">
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-collage-visual">
          <figure className="hero-photo-card hero-photo-main">
            <Image
              src="/saung-depan.jpg"
              alt={`Tampak depan ${site.name}`}
              fill
              sizes="(max-width: 1080px) 100vw, 40vw"
              preload
            />
          </figure>
        </div>
      </div>
    </section>
  );
}
