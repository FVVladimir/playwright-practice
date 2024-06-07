import { test, expect } from "@playwright/test"
import { describe } from "node:test"

import { GaragePage } from "../page-object/pages/garagePage"


describe("garagePage test with saved state", () => {

    test.use({ storageState: "../../userState.json" })

    let garagePage: GaragePage

    test('check the text on garage page', async ({ page }) => {

        garagePage = new GaragePage(page)

        await expect(garagePage.text).toBeVisible()
    })

    test('check the garage link', async ({ garagePage }) => {

        garagePage = new GaragePage(page)
        await expect(garagePage.garageLink).toBeVisible()
    })

    test('check the profile link', async ({ garagePage }) => {

        garagePage = new GaragePage(page)
        await expect(garagePage.profileLink).toBeVisible()
    })
})