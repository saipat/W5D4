//Student Constructor
function Student(fName, lName){
  this.fName = fName;
  this.lName = lName;
  this.courses = [];
}

Student.porototype.name = function() {
  return `${this.fName} ${this.lName}`;
};

Student.porototype.enroll = function(course){
  if !(this.courses.includes(course)){
    this.courses.push(course);
    course.addStudent(this);
  }
};

Student.prototype.courseLoad = function(){

};

Student.prototype.hasConflict = function(){

};

//Course constructor
function Course(name, department, numberOfCredits, timeBlock, days){
  this.name = name;
  this.department = department;
  this.numberOfCredits = numberOfCredits;
  this.students = [];
  this.timeBlock = timeBlock;
  this.days = days;
}

Course.prototype.addStudent = function(student){
  if (this.students.includes(student)){
    this.students.push(student);
    student.enroll(this);
  }
};

Course.prototype.conflictsWith = function(secondCourse) {
  if (this.timeBlock !== secondCourse.timeBlock) {
    return false;
  }
}
