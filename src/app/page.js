import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import FeaturedMenu from '@/components/FeaturedMenu';
import Menu from '@/components/Menu';
import Order from '@/components/Order';
import Gallery from '@/components/Gallery';
import Location from '@/components/Location';
import Footer from '@/components/Footer';
import { siteData } from '@/data/site';
import { menuCategories, menuData } from '@/data/menu';

export default function Home() {
  return (
    <main>
      <Navbar site={siteData} />
      <Hero site={siteData} />
      <About site={siteData} />
      <FeaturedMenu items={siteData.featuredItems} />
      <Menu items={menuData} categories={menuCategories} />
      <Order channels={siteData.orderChannels} />
      <Gallery items={siteData.galleryItems} />
      <Location site={siteData} />
      <Footer site={siteData} />
    </main>
  );
}
