import { connectToDatabase } from '../../util/mongodb';

export default async (req, res) => {
  const { db } = await connectToDatabase();

  const projects = await db
    .collection('projects')
    .find({})
    .sort({ metacritic: -1 })
    .toArray();

  res.status(200);
  res.json(projects);
};
