import styles from './SkillsStyles.module.css';
import checkmarkLight from '../../assets/github-light.svg';
import checkmarkDark from '../../assets/checkmark-dark.svg';
import SkillList from '../../common/SkillList';
import { useTheme } from '../../common/ThemeContext';

function Skills() {
  const { theme } = useTheme();
  const checkMarkIcon = theme === 'light' ? checkmarkLight : checkmarkDark;

  return (
    <section id="skills" className={styles.container}>
        <h1 className="sectionTitle">Skills</h1>
        <div className={styles.skillList}>
            <SkillList src={checkMarkIcon} skill="Not Finishing Websites" />
        </div>
        <hr />
        <div className={styles.skillList}>
            <SkillList src={checkMarkIcon} skill="Working On Unfinished Websites" />
        </div>
    </section>
  );
}

export default Skills;