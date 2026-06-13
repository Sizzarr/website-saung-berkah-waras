import Image from 'next/image';
import OrderPicker from '@/components/OrderPicker';

export default function Navbar({ site }) {
  return (
    <header className="site-header">
      <div className="container nav-shell">
        <a href="#home" className="brand" aria-label={site.name}>
          <span className="brand-mark">
            <Image src={site.logo} alt={site.name} fill sizes="48px" />
          </span>
          <span className="brand-copy">
            <strong>{site.name}</strong>
            <span>Masakan rumahan di Gombong</span>
          </span>
        </a>

        <nav className="nav-links" aria-label="Navigasi utama">
          {site.navigation.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <OrderPicker
          channels={site.orderChannels}
          className="nav-cta"
          label="Pesan Sekarang"
        />
      </div>
    </header>
  );
}
