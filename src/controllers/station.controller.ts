import { Request, Response } from 'express';
import { Station } from '../models/station.model';

export const createStation = async (req: Request, res: Response) => {
  try {
    const { name, city } = req.body;
    const station = await Station.create( name, city );
    res.json(station);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

export const getStations = async (req: Request, res: Response) => {
  try {
    const stations = await Station.findAll();
    res.json(stations);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
