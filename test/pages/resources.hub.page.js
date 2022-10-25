import { getTextElements, scrollAndSetValue } from "../utilities/helper";
import Page from "./page";

const filtersProduct = '#filter-by-product+ul button';
const filtersContent = '#filter-by-content+ul button';
const headerArticle='a header>span>span'
const titleArticle = 'a h2';
const emailField='#Email';
const subscribe ='[type="submit"]';
const alertError='form+[role=alert]';
const tryForFree='main [href*="sign-up"]';
const talkToExpertLink='main [title*="Contact"]';
const ebook='main span+div>a';

class ResourcesHubPage extends Page {

    open() {
        super.open('/resources')
    }
    get filtersByProduct() { 
        let element=$$(filtersProduct);
        element.splice(2, 1);
        return element;
    }

    get filtersByContent() {
        return $$(filtersContent);
    }

    get getTextHeaderArticle(){
        return $$(headerArticle, elements => elements.map(el => el.getText()));
    }

    get titleArticle() {
        return $$(titleArticle)[0].getText();
    }

    async clickEbook(){
        await $(ebook).click();
    }

    get getValueEmail(){
        return $(emailField).getValue();
    }

    get getTextAlertErorr(){
        return $(alertError).getText();
    }

    async clickTryForfree(){
        await $(tryForFree).click();
    }

    async clickTalkToExpertLink(){
        await $(talkToExpertLink).click();
    }

    async subscribe(email){
        await scrollAndSetValue(emailField, email);
        await $(subscribe).click();
    }
}
export default new ResourcesHubPage();