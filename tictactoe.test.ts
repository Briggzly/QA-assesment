import { Builder, Capabilities, By } from "selenium-webdriver"
import { alertIsPresent } from "selenium-webdriver/lib/until"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async () => {
    await driver.get('http://localhost:4000')
})

afterAll(async () => {
    await driver.quit()
})

test('I can start a game', async () => {

    let button = await (await driver).findElement(By.id('start-game'));
    await button.click();
    
});

test('clicking top left box puts X', async () => {
    let topLBox = await driver.findElement(By.id('cell-0'))

    await topLBox.click()

    let cellValue = await topLBox.getText()

    expect(cellValue).toEqual('X')
})

test('clicking top right box puts X', async () => {
    let topRBox = await driver.findElement(By.id('cell-2'))

    await topRBox.click()

    let cellValue = await topRBox.getText()

    expect(cellValue).toEqual('X')
})

test('clicking bottom right box puts X', async () => {
    let bottomRBox = await driver.findElement(By.id('cell-8'))

    await bottomRBox.click()

    await driver.sleep(1500)

    let cellValue = await bottomRBox.getText()

    expect(cellValue).toEqual('X')
})

test('see if computer puts an O', async () => {
    let topMBox = await driver.findElement(By.id('cell-1'))

    let cellValue = await topMBox.getText()

    expect(cellValue).toEqual('O')
})