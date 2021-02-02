import { connectToDatabase } from '../util/mongodb';
import styles from '../scss/Work.module.scss';

const Work = ({ projects }) => {
  projects.map((project) => console.log(project.technologies));
  return (
    <>
      <div className={styles.container}>
        <h1>Work</h1>
        <ul>
          {projects.map((project) => (
            <li key={project._id}>
              <h2 className={styles.title}>{project.title}</h2>
              <div className={styles.links}>
                {project.demo_uri ? (
                  <a href={project.demo_uri} target='_blank'>
                    <i className='mi-computer'></i>
                  </a>
                ) : (
                  <a
                    href={`mailto:${process.env.EMAIL}?subject=${project.title}&body=Hi Benjamin,%0D%0A%0D%0AI would like to know more about your project "Patrimonium".%0D%0A%0D%0ACould you please contact me for a demo?%0D%0A%0D%0AKindest regards,%0D%0A%0D%0A`}
                  >
                    <i className='mi-email accent'></i>
                  </a>
                )}
                <a href={project.github_uri} target='_blank'>
                  <object
                    type='image/svg+xml'
                    data='./github-alt.svg'
                    className={styles.social}
                  >
                    Github
                  </object>
                </a>
              </div>
              <p className={styles.description}>{project.description}</p>
              <div className={styles.tech}>
                {project.technologies.map((technology, index) => (
                  <span
                    key={(project._id += index)}
                    className={styles.technology}
                  >
                    {technology} <span className='accent'>| </span>
                  </span>
                ))}
              </div>
              <div className={styles.tags}>
                {project.tags
                  ? project.tags.map((hash) => (
                      <span className={styles.hash}>#{hash} </span>
                    ))
                  : null}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export async function getServerSideProps() {
  const { db } = await connectToDatabase();

  const projects = await db.collection('projects').find({}).toArray();

  return {
    props: { projects: JSON.parse(JSON.stringify(projects)) },
  };
}

export default Work;
