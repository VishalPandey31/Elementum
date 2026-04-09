import styles from './Services.module.css';

const Services = () => {
  const data = [
    { label: "Office of multiple interest content", title: "Colaborative & partnership" },
    { label: "The hanger US Air force digital experimental", title: "We talk about our weight" },
    { label: "Delta faucet content, social, digital", title: "Piloting digital confidence", hasAv: true }
  ];
  return (
    <section className={styles.services} id="services">
      <div className={styles.container}>
        <div className={styles.header}>
           <h2 className={styles.title}>
             <span className="weight-300">What we</span> <span className="pill-teal weight-800">can</span><br/>
             <span className="underline-hand weight-800">offer</span> <span className="weight-300">you!</span>
           </h2>
        </div>
        <div className={styles.list}>
          {data.map((s, i) => (
            <div key={i} className={styles.item}>
              <div className={`${styles.label} weight-300`}>{s.label}</div>
              <div className={styles.right}>
                <h3 className={`${styles.serviceTitle} weight-300`}>{s.title}</h3>
                {s.hasAv && (
                  <div className={styles.collageAv}>
                     <img src="https://i.pravatar.cc/150?img=12" alt=""/>
                  </div>
                )}
                <div className={`${styles.arrow} weight-300`}>⟶</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Services;
