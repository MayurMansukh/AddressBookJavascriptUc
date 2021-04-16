const regex_for_name = new RegExp('[A-Z]{1}[a-z]{3,}');
const regex_for_address = new RegExp('[A-Z]{1}[a-z]');
const regex_for_zip = new RegExp('^[1-9]{1}[0-9]{2}[\\s]?[0-9]{3}$');
const regex_for_phoneNumber = new RegExp(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im);
const regex_for_email = new RegExp('^[A-Za-z0-9_-]+(\\.[A-Za-z0-9_-])*@[A-Za-z0-9-]+(?:\\.[A-Za-z0-9-]+)*$');
const usrInput = require("readline-sync");

class AddressBook {
    constructor(...params) {
        this.firstName = params[0];
        this.lastName = params[1];
        this.address = params[2];
        this.city = params[3];
        this.state = params[4];
        this.zip = params[5];
        this.phoneNumber = params[6];
        this.email = params[7];
    }

    get getfirstName() {
        return this.firstName;
    }

    set setfirstName(firstName) {
        if (regex_for_name.test(firstName)) {
            this.firstName = firstName;
        }
        else {
            throw "Invalid First Name";
        }
    }

    get getlastName() {
        return this.lastName;
    }

    set setlastName(lastName) {
        if (regex_for_name.test(lastName)) {
            this.lastName = lastName;
        }
        else {
            throw "Invalid Last Name";
        }
    }

    get getaddress() {
        return this.address;
    }

    set setaddress(address) {
        if (regex_for_address.test(address)) {
            this.address = address;
        }
        else {
            throw "Invalid Address";
        }
    }

    get getcity() {
        return this.city;
    }

    set setcity(city) {
        if (regex_for_address.test(city)) {
            this.city = city;
        }
        else {
            throw "Invalid City";
        }
    }

    get getstate() {
        return this.state;
    }

    set setstate(state) {
        if (regex_for_address.test(state)) {
            this.state = state;
        }
        else {
            throw "State is Incorrect";
        }
    }

    get getzip() {
        return this.zip;
    }

    set setzip(zip) {
        if (regex_for_zip.test(zip)) {
            this.zip = zip;
        }
        else {
            throw "Invalid Zip";
        }
    }

    get getphoneNumber() {
        return this.phoneNumber;
    }

    set setphoneNumber(phoneNumber) {
        if (regex_for_phoneNumber.test(phoneNumber)) {
            this.phoneNumber = phoneNumber;
        }
        else {
            throw "Phone Number is Incorrect";
        }
    }

    get getemail() {
        return this.email;
    }

    set setemail(email) {
        if (regex_for_email.test(email)) {
            this.email = email;
        }
        else {
            throw "Invalid Email";
        }
    }


    toString() {
        return "FirstName = " + this.firstName +
            " \nLastName = " + this.lastName +
            " \nAddress = " + this.address +
            " \nCity = " + this.city +
            " \nState = " + this.state +
            " \nZip = " + this.zip +
            " \nPhoneNumber = " + this.phoneNumber +
            " \nEmail = " + this.email;
    }

}

let addressBook = [];

let contact1 = new AddressBook("Mayur", "Masnukh", "Ghtkoper", "Mumbai", "Maharashtra", 890990, 9000909090, "mansukh@gmail.com");
let contact2 = new AddressBook("Rahul", "Royal", "Ghtkoper", "Navimumbai", "Maharashtra", 889090, 9899909090, "rahul@gmail.com");
let contact3 = new AddressBook("Rahul", "Royal", "Ghtkoper", "Navimumbai", "Maharashtra", 889090, 9899909090, "rahul@gmail.com");

addressBook.push(contact1);
addressBook.push(contact2);
addressBook.push(contact3);

function addContact() {
    let contact = new AddressBook("Rahul", "Royal", "Ghtkoper", "Navimumbai", "Maharashtra", 889090, 9899909090, "rahul@gmail.com");
    let contact_check = addressBook.map(name => name.getfirstName === contact.getfirstName);
    if (contact_check.includes(true)) {
        console.log("Contact already exists in AddressBook");
    }
    else {
        addressBook.push(contact);
    }
    console.log(addressBook);
}

function editContact() {
    if (addressBook.find(name => name.firstName == "Rahul")) {
        let id = addressBook.findIndex(name => name.firstName == "Rahul");
        addressBook[id].setfirstName = "Mayur";
        console.log("Contacts after Editing are : ");
        console.log(addressBook);
    }
    else {
        console.log("This Contact is not available in the AddressBook");
    }
}

function deleteContact() {
    if (addressBook.find(name => name.firstName == 'Mayur')) {
        let id = addressBook.findIndex(name => name.firstName == 'Rahul');
        addressBook.splice(id, 1)
        console.log("After deletion contacts available are : ");
        console.log(addressBook);
        console.log("Size after deletion is : " + count());
    }
}

function count() {
    let contact_count = addressBook.map(ele => typeof ele.getfirstName === 'string');
    let size = contact_count.reduce((previous, current) => previous + current);
    console.log(size)
}

function searchByCity() {
    console.log("view contact by city: \n" + addressBook.filter(element => element.city == 'Mumbai'));
}

function searchByState() {
    console.log("view contact by state: \n" + addressBook.filter(element => element.state == 'Maharashtra'));
}

function countByCity() {
    let city = addressBook.map(eval => eval.city === 'Mumbai');
    let searchContactByCity = city.reduce((a, b) => a + b);
    console.log("contact by city are: " + searchContactByCity);
}

function countByState() {
    let state = addressBook.map(eval => eval.state === 'Maharashtra');
    let searchContactByState = state.reduce((a, b) => a + b);
    console.log("contact by state are: " + searchContactByState);

}

function sort() {
    console.log("After Sorting")
    console.log(addressBook.sort());
}


function addressBookSystem() {
    let choice;
    choice = parseInt(usrInput.question(`enter  \n1. add contact \n2. print contact \n3. edit contact\n4. delete contact \n5. total contacts \n6. search by city \n7. search by state \n8. count by city \n9. count by state\n10. sort contact `));
    switch (choice) {
        case 1:
            addContact();
            break;
        case 2:
            console.log(addressBook);
            break;
        case 3:
            editContact();
            break;
        case 4:
            deleteContact();
            break;
        case 5:
            count();
            break;
        case 6:
            searchByCity()
            break;
        case 7:
            countByCity();
            break;
        case 8:
            countByState();
            break;
        case 9:
            searchByState();
            break;
        case 10:
            sort();
            break;
        default:
            console.log("Wrong Choice...!!");
            addressBookSystem();
    }

}
addressBookSystem();
