import { eventsDao } from '../dao/events.dao.js';

export const eventsRepository = {
  getAll: () => eventsDao.getAll()
};
