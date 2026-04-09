import styles from './Newsletter.module.css';

const Newsletter = () => {
  return (
    <section className={styles.newsletter}>
      <div className={styles.topSquiggle}>
        <svg width="100" height="40" viewBox="0 0 100 40"><path d="M10 30 Q 30 10 50 30 T 90 30" stroke="#FF4D4D" strokeWidth="2" fill="none"/></svg>
      </div>
      
      <div className={styles.container}>
        <h2 className={styles.title}>
          Subscribe to<br/>
          our newsletter
        </h2>
        <p className={styles.subtitle}>To make your stay special and even more memorable</p>
        
        <div className={styles.inputGroup}>
          <button className={styles.subscribeBtn}>Subscribe Now</button>
        </div>
      </div>
      
      <div className={styles.purpleBlob}></div>
    </section>
  );
};
export default Newsletter;
