/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateOrderInput = {
  id?: string | null,
  _version?: number | null,
};

export type ModelOrderConditionInput = {
  and?: Array< ModelOrderConditionInput | null > | null,
  or?: Array< ModelOrderConditionInput | null > | null,
  not?: ModelOrderConditionInput | null,
};

export type Order = {
  __typename: "Order",
  id: string,
  Pizzas?: ModelPizzaConnection | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type ModelPizzaConnection = {
  __typename: "ModelPizzaConnection",
  items:  Array<Pizza | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type Pizza = {
  __typename: "Pizza",
  id: string,
  crust?: string | null,
  size?: string | null,
  toppings?: Array< string | null > | null,
  orderID?: string | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateOrderInput = {
  id: string,
  _version?: number | null,
};

export type DeleteOrderInput = {
  id: string,
  _version?: number | null,
};

export type CreatePizzaInput = {
  id?: string | null,
  crust?: string | null,
  size?: string | null,
  toppings?: Array< string | null > | null,
  orderID?: string | null,
  _version?: number | null,
};

export type ModelPizzaConditionInput = {
  crust?: ModelStringInput | null,
  size?: ModelStringInput | null,
  toppings?: ModelStringInput | null,
  orderID?: ModelIDInput | null,
  and?: Array< ModelPizzaConditionInput | null > | null,
  or?: Array< ModelPizzaConditionInput | null > | null,
  not?: ModelPizzaConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdatePizzaInput = {
  id: string,
  crust?: string | null,
  size?: string | null,
  toppings?: Array< string | null > | null,
  orderID?: string | null,
  _version?: number | null,
};

export type DeletePizzaInput = {
  id: string,
  _version?: number | null,
};

export type ModelOrderFilterInput = {
  id?: ModelIDInput | null,
  and?: Array< ModelOrderFilterInput | null > | null,
  or?: Array< ModelOrderFilterInput | null > | null,
  not?: ModelOrderFilterInput | null,
};

export type ModelOrderConnection = {
  __typename: "ModelOrderConnection",
  items:  Array<Order | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelPizzaFilterInput = {
  id?: ModelIDInput | null,
  crust?: ModelStringInput | null,
  size?: ModelStringInput | null,
  toppings?: ModelStringInput | null,
  orderID?: ModelIDInput | null,
  and?: Array< ModelPizzaFilterInput | null > | null,
  or?: Array< ModelPizzaFilterInput | null > | null,
  not?: ModelPizzaFilterInput | null,
};

export type CreateOrderMutationVariables = {
  input: CreateOrderInput,
  condition?: ModelOrderConditionInput | null,
};

export type CreateOrderMutation = {
  createOrder?:  {
    __typename: "Order",
    id: string,
    Pizzas?:  {
      __typename: "ModelPizzaConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateOrderMutationVariables = {
  input: UpdateOrderInput,
  condition?: ModelOrderConditionInput | null,
};

export type UpdateOrderMutation = {
  updateOrder?:  {
    __typename: "Order",
    id: string,
    Pizzas?:  {
      __typename: "ModelPizzaConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteOrderMutationVariables = {
  input: DeleteOrderInput,
  condition?: ModelOrderConditionInput | null,
};

export type DeleteOrderMutation = {
  deleteOrder?:  {
    __typename: "Order",
    id: string,
    Pizzas?:  {
      __typename: "ModelPizzaConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreatePizzaMutationVariables = {
  input: CreatePizzaInput,
  condition?: ModelPizzaConditionInput | null,
};

export type CreatePizzaMutation = {
  createPizza?:  {
    __typename: "Pizza",
    id: string,
    crust?: string | null,
    size?: string | null,
    toppings?: Array< string | null > | null,
    orderID?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdatePizzaMutationVariables = {
  input: UpdatePizzaInput,
  condition?: ModelPizzaConditionInput | null,
};

export type UpdatePizzaMutation = {
  updatePizza?:  {
    __typename: "Pizza",
    id: string,
    crust?: string | null,
    size?: string | null,
    toppings?: Array< string | null > | null,
    orderID?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeletePizzaMutationVariables = {
  input: DeletePizzaInput,
  condition?: ModelPizzaConditionInput | null,
};

export type DeletePizzaMutation = {
  deletePizza?:  {
    __typename: "Pizza",
    id: string,
    crust?: string | null,
    size?: string | null,
    toppings?: Array< string | null > | null,
    orderID?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type GetOrderQueryVariables = {
  id: string,
};

export type GetOrderQuery = {
  getOrder?:  {
    __typename: "Order",
    id: string,
    Pizzas?:  {
      __typename: "ModelPizzaConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListOrdersQueryVariables = {
  filter?: ModelOrderFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListOrdersQuery = {
  listOrders?:  {
    __typename: "ModelOrderConnection",
    items:  Array< {
      __typename: "Order",
      id: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncOrdersQueryVariables = {
  filter?: ModelOrderFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncOrdersQuery = {
  syncOrders?:  {
    __typename: "ModelOrderConnection",
    items:  Array< {
      __typename: "Order",
      id: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetPizzaQueryVariables = {
  id: string,
};

export type GetPizzaQuery = {
  getPizza?:  {
    __typename: "Pizza",
    id: string,
    crust?: string | null,
    size?: string | null,
    toppings?: Array< string | null > | null,
    orderID?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListPizzasQueryVariables = {
  filter?: ModelPizzaFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPizzasQuery = {
  listPizzas?:  {
    __typename: "ModelPizzaConnection",
    items:  Array< {
      __typename: "Pizza",
      id: string,
      crust?: string | null,
      size?: string | null,
      toppings?: Array< string | null > | null,
      orderID?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncPizzasQueryVariables = {
  filter?: ModelPizzaFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncPizzasQuery = {
  syncPizzas?:  {
    __typename: "ModelPizzaConnection",
    items:  Array< {
      __typename: "Pizza",
      id: string,
      crust?: string | null,
      size?: string | null,
      toppings?: Array< string | null > | null,
      orderID?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type OnCreateOrderSubscription = {
  onCreateOrder?:  {
    __typename: "Order",
    id: string,
    Pizzas?:  {
      __typename: "ModelPizzaConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateOrderSubscription = {
  onUpdateOrder?:  {
    __typename: "Order",
    id: string,
    Pizzas?:  {
      __typename: "ModelPizzaConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteOrderSubscription = {
  onDeleteOrder?:  {
    __typename: "Order",
    id: string,
    Pizzas?:  {
      __typename: "ModelPizzaConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreatePizzaSubscription = {
  onCreatePizza?:  {
    __typename: "Pizza",
    id: string,
    crust?: string | null,
    size?: string | null,
    toppings?: Array< string | null > | null,
    orderID?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdatePizzaSubscription = {
  onUpdatePizza?:  {
    __typename: "Pizza",
    id: string,
    crust?: string | null,
    size?: string | null,
    toppings?: Array< string | null > | null,
    orderID?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeletePizzaSubscription = {
  onDeletePizza?:  {
    __typename: "Pizza",
    id: string,
    crust?: string | null,
    size?: string | null,
    toppings?: Array< string | null > | null,
    orderID?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};
