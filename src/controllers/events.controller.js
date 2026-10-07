import { eventsService } from '../services/events.service.js';

export const getEvents = async (req, res, next) => {
  try {
    const payload = await eventsService.getAll();
    res.status(200).json({ status: 'success', payload });
  } catch (error) {
    next(error);
  }
};
