import express from 'express';
import * as trainController from './controllers/train.controller';
import * as stationController from './controllers/station.controller';
import * as tripController from './controllers/trip.controller';

const router = express.Router();

router.post('/trains', trainController.createTrain);
router.get('/trains', trainController.getTrains);

router.post('/stations', stationController.createStation);
router.get('/stations', stationController.getStations);

router.post('/trips', tripController.createTrip);
router.get('/trips', tripController.getTrips);

export default router;
