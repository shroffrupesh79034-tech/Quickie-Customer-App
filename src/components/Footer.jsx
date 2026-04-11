import React from 'react';
import { Instagram, Twitter, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div className="container">
        <div style={styles.grid}>
          <div style={styles.section}>
            <h4 style={styles.title}>Legal</h4>
            <ul style={styles.list}>
              <li style={styles.bold}>Privacy Policy</li>
              <li style={styles.bold}>Terms and Condition</li>
            </ul>
          </div>
          <div style={styles.section}>
            <h4 style={styles.title}>Contact & Support</h4>
            <ul style={styles.list}>
              <li style={styles.bold}>email-support.quickie.com</li>
              <li style={styles.bold}>6202720120, 7479934891</li>
              <li style={styles.bold}>Bagaha, Bihar, India</li>
            </ul>
          </div>
          <div style={styles.section}>
            <h4 style={styles.title}>Help</h4>
            <ul style={styles.list}>
              <li style={styles.bold}>FAQs</li>
              <li style={styles.bold}>Help Centre</li>
              <li style={styles.bold}>Support Page</li>
            </ul>
          </div>
          <div style={styles.section}>
            <h4 style={styles.title}>Policies</h4>
            <ul style={styles.list}>
              <li style={styles.bold}>Refund Policy</li>
              <li style={styles.bold}>Cancellation Policy</li>
            </ul>
          </div>
        </div>

        <div style={styles.socialSection}>
          <p style={{ fontWeight: 800, marginBottom: '20px', color: 'var(--text-main)', fontSize: '1.1rem' }}>Follow us on</p>
          <div style={styles.socialIcons}>
            <div style={styles.socialIcon}><Instagram size={24} /></div>
            <div style={styles.socialIcon}><Phone size={24} /></div>
            <div style={styles.socialIcon}><Twitter size={24} /></div>
          </div>
        </div>

        <div style={styles.copyright}>
          Quickie developed by Rupesh & Rajveer
        </div>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    background: 'white',
    padding: '60px 0 20px',
    marginTop: '50px',
    borderTop: '1px solid var(--border-color)',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '40px',
    marginBottom: '50px',
  },
  section: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  },
  title: {
    fontSize: '1.1rem',
    fontWeight: 800,
    color: 'var(--text-main)',
  },
  list: {
    listStyle: 'none',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    opacity: 0.8,
    fontSize: '0.9rem',
  },
  bold: {
    fontWeight: 700,
  },
  socialSection: {
    textAlign: 'center',
    padding: '40px 0',
    borderTop: '1px solid var(--border-color)',
  },
  socialIcons: {
    display: 'flex',
    justifyContent: 'center',
    gap: '25px',
  },
  socialIcon: {
    width: '50px',
    height: '50px',
    borderRadius: '15px',
    background: 'var(--bg-color)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    transition: 'var(--transition)',
    color: 'var(--primary-solid)',
    boxShadow: 'var(--shadow-soft)',
  },
  copyright: {
    textAlign: 'right',
    fontSize: '0.75rem',
    opacity: 0.5,
    marginTop: '30px',
  }
};

export default Footer;
