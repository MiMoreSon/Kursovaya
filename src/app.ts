import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';
import router from './routes';

const app = express();

// middleware
app.use(express.json());
app.use(morgan('tiny'));
app.use(helmet());
app.use(cors());

// routes
app.use('/api', router);

export default app;
