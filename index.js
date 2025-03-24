
const userName = process.argv[2];
const userAge = parseInt(process.argv[3]);
const isStudent = process.argv[4] === 'true';
let toggleValue = false;
function toggleBoolean() {
    toggleValue = !toggleValue;
    console.log(`Toggled value: ${toggleValue}`);
  }


function createMessage(name, age, student) {
  let message = `Hello, my name is ${name}`;
  if (student) {
    message += ' and I am a student.';
  }
  if (process.argv[2] === 'toggle') {
    toggleBoolean();
    return;
  }
  if (age <= 10) {
    let i=0;
    while(i<age){
        console.log(message);
        i++;
    }
  } else {
    console.log(message);
  }
}

createMessage(userName, userAge, isStudent);







