// Qs. You are creating a website for your college. Create a class 
// User with 2 properties, name &
//  email. It also has a method called viewData( ) that allows user to view website data.

class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }   
    viewData() {
        console.log(`Name: ${this.name}, Email: ${this.email}`);
    }   
}

// Example usage:
const user1 = new User("Shayu", "shayu21@gmail.com");
user1.viewData(); // Output: Name: Shayu, Email: shayu21@gmail.com

const user2 = new User("Vikram", "vikram26@gmail.com");
user2.viewData(); // Output: Name: Vikram, Email: vikram26@gmail.com

// Qs. Create a new class called Admin which inherits from editData to Admin 
// that allows it to edit website data. User. Add a new method called
//  Apna College

class Admin extends User {
    constructor(name, email) {
        super(name, email);
    }       
    editData(newName, newEmail) {
        this.name = newName;
        this.email = newEmail;
        console.log(`Data updated to - Name: ${this.name}, Email: ${this.email}`);
    }   
}

// Example usage:
const admin1 = new Admin("AdminUser", "adminuser@gmail.com");
admin1.viewData(); // Output: Name: AdminUser, Email: adminuser@gmail.com
