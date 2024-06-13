const validator=require("../validations/validator");
const student = require("../Model/Student");

const createStudent= async function(data)
{
 try {
  if(!data) return {code:400,msg:"Please provide the user data",data:{}};
  const {name,age,qualification,mobile,skill}= data;
  if(!name) return {code:400,msg:"Name is Required",data:{}};
  if(!validator.checkString(name)) return {code:400,msg:"Please provide me the correct name",data:{}};
  if(!validator.checkValidString(name)) return {code:400,msg:"Name Contains only the character",data:{}};
  data.name= data.name.trim().split(" ").filter((data)=>data).join(" ");
   if(!age) return {code:400,msg:"age is required",data:{}};
  if(!qualification) return {code:400,msg:"qualification is required.",data:{}};
  if(!validator.checkString(qualification)) return {code:400,msg:"please provide the correct qualification",data:{}};
  if(!validator.checkValidString(qualification)) return {code:400,msg:"qualification can take only the character",data:{}};
  data.qualification= data.qualification.trim().split(" ").filter((data)=>data).join(" ");
 if(!mobile) return {code:400,msg:"mobile number is required",data:{}};
  if(mobile.length>10) return {code:400,msg:"mobile can contain only the 10 digit ",data:{}};
  if(!validator.checkvalidMobileNum(mobile)) return {code:400,msg:"Mobile number contains only the character.",data:{}};
  if(skill){
    if(!validator.checkSkillExits(skill)) return{code:400,msg:"Only you can choose java, javascript, php, python, none.",data:{}};   
  }
  const createdStudent= await student.create(data);
  if(!createdStudent) return {code:400,msg:"Student not inserted..",data:{}};
  const successData= {code:200,msg:"Success",data:createdStudent};
  return successData;
 } catch (error) {
    return error; 
 }
}


const getAllStuent= async function(){
  try {
    const allStudent= await student.find();
    if(allStudent.length==0) return {code:200,msg:"no any student found",data:{}};
    const sendData={code:200,msg:"succuess",data:allStudent};
    return sendData;
  } catch (error) {
    return error;
  }
}

const getSingleStudent = async function(id){
  try {
    if(!id) return {code:400,msg:"Please provide the ID",data:{}};
    if(!validator.isValidId(id)) return {code:400,msg:"Please provide me the valid ID",data:{}};
    const studentData=await student.findById(id);  
    if(!studentData) return {code:400,msg:"The student with the given ID was not found.",data:{}};
    const sendData={code:400,msg:"success",data:studentData}
    return sendData;
  } catch (error) {
    return error;
  }
 
}

const deleteStudent = async function(id)
{
 try {
  if(!id) return {code:400,msg:"Please provide the id",data:{}};
  if(!validator.isValidId(id)) return {code:400,msg:"Please give me the valid Id",data:{}};
  
  const findStudent=await student.findById(id);
   if(findStudent)
    {
      const deletedStudent=await student.deleteOne({_id:id});
       return {code:200,msg:"Success",data:deletedStudent};
    }else{
      return {code:400,msg:"The student with the given ID was not found for Delete",data:{}};
    }
 } catch (error) {
  return error;
 }
   
}

const updateStudent = async function(id,reqData)
{
  try {
     if(!reqData) return {code:400,msg:"Please give the Data",data:{}};
      const{name,age,qualification,mobile,skill}=reqData;
      console.log(name,age,qualification,mobile,skill);
     if(!id) return {code:400,msg:"Please give me the id",data:{}};
     console.log("sjfdgdfsg")
     if(!validator.isValidId(id)) return {code:400, msg:"please give the correct ID",data:{}};
     const stu= await student.findById(id);
     if(!stu) return {code:400,msg:"The student with the given ID was not found for Delete",data:{}};
     console.log("dfgkdjg")
     if(name) {
      if(!validator.checkString(name)) return {code:400,msg:"Please provide me the correct name",data:{}};
      if(!validator.checkValidString(name)) return {code:400,msg:"Name Contains only the character",data:{}};
      stu.name= reqData.name.trim().split(" ").filter((data)=>data).join(" ");
       console.log(stu.name);
     }if(age)
      {
        stu.age=reqData.age
      }
      if(qualification)
        {
          if(!validator.checkString(qualification)) return {code:400,msg:"please provide the correct qualification",data:{}};
          if(!validator.checkValidString(qualification)) return {code:400,msg:"qualification can take only the character",data:{}};
            reqData.qualification= reqData.qualification.trim().split(" ").filter((data)=>data).join(" ");
            stu.qualification=reqData.qualification;
        }
        if(mobile)
          {
            if(mobile.length>10) return {code:400,msg:"mobile can contain only the 10 digit ",data:{}};
            if(!validator.checkvalidMobileNum(mobile)) return {code:400,msg:"Mobile number contains only the character.",data:{}};
            stu.mobile=reqData.mobile;
          }
          if(skill)
            {
             if(!validator.checkSkillExits(skill)) return{code:400,msg:"Only you can choose java, javascript, php, python, none.",data:{}}; 
             stu.skill=reqData.skill;  
            }
          console.log(stu);
          const updatedStudent=await student.updateOne({_id:id},stu);

          return {code:200,msg:"success",data:updatedStudent};
  } catch (error) {
    return error;
  }  
}





module.exports={createStudent,getAllStuent,getSingleStudent,deleteStudent,updateStudent};