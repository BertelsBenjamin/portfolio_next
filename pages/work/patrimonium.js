import { connectToDatabase } from '../../util/mongodb';
import { useSelector } from 'react';
import showdown from 'showdown';
import parse from 'html-react-parser';
import styles from '../../scss/Project.module.scss';

const Patrimonium = ({ project }) => {
  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <h1 className={styles.title}>{project.title}</h1>
        <div className={styles.actions}>
          <div className={styles.action}>
            <a href={project.github_uri} target='_blank'>
              <object type='image/svg+xml' data='../github-alt.svg'></object>
            </a>
          </div>
          {project.demo_uri ? (
            <div className={styles.action}>
              <a href={project.demo_uri} target='_blank'>
                <i className='mi-computer'></i>
              </a>
            </div>
          ) : (
            <div>
              <a
                href={`mailto:${process.env.EMAIL}?subject=${project.title}&body=Hi Benjamin,%0D%0A%0D%0AI would like to know more about your project "Patrimonium".%0D%0A%0D%0ACould you please contact me for a demo?%0D%0A%0D%0AKindest regards,%0D%0A%0D%0A`}
              >
                <i className='mi-email accent'></i>
              </a>
            </div>
          )}
        </div>
      </div>
      <p className={styles.description_full}>
        {parse(project.description_full)}
      </p>
    </div>
  );
};

export async function getServerSideProps() {
  const converter = new showdown.Converter();

  const { db } = await connectToDatabase();

  let project = await db
    .collection('projects')
    .find({ title: 'Patrimonium' })
    .toArray();

  project[0].description_full = converter.makeHtml(project[0].description_full);

  return {
    props: { project: JSON.parse(JSON.stringify(project))[0] },
  };
}

export default Patrimonium;
