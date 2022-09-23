import { MAX_BODY_SIZE } from '../components/settings';

export const trimBody = (body: string) =>
  body.length > MAX_BODY_SIZE ? `${body.slice(0, MAX_BODY_SIZE)}...` : body;
