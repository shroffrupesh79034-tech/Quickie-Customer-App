import React, { useState, useMemo } from 'react';
import { Search, SlidersHorizontal, ChevronRight, ChevronLeft } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { VERTICALS } from '../data/mockData';

const VerticalPage = ({ type }) => {
  const data = VERTICALS[type.toUpperCase()];
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [sortBy, setSortBy] = useState('Popular'); // 'Popular', 'Top Rated', 'Fast Delivery', 'Price: Low to High'
  const [showFilters, setShowFilters] = useState(false);

  // Carousel State & Logic
  const [currentOffer, setCurrentOffer] = useState(0);
  const nextOffer = () => setCurrentOffer(prev => (prev + 1) % data.offers.length);
  const prevOffer = () => setCurrentOffer(prev => (prev - 1 + data.offers.length) % data.offers.length);

  // Typewriter Hook logic
  const [placeholder, setPlaceholder] = useState('');
  const [promptIndex, setPromptIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  React.useEffect(() => {
    const prompts = data.searchPrompts || ["Search..."];
    const currentPrompt = prompts[promptIndex];
    
    const timeout = setTimeout(() => {
      if (!isDeleting && charIndex < currentPrompt.length) {
        setPlaceholder(currentPrompt.substring(0, charIndex + 1));
        setCharIndex(prev => prev + 1);
      } else if (isDeleting && charIndex > 0) {
        setPlaceholder(currentPrompt.substring(0, charIndex - 1));
        setCharIndex(prev => prev - 1);
      } else if (!isDeleting && charIndex === currentPrompt.length) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setPromptIndex(prev => (prev + 1) % prompts.length);
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, promptIndex, data.searchPrompts]);

  const displayProducts = useMemo(() => {
    let items = data.products.filter(p => 
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.shop.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (activeCategory !== 'All') {
      items = items.filter(p => p.category === activeCategory || p.purpose === activeCategory);
    } else if (!searchQuery) {
      const onePerCat = [];
      const seenCats = new Set();
      items.forEach(p => {
        if (!seenCats.has(p.category)) {
          onePerCat.push(p);
          seenCats.add(p.category);
        }
      });
      items = onePerCat;
    }

    if (sortBy === 'Price: Low to High') {
      items = [...items].sort((a, b) => a.price - b.price);
    } else if (sortBy === 'Rating') {
      items = [...items].sort((a, b) => b.rating - a.rating);
    }

    return items;
  }, [data, searchQuery, activeCategory, sortBy]);

  return (
    <div className="container" style={{ padding: '20px 0' }}>
      {/* Category Header with Back Button */}
      {activeCategory !== 'All' && (
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
          <button 
            onClick={() => setActiveCategory('All')} 
            style={styles.backBtnSmall}
          >
            <ChevronLeft size={20} />
            Back
          </button>
          <h2 style={{ fontSize: '1.4rem', fontWeight: 800 }}>{activeCategory}</h2>
        </div>
      )}

      {/* Section Title */}
      <h1 style={{ fontSize: '1.8rem', fontWeight: 900, marginBottom: '20px', color: '#1d1d1f', letterSpacing: '-0.5px' }}>{data.title}</h1>

      {/* Hero Carousel - Expanded with Arrows and 2-Side-by-Side on Web */}
      {activeCategory === 'All' && (
        <div style={styles.carouselWrapper}>
          <button onClick={prevOffer} style={styles.carouselArrowLeft} className="arrow-active">
            <ChevronLeft size={24} />
          </button>
          <div className="hide-scroll" style={styles.heroScrollContainer}>
            {data.offers.map((offer, idx) => {
              // Logic to show 2 on web, 1 on mobile
              const isMobile = window.innerWidth < 768;
              const isVisible = isMobile ? (idx === currentOffer) : (idx === currentOffer || idx === (currentOffer + 1) % data.offers.length);
              
              return (
                <div 
                  key={offer.id} 
                  style={{ 
                    ...styles.heroCard, 
                    backgroundImage: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.5)), url(${offer.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    display: isVisible ? 'flex' : (isMobile ? 'none' : 'flex'),
                    flex: isMobile ? '0 0 100%' : '0 0 calc(50% - 10px)',
                    opacity: isVisible ? 1 : 0.5,
                    transform: isVisible ? 'scale(1)' : 'scale(0.98)',
                  }}
                >
                  <div style={styles.heroContent}>
                    <h2 style={styles.heroTitleText}>{offer.title}</h2>
                    <p style={styles.heroDescText}>{offer.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <button onClick={nextOffer} style={styles.carouselArrowRight} className="arrow-active">
            <ChevronRight size={24} />
          </button>
        </div>
      )}

      {/* Search Bar with Typewriter Placeholder */}
      <div style={styles.searchRow}>
        <div style={styles.searchBar}>
          <Search size={20} opacity={0.5} />
          <input 
            type="text" 
            placeholder={placeholder + (charIndex < (data.searchPrompts?.[promptIndex]?.length || 0) ? '|' : '')} 
            style={styles.searchInput}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* Professional Filter - Blinkit-Style */}
      <div style={{ position: 'relative', display: 'flex', justifyContent: 'flex-start', marginBottom: '25px' }}>
        <button 
          style={{ ...styles.filterBtn, ...(showFilters ? styles.filterBtnActive : {}) }}
          onClick={() => setShowFilters(!showFilters)}
        >
          <SlidersHorizontal size={18} />
          <span style={{ fontSize: '0.95rem' }}>Sort & Filter</span>
        </button>

        {showFilters && (
          <>
            <div style={styles.filterOverlay} onClick={() => setShowFilters(false)} />
            <div className={`bottom-sheet ${showFilters ? 'open' : ''}`} style={window.innerWidth > 768 ? styles.filterDropdown : {}}>
              <div style={styles.filterHeader}>
                <h3 style={{ margin: 0, fontSize: '1.2rem', fontWeight: 800 }}>Filters</h3>
                <button onClick={() => setShowFilters(false)} style={styles.closeBtn}>×</button>
              </div>
              
              <div style={styles.filterSection}>
                <h4 style={styles.filterLabel}>Sort By</h4>
                <div style={styles.filterGrid}>
                  {['Relevance', 'Fast Delivery', 'Rating', 'Price: Low to High', 'Near Restaurant'].map(opt => (
                    <button 
                      key={opt}
                      style={{ ...styles.filterOpt, ...(sortBy === opt ? styles.filterOptActive : {}) }}
                      onClick={() => { setSortBy(opt); setShowFilters(false); }}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>
              
              <div style={styles.filterSection}>
                <h4 style={styles.filterLabel}>Quick Toggles</h4>
                <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                  <button style={styles.filterPill}>Top Rated</button>
                  <button style={styles.filterPill}>Available Offers</button>
                </div>
              </div>
            </div>
          </>
        )}
      </div>

      {/* Categories Row */}
      {activeCategory === 'All' && (
        <div className="hide-scroll" style={styles.categoryRow}>
          {data.categories.map(cat => (
            <div 
              key={cat.id} 
              style={styles.catItem}
              onClick={() => setActiveCategory(cat.name)}
            >
              <div style={styles.catCircle}>
                <img src={cat.image} alt={cat.name} style={styles.catImg} />
              </div>
              <span style={styles.catLabel}>{cat.name}</span>
            </div>
          ))}
        </div>
      )}

      {/* Recommendations Feed */}
      <h3 style={styles.sectionTitle}>
        {activeCategory === 'All' ? 'Recommendations for You' : `${activeCategory} Specialities`}
      </h3>
      
      <div className="grid-2-3-4">
        {displayProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {displayProducts.length === 0 && (
        <div style={{ textAlign: 'center', padding: '40px', opacity: 0.5 }}>
          No products found matching your search.
        </div>
      )}
    </div>
  );
};

const styles = {
  carouselWrapper: {
    position: 'relative',
    marginBottom: '30px',
    display: 'flex',
    alignItems: 'center',
  },
  carouselArrowLeft: {
    position: 'absolute',
    left: '-10px',
    zIndex: 10,
    background: 'white',
    border: 'none',
    boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
    width: '44px',
    height: '44px',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    color: 'var(--primary-solid)',
    transition: 'all 0.2s ease',
  },
  carouselArrowRight: {
    position: 'absolute',
    right: '-10px',
    zIndex: 10,
    background: 'white',
    border: 'none',
    boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
    width: '44px',
    height: '44px',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    color: 'var(--primary-solid)',
    transition: 'all 0.2s ease',
  },
  heroScrollContainer: {
    display: 'flex',
    gap: '15px',
    overflowX: 'auto',
    scrollBehavior: 'smooth',
    width: '100%',
    padding: '10px 0',
  },
  heroCard: {
    height: '140px', // Mid-sized height
    borderRadius: '20px',
    display: 'flex',
    alignItems: 'center',
    padding: '0 25px',
    color: 'white',
    boxShadow: '0 8px 20px rgba(0,0,0,0.1)',
    transition: 'all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1)',
    flexShrink: 0,
  },
  heroContent: {
    display: 'flex',
    flexDirection: 'column',
  },
  heroTitleText: {
    fontSize: '1.8rem',
    fontWeight: 900,
    marginBottom: '2px',
    letterSpacing: '-0.5px',
    textShadow: '0 2px 4px rgba(0,0,0,0.3)',
  },
  heroDescText: {
    fontSize: '0.85rem',
    fontWeight: 600,
    opacity: 0.9,
  },
  searchRow: {
    marginBottom: '10px', 
  },
  searchBar: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    background: 'white',
    padding: '14px 20px',
    borderRadius: '16px',
    boxShadow: '0 4px 20px rgba(0,0,0,0.04)',
    border: '1px solid var(--border-color)',
  },
  searchInput: {
    border: 'none',
    outline: 'none',
    width: '100%',
    fontSize: '1rem',
    fontWeight: 600,
    color: 'var(--text-main)',
  },
  filterBtn: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    padding: '12px 24px',
    borderRadius: '16px',
    border: '2px solid var(--border-color)',
    background: 'white',
    color: 'var(--text-main)',
    fontWeight: 800,
    cursor: 'pointer',
    transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
    boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
  },
  filterBtnActive: {
    borderColor: 'var(--primary-solid)',
    color: 'var(--primary-solid)',
    background: 'rgba(255, 75, 43, 0.05)',
  },
  filterOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 1500,
    background: 'rgba(0,0,0,0.4)',
    backdropFilter: 'blur(4px)',
  },
  filterDropdown: {
    position: 'absolute',
    top: '55px',
    left: 0,
    zIndex: 2000,
    background: 'white',
    borderRadius: '24px',
    boxShadow: '0 20px 50px rgba(0,0,0,0.2)',
    padding: '24px',
    minWidth: '400px',
    border: '1px solid var(--border-color)',
    transform: 'none', // Override bottom-sheet transform on web
  },
  filterHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '20px',
  },
  closeBtn: {
    fontSize: '1.8rem',
    border: 'none',
    background: 'transparent',
    cursor: 'pointer',
    opacity: 0.5,
  },
  filterSection: {
    marginBottom: '20px',
  },
  filterLabel: {
    fontSize: '0.85rem',
    textTransform: 'uppercase',
    color: '#8e8e93',
    marginBottom: '12px',
    letterSpacing: '1px',
    fontWeight: 800,
  },
  filterGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '8px',
  },
  filterOpt: {
    textAlign: 'left',
    padding: '12px 16px',
    borderRadius: '12px',
    border: '1px solid var(--border-color)',
    background: 'transparent',
    fontSize: '0.95rem',
    fontWeight: 600,
    cursor: 'pointer',
    transition: 'all 0.2s ease',
  },
  filterOptActive: {
    background: 'var(--primary-gradient)',
    color: 'white',
    border: 'none',
  },
  filterPill: {
    padding: '8px 16px',
    borderRadius: '100px',
    border: '1px solid var(--border-color)',
    background: 'white',
    fontSize: '0.9rem',
    fontWeight: 700,
    cursor: 'pointer',
  },
  categoryRow: {
    display: 'flex',
    gap: '24px',
    padding: '10px 0 30px',
    overflowX: 'auto',
  },
  catCircle: {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    background: 'white',
    padding: '4px',
    boxShadow: '0 6px 15px rgba(0,0,0,0.08)',
    border: '2px solid #fff',
    overflow: 'hidden',
    marginBottom: '10px',
  },
  catImg: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: '50%',
  },
  catLabel: {
    fontSize: '0.9rem',
    fontWeight: 800,
    color: '#333',
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: '1.4rem',
    fontWeight: 800,
    marginBottom: '20px',
    color: '#1d1d1f',
  },
  backBtnSmall: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    background: 'white',
    border: '1px solid var(--border-color)',
    padding: '8px 16px',
    borderRadius: '100px',
    fontSize: '0.9rem',
    fontWeight: 800,
    cursor: 'pointer',
  }
};

export default VerticalPage;
