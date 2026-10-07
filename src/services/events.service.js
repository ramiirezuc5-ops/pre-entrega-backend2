import { eventsRepository } from '../repositories/events.repository.js';

export const eventsService = {
  getAll: () => eventsRepository.getAll()
};
