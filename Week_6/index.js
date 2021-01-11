 function employee (name, jobTitle, salary, status = "Full Time"){
    this.name = name; 
    this.jobTitle = jobTitle; 
    this.salary = salary; 
    this.status = status; 

    this.printEmployeeForm = function (){
        console.log (`Name: ${this.name}`);
        console.log(`Job Title: ${this.jobTitle}`);
        console.log(`Salary: ${this.salary}`);
        console.log(`Status: ${this.status}`);
        console.log("--------------");
    }
};

var employee1= new employee ("John", "Manager", "60K","Full Time" );
employee1.printEmployeeForm(); 

var employee2= new employee("Jake", "Clerk", "25K", );
employee2.printEmployeeForm();

var employee3= new employee ("Jill", "Clerk", "18K", "Part Time");
employee3.printEmployeeForm();