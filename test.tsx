import React from 'react';
import { useForm } from 'react-hook-form';

function SimpleForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="firstName">First Name</label>
        <input id="firstName" {...register('firstName', { required: true })} />
        {errors.firstName && <span>This field is required</span>}
      </div>

      <div>
        <label htmlFor="lastName">Last Name</label>
        <input id="lastName" {...register('lastName', { required: true })} />
        {errors.lastName && <span>This field is required</span>}
      </div>

      <input type="submit" />
    </form>
  );
}

export default SimpleForm;
