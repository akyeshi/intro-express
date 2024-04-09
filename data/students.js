const students = [
  { id: 1, username: "akyeshi", favColor: "white" },
  { id: 2, username: "jtashi", favColor: "black" },
  { id: 3, username: "tdechen", favColor: "blue" },
  { id: 4, username: "jamie89", favColor: "yellow" },
  { id: 5, username: "norbue82", favColor: "gold" },
];

module.exports = {
  getStudents: function () {
    return students;
  },
  getOne: function(id){
    id = Number(id); 
    return students.find(student => student.id === id)
  }
};
