import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.logo}>
          Elementum
        </div>
        
        <div className={styles.navLinks}>
          <a href="#home">Home</a>
          <a href="#studio">Studio</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
          <a href="#faqs">FAQs</a>
        </div>

        <div className={styles.menuIcon}>
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
