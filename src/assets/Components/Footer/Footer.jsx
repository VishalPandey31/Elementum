import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.col}>
            <h4 className={styles.colTitle}>Company</h4>
            <a href="#" className="weight-300">Home</a>
            <a href="#" className="weight-300">Studio</a>
            <a href="#" className="weight-300">Service</a>
            <a href="#" className="weight-300">Blog</a>
          </div>
          
          <div className={styles.col}>
            <h4 className={styles.colTitle}>Terms & Policies</h4>
            <a href="#" className="weight-300">Privacy Policy</a>
            <a href="#" className="weight-300">Terms & Conditions</a>
            <a href="#" className="weight-300">Explore</a>
            <a href="#" className="weight-300">Accesibility</a>
          </div>

          <div className={styles.col}>
            <h4 className={styles.colTitle}>Follow Us</h4>
            <a href="#" className="weight-300">Instagram</a>
            <a href="#" className="weight-300">LinkedIn</a>
            <a href="#" className="weight-300">Youtube</a>
            <a href="#" className="weight-300">Twitter</a>
          </div>

          <div className={styles.col}>
            <h4 className={styles.colTitle}>Terms & Policies</h4>
            <p className="weight-300">1498w Fluton ste, STE<br/>2D Chicgo, IL 63867.</p>
            <p className="weight-300">(123) 456789000</p>
            <p className="weight-300">info@elementum.com</p>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className="weight-300">©2023 Elementum. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
