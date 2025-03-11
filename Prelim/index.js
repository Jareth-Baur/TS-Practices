var gradeLevel;
(function (gradeLevel) {
    gradeLevel[gradeLevel["freshman"] = 0] = "freshman";
    gradeLevel[gradeLevel["sophomore"] = 1] = "sophomore";
    gradeLevel[gradeLevel["junior"] = 2] = "junior";
    gradeLevel[gradeLevel["senior"] = 3] = "senior";
})(gradeLevel || (gradeLevel = {}));
function createStudent(studentID, name, age, scores, address, gradeLevel) {
    return {
        studentID: studentID,
        name: name,
        age: age,
        scores: scores,
        address: address,
        gradeLevel: gradeLevel
    };
}
function calculateAverage(scores) {
    var sum = 0;
    for (var i = 0; i < scores.length; i++) {
        sum += scores[i];
    }
    return sum / scores.length;
}
function displayStudentDetails(student) {
    console.log("Student ID: ".concat(student.studentID));
    console.log("Name: ".concat(student.name));
    console.log("Age: ".concat(student.age));
    console.log("Scores: ".concat(student.scores));
    console.log("Address: ".concat(student.address.street, ", ").concat(student.address.city, ", ").concat(student.address.zip));
    console.log("Grade Level: ".concat(student.gradeLevel));
}
function createCourse(courseCode, courseName, credits) {
    return {
        courseCode: courseCode,
        courseName: courseName,
        credits: credits
    };
}
function displayCourseDetails(course) {
    console.log("Course Code: ".concat(course.courseCode));
    console.log("Course Name: ".concat(course.courseName));
    console.log("Credits: ".concat(course.credits));
}
var students = [];
students.push(createStudent(1, "Jareth", 21, [80, 90, 85], { street: "123 Main St", city: "San Vicente", zip: 12345 }, gradeLevel.sophomore));
students.push(createStudent(1, "Nikko", 22, [80, 90, 85], { street: "123 Main St", city: "Daplin sa Kalsada", zip: 54321 }, gradeLevel.senior));
var courses = [];
courses.push(createCourse("CS101", "Introduction to Computer Science", 3));
courses.push(createCourse("CS102", "Data Structures and Algorithms", 3));
for (var i = 0; i < students.length; i++) {
    displayStudentDetails(students[i]);
    console.log("Average Score: ".concat(calculateAverage(students[i].scores)));
    console.log("Courses:");
    console.log("----------------------------");
}
for (var i = 0; i < courses.length; i++) {
    displayCourseDetails(courses[i]);
    console.log("----------------------------");
}
