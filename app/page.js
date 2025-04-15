import styles from '../styles/home.module.css'

export default function Home() {
  return (
    <>
      <section className={styles.informationSection}>
        <div className={styles.profileInfo}>
          <h1>Valleir Malta</h1>
          <p>Frontend Developer</p>
        </div>
        <div className={styles.description}>
          <p>Gosto de desafios, trabalho bem em equipe e aprendo bastante as coisas sozinho.</p>

          <p>Sou um desenvolvedor front-end com experiência na área e estou desenvolvendo minhas habilidades para back-end. Trabalho com frameworks que facilitam na agilidade do desenvolvimento do projeto.</p>
        </div>
      </section>
      <section className={styles.projectsSection}>

        <div className={styles.projectsTitle}>
          <h2>Prjetos</h2>
        </div>
        <div className={styles.projectsList}>
          <ul>
            <li className={styles.projectItem}>
              <h3 className={styles.projectItemName}>Projeto 1</h3>
              <p className={styles.projectItemDescription}>APlicação de API</p>
              <div className={styles.projectItemBanner}>
              </div>
            </li>
            <li className={styles.projectItem}>
              <h3 className={styles.projectItemName}>Projeto 2</h3>
              <p className={styles.projectItemDescription}>APlicação de API</p>
              <div className={styles.projectItemBanner}>
              </div>
            </li>
            <li className={styles.projectItem}>
              <h3 className={styles.projectItemName}>Projeto 3</h3>
              <p className={styles.projectItemDescription}>APlicação de API</p>
              <div className={styles.projectItemBanner}>
              </div>
            </li>
          </ul>
        </div>

      

      </section>
    </>
  );
}
