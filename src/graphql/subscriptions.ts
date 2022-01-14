/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateOrder = /* GraphQL */ `
  subscription OnCreateOrder {
    onCreateOrder {
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
export const onUpdateOrder = /* GraphQL */ `
  subscription OnUpdateOrder {
    onUpdateOrder {
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
export const onDeleteOrder = /* GraphQL */ `
  subscription OnDeleteOrder {
    onDeleteOrder {
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
export const onCreatePizza = /* GraphQL */ `
  subscription OnCreatePizza {
    onCreatePizza {
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
export const onUpdatePizza = /* GraphQL */ `
  subscription OnUpdatePizza {
    onUpdatePizza {
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
export const onDeletePizza = /* GraphQL */ `
  subscription OnDeletePizza {
    onDeletePizza {
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
