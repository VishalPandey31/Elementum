import styles from './Progress.module.css';

const Progress = () => {
  return (
    <section className={styles.progress}>
      <div className={styles.connectorLine}>
        <svg width="100%" height="200" viewBox="0 0 1000 200" preserveAspectRatio="none">
          <path d="M0 100 Q 250 200 500 100 T 1000 100" stroke="#FF4D4D" strokeWidth="2" strokeDasharray="10 10" fill="none"/>
        </svg>
      </div>
      
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.imageSide}>
            <div className={styles.imgWrapper}>
              {/* Red Triangle Decorations */}
              <div className={styles.tri1}></div>
              <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600" className={styles.img} alt=""/>
              <div className={styles.tri2}></div>
            </div>
          </div>
          <div className={styles.textSide}>
            <h2 className={styles.title}>
              <span className="pill-teal weight-800">See</span> <span className="weight-300">how we can</span><br/>
              <span className="weight-300">help you</span> <span className="underline-hand weight-800">progress</span>
            </h2>
            <p className={styles.desc}>
              We add a layer of fearless insights and action that allows change makers 
              to accelerate their progress in areas such as brand, design digital, comms and social research.
            </p>
            <a href="#" className={styles.link}>Read more —</a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Progress;
