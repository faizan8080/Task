function processPersonAndWorker(person, worker) {
    console.log("Name: ".concat(person.name));
    console.log("Age: ".concat(person.age));
    console.log("Job Title: ".concat(worker.jobTitle));
    console.log("Company: ".concat(worker.company));
}
var faiz = { name: 'faiz', age: 21 };
var faizTheWorker = { jobTitle: 'Back-end Developer', company: 'Syenectiks' };
processPersonAndWorker(faiz, faizTheWorker);
