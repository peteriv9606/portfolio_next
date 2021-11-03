import styles from '../styles/projects.module.scss'
import { projectsData } from '../data'

export default function Projects() {

  return (
    <section className={styles.Wrapper}>
      <div className="Shell">
        <div className={styles.Inner}>
          <h2>Projects</h2>
          <h3>"Slow progress is better than no progress"</h3>
          <div className={styles.Projects_wrapper}>

            {
              projectsData.map((project, index) => {
                return <div
                  key={index}
                  className={`${styles.Project} ${index % 2 != 0 ? styles.Reverse : ""}`}>
                  <img src={project?.img} />
                  <div>
                    <div className={styles.Project_details}>
                      <h4>{project.title}</h4>
                      <p>{project.description}</p>
                    </div>
                    <div className={styles.Project_actions}>
                      {project?.githubLink != "" &&
                        <a href={project?.githubLink}
                          className={'button'}
                          target={'_blank'}>Github
                        </a>}
                      {project?.liveLink != "" &&
                        <a href={project?.liveLink}
                          className={'button green'}
                          target={'_blank'}>Live
                        </a>}
                    </div>
                  </div>
                </div>
              })
            }
          </div>
        </div>
      </div>
    </section>
  )
}