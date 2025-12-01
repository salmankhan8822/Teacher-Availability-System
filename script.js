let checkClass = document.getElementById("btn");
let classList = document.getElementById("classList");
let checking = document.getElementById("wait");

let classes = [
  { name: "Programming", isVisible: true, teacherName: "Asif Ali" },
  { name: "Maths", isVisible: false, teacherName: "Muneeba" },
  { name: "English", isVisible: true, teacherName: "Miss Sadaf" },
  { name: "Physics", isVisible: false, teacherName: "Anwar Ali" },
  { name: "Management", isVisible: true, teacherName: "Imtiaz Sahib" },
  { name: "ICT", isVisible: false, teacherName: "Hashim Ali" },
];

let currntIndex = 0;
let isVisible = false;

checkClass.addEventListener("click", () => {
  if (checkClass.textContent === "restart") {
    currntIndex = 0;
    classList.innerHTML = "";
    checking.style.display = "none";
    checkClass.textContent = "Check class";
    document.body.style.backgroundColor = "white";
    return;
  }

  checking.style.display = "block";
  checking.textContent = "CR is checking the class...";
  checkClass.textContent = "Please wait...";
  isVisible = true;

  setTimeout(() => {
    checking.style.display = "none";
    showClass();
  }, 1000);
});

function showClass() {
  if (currntIndex >= classes.length) {
    checkClass.textContent = "restart";
    return;
  }

  let cls = classes[currntIndex];
  let li = document.createElement("li");
  li.classList.add("hidden");

  let heading = document.createElement("h4");
  heading.textContent = "📘 Subject Details";

  let subject = document.createElement("h3");
  subject.textContent = `Subject Name: ${cls.name}`;

  let teacher = document.createElement("p");
  teacher.textContent = `Teacher Name: ${cls.teacherName}`;

  let status = document.createElement("p");
  status.textContent = "Teacher is available";
  if (cls.isVisible) {
    status.style.color = "green";
    document.body.style.backgroundColor = "green";
  } else {
    status.style.color = "red";
    status.textContent = "Teacher is not available";
    document.body.style.backgroundColor = "red";
  }

  li.appendChild(heading);
  li.appendChild(subject);
  li.appendChild(teacher);
  li.appendChild(status);

  classList.appendChild(li);
  setTimeout(() => {
    li.classList.add("slide-in");
  }, 300);

  currntIndex++;

  if (currntIndex < classes.length) {
    checkClass.textContent = "Next class";
  } else {
    checkClass.textContent = "restart";
  }
}
