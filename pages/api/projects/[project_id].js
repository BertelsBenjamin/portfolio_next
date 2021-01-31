import { connectToDatabase } from '../../../util/mongodb';
import mongoose from 'mongoose';

export default async (req, res) => {
  const { db } = await connectToDatabase();

  const {
    query: { project_id },
  } = req;

  const project = await db
    .collection('projects')
    .find({ _id: mongoose.Types.ObjectId(project_id) })
    .sort({ metacritic: -1 })
    .toArray();

  res.status(200);
  res.json(project);
};
