const testCase1 = [
  {
    name: "Leo Messi",
    dob: "31-12-1995",
    biology: 95,
    chemistry: 91,
  },
  {
    name: "Cristiano Ronaldo",
    dob: "31-05-1992",
    biology: 90,
    chemistry: 81,
  },
  {
    name: "Virat Kohli",
    dob: "31-12-1995",
    biology: 95,
    chemistry: 96,
  },
  {
    name: "Rohit Sharma",
    dob: "31-12-1995",
    biology: 85,
    chemistry: 86,
  },
  {
    name: "Viswanathan Anand",
    dob: "12-12-1994",
    biology: 99,
    chemistry: 10,
  },
];

const testCase2 = [
  {
    name: "Leo Messi",
    dob: "31-12-1995",
    biology: 100,
    chemistry: 80,
  },
  {
    name: "Cristiano Ronaldo",
    dob: "31-05-1992",
    biology: 80,
    chemistry: 100,
  },
  {
    name: "Virat Kohli",
    dob: "31-12-1995",
    biology: 30,
    chemistry: 40,
  },
  {
    name: "Rohit Sharma",
    dob: "31-12-1995",
    biology: 40,
    chemistry: 30,
  },
  {
    name: "Viswanathan Anand",
    dob: "12-12-1994",
    biology: 99,
    chemistry: 10,
  },
];

function sortStudents(testCase) {
  return testCase.sort((a, b) => {
    const totalA = a.biology + a.chemistry;
    const totalB = b.biology + b.chemistry;

    if (totalA !== totalB) return totalB - totalA;

    if (a.biology !== b.biology) return b.biology - a.biology;

    const [dayA, monthA, yearA] = a.dob.split("-").map(Number);
    const [dayB, monthB, yearB] = b.dob.split("-").map(Number);
    const dateA = new Date(yearA, monthA - 1, dayA);
    const dateB = new Date(yearB, monthB - 1, dayB);

    return dateA - dateB;
  });
}

function displayStudents(testCase) {
  const output = document.getElementById("output");
  output.innerHTML = "";

  sortStudents(testCase).forEach((student) => {
    const studentDiv = document.createElement("div");
    studentDiv.className = "student";
    studentDiv.innerHTML = `
        <strong>Name:</strong> ${student.name} <br>
        <strong>DOB:</strong> ${student.dob} <br>
        <strong>Biology Marks:</strong> ${student.biology} <br>
        <strong>Chemistry Marks:</strong> ${student.chemistry} <br>
        <strong>Total Marks:</strong> ${student.biology + student.chemistry}
      `;
    output.appendChild(studentDiv);
  });
}

displayStudents(testCase1);
displayStudents(testCase2);
