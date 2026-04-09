import styles from './About.module.css';

const About = () => {
  return (
    <section className={styles.about}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.textSide}>
            <h2 className={styles.title}>
              <span className="underline-hand weight-800">Tomorrow</span> <span className="weight-300">should</span><br/>
              <span className="weight-300">be better than</span> <span className="pill-teal weight-800">today</span>
            </h2>
            <p className={styles.desc}>
              We are a team of strategists, designers, communicators, researchers. 
              Together, we believe that progress only happens when you refuse to play things safe.
            </p>
            <a href="#" className={styles.link}>Read more —</a>
          </div>
          <div className={styles.imageSide}>
            <div className={styles.imgWrapper}>
              <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600" className={styles.img} alt=""/>
              {/* Red Floating Triangle */}
              <div className={styles.triangleDecor}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
