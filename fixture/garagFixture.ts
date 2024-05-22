import { test as base } from '@playwright/test'
import { GaragePage } from '../page-obgect/pages/garagePage'


export const test = base.extend({
    
    garagPage: async ({ page }, use) => {        
        let garagePage = new GaragePage(page)
        await use(garagePage)
    },
  })