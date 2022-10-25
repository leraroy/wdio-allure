const acceptandClose='[aria-label*="close"]~div button';

export default class Page{
    open(path){
        browser.url(path);
        $(acceptandClose).click();
    }
    
}
