import express from 'express';
import {
  indexPage,
  aboutPage,
  messagesPage,
  addMessage
} from '../controllers';
import { modifyMessage } from '../middleware';

const indexRouter = express.Router();
indexRouter.get('/', indexPage);
indexRouter.get('/about', aboutPage);
indexRouter.get('/messages', messagesPage);
indexRouter.post('/messages', modifyMessage, addMessage);

export default indexRouter;
