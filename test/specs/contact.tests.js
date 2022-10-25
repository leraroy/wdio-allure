import ContactUsPage from "../pages/contactUs.page";

describe('Contact Us page', () => {
    beforeEach(() => {
        ContactUsPage.open();
    });

    it('Form "contact us" with empty credentials', async() => {
        await ContactUsPage.clickSubmit();
        expect(await ContactUsPage.getTextErrorMessage).toContain('This field is required');
    });
    
    it('Fill out the "contact us" form', async() => {
        await ContactUsPage.fillContactForm();
        await browser.pause(5000);
        await expect(browser).toHaveUrl(/thank-you/);
    });
});