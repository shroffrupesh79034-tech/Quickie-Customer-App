import React from 'react';
import { Plus, Minus } from 'lucide-react';
import { useApp } from '../context/AppContext';

const ProductCard = ({ product }) => {
  const { cart, updateQuantity, addToCart } = useApp();
  const cartItem = cart.find(item => item.id === product.id);

  return (
    <div style={styles.card}>
      <div style={styles.imgContainer}>
        <img src={product.image} alt={product.name} style={styles.img} />
      </div>
      <div style={styles.info}>
        <div style={styles.shop}>{product.shop}</div>
        <div style={styles.name}>{product.name}</div>
        <div style={styles.bottom}>
          <div style={styles.price}>₹{product.price}</div>
          {cartItem ? (
            <div style={styles.qtySelector}>
              <button onClick={() => updateQuantity(product.id, -1)} style={styles.qtyBtn}><Minus size={14} /></button>
              <span style={styles.qtyText}>{cartItem.quantity}</span>
              <button onClick={() => updateQuantity(product.id, 1)} style={styles.qtyBtn}><Plus size={14} /></button>
            </div>
          ) : (
            <button onClick={() => addToCart(product)} style={styles.addBtn}>Add</button>
          )}
        </div>
      </div>
    </div>
  );
};

const styles = {
  card: {
    background: 'white',
    borderRadius: 'var(--radius-md)',
    overflow: 'hidden',
    boxShadow: 'var(--shadow-soft)',
    transition: 'var(--transition)',
    border: '1px solid rgba(0,0,0,0.03)',
    display: 'flex',
    flexDirection: 'column',
  },
  imgContainer: {
    width: '100%',
    paddingTop: '75%',
    position: 'relative',
    overflow: 'hidden',
    background: '#f1f2f6',
  },
  img: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  info: {
    padding: '15px',
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  shop: {
    fontSize: '0.65rem',
    color: 'var(--primary-solid)',
    fontWeight: 800,
    textTransform: 'uppercase',
    marginBottom: '5px',
    letterSpacing: '0.5px',
  },
  name: {
    fontSize: '0.9rem',
    fontWeight: 700,
    marginBottom: '10px',
    lineHeight: '1.3',
    height: '2.6em',
    overflow: 'hidden',
  },
  bottom: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 'auto',
  },
  price: {
    fontSize: '1rem',
    fontWeight: 800,
    color: '#1d1d1f',
  },
  addBtn: {
    background: 'white',
    color: 'var(--accent-green)',
    border: '1.5px solid var(--accent-green)',
    padding: '6px 15px',
    borderRadius: '10px',
    fontWeight: 700,
    cursor: 'pointer',
    transition: 'var(--transition)',
    fontSize: '0.85rem',
  },
  qtySelector: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    background: 'var(--bg-color)',
    padding: '4px 8px',
    borderRadius: '10px',
  },
  qtyBtn: {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    color: 'var(--primary-solid)',
    display: 'flex',
    alignItems: 'center',
  },
  qtyText: {
    fontWeight: 700,
    fontSize: '0.9rem',
    minWidth: '20px',
    textAlign: 'center',
  }
};

export default ProductCard;
