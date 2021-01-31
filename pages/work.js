import { connectToDatabase } from '../util/mongodb';
import styles from '../scss/Work.module.scss';

const Work = ({ projects }) => {
  projects.map((project) => console.log(project.title));
  return (
    <>
      <h1>Work</h1>
      <ul>
        {projects.map((project) => (
          <li key={project._id}>
            <h2>{project.title}</h2>
            <h3>{project.github_uri}</h3>
            <p>{project.git_clone}</p>
          </li>
        ))}
      </ul>
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
