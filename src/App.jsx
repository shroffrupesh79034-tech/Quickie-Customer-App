import React, { useState } from 'react';
import { AppProvider } from './context/AppContext';
import Header from './components/Header';
import Footer from './components/Footer';
import CartModal from './components/CartModal';
import Home from './pages/Home';
import VerticalPage from './pages/VerticalPage';

const App = () => {
  const [currentView, setCurrentView] = useState('food'); // 'food', 'grocery', 'veggies', 'medicine'
  const [showCart, setShowCart] = useState(false);

  const navigateTo = (view) => {
    setCurrentView(view);
    window.scrollTo(0, 0);
  };

  const tabs = [
    { id: 'food', name: 'Food', icon: '🍔' },
    { id: 'grocery', name: 'Grocery', icon: '🛒' },
    { id: 'veggies', name: 'Veggies', icon: '🍅' },
    { id: 'medicine', name: 'Medicine', icon: '💊' }
  ];

  return (
    <AppProvider>
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#F8F9FA' }}>
        <Header 
          onBack={() => navigateTo('food')} 
          showBack={false} 
          onOpenCart={() => setShowCart(true)}
        />
        
        <div className="container" style={{ paddingTop: '20px' }}>
          {/* Supreme Tabs Navigation */}
          <div className="nav-tabs-grid" style={styles.tabGrid}>
            {tabs.map(tab => (
              <div 
                key={tab.id} 
                onClick={() => navigateTo(tab.id)}
                style={{
                  ...styles.tabItem,
                  ...(currentView === tab.id ? styles.tabActive : styles.tabInactive)
                }}
              >
                <span style={{ fontSize: '1.4rem' }}>{tab.icon}</span>
                <span style={{ fontWeight: 800, fontSize: '1rem', letterSpacing: '0.2px' }}>{tab.name}</span>
              </div>
            ))}
          </div>
        </div>

        <main style={{ flex: 1 }}>
          <VerticalPage type={currentView} />
        </main>

        <CartModal isOpen={showCart} onClose={() => setShowCart(false)} />
        <Footer />
      </div>
    </AppProvider>
  );
};

const styles = {
  tabGrid: {
    display: 'flex',
    justifyContent: 'center',
    gap: '16px',
    marginBottom: '20px',
    flexWrap: 'wrap',
  },
  tabItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    padding: '20px',
    borderRadius: '24px',
    cursor: 'pointer',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    boxShadow: '0 4px 15px rgba(0,0,0,0.06)',
    border: '2px solid var(--border-color)',
    background: 'white',
    width: '230px', // Fixed length
    height: '110px', // Fixed height
  },
  tabActive: {
    background: 'var(--primary-gradient)',
    color: 'white',
    transform: 'translateY(-4px)', // More pronounced lift
    borderColor: 'transparent',
    boxShadow: '0 12px 24px rgba(255, 75, 43, 0.3)',
  },
  tabInactive: {
    color: 'var(--text-main)',
    fontWeight: 800,
    fontSize: '1.1rem', // Larger font
  }
};

export default App;
