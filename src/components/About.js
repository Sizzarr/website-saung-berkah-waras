import Image from 'next/image';

export default function About({ site }) {
  return (
    <section id="tentang" className="section section-cream">
      <div className="container about-layout">
        <div className="about-visual">
          <div className="about-photo about-photo-main">
            <Image
              src="/images/menu/paket-ayam.jpeg"
              alt="Paket ayam Saung Berkah Waras"
              fill
              sizes="(max-width: 768px) 100vw, 420px"
            />
          </div>

          <div className="about-photo about-photo-side">
            <Image
              src="/images/menu/bakso-beranak.jpeg"
              alt="Bakso beranak Saung Berkah Waras"
              fill
              sizes="(max-width: 768px) 60vw, 260px"
            />
          </div>
        </div>

        <div className="about-copy">
          <span className="sec-tag">Tentang Kami</span>
          <h2 className="sec-title">
            Tempat makan yang sederhana, <em>hangat, dan mudah dipesan</em>
          </h2>
          <p className="sec-desc">
            {site.name} hadir untuk pelanggan yang ingin makan enak tanpa
            suasana yang ribet. Fokus kami sederhana: menu yang familiar, rasa
            yang bikin nyaman, dan akses order yang cepat.
          </p>

          <div className="reason-grid">
            {site.reasons.map((reason, index) => (
              <article key={reason.title} className="reason-card">
                <span className="reason-index">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3>{reason.title}</h3>
                <p>{reason.body}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
