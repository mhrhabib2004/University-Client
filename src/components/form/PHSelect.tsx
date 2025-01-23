import { Form, Select } from "antd";
import { Controller } from "react-hook-form";

export default function PHSelect({label,name}) {
  
      
  return (
   <Controller
   name={name} 
   render={({field:{onChange}})=>( 
   <Form.Item label={label}>
    <Select
      style={{ width: "100%" }}
      onChange={onChange}
      options={[
        { value: 'jack', label: 'Jack' },
        { value: 'lucy', label: 'Lucy' },
        { value: 'Yiminghe', label: 'yiminghe' },
       
      ]}
    />
   
  </Form.Item>)}
   />
  )
}
