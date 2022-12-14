import express from 'express';
import morgan from 'morgan';
import indexRoutes from './routes/index';
import path from 'path';

const app = express();

//settings
app.set('port', process.env.PORT || 3000);

//middlewares 
app.use(morgan('dev')); //podemos ver que peticiones van llegando
app.use(express.json());

//routes
app.use('/api', indexRoutes);

//this folder for this apllication will be used to store piblic files
app.use('/uploads', express.static(path.resolve('uploads')));

export default app;