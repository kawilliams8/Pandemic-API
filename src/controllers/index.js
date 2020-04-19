import express from 'express';
import { indexPage } from '../controllers';
import { aboutPage } from '../controllers';

const indexRouter = express.Router();

indexRouter.get('/', indexPage);
indexRouter.get('/about', aboutPage);

export default indexRouter;
