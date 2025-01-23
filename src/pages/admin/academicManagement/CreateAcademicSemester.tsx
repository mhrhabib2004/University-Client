import {  FieldValues, SubmitHandler } from "react-hook-form";
import PHForm from "../../../components/form/PHForm";

import { Button, Col, Flex } from "antd";
import PHSelect from "../../../components/form/PHSelect";

const nameOption = [
  {
  value : "01",
  label:"Autumn"
},
  {
  value : "02",
  label:"Summer"
},
  {
  value : "03",
  label:"Fall" 
},
]

export default function CreateAcademicSemester() {
  const onSubmit: SubmitHandler<FieldValues> = (data)=>{
    const name = nameOption[Number(data.name)-1].label
    const semesterdata = {
      name,
      code : data.name
    }
    console.log(semesterdata)
  }
  return (
    <Flex align="center" justify="center">
    <Col span={6}>
    <PHForm onSubmit={onSubmit}>
      <PHSelect label="Name" name="name" options={nameOption}/>
      <Button htmlType="submit">submit</Button>
    </PHForm>
    </Col>
    </Flex>
  )
}
