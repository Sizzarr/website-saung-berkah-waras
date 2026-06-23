import { useCart } from '@/context/CartContext';

export default function MobileCartBar() {
  const { cartTotalItems, cartTotalPrice, setIsCartOpen } = useCart();

  if (cartTotalItems === 0) return null;

  return (
    <div className="mobile-cart-bar-wrapper">
      <div className="mobile-cart-bar" onClick={() => setIsCartOpen(true)}>
        <div className="cart-bar-left">
          <div className="cart-icon-wrapper">
            🛒
            <span className="cart-badge">{cartTotalItems}</span>
          </div>
          <div className="cart-price-info">
            <span>Total Pesanan</span>
            <strong>Rp {cartTotalPrice.toLocaleString('id-ID')}</strong>
          </div>
        </div>
        <button className="cart-bar-btn">
          Lanjut WA
        </button>
      </div>
    </div>
  );
}
