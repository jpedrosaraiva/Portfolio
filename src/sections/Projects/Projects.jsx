import styles from './ProjectsStyles.module.css';
import dragonBall from '../../assets/personagensdedragonball.png';
import ecommerce from '../../assets/e-commerce.png';
import pokedex from '../../assets/pokedex.png';
import whatslab from '../../assets/whatslab.png';
import calculadora from '../../assets/calculadora.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projetos</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={pokedex}
          link="https://github.com/pedrosvr/projeto-react-apis"
          h3="Pokédex"
          p="Pokédex consumindo APIs"
        />
        <ProjectCard
          src={whatslab}
          link="https://github.com/pedrosvr/Whatslab"
          h3="Whatslab"
          p="Ambiente de conversa"
        />
        <ProjectCard
          src={dragonBall}
          link="https://github.com/pedrosvr/Personagens-de-Dragon-Ball-Super"
          h3="Dragon Ball"
          p="Informações de personagens"
        />
        <ProjectCard
          src={ecommerce}
          link="https://github.com/pedrosvr/E-Commerce-de-iPhones"
          h3="Hot Descontos"
          p="E-commerce ilustrativo"
        />
        <ProjectCard
          src={calculadora}
          link="https://github.com/pedrosvr/Calculadora"
          h3="Calculadora"
          p="Cálculos matemáticos"
        />
      </div>
    </section>
  );
}

export default Projects;
