import React from 'react';
import { useForm } from "react-hook-form";

const ScreenTwo = () => {
    const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);
    return (
        <div style={{textAlign:'center'}}>
            <h1>This is screen ScreenTwo</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" {...register("username", { required: true, pattern: /^[a-zA-Z0-9]*$/ })} />
      <br />
      <input type="text" {...register("number", { required:true,  pattern: /^\d{10}$/})} />
      <br />
      <input type="email" {...register("email", { required:true, pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+\.[a-zA-Z]*$/})} />
      <br />
      <input type="text" {...register("address",{required:true})} />
      <br />
      <input type="submit" />
    </form>
        </div>
    );
};

export default ScreenTwo;