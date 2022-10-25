import accountData from "../helper/account.data";
import ResourcesHubPage from "../pages/resources.hub.page";

describe('Blog page', () => {
    beforeEach(() => {
        ResourcesHubPage.open();
    });
    it('should contain the name of the filters by content in the header of the articles', async() => {
       await  ResourcesHubPage.filtersByContent[0].scrollIntoView();
        for (let i = 0; i < await ResourcesHubPage.filtersByContent.length; i++) {
            await ResourcesHubPage.filtersByContent[i].click();
            const text=await ResourcesHubPage.filtersByContent[i].getText();
            await browser.pause(3000);
            await ResourcesHubPage.getTextHeaderArticle.forEach(async element => {
                expect(text).toEqual(await element.getText());
            });
        }
    });

    it('should contain the name of the filters by product in the header of the articles', async() => {
        await  ResourcesHubPage.filtersByProduct[0].scrollIntoView();
         for (let i = 0; i < await ResourcesHubPage.filtersByProduct.length; i++) {
             await ResourcesHubPage.filtersByProduct[i].click();
             const text=await ResourcesHubPage.filtersByProduct[i].getText();
             await browser.pause(2000);
            const title=await ResourcesHubPage.titleArticle;
            expect(title.toLowerCase()).toContain(text.toLowerCase());
         }
    });

    it('should subscribe with empty email', async() => {
        await ResourcesHubPage.subscribe('');
        expect(await ResourcesHubPage.getTextAlertErorr).toContain('Please enter a valid email');
    });

    it('should subscribe with right email', async() => {
        await ResourcesHubPage.subscribe(accountData.randomEmail);
        expect(await ResourcesHubPage.getValueEmail).toEqual(accountData.randomEmail);
    });

    it('should after click on "Talk to an expert" link, switch to page Contact', async() => {
        await ResourcesHubPage.clickTalkToExpertLink();
        expect(await browser).toHaveUrl(/contact-us/);
    });

    it('should after click on "Try for free", contain title Sign Up', async () => {
        await ResourcesHubPage.clickTryForfree()
        await expect(browser).toHaveTitle(/Sign Up/);
    });

    it('should after click on "ebook", contain name book', async() => {
        await ResourcesHubPage.clickEbook();
        expect(await browser).toHaveUrl(/twilio-alternative/);
    });
});