import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero}>
      {/* 2nd Image Specific Decorations */}
      <div className={styles.blackSquiggle}>
        <svg width="60" height="180" viewBox="0 0 60 180" fill="none">
          <path d="M10 10C35 40 5 80 40 120C75 160 25 175 45 178" stroke="black" strokeWidth="3" strokeLinecap="round"/>
        </svg>
      </div>
      <div className={styles.purpleHalfCircle}></div>

      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            <span className="weight-300">The</span> <span className="underline-hand weight-800">thinkers</span> <span className="weight-300">and</span><br />
            <span className="weight-800">doers</span> <span className="weight-300">were</span> <span className="pill-pink weight-800">changing</span><br />
            <span className="weight-300">the</span> <span className="pill-teal weight-800">status</span> <span className="weight-300">Quo with</span>
          </h1>
          
          <p className={styles.subtitle}>
            We are a team of strategists, designers, communicators, researchers. Togeather,<br />
            we belive that progress only hgappens when you refuse to play things safe.
          </p>

          <div className={styles.avatarArc}>
            {/* Hero Team Avatars */}
            <img src="https://i.pravatar.cc/150?img=1" className={styles.av1} alt="" />
            <img src="https://i.pravatar.cc/150?img=2" className={styles.av2} alt="" />
            <img src="https://i.pravatar.cc/150?img=3" className={styles.av3} alt="" />
            <img src="https://i.pravatar.cc/150?img=4" className={styles.av4} alt="" />
            <img src="https://i.pravatar.cc/150?img=5" className={styles.av5} alt="" />
            <img src="https://i.pravatar.cc/150?img=6" className={styles.av6} alt="" />
            <img src="https://i.pravatar.cc/150?img=7" className={styles.av7} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
