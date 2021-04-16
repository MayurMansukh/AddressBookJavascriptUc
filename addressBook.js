class AddressBook {
    firstname;
    lastname;
    address;
    city;
    state;
    zip;
    phone_number;
    email;

    constructor(...params) {
        this.firstname = params[0];
        this.lastname = params[1];
        this.address = params[2];
        this.city = params[3];
        this.state = params[4];
        this.zip = params[5];
        this.phone_number = params[6];
        this.email = params[7];
    }
    //Uc2 validate contact details
    constructor(...params) {

        let regexname = new RegExp('[A-Z]{1}[a-z]{3,}');
        if (regexname.test(params[0]) && regexname.test(params[1])) {
            this.firstname = params[0];
            this.lastname = params[1];
        } else { throw "Incorrect name"; }


        let regexaddress = new RegExp('[A-Z]{1}[a-z]{4,}');
        if (regexaddress.test(params[2]) && regexaddress.test(params[3]) && regexaddress.test(params[4])) {
            this.address = params[2];
            this.city = params[3];
            this.state = params[4];
        } else { throw "Incorrect Address or City or State"; }


        let regexpincode = RegExp('^[1-9]{1}[0-9]{2}[\\s]?[0-9]{3}$');
        if (regexpincode.test(params[5])) {
            this.zip = params[5];
        } else { throw "Incorrect Pincode"; }


        let regexphone = RegExp(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im);
        if (regexphone.test(params[6])) {
            this.phone_number = params[6];
        } else { throw "Incorrect PhoneNumber"; }


        let emailregex = RegExp('^[A-Za-z0-9_-]+(\\.[A-Za-z0-9_-])*@[A-Za-z0-9-]+(?:\\.[A-Za-z0-9-]+)*$');
        if (emailregex.test(params[7])) {
            this.email = params[7];
        } else { throw "Incorrect Email Id"; }
    }


    toString() {
        return "FirstName= " + this.firstname + " \nLastName= " + this.lastname + " \nAddress= " + this.address + " \nCity= "
            + this.city + " \nState= " + this.zip + " \nZip= " + this.zip + " \nPhoneNumber= " + this.phone_number + " \nEmail= " + this.email;
    }

// Uc1 add contact in addressBook
let addressbook = new AddressBook("mayur", "masnukh", "ghtkoper", "mumbai", "Maharashtra", 89090, 90909090, "mansukh@gmail.com");
console.log(addressbook.toString());

try {
    let addressbook = new AddressBook("mayur", "masnukh", "ghtkoper", "mumbai", "Maharashtra", 89090, 90909090, "mansukh@gmail.com");
    console.log(addressbook.toString());
} catch (e) {
    console.error(e);
}

//Uc3 add new addressBook with Contact
let addressBook = [];
try {
    let contact1 = new AddressBook("Mayur", "Masnukh", "Ghtkoper", "Mumbai", "Maharashtra", 890990, 9000909090, "mansukh@gmail.com");
    let contact2 = new AddressBook("Rahul", "Royal", "Ghtkoper", "Navimumbai", "Maharashtra", 889090, 9899909090, "rahul@gmail.com");

    addressBook.push(contact1);
    addressBook.push(contact2);
//Uc4 edit contact by name
if (addressBook.find(name => name.firstname == 'Mayur')) {
    addressBook.find(name => name.setfirstname = 'Robert');
} else { console.log("This Name Contact not in addressBook"); }

//Uc5 delete contact by name
console.log("Before delete lenth: " + addressBook.length);

if (addressBook.find(name => name.firstname == 'Mayur')) {
    addressBook.splice(1, 1);

}
console.log("after delete lenth: " + addressBook.length);

 //Uc6 count contacts in addressBook

 console.log(addressBook.length + " contact are in addressBook :")

 //Uc7 not allow dublicate contact in addressBook
let arr = addressBook.map(eval => eval.getfirstname === contact2.getfirstname);
console.log(arr);

if (arr.includes(true)) {
    console.log("dublicate contact not allowed ");
} else { addressBook.push(contact3); }

}
// Uc8 search contact by City or State

let city = addressBook.map(eval => eval.city === 'Mumbai');
let searchContactByCity = city.reduce((a, b) => a + b);
console.log("contact by city are: " + searchContactByCity);

let state = addressBook.map(eval => eval.state === 'Maharashtra');
let searchContactByState = state.reduce((a, b) => a + b);
console.log("contact by state are: " + searchContactByState);

//Uc9 view contacts by state or city
console.log("view contact by city: \n" + addressBook.filter(element => element.city == 'Mumbai'));
console.log()
console.log("view contact by state: \n" + addressBook.filter(element => element.state == 'Maharashtra'));


