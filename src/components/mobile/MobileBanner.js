import Image from 'next/image';
import { siteData } from '@/data/site';

export default function MobileBanner() {
  return (
    <div className="mobile-banner-container">
      <div className="mobile-banner">
        <Image
          src="/saung-depan.jpg"
          alt="Promo Saung Berkah Waras"
          fill
          style={{ objectFit: 'cover' }}
        />
        <div className="mobile-banner-overlay">
          <h2>{siteData.headline}</h2>
          <p>{siteData.badge}</p>
        </div>
      </div>
    </div>
  );
}
