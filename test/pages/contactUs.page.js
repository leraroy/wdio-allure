import accountData from "../helper/account.data";
import { scrollAndClick, scrollAndSetValue } from "../utilities/helper";
import Page from "./page";

const reasonForContact='#Reason_for_Contact__c';
const submit='[type="submit"]';
const selectPhone='select[id*="Phone"]';
const subscription='[name*="Subscription"]';
const successMessage='div>h1';
const errorMessage='form [role="alert"]';

class ContactUsPage extends Page{

    open(){
        super.open('/contact-us')
    }

    async dataInput(input, data){
      await scrollAndSetValue(`input[name*=${input}]`, data)
    }

    get getTextErrorMessage(){
        return $(errorMessage).getText();
    }

    get getTextSuccessMessage(){
        return $(successMessage).getText();
    }

    async clickSubmit(){
        await scrollAndClick(submit);
    }
    
    async selectReasonForContact(){
        for (let i = 0; i < 4; i++) {   
            await $(reasonForContact).selectByIndex(i);
        }
    }

    async selectCountryPhone(){
        for (let i = 0; i < 20; i++) {   
            await $(selectPhone).selectByIndex(i);
        }
    }

    async clickSubscription(){
        await $(subscription).click();
    }

    async fillContactForm(){
        await this.selectReasonForContact();
        await this.dataInput('FirstName', accountData.firstName);
        await this.dataInput('LastName', accountData.lastName);
        await this.dataInput('Email', accountData.randomEmail);
        await this.selectCountryPhone();
        await this.dataInput('Phone', accountData.phone);
        await this.dataInput('Website', 'https://www.amazon.com');
        await this.clickSubscription();
        this.clickSubmit();
    }

}
export default new ContactUsPage();