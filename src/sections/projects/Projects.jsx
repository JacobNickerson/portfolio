import styles from './ProjectsStyles.module.css';
import ProjectCard from '../../common/ProjectCard';
import TRAYcer from '../../assets/traycer.png';
import Cetris from '../../assets/cetris.png';
import Duckube from '../../assets/duckube.png';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
        <h1 className="sectionTitle">Projects</h1>
        <div className={styles.projectsContainer}>
            <ProjectCard src={TRAYcer}
            link='https://github.com/JacobNickerson/TRAYcer'
            h3='TRAYcer'
            p='Raytracer'
            />
            <ProjectCard src={Cetris}
            link='https://github.com/JacobNickerson/cetris'
            h3='Cetris'
            p='C++ Based Tetromino Puzzle Game'
            />
            <ProjectCard src={Duckube}
            link='https://github.com/JacobNickerson/Duckube'
            h3='Duckube'
            p='Discord Server Management Bot'
            />
        </div>
    </section>
  );
}

export default Projects;