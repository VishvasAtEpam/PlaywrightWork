import {FullConfig, test} from '@playwright/test'

async function globalTeardownMethod() {
    console.log("This is global Teardown method which will run after all Tests....");
}

export default globalTeardownMethod;
    