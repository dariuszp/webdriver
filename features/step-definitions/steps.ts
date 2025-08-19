import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals'

import HomePage from '../pageobjects/home.page.ts';

const pages = {
    home: HomePage
}

Given(/^I am on the (\w+) page$/, async (page) => {
    await pages[page].open()
});

Then(/^I should see header saying (.*)$/, async (message) => {
    await expect(HomePage.header).toBeExisting();
    await expect(HomePage.header).toHaveText(message);
});

