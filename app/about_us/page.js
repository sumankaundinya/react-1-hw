import styles from "./page.module.css";
import OurValues from "./OurValues";
import OurCrew from "./OurCrew";
import OurPartners from "./OurPartners";

// TASK - React 1 week 1
// After you are finished with creating the page, move the OurValues, OurCrew, OurPartners components into their own files
// OurValues.js, OurCrew.js, OurPartners.js should live in this folder
// import and use the components from the newly created files

export const Crew = () => {
  return (
    <div className="fullBGpicture">
      <main className="mainContent">
        <h1 className={styles.heading}>About us</h1>
        <section className={styles.card}>
          <h2 className={styles.sectionHeading}>Our Values</h2>
          <br />
          <OurValues />
        </section>
        <section
          className={styles.card}
          style={{
            backgroundImage: 'url("/crew/background-crew-desktop.jpg")',
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <h2 className={styles.sectionHeading}>The crew</h2>
          <br />
          <OurCrew />
        </section>
        <section className={styles.card}>
          <h2 className={styles.sectionHeading}>Our Partners</h2>
          <br />
          <OurPartners />
        </section>
      </main>
    </div>
  );
};

export default Crew;
