import accountData from '../helper/account.data';
import MainPage from '../pages/main.page';
import RegisterPage from '../pages/register.page';
import resources from '../resources';
import { getTextElements, moveToElmentAndWait } from '../utilities/helper';

describe('Main page', () => {

    beforeEach(() => {
        MainPage.open();
    });

    it('should show email on register page, after enter email on main page', async () => {
        await MainPage.enterEmail(accountData.randomEmail);
        await MainPage.clickTryForFree();
        console.log("Value Email: " + await RegisterPage.getValueEmail());
        await expect(browser).toHaveTitle(/Sign Up/);
        await expect(await RegisterPage.getValueEmail()).toEqual(accountData.randomEmail);
    });

    it('should has buttons on the page header', async () => {
        await browser.pause(3000);
        const text = await getTextElements(MainPage.listHeader);
        console.log("Text list header " + text);
        expect(text).toEqual(resources.textListButton);
    });

    it('should after click on "Sign up", contain title Sign Up', async () => {
        await MainPage.clickSignUp();
        await expect(browser).toHaveTitle(/Sign Up/);
    });

    it('should after click on "Talk to an expert", switch to page Contact', async () => {
        await MainPage.clickTalkToExpert();
        await expect(browser).toHaveUrl(/contact-us/);
    });

    it('should after move to Products, show right links', async () => {
        await moveToElmentAndWait(MainPage.listHeader[0], MainPage.productsList[7]);
        const text = await getTextElements(MainPage.productsList);
        expect(text).toEqual(resources.textListProducts);
    });

    it('should after move to Pricing, show right links', async () => {
        await moveToElmentAndWait(MainPage.listHeader[5], MainPage.pricingList[5]);
        const text = await getTextElements(MainPage.pricingList);
        expect(text).toEqual(resources.textListPricing);
    });

    it('should have the correct title of all product links', async () => {
        let listTitle = [];
        for (let i = 0; i < await MainPage.productsList.length; i++) {
            await moveToElmentAndWait(MainPage.listHeader[0], MainPage.productsList[i]);
            MainPage.productsList[i].click();
            await browser.pause(3000);
            listTitle.push(await browser.getTitle());
            await browser.back();
        }
        expect(listTitle).toEqual(resources.textTitlesProducts);
    });

    it('should contain correct href for social links ', async () => {
        await MainPage.links.map(async (el, i) =>{
          await expect(el).toHaveAttributeContaining('href', resources.socialLinks[i]);  
        });
    });

});