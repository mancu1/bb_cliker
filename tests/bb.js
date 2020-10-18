var userName = process.env.USER_NAME||"***";
var userPass = process.env.USER_PASSWORD||"***";

module.exports = {
    '1. Click bb login' : function(browser) {
        browser
            .url('https://bb.kai.ru:8443/')
            .waitForElementVisible('body')
            .waitForElementVisible("div[id=content]")
            .click("button[id=agree_button]")
            .assert.visible('input[id=user_id]')
            .setValue('input[id=user_id]', userName)
            .assert.visible('input[id=password]')
            .setValue('input[id=password]', userPass)
            .assert.visible('input[id=entry-login]')
            // .submitForm("form[name=login]")
            .click('input[id=entry-login]')
            .waitForElementVisible("span[class=moduleTitle]")
            // .pause(10000)
    },
    '2. get curses' : async function (browser) {
        await browser.click("button[id=global-nav-link]")
        await browser.waitForElementVisible('div[id=flyoutMenuContent]')
        await browser.click("a[id=AlertsOnMyBb_____AlertsTool]");
        await browser.waitForElementVisible("#containerdiv");
        await browser.frame("mybbCanvas");
        await browser.waitForElementVisible("#stream_alerts");
        await browser.waitForElementVisible("#openSettings_alerts");
        await browser.click("#openSettings_alerts");
        await browser.waitForElementVisible("input[id=selectAllSettings_alerts]")
        await browser.click("input[id=selectAllSettings_alerts]")
        await browser.click("input[id=selectAllSettings_alerts]")
        await browser.waitForElementVisible("input[id=bb-nautilus_CO\\:CO_AVAIL]")
        await browser.click("input[id=bb-nautilus_CO\\:CO_AVAIL]")
        await browser.click("a[id=updateSettings_alerts]")
        const elements = await browser.elements('css selector','#left_stream_alerts > div > .stream_context > .inlineContextMenu > a[title="Открыть"]');

        // console.log(JSON.stringify(elements.value))

         const elementsSize = elements.value.length;
         for (let ind = 0; ind< elementsSize; ind++) {
             console.log("start")
             await browser.pause(450);
             await browser.waitForElementVisible("#containerdiv");
             await browser.waitForElementVisible("#left_stream_alerts");
             const tempElements = await browser.elements('css selector','#left_stream_alerts > div > .stream_context > .inlineContextMenu > a[title="Открыть"]');
             console.log("count - "+ ind)
             var elementID = tempElements.value[ind].ELEMENT;
             await browser.moveTo(elementID, 0, 0);
             console.log("elementID - "+ elementID)
             await browser.pause(500);
             const text = (await browser.elementIdText(elementID));
             if (!text.value) continue;
             await browser.elementIdClick(elementID)
             await browser.pause(450);
             await browser.waitForElementVisible("a[class=individualContent-link]");
             await browser.click("a[class=individualContent-link]");
             console.log("bef back")
             await browser.pause(450);
             await                 browser.back();
             const normalUrl = "https://bb.kai.ru:8443/webapps/bb-social-learning-BBLEARN/execute/mybb?cmd=display&toolId=AlertsOnMyBb_____AlertsTool";
             let url = (await browser.url()).value;
             await browser.pause(450);
             if (url !== normalUrl) {
                 await browser.back()
                 console.log(url, normalUrl, url === normalUrl)
                 url = (await browser.url()).value;
                 console.log("a",url, normalUrl, url === normalUrl)
             }
             console.log("o",url, normalUrl, url === normalUrl)
             await browser.pause(450);
             const tabs = (await browser.windowHandles()).value;
             console.log("tabs", tabs);
             if (tabs.length > 1) {
                 await browser.switchWindow(tabs[0]);
                 // await browser.closeWindow();
                 await browser.pause(1500);
             }
             await browser.pause(450);
             console.log("after back")
             await browser.waitForElementVisible("#containerdiv");
             await browser.waitForElementVisible("#mybbCanvas");
             await browser.frame("mybbCanvas");
             await browser.waitForElementVisible("#stream_alerts");
             await browser.waitForElementVisible("#openSettings_alerts");
             await browser.pause(450);
             await browser.click("#openSettings_alerts");
             await browser.waitForElementVisible("input[id=selectAllSettings_alerts]")
             await browser.click("input[id=selectAllSettings_alerts]")
             await browser.click("input[id=selectAllSettings_alerts]")
             await browser.pause(450);
             await browser.waitForElementVisible("input[id=bb-nautilus_CO\\:CO_AVAIL]")
             await browser.click("input[id=bb-nautilus_CO\\:CO_AVAIL]")
             await browser.click("a[id=updateSettings_alerts]")
             await browser.pause(450);
             console.log("end")
             // console.log("value - " + JSON.stringify(await browser.elementIdValue(elements.value[ind].ELEMENT)))
             // console.log("text - " +JSON.stringify( await browser.elementIdText(elements.value[ind].ELEMENT)))
         }
        //     const tempElements = await browser.elements('css selector','#_205_1termCourses_noterm > ul > li > a');
        //     console.log("count - "+ ind)
        //     var elementID = tempElements.value[ind].ELEMENT;
        //     browser.elementIdClick(elementID)
        //     browser.waitForElementVisible("div[class=locationPane]")
        //     browser.pause(1500)
        //     browser.back()
        //     browser.waitForElementVisible("span[class=moduleTitle]")
        //     browser.pause(500)
        // }
            // .waitForDebugger()
        // browser.url('webapps/bb-social-learning-BBLEARN/execute/mybb?cmd=display&toolId=AlertsOnMyBb_____AlertsTool')
        // const elements = await browser.elements('css selector','#_205_1termCourses_noterm > ul > li > a');
        //
        // const elementsSize = elements.value.length;
        // for (let ind = 0; ind< elementsSize; ind++){
        //     const tempElements = await browser.elements('css selector','#_205_1termCourses_noterm > ul > li > a');
        //     console.log("count - "+ ind)
        //     var elementID = tempElements.value[ind].ELEMENT;
        //     browser.elementIdClick(elementID)
        //     browser.waitForElementVisible("div[class=locationPane]")
        //     browser.pause(1500)
        //     browser.back()
        //     browser.waitForElementVisible("span[class=moduleTitle]")
        //     browser.pause(500)
        // }
    }
};