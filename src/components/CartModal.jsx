import React from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useApp } from '../context/AppContext';

const CartModal = ({ isOpen, onClose }) => {
  const { cart, updateQuantity, removeFromCart, clearCart } = useApp();
  
  if (!isOpen) return null;

  const total = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  return (
    <div style={styles.overlay} onClick={onClose}>
      <div style={styles.modal} onClick={e => e.stopPropagation()}>
        <div style={styles.header}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <ShoppingBag size={24} color="var(--primary-solid)" />
            <h2 style={{ fontSize: '1.2rem', fontWeight: 800 }}>Your Cart</h2>
          </div>
          <button onClick={onClose} style={styles.closeBtn}><X size={24} /></button>
        </div>

        <div style={styles.body}>
          {cart.length === 0 ? (
            <div style={styles.empty}>
              <div style={styles.emptyIcon}>🛒</div>
              <p style={{ fontWeight: 600, opacity: 0.6 }}>Your cart is empty</p>
              <button onClick={onClose} style={styles.browseBtn}>Browse Products</button>
            </div>
          ) : (
            <div style={styles.itemsList}>
              {cart.map(item => (
                <div key={item.id} style={styles.item}>
                  <img src={item.image} alt={item.name} style={styles.itemImg} />
                  <div style={styles.itemInfo}>
                    <div style={styles.itemName}>{item.name}</div>
                    <div style={styles.itemShop}>{item.shop}</div>
                    <div style={styles.itemPrice}>₹{item.price}</div>
                  </div>
                  <div style={styles.itemActions}>
                    <div style={styles.qtyControl}>
                      <button onClick={() => updateQuantity(item.id, -1)} style={styles.qtyBtn}><Minus size={14} /></button>
                      <span style={styles.qtyText}>{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, 1)} style={styles.qtyBtn}><Plus size={14} /></button>
                    </div>
                    <button onClick={() => removeFromCart(item.id)} style={styles.removeBtn}><Trash2 size={16} /></button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {cart.length > 0 && (
          <div style={styles.footer}>
            <div style={styles.totalRow}>
              <span>Total Amount</span>
              <span style={styles.totalPrice}>₹{total}</span>
            </div>
            <button style={styles.checkoutBtn} onClick={() => alert('Order Placed Successfully!')}>
              Place Order
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

const styles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'rgba(0,0,0,0.4)',
    backdropFilter: 'blur(10px)',
    display: 'flex',
    justifyContent: 'flex-end',
    zIndex: 2000,
  },
  modal: {
    background: '#f8f9fa',
    width: '100%',
    maxWidth: '450px',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    boxShadow: '-10px 0 30px rgba(0,0,0,0.1)',
    transition: 'var(--transition)',
  },
  header: {
    padding: '20px',
    background: 'white',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '1px solid var(--border-color)',
  },
  closeBtn: {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    opacity: 0.5,
  },
  body: {
    flex: 1,
    overflowY: 'auto',
    padding: '20px',
  },
  empty: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '15px',
  },
  emptyIcon: {
    fontSize: '4rem',
    opacity: 0.2,
  },
  browseBtn: {
    background: 'var(--primary-gradient)',
    color: 'white',
    border: 'none',
    padding: '10px 25px',
    borderRadius: '12px',
    fontWeight: 700,
    cursor: 'pointer',
    marginTop: '10px',
  },
  itemsList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  },
  item: {
    background: 'white',
    padding: '15px',
    borderRadius: 'var(--radius-md)',
    display: 'flex',
    gap: '15px',
    alignItems: 'center',
    boxShadow: 'var(--shadow-soft)',
  },
  itemImg: {
    width: '60px',
    height: '60px',
    borderRadius: '10px',
    objectFit: 'cover',
  },
  itemInfo: {
    flex: 1,
  },
  itemName: {
    fontWeight: 700,
    fontSize: '0.9rem',
    marginBottom: '2px',
  },
  itemShop: {
    fontSize: '0.7rem',
    opacity: 0.6,
    marginBottom: '5px',
  },
  itemPrice: {
    fontWeight: 800,
    color: 'var(--text-main)',
  },
  itemActions: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    gap: '10px',
  },
  qtyControl: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    background: '#f1f2f6',
    padding: '4px 8px',
    borderRadius: '8px',
  },
  qtyBtn: {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    color: 'var(--primary-solid)',
  },
  qtyText: {
    fontWeight: 800,
    fontSize: '0.85rem',
  },
  removeBtn: {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    color: '#ff4757',
    opacity: 0.7,
  },
  footer: {
    background: 'white',
    padding: '25px',
    borderTop: '1px solid var(--border-color)',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  totalRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontWeight: 700,
    fontSize: '1.1rem',
  },
  totalPrice: {
    fontSize: '1.4rem',
    fontWeight: 900,
    color: 'var(--primary-solid)',
  },
  checkoutBtn: {
    background: 'var(--primary-gradient)',
    color: 'white',
    border: 'none',
    padding: '18px',
    borderRadius: '15px',
    fontWeight: 800,
    fontSize: '1rem',
    cursor: 'pointer',
    boxShadow: 'var(--shadow-premium)',
  }
};

export default CartModal;
