import {useState} from 'react';
import { Controller, useForm } from 'react-hook-form';
import Link from 'next/link';
import Select from "react-select";

import TextField from '@mui/material/TextField';
import { FormControlLabel, Checkbox, Button } from '@mui/material';

interface IFormInput {
  size: { label: string; value: string } | null;
  crust: { label: string; value: string } | null;
  toppings: Array<{ key: string; label: string; value: string }> | null;

}
const Order: any = () => {
  // TODO: Add validation
  // TODO: Add submit
  const { control, handleSubmit } = useForm<IFormInput>();

  const onSubmit = (data: IFormInput) => {
    alert(JSON.stringify(data));
  };

  const toppings = [
    { key: "1", label: "Pepperoni", value: "Pepperoni" },
    { key: "2", label: "Sausage", value: "Sausage" },
    { key: "3", label: "Mushroom", value: "Mushroom" },
    { key: "4", label: "Onion", value: "Onion" },
    { key: "5", label: "Green Pepper", value: "Green Pepper" }
  ];

  return (
    <form onSubmit={handleSubmit(onSubmit)}>


      <label>Size</label>
      <Controller
        name="size"
        render={({ field }) => (
          <Select
            {...field}
            options={[
              { value: "small", label: "small" },
              { value: "medium", label: "medium" },
              { value: "large", label: "large" }
            ]}
          />
        )}
        control={control}
      />

      <label>Crust</label>
      <Controller
        name="crust"
        render={({ field }) => (
          <Select
            {...field}
            options={[
              { value: "regular", label: "regular" },
              { value: "thin", label: "thin" },
              { value: "deepDish", label: "Deep Dish" }
            ]}
          />
        )}
        control={control}
      />
      {toppings.map(topping => (
<>
        <label key={topping.key}>{topping.label}</label>
          <Controller
          name={topping.value}
          control={control}
                    render={({ field }) => (
            <Checkbox
              onChange={(e) => field.onChange(e.target.checked)}
              checked={field.value}
            />
          )}

          />
</>
      ))}
      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
    </form>
  );
};

export default Order;
