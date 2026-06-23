'use client';

import { useState } from 'react';
import MobileLanding from './MobileLanding';
import MobileHeader from './MobileHeader';
import MobileBanner from './MobileBanner';
import MobileCategories from './MobileCategories';
import MobileMenuList from './MobileMenuList';
import MobileCartBar from './MobileCartBar';
import { menuData } from '@/data/menu';
import { siteData } from '@/data/site';

export default function MobileApp() {
  const [currentView, setCurrentView] = useState('landing'); // 'landing' | 'order'
  const [activeCategory, setActiveCategory] = useState('semua');

  if (currentView === 'landing') {
    return <MobileLanding onEnterOrder={() => setCurrentView('order')} />;
  }

  return (
    <div className="mobile-app-layout">
      <MobileHeader />
      <div className="mobile-scroll-area">
        <MobileBanner />
        <MobileCategories activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
        <MobileMenuList items={menuData} activeCategory={activeCategory} />
      </div>
      <MobileCartBar />
    </div>
  );
}
