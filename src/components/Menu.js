'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Menu({ items, categories }) {
  const [filter, setFilter] = useState('semua');
  const [filteredItems, setFilteredItems] = useState(items);

  useEffect(() => {
    setFilteredItems(
      filter === 'semua'
        ? items
        : items.filter((item) => item.category === filter)
    );
  }, [filter, items]);

  return (
    <section id="menu" className="section section-dark">
      <div className="container">
        <div className="section-heading">
          <span className="sec-tag">Menu lengkap</span>
          <h2 className="sec-title sec-title-light">
            Tinggal pilih kategori, lalu <em>pesan yang kamu mau</em>
          </h2>
          <p className="sec-desc sec-desc-light">
            Susunan menu dibuat sederhana supaya pelanggan cepat menemukan apa
            yang sedang dicari.
          </p>
        </div>

        <div className="menu-tabs" role="tablist" aria-label="Filter menu">
          {categories.map((category) => (
            <button
              key={category.id}
              type="button"
              className={`tab-btn ${filter === category.id ? 'active' : ''}`}
              onClick={() => setFilter(category.id)}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="menu-grid">
          {filteredItems.map((item) => (
            <article key={`${item.category}-${item.name}`} className="menu-card">
              <div className="menu-card-img">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
              </div>
              <div className="menu-card-body">
                <div className="menu-cat">
                  {categories.find((category) => category.id === item.category)?.label}
                </div>
                <div className="menu-name">{item.name}</div>
                <div className="menu-note">{item.description}</div>
                <div className="menu-cta-note">Tanya ketersediaan via WhatsApp</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
