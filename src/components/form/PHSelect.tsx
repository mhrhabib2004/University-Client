import { Form, Select } from "antd";
import { Controller } from "react-hook-form";

type TPHSelectprops = {
    name:string,
    label:string,
    options:{value:string,label:string,disabled?:boolean}[]

  }
export default function PHSelect({label,name,options}:TPHSelectprops) {
  
      
  return (
   <Controller
   name={name} 
   render={({field,fieldState:{error}})=>( 
   <Form.Item label={label}>
    <Select
      style={{ width: "100%" }}
      {...field}
      options={options}
    />
   {error && <small style={{color:"red"}}>{error.message}</small>}
  </Form.Item>)}
   />
  )
}
