import 'reflect-metadata';

// Controllers
import { HelloController } from '../../application/controllers/HelloController';

// Adapters
import { lambdaHttpAdapter } from '../adapters/lambdaHttpAdapter';

const controller = new HelloController();

export const handler = lambdaHttpAdapter(controller);
