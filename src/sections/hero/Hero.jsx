import styles from './HeroStyles.module.css';
import heroImg from '../../assets/hero-img.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import resume from '../../assets/Jacob_Nickerson_resume.pdf';
import { useTheme } from '../../common/ThemeContext';

function Hero() {
    const { theme, toggleTheme } = useTheme();

    const themeIcon = theme === 'light' ? sun : moon;
    const githubIcon = theme === 'light' ? githubLight : githubDark;
    const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;
    

    return (
        <section id="hero" className={styles.container}>
            <div className={styles.colorModeContainer}>
                <img className={styles.hero} src={heroImg} alt="Portrait of Jacob Nickerson"></img>
                <img className={styles.colorMode} src={themeIcon} alt="Color mode icon" onClick={toggleTheme}></img>
            </div>
            <div className={styles.info}>
                <h1>
                    Jacob
                    <br />
                    Nickerson
                </h1>
                <h2>Computer Science Student</h2>
                <span>
                    <a href="https://github.com/jacobnickerson/" target="_blank">
                        <img src={githubIcon} alt="Github icon"></img>
                    </a>
                    <a href="https://linkedin.com/in/jacobnickerson817/" target="_blank">
                        <img src={linkedinIcon} alt="Linkedin icon"></img>
                    </a>
                </span>
                <p>Hello! If you stumbled across this, welcome!<br/>The website isn't finished yet and most of these images are placeholders.</p>
                <a href={resume} download>
                    <button className="hover">
                        Resume
                    </button> 
                </a>
            </div>
        </section>
    );
}

export default Hero;