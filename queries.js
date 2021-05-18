const House = require("./models").house 
const Student = require("./models").student

async function getStudentWithHouse(){
  const students = await Student.findAll({include: House})
  return students.map(data => data.get({plain: true}))
}

// getStudentWithHouse().then(data => console.log(data))

async function getHousesWithStudents(){
  const houses = await House.findAll({include: [Student]})
  return houses.map(data => data.get({plain: true}))
  //to get the first element of the array and see all the data
  // const myHouse = houses.map(data => data.toJSON())
  // return myHouse[0]
}

getHousesWithStudents().then(data => console.log(data))