import Page from "./page";

const talkToExpert='li [href="/contact-us"]';
const listButtonHeader='header>div li>span>span, span>a';
const listBtnProducts='header div a[href^="/products/"] span, header [href^="/number"] span';
const listBtnPricing='header div a[href^="/pricing/"] span';
const emailInput='[name="email"]';
const tryForFree='[type="submit"]';
const signUp='header li>div [href="/sign-up"]';
const socialLinks='[data-e2e*="social"] a'

class MainPage extends Page{
    
    open(){
        super.open('/');
    }

    get links (){
        return $$(socialLinks);
    }

    get productsList(){
        return $$(listBtnProducts);
    }

    get pricingList(){
        return $$(listBtnPricing);
    }
    get listHeader(){
        return $$(listButtonHeader);
    }

    async clickAcceptAndClose() {
        await $(acceptandClose).click();
    }

    async clickTalkToExpert() {
        await $(talkToExpert).click();
    }

    async clickSignUp() {
        await $(signUp).click();        
    }

    async enterEmail(email) {
        await $(emailInput).setValue(email);
    }

    async clickTryForFree() {
        await $(tryForFree).click();
    }
}
export default new MainPage();