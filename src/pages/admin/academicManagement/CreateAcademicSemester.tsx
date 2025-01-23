import {  FieldValues, SubmitHandler } from "react-hook-form";
import PHForm from "../../../components/form/PHForm";
import { Button, Col, Flex } from "antd";
import PHSelect from "../../../components/form/PHSelect";
import { nameOption } from "../../../components/constends/semester";
import { MonthOption } from "../../../components/constends/global";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { academicSemesterSchema } from "../../../Schemas/academicSemesterSchema";



const currentYear = new Date().getFullYear();
const yearOption = [0,1,2,3,4].map((number)=>({
  value:String(currentYear+number),
  label:String(currentYear+number)
}))
// console.log(yearOption)

export default function CreateAcademicSemester() {
  const onSubmit: SubmitHandler<FieldValues> = (data)=>{
    const name = nameOption[Number(data?.name)-1]?.label
    const semesterdata = {
      name,
      code : data.name,
      year: data.year,
      startMonth:data.startMonth,
      endMonth:data.endMonth
    }
    console.log(semesterdata)
  }
 
  return (
    <Flex align="center" justify="center">
    <Col span={6}>
    <PHForm onSubmit={onSubmit} resolver={zodResolver(academicSemesterSchema)}>
      <PHSelect label="Name" name="name" options={nameOption}/>
      <PHSelect label="Year" name="year" options={yearOption}/>
      <PHSelect label="Start Month" name="startMonth" options={MonthOption}/>
      <PHSelect label="End Month" name="endMonth" options={MonthOption}/>
      <Button htmlType="submit">submit</Button>
    </PHForm>
    </Col>
    </Flex>
  )
}
