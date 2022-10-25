import accountData from "../helper/account.data";
import RegisterPage from "../pages/register.page";
import resources from "../resources";

describe('Register Page', () => {
    beforeEach(() => {
        RegisterPage.open();
    });

    it('should registration with empty credentials', async () => {       
        await RegisterPage.clickSubmit();
        expect(await RegisterPage.getTextError()).toHaveLength(2);
    });

    it('should registration with incorrect email credentials', async () => {
        await RegisterPage.register(accountData.existEmail, accountData.password);
        const text=await RegisterPage.getTextError();
        expect(await text[0]).toHaveTextContaining(resources.errorMessageSignUp);
    });

    it('should registration with correct credentials', async () => {
        await RegisterPage.register(accountData.randomEmail, accountData.password);
        expect(await RegisterPage.getTextHeader()).toContain(resources.succesMessageSignUp);
    });

});