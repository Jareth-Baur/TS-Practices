type studentID = number | string;

enum gradeLevel {
    freshman = "freshman",
    sophomore = "sophomore",
    junior = "junior",
    senior = "senior"
}

interface course {
    courseCode: string;
    courseName: string;
    credits: number;
}

type address = {
    street: string;
    city: string;
    zip: number;
}

type student = {
    studentID: studentID;
    name: string;
    age: number;
    scores: number[];
    address: address;
    gradeLevel: gradeLevel;
}

function createStudent(studentID: studentID, name: string, age: number, scores: number[], address: address, gradeLevel: gradeLevel): student {
    return {
        studentID,
        name,
        age,
        scores,
        address,
        gradeLevel
    }
}

function calculateAverage(scores: number[]): number {
    let sum = 0;
    for (let i = 0; i < scores.length; i++) {
        sum += scores[i];
    }
    return sum / scores.length;
}

function displayStudentDetails(student: student): void {
    console.log(`Student ID: ${student.studentID}`);
    console.log(`Name: ${student.name}`);
    console.log(`Age: ${student.age}`);
    console.log(`Scores: ${student.scores}`);
    console.log(`Address: ${student.address.street}, ${student.address.city}, ${student.address.zip}`);
    console.log(`Grade Level: ${student.gradeLevel}`);
}

function createCourse(courseCode: string, courseName: string, credits: number): course {
    return {
        courseCode,
        courseName,
        credits
    }
}

function displayCourseDetails(course: course): void {
    console.log(`Course Code: ${course.courseCode}`);
    console.log(`Course Name: ${course.courseName}`);
    console.log(`Credits: ${course.credits}`);
}

const students: student[] = [];

students.push(createStudent(1, "Jareth", 21, [80, 90, 85], { street: "123 Main St", city: "San Vicente", zip: 12345 }, gradeLevel.sophomore));
students.push(createStudent(1, "Nikko", 22, [80, 90, 85], { street: "123 Main St", city: "Daplin sa Kalsada", zip: 54321 }, gradeLevel.senior));

const courses: course[] = [];

courses.push(createCourse("CS101", "Introduction to Computer Science", 3));
courses.push(createCourse("CS102", "Data Structures and Algorithms", 3));

for (let i = 0; i < students.length; i++) {
    displayStudentDetails(students[i]);
    console.log(`Average Score: ${calculateAverage(students[i].scores)}`);
    console.log("----------------------------");
}

console.log("Courses:");
for (let i = 0; i < courses.length; i++) {
    displayCourseDetails(courses[i]);
    console.log("----------------------------");
}