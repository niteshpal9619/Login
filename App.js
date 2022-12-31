import './App.css';
import {useForm} from "react-hook-form"
import { useState } from 'react';

function App() {

  const { register,handleSubmit,formState: { errors } } = useForm();
  const [userInfo,setuserInfo] = useState();
  const onSubmit = (data) => {
    setuserInfo(data)
    //console.log(data);
 };
  //console.log(errors)
  return (
    <div className="container">
      <pre>{JSON.stringify(userInfo,undefined,2)}</pre>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1 className="text-center">Registration Form</h1>
        <div className="ui divider">
            <div className="ui form">
                <div className="field">
                    <label>Username</label>
                    <input autoComplete="off" type="text" name="username" placeholder="name" {...register("username", { required: "User name is Required" })}/>
                </div>
                <p style={{ color: "Red" }} >{errors.username?.message}</p>
                <div className="field">
                    <label>Email</label>
                    <input  autoComplete="off" type="text" name="Email" placeholder="Email" {...register("Email", { required: "Email is Required",pattern:{value:/^\S+@\S+$/i,message:"this is not valid email"} })}/>
                </div>
                <p style={{ color: "Red" }}>{errors.Email?.message}</p>
                <div className="field">
                    <label>Password</label>
                    <input autoComplete="off" type="password" name="Password" placeholder="Password" {...register("Password", { required: "Password is Required",minLength:{value:4,message:"Password Must be gratter then 4 char"},maxLength:{value:10,message:"Password cannot exceeed more then 10 char"} })}></input>
                </div>
                <p style={{ color: "Red" }}>{errors.Password?.message}</p>
                <button className="fluid ui button blue">submit</button>
            </div>
        </div>
      </form>
    </div>
  );
}

export default App;
