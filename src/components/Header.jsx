import React from 'react';
import { MapPin, User, ShoppingCart, ArrowLeft } from 'lucide-react';
import { useApp } from '../context/AppContext';

const Header = ({ onBack, showBack, onOpenCart }) => {
  const { location, cart } = useApp();
  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <header style={styles.header}>
      <div className="container" style={styles.headerContent}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          {showBack && (
            <button onClick={onBack} style={styles.backBtn}>
              <ArrowLeft size={20} />
            </button>
          )}
          <div style={styles.logo}>Quickie</div>
          <div style={styles.location}>
            <MapPin size={18} color="var(--primary-solid)" />
            <div style={{ fontSize: '0.85rem' }}>
              <span style={{ display: 'block', opacity: 0.6, fontSize: '0.7rem' }}>Delivery to</span>
              {location}
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '12px' }}>
          <a href="profile.html" style={styles.iconBtn}>
            <User size={22} />
          </a>
          <button style={styles.iconBtn} className="cart-btn" onClick={onOpenCart}>
            <ShoppingCart size={22} />
            {cartCount > 0 && <span style={styles.badge}>{cartCount}</span>}
          </button>
        </div>
      </div>
    </header>
  );
};

const styles = {
  header: {
    background: 'var(--premium-glass)',
    backdropFilter: 'blur(15px)',
    WebkitBackdropFilter: 'blur(15px)',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
    borderBottom: '1px solid var(--glass-border)',
    padding: '12px 0',
  },
  headerContent: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    fontSize: '1.6rem',
    fontWeight: 900,
    background: 'var(--primary-gradient)',
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    letterSpacing: '-1px',
    cursor: 'pointer',
  },
  location: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    fontWeight: 600,
    background: 'rgba(0,0,0,0.04)',
    padding: '6px 14px',
    borderRadius: '30px',
  },
  iconBtn: {
    width: '42px',
    height: '42px',
    borderRadius: '50%',
    background: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    cursor: 'pointer',
    border: '1px solid var(--border-color)',
    transition: 'var(--transition)',
    boxShadow: 'var(--shadow-soft)',
  },
  backBtn: {
    background: 'white',
    border: '1px solid var(--border-color)',
    width: '38px',
    height: '38px',
    borderRadius: '12px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    boxShadow: 'var(--shadow-soft)',
  },
  badge: {
    position: 'absolute',
    top: '-5px',
    right: '-5px',
    background: 'var(--primary-solid)',
    color: 'white',
    fontSize: '0.7rem',
    fontWeight: 'bold',
    padding: '2px 6px',
    borderRadius: '10px',
    border: '2px solid white',
  }
};

export default Header;
