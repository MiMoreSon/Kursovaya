import { Request, Response } from 'express';
import { Trip } from '../models/trip.model';

export const createTrip = async (req: Request, res: Response) => {
  try {
    const {
      trainId,
      departureStationId,
      arrivalStationId,
      departureTime,
      arrivalTime,
    } = req.body;

    const trip = await Trip.create(
      {
        trainId,
        departureStationId,
        arrivalStationId,
        departureTime,
        arrivalTime,
      },
      { _attributes: { exclude: ['createdAt', 'updatedAt'] } }
    );

    return res.status(201).json(trip);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};
