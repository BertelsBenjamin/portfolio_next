import { connectToDatabase } from '../util/mongodb';
import styles from '../scss/Work.module.scss';

const Work = ({ projects }) => {
  projects.map((project) => console.log(project.title));
  return (
    <>
      <div className={styles.container}>
        <h1>Work</h1>
        <ul>
          {projects.map((project) => (
            <li key={project._id}>
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <p>
                <small>
                  <a href={project.github_uri}>
                    <object
                      type='image/svg+xml'
                      data='./github-alt.svg'
                      className={styles.social}
                    >
                      Github
                    </object>
                  </a>
                </small>
              </p>
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
