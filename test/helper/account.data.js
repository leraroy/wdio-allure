import { faker } from '@faker-js/faker';

class AccountData{

     randomEmail;
     existEmail;
     firstName;
     password;

    constructor(){
        this.firstName=faker.name.firstName();
        this.lastName=faker.name.lastName();
        this.randomEmail=faker.internet.email(this.firstName, '', 'gmail.com');
        this.existEmail='test.victoria.vivi@gmail.com';
        this.password=faker.internet.password(12,false, /[a-zA-Z]/, '1_');
        this.phone=faker.phone.number('#########');
        
    }
}
export default new AccountData();