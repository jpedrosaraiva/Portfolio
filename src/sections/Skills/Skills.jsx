import styles from './SkillsStyles.module.css';
import htmlIconDark from '../../assets/html-dark.svg';
import htmlIconLight from '../../assets/html-light.svg';
import cssIconDark from '../../assets/css-dark.svg';
import cssIconLight from '../../assets/css-light.svg';
import javaScriptIconDark from '../../assets/javascript-dark.svg';
import javaScriptIconLight from '../../assets/javascript-light.svg';
import reactJsIconDark from '../../assets/reactjs-dark.svg';
import reactJsIconLight from '../../assets/reactjs-light.svg';
import typeScriptIconDark from '../../assets/typescript-dark.svg';
import typeScriptIconLight from '../../assets/typescript-light.svg';
import nodeJsIconDark from '../../assets/nodejs-dark.svg';
import nodeJsIconLight from '../../assets/nodejs-light.svg';
import gitIconDark from '../../assets/git-dark.svg';
import gitIconLight from '../../assets/git-light.svg';
import SkillList from '../../common/SkillList';
import { useTheme } from '../../common/ThemeContext';

function Skills() {
  const { theme } = useTheme();
  const htmlIcon = theme === 'light' ? htmlIconLight : htmlIconDark;
  const cssIcon = theme === 'light' ? cssIconDark : cssIconLight;
  const javaScriptIcon = theme === 'light' ? javaScriptIconDark : javaScriptIconLight;
  const reactJsIcon = theme === 'light' ? reactJsIconLight : reactJsIconDark;
  const typeScriptIcon = theme === 'light' ? typeScriptIconDark : typeScriptIconLight;
  const nodeJsIcon = theme === 'light' ? nodeJsIconLight : nodeJsIconDark;
  const gitIcon = theme === 'light' ? gitIconDark : gitIconLight;

  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Tecnologias</h1>
      <div className={styles.skillList}>
        <SkillList src={htmlIcon} skill="HTML" />
        <SkillList src={cssIcon} skill="CSS" />
        <SkillList src={javaScriptIcon} skill="JavaScript" />
        <SkillList src={reactJsIcon} skill="ReactJs" />
        <SkillList src={reactJsIcon} skill="React-Native" />
        <SkillList src={typeScriptIcon} skill="TypeScript" />
        <SkillList src={nodeJsIcon} skill="NodeJs" />
        <SkillList src={gitIcon} skill="Git" />
      </div>
      <hr />
    </section>
  );
}

export default Skills;
