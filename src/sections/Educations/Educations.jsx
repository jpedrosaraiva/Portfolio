import styles from './EducationsStyles.module.css';
import React from 'react';

function Educations() {
  return (
    <section className={styles.educationsContainer}>
      <div className={styles.educationsHero}>
      </div>
      <div className={styles.educationsInfo}>
        <h1>Formação</h1>
        <ul className={styles.educationsList}>
          {educations.slice(0, 2).map((education) => (
            <li key={education.id} className={styles.educationsItem}>
              <h3>{education.company}</h3>
              <h4>{education.title}</h4>
              <p>Período: {education.period}</p>
              <ul className={styles.educationsTechList}>
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

const educations = [
  {
    id: 1,
    company: 'Faculdade Descomplica UniAmérica',
    title: 'Análise e Desenvolvimento de Sistemas',
    period: '2024.2 - Cursando',
  },
  {
    id: 1,
    company: 'Labenu - Escola de Desenvolvimento',
    title: 'Desenvolvimento Web FullStack',
    period: 'Agosto 2022 - Março 2023',
  },
];

export default Educations;