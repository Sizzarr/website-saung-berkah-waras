import Image from 'next/image';
import { useCart } from '@/context/CartContext';

export default function MobileMenuList({ items, activeCategory }) {
  const { addToCart, cartItems, updateQuantity } = useCart();

  const filteredItems =
    activeCategory === 'semua'
      ? items
      : items.filter((item) => item.category === activeCategory);

  return (
    <div className="mobile-menu-list">
      {filteredItems.map((item) => {
        const cartItem = cartItems.find((c) => (c.item.title || c.item.name) === item.name);
        const quantity = cartItem ? cartItem.quantity : 0;
        const price = item.priceNormal || item.priceGoFood;

        return (
          <div key={item.name} className="mobile-menu-card">
            <div className="mobile-menu-image">
              <Image src={item.image} alt={item.name} fill sizes="100px" style={{ objectFit: 'cover' }} />
            </div>
            <div className="mobile-menu-details">
              <h4>{item.name}</h4>
              <p>{item.description}</p>
              <div className="mobile-menu-bottom">
                <span className="price">Rp {price.toLocaleString('id-ID')}</span>
                {quantity > 0 ? (
                  <div className="mobile-qty-controls">
                    <button onClick={() => updateQuantity(item.name, quantity - 1)}>-</button>
                    <span>{quantity}</span>
                    <button onClick={() => updateQuantity(item.name, quantity + 1)}>+</button>
                  </div>
                ) : (
                  <button 
                    className="mobile-add-btn"
                    onClick={() => addToCart(item, 1, price)}
                  >
                    Tambah
                  </button>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
