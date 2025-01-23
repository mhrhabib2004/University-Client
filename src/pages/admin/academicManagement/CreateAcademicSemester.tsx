import {  FieldValues, SubmitHandler } from "react-hook-form";
import PHForm from "../../../components/form/PHForm";
import PHInput from "../../../components/form/PHInput";
import { Button, Col, Flex } from "antd";
import PHSelect from "../../../components/form/PHSelect";

export default function CreateAcademicSemester() {
  const onSubmit: SubmitHandler<FieldValues> = (data)=>{
    console.log(data)
  }
  return (
    <Flex align="center" justify="center">
    <Col span={6}>
    <PHForm onSubmit={onSubmit}>
      <PHSelect label="Name" name="name"/>
      <Button htmlType="submit">submit</Button>
    </PHForm>
    </Col>
    </Flex>
  )
}
