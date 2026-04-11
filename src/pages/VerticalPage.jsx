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
      <h2 style={{ fontSize: '1.6rem', fontWeight: 900, marginBottom: '20px', color: '#1d1d1f' }}>{data.title}</h2>

      {/* Hero Carousel - Expanded with Arrows */}
      {activeCategory === 'All' && (
        <div style={styles.carouselWrapper}>
          <button onClick={prevOffer} style={styles.carouselArrowLeft}>
            <ChevronLeft size={24} />
          </button>
          <div className="hide-scroll" style={styles.heroScrollContainer}>
            {data.offers.map((offer, idx) => (
              <div 
                key={offer.id} 
                style={{ 
                  ...styles.heroCard, 
                  background: offer.bg,
                  display: (window.innerWidth < 768 && idx !== currentOffer) ? 'none' : 'flex'
                }}
              >
                <div style={styles.heroContent}>
                  <h2 style={styles.heroTitleText}>{offer.title}</h2>
                  <p style={styles.heroDescText}>{offer.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <button onClick={nextOffer} style={styles.carouselArrowRight}>
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
      <div style={{ position: 'relative', display: 'flex', justifyContent: 'flex-start', marginBottom: '20px' }}>
        <button 
          style={{ ...styles.filterBtn, ...(showFilters ? styles.filterBtnActive : {}) }}
          onClick={() => setShowFilters(!showFilters)}
        >
          <SlidersHorizontal size={18} />
          <span style={{ fontSize: '1rem' }}>Sort & Filter</span>
        </button>

        {showFilters && (
          <div style={styles.filterDropdown}>
            <div style={styles.filterSection}>
              <h4 style={styles.filterLabel}>Sort By</h4>
              {['Relevance', 'Fast Delivery', 'Rating', 'Price: Low to High'].map(opt => (
                <button 
                  key={opt}
                  style={{ ...styles.filterOpt, ...(sortBy === opt ? styles.filterOptActive : {}) }}
                  onClick={() => { setSortBy(opt); setShowFilters(false); }}
                >
                  {opt}
                </button>
              ))}
            </div>
            <div style={styles.filterSection}>
              <h4 style={styles.filterLabel}>Quick Toggles</h4>
              <button style={styles.filterOpt}>Top Rated</button>
              <button style={styles.filterOpt}>Available Offers</button>
            </div>
          </div>
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
    left: '-15px',
    zIndex: 10,
    background: 'white',
    border: 'none',
    boxShadow: 'var(--shadow-premium)',
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    color: 'var(--primary-solid)',
  },
  carouselArrowRight: {
    position: 'absolute',
    right: '-15px',
    zIndex: 10,
    background: 'white',
    border: 'none',
    boxShadow: 'var(--shadow-premium)',
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    color: 'var(--primary-solid)',
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
    minWidth: 'calc(50% - 10px)', // 2 banners side-by-side on Web
    height: '140px', // Mid-sized height
    borderRadius: '20px',
    display: 'flex',
    alignItems: 'center',
    padding: '0 30px',
    color: 'white',
    boxShadow: '0 8px 20px rgba(0,0,0,0.1)',
    flexShrink: 0,
  },
  heroContent: {
    display: 'flex',
    flexDirection: 'column',
  },
  heroTitleText: {
    fontSize: '1.6rem', // Balanced mid-size
    fontWeight: 900,
    marginBottom: '2px',
    letterSpacing: '-0.5px',
  },
  heroDescText: {
    fontSize: '0.85rem',
    fontWeight: 600,
    opacity: 0.9,
  },
  searchRow: {
    marginBottom: '15px', 
  },
  searchBar: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    background: 'white',
    padding: '12px 20px',
    borderRadius: '15px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
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
    padding: '8px 16px',
    borderRadius: '100px', // Pill shape for filter too
    border: '1px solid var(--border-color)',
    background: 'white',
    color: 'var(--text-main)',
    fontWeight: 700,
    cursor: 'pointer',
    boxShadow: '0 2px 6px rgba(0,0,0,0.05)',
  },
  filterDropdown: {
    position: 'absolute',
    top: '45px',
    left: 0,
    zIndex: 100,
    background: 'white',
    borderRadius: '20px',
    boxShadow: '0 15px 40px rgba(0,0,0,0.15)',
    padding: '20px',
    minWidth: '240px',
    border: '1px solid var(--border-color)',
  },
  filterSection: {
    marginBottom: '15px',
  },
  filterLabel: {
    fontSize: '0.8rem',
    textTransform: 'uppercase',
    color: '#8e8e93',
    marginBottom: '10px',
    letterSpacing: '1px',
    fontWeight: 700,
  },
  filterOpt: {
    display: 'block',
    width: '100%',
    textAlign: 'left',
    padding: '10px 12px',
    borderRadius: '10px',
    border: 'none',
    background: 'transparent',
    fontSize: '0.95rem',
    fontWeight: 600,
    cursor: 'pointer',
    transition: 'var(--transition)',
  },
  filterOptActive: {
    background: 'rgba(255, 75, 43, 0.05)',
    color: 'var(--primary-solid)',
  },
  categoryRow: {
    display: 'flex',
    gap: '20px',
    padding: '10px 0 30px',
  },
  catCircle: {
    width: '90px', // Slightly smaller mid-size
    height: '90px',
    borderRadius: '50%',
    background: 'white',
    padding: '3px',
    boxShadow: 'var(--shadow-soft)',
    border: '3px solid white',
    overflow: 'hidden',
  },
  backBtnSmall: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    background: 'white',
    border: '1px solid var(--border-color)',
    padding: '6px 14px',
    borderRadius: '100px',
    fontSize: '0.85rem',
    fontWeight: 700,
    cursor: 'pointer',
  }
};

export default VerticalPage;
