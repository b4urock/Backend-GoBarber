import { Router } from 'express';

import ensureAuthentication from '@modules/users/infra/http/middlewares/ensureAuthentication';
import ProvidersController from '../controllers/ProvidersControllers';

const providersRouter = Router();
const providersController = new ProvidersController();

providersRouter.use(ensureAuthentication);

providersRouter.get('/', providersController.index);

export default providersRouter;
