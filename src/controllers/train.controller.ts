import { Request, Response } from 'express';
import { Train } from '../models/train.model';

export const createTrain = async (req: Request, res: Response) => {
  try {
    const { name, capacity } = req.body;
    const train = await Train.create( name, capacity );
    res.json(train);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

export const getTrains = async (req: Request, res: Response) => {
  try {
    const trains = await Train.findAll();
    res.json(trains);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
