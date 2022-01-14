/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createOrder = /* GraphQL */ `
  mutation CreateOrder(
    $input: CreateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    createOrder(input: $input, condition: $condition) {
      id
      Pizzas {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateOrder = /* GraphQL */ `
  mutation UpdateOrder(
    $input: UpdateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    updateOrder(input: $input, condition: $condition) {
      id
      Pizzas {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteOrder = /* GraphQL */ `
  mutation DeleteOrder(
    $input: DeleteOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    deleteOrder(input: $input, condition: $condition) {
      id
      Pizzas {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createPizza = /* GraphQL */ `
  mutation CreatePizza(
    $input: CreatePizzaInput!
    $condition: ModelPizzaConditionInput
  ) {
    createPizza(input: $input, condition: $condition) {
      id
      crust
      size
      toppings
      orderID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updatePizza = /* GraphQL */ `
  mutation UpdatePizza(
    $input: UpdatePizzaInput!
    $condition: ModelPizzaConditionInput
  ) {
    updatePizza(input: $input, condition: $condition) {
      id
      crust
      size
      toppings
      orderID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deletePizza = /* GraphQL */ `
  mutation DeletePizza(
    $input: DeletePizzaInput!
    $condition: ModelPizzaConditionInput
  ) {
    deletePizza(input: $input, condition: $condition) {
      id
      crust
      size
      toppings
      orderID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
