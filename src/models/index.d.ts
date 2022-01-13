import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type OrderMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type PizzaMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Order {
  readonly id: string;
  readonly Pizzas?: (Pizza | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Order, OrderMetaData>);
  static copyOf(source: Order, mutator: (draft: MutableModel<Order, OrderMetaData>) => MutableModel<Order, OrderMetaData> | void): Order;
}

export declare class Pizza {
  readonly id: string;
  readonly crust?: string;
  readonly size?: string;
  readonly toppings?: (string | null)[];
  readonly orderID?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Pizza, PizzaMetaData>);
  static copyOf(source: Pizza, mutator: (draft: MutableModel<Pizza, PizzaMetaData>) => MutableModel<Pizza, PizzaMetaData> | void): Pizza;
}