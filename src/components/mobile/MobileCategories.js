import { menuCategories } from '@/data/menu';

export default function MobileCategories({ activeCategory, setActiveCategory }) {
  return (
    <div className="mobile-categories">
      {menuCategories.map((cat) => (
        <button
          key={cat.id}
          className={`mobile-category-pill ${activeCategory === cat.id ? 'active' : ''}`}
          onClick={() => setActiveCategory(cat.id)}
        >
          {cat.label}
        </button>
      ))}
    </div>
  );
}
