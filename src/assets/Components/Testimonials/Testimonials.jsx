import styles from './Testimonials.module.css';

const Testimonials = () => {
  return (
    <section className={styles.testimonials}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            <span className="pill-teal weight-800">What</span> <span className="weight-300">our customer</span><br/>
            <span className="weight-300">says</span> <span className="underline-hand weight-800">About Us</span>
          </h2>
        </div>

        <div className={styles.contentWrap}>
          {/* Scattered Avatars around the box */}
          <img src="https://i.pravatar.cc/150?img=1" className={styles.av1} alt="" />
          <img src="https://i.pravatar.cc/150?img=2" className={styles.av2} alt="" />
          <img src="https://i.pravatar.cc/150?img=3" className={styles.av3} alt="" />
          
          <div className={styles.quoteBox}>
            <div className={styles.quoteMarksTop}>“</div>
            <p className={styles.quoteText}>
              Elementum delivered the site within the timeline as they requested. 
              In the end, the client found a 50% increase in traffic within days since its launch. 
              They also had an impressive ability to use technologies that the company hasn't used, 
              which have also proved to be easy to use and reliable.
            </p>
            <div className={styles.quoteMarksBottom}>”</div>
          </div>

          <img src="https://i.pravatar.cc/150?img=4" className={styles.av4} alt="" />
          <img src="https://i.pravatar.cc/150?img=5" className={styles.av5} alt="" />
          <img src="https://i.pravatar.cc/150?img=6" className={styles.av6} alt="" />
          <img src="https://i.pravatar.cc/150?img=7" className={styles.av7} alt="" />
        </div>
      </div>
    </section>
  );
};
export default Testimonials;
