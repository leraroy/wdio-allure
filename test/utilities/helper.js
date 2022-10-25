export const scrollAndClick=async (selector)=>{
    await $(selector).scrollIntoView();
    await $(selector).click();
}

export const moveToElmentAndWait=async(locator, lastElement)=>{
    locator.moveTo();
    await lastElement.waitForDisplayed();    
}

export const scrollAndSetValue=async (selector, data)=>{
    await $(selector).scrollIntoView();
    await $(selector).setValue(data);
}

export const getTextElements=(locator)=>{
    return locator.map((el)=> el.getText());
}
