import { connectToDatabase } from '../../util/mongodb';
import { useSelector } from 'react';
import showdown from 'showdown';
import parse from 'html-react-parser';
import styles from '../../scss/Project.module.scss';

const Baboos = ({ project }) => {
  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <h1 className={styles.title}>{project.title}</h1>
        <div className={styles.actions}>
          <a href={project.github_uri} target='_blank'>
          <object
            type='image/svg+xml'
            data='../github-alt.svg'
          >
          </object>
        </a>
        {project.demo_uri ? <a href={project.demo_uri} target='_blank'>
          <i className="mi-computer"></i>
        </a> : null}
        </div>
      </div>
      {parse(project.description_full)}
    </div>
  );
};

export async function getServerSideProps() {
  const converter = new showdown.Converter();

  const { db } = await connectToDatabase();

  let project = await db.collection('projects').find({ title: 'Patrimonium' }).toArray();

  project[0].description_full = converter.makeHtml(project[0].description_full);

  return {
    props: { project: JSON.parse(JSON.stringify(project))[0] },
  };
}

export default Baboos;
