import { connectToDatabase } from '../../util/mongodb';
import { useSelector } from 'react';
import showdown from 'showdown';
import parse from 'html-react-parser';
import styles from '../../scss/Project.module.scss';

const Baboos = ({ project }) => {
  return (
    <div className={styles.container}>
      <h1>{project.title}</h1>
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
