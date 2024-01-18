     
     function processPersonAndWorker(person, worker) {
        
     console.log(`Name: ${person.name}`);

    console.log(`Age: ${person.age}`);

    console.log(`Job Title: ${worker.jobTitle}`);


    console.log(`Company: ${worker.company}`);
  }
  
  
  const faiz = { name: 'faiz', age: 21 };

  const faizTheWorker = { jobTitle: 'Back-end Developer', company: 'Syenectiks' };
  
  
  
  processPersonAndWorker(faiz, faizTheWorker);
  