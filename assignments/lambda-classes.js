// CODE here for your Lambda Classes
class Person {
  constructor(attr) {
    this.name = attr.name;
    this.location = attr.location;
    this.age = attr.age;
  }
  speak() {
    return `Hello my name is ${this.name}, I am from ${this.location}`
  }
}

class Instructors extends Person {
  constructor(attr) {
    super(attr);
    this.specialty = attr.specialty;
    this.catchPhrase = attr.catchPhrase;
    this.favLanguage = attr.favLanguage;
  }
  demo(subject) {
    return `Today we are learning about ${subject}.`
  }
  grade(student, subject) {
    return `${student.name} receives a perfect score on ${subject}`
  }
  changeGrade(student) {
    student.grade += Math.floor(Math.random() * 100) -49;
  }
}

class Students extends Person {
  constructor(attr) {
    super(attr);
    this.className = attr.className;
    this.previousBackground = attr.previousBackground;
    this.favSubjects = attr.favSubjects;
    this.grade = Math.floor(Math.random() * 100) +1;
  }
  listsSubjects() {
    for (let subject in this.favSubjects) {
      return(`I love ${this.favSubjects[subject]}`);
    }
  }
  PRAssignment(subject) {
    return `${this.name} has submitted a PR for ${subject}`;
  }
  sprintChallenge(subject) {
    return `${this.name} has begun sprint challenge on ${subject}`;
  }
  graduate() {
    if (this.grade >= 70) {
      return `Congratulations! ${this.name} you have graduated lambda school!`;
    } 
    return `keep studying to get your score up for graduation!`;
  }
}

class ProjectManagers extends Instructors{
  constructor(attr) {
    super(attr);
    this.gradClassName = attr.gradClassName;
    this.favInstructor = attr.favInstructor;
  }
  standUp(channel) {
    return `${this.name} announces to ${channel}, @channel standy times!`;
  }
  debugsCode(student, subject) {
    return `${this.name} debugs ${student.name}'s code on ${subject}`
  } 
}

const Andrew = new Students({
  name: 'Andrew',
  location: 'USA',
  age: 29,
  className: 'Web24',
  previousBackground: 'Labor',
  favSubjects: ['JavaScript']
})


const Kevin = new Students({
  name: 'Kevin',
  location: 'USA',
  age: 26,
  className: 'Web24',
  previousBackground: 'Musician',
  favSubjects: ['Music']
})


const Josh = new Students({
  name: 'Josh',
  location: 'USA',
  age: 36,
  className: 'Web22',
  previousBackground: 'Sales',
  favSubjects: ['Sports']
})


const Britt = new Instructors({
  name: 'Britt',
  location: 'USA',
  age: 34,
  specialty: 'Frontend',
  catchPhrase: 'Welcome to Web24!',
  favLanguage: 'JavaScript'
})


const Don = new Instructors({
  name: 'Don',
  location: 'USA',
  age: 35,
  specialty: 'React',
  catchPhrase: 'Recording! LOL',
  favLanguage: 'JavaScripts framework React Duh'
})


const James = new Instructors({
  name: 'James',
  location: 'USA',
  age: 32,
  specialty: 'Code',
  catchPhrase: 'LinkExcite Emote',
  favLanguage: 'JavaScript?'
})

const Larry = new ProjectManagers({
  name: 'Larry',
  location: 'USA',
  age: 35,
  specialty: 'Code',
  catchPhrase: 'Larry here ready to help you learn!',
  favLanguage: 'All of em im a wizard!',
  gradClassName: 'Web1',
  favInstructor: 'Britt'
})

const Alan = new ProjectManagers({
  name: 'Alan',
  location: 'USA',
  age: 43,
  specialty: 'Backend',
  catchPhrase: "You're a wizard Larry!",
  favLanguage: 'Whatever language Larry tells me to!',
  gradClassName: 'Web2',
  favInstructor: 'Larry',
})

const Jon = new ProjectManagers({
  name: 'Jon',
  location: 'USA',
  age: 41,
  specialty: 'Full Stack',
  catchPhrase: 'Im the best wizard now!!',
  favLanguage: 'C++, C#, I like my C',
  gradClassName: 'Web0',
  favInstructor: 'Me'
})

console.log(Andrew.speak());
console.log(Kevin.listsSubjects());
console.log(Josh.PRAssignment('CSS'));
console.log(Andrew.sprintChallenge('JavaScript'));
console.log(Josh.graduate());
console.log(Britt.speak());
console.log(Don.demo(`JavaScript IV`));
console.log(James.grade(Andrew, 'Web24'));
console.log(Andrew.grade);
Don.changeGrade(Andrew)
console.log(Andrew.grade); //changes!
console.log(Andrew.grade); //doesnt change!
console.log(Larry.standUp('web24_utsey'));
console.log(Alan.debugsCode(Kevin, 'JavaScript'));
console.log(Jon.debugsCode(Andrew, 'Web24'));