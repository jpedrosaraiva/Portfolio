import styles from './ExperiencesStyles.module.css';
import React from 'react';

function Experiences() {
  return (
    <section className={styles.experiencesContainer}>
      <div className={styles.experiencesHero}>
      </div>
      <div className={styles.experiencesInfo}>
        <h1>Experiências</h1>
        <ul className={styles.experiencesList}>
          {experiences.slice(0, 2).map((experience) => (
            <li key={experience.id} className={styles.experiencesItem}>
              <h3>{experience.company}</h3>
              <h4>{experience.title}</h4>
              <p>Período: {experience.period}</p>
              <p>Tecnologias: {experience.technologies}</p>
              <ul className={styles.experiencesTechList}>
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

const experiences = [
  {
    id: 1,
    company: 'Clube Delivery',
    title: 'FullStack Developer | Mobile',
    period: 'Abril / 2024 - Atualmente',
    technologies: 'JavaScript, ReactJS, React-Native, NodeJS, Git.',
  },
];

export default Experiences;