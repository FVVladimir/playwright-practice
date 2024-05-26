import { test as base } from '@playwright/test'
import { GaragePage } from '../page-object/pages/garagePage'


export const test = base.extend({
    
    garagePage: async ({ page }, use) => {        
        
        let garagePage = new GaragePage(page)
          await use(garagePage)
    },
  })