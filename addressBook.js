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


