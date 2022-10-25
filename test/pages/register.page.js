import accountData from "../helper/account.data";
import { scrollAndClick} from "../utilities/helper";
import Page from "./page";

const emailField = '#email';
const nameField = '#full_name';
const passwordField = '#password';
const termsAndCondition = '[aria-labelledby*="terms"] rect';
const subscription = 'div[style] svg > rect';
const submit = '[type="submit"]';
const error = '[id*="error"]';
const header = 'main h1'

class SignUpPage extends Page {

    open() {
        super.open('/sign-up');
    }

    getValueEmail() {
        return $(emailField).getValue();
    }

    async getTextError() {
        await browser.pause(7000);
        return await $$(error).map(el => el.getText());
    }

    async getTextHeader(){
        await browser.pause(20000);
        return await $(header).getText();
    }

    async clickSubmit() {
        await scrollAndClick(submit);
    }

    async register(email, password) {
        await $(emailField).setValue(email);
        await $(nameField).setValue(accountData.firstName);
        await $(passwordField).setValue(password);
        await scrollAndClick(termsAndCondition);
        await scrollAndClick(subscription);
        await this.clickSubmit();
    }
}
export default new SignUpPage();