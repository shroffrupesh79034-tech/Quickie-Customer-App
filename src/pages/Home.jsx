import React from 'react';
import { UtensilsCrossed, ShoppingBag, Leaf, Pill } from 'lucide-react';

const Home = ({ onNavigate }) => {
  const entryPoints = [
    { id: 'food', name: 'Food', icon: <UtensilsCrossed size={32} />, color: '#FF4B2B' },
    { id: 'grocery', name: 'Grocery', icon: <ShoppingBag size={32} />, color: '#4CAF50' },
    { id: 'veggies', name: 'Veggies', icon: <Leaf size={32} />, color: '#8BC34A' },
    { id: 'medicine', name: 'Medicine', icon: <Pill size={32} />, color: '#2196F3' }
  ];

  return (
    <div className="container" style={{ padding: '20px 0' }}>
      <h2 style={styles.heroTitle}>What are you looking for?</h2>
      
      <div style={styles.grid}>
        {entryPoints.map((item) => (
          <div 
            key={item.id} 
            style={styles.card} 
            onClick={() => onNavigate(item.id)}
            className="entry-card"
          >
            <div style={{ ...styles.iconWrapper, backgroundColor: `${item.color}15`, color: item.color }}>
              {item.icon}
            </div>
            <span style={styles.name}>{item.name}</span>
          </div>
        ))}
      </div>

      <div style={styles.promoBanner}>
        <div style={styles.promoContent}>
          <h3 style={{ fontSize: '1.4rem', marginBottom: '5px' }}>Quickie Instant</h3>
          <p style={{ opacity: 0.9, fontSize: '0.9rem' }}>Delivery in 10-15 minutes in Bagaha!</p>
        </div>
        <img src="https://images.unsplash.com/photo-1580913209249-5970c7553503?w=400" alt="promo" style={styles.promoImg} />
      </div>
    </div>
  );
};

const styles = {
  heroTitle: {
    fontSize: '1.4rem',
    fontWeight: 800,
    marginBottom: '25px',
    color: 'var(--text-main)',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '20px',
  },
  card: {
    background: 'white',
    borderRadius: 'var(--radius-lg)',
    padding: '25px 15px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '15px',
    boxShadow: 'var(--shadow-soft)',
    cursor: 'pointer',
    transition: 'var(--transition)',
    border: '1px solid var(--border-color)',
  },
  iconWrapper: {
    width: '70px',
    height: '70px',
    borderRadius: '20px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    fontWeight: 700,
    fontSize: '1rem',
  },
  promoBanner: {
    marginTop: '40px',
    background: 'var(--primary-gradient)',
    borderRadius: 'var(--radius-lg)',
    padding: '30px',
    color: 'white',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    overflow: 'hidden',
    position: 'relative',
  },
  promoContent: {
    flex: 1,
    zIndex: 1,
  },
  promoImg: {
    width: '120px',
    height: '120px',
    objectFit: 'cover',
    borderRadius: '20px',
    transform: 'rotate(12deg) translateX(20px)',
  }
};

export default Home;
