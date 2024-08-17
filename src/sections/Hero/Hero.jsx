import styles from './HeroStyles.module.css';
import heroImg from '../../assets/heroImg.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import instagramDark from '../../assets/instagram-dark.svg';
import instagramLight from '../../assets/instagram-light.svg';
import CV from '../../assets/CV- JOAO-PEDRO-SARAIVA.pdf';
import { useTheme } from '../../common/ThemeContext';


function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;
  const instagramIcon = theme === 'light' ? instagramDark : instagramLight

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          src={heroImg}
          className={styles.hero}
          alt="Profile picture of Harris Johnsen"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          João Pedro
          <br/>
          Saraiva
        </h1>
        <h2>Desenvolvedor de Software</h2>
        <span>
          <a href="https://github.com/pedrosvr" target="_blank">
            <img src={githubIcon} alt="Github icon" />
          </a>
          <a href="https://www.linkedin.com/in/jo%C3%A3o-pedro-saraiva/" target="_blank">
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a>
          <a href="https://www.instagram.com/pedrosv._/" target="_blank">
            <img src={instagramIcon} alt="Twitter icon" />
          </a>
        </span>
        <p className={styles.description}>
        Sou um profissional dedicado à área de desenvolvimento de software, com experiência tanto no front-end quanto no back-end.
        Desde que comecei minha jornada na programação em 2022, tenho me dedicado a criar aplicações significativas e impactantes. Desde o design inicial até a implementação final, busco sempre alinhar qualidade e inovação, utilizando uma variedade de tecnologias.
        </p>
        <a href={CV} download>
          <button className="hover">Currículo</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
