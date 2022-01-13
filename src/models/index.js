// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Order, Pizza } = initSchema(schema);

export {
  Order,
  Pizza
};