import { chromium } from "playwright"

const browser = await chromium.launch()
const page = await browser.newPage()
const errors = []
page.on("console", (msg) => {
  if (msg.type() === "error") errors.push(msg.text())
})
page.on("pageerror", (err) => errors.push("pageerror: " + err.message))

await page.goto("http://localhost:8080/typed-graph/", { waitUntil: "networkidle" })
await page.waitForTimeout(3000)

const count = await page.textContent("#count")
const canvasCount = await page.locator("#graph canvas").count()
const sidebarTypeRows = await page.locator("#type-filters .row").count()
const sidebarPredRows = await page.locator("#predicate-filters .row").count()

console.log("count text:", JSON.stringify(count))
console.log("canvas elements in #graph:", canvasCount)
console.log("type filter rows:", sidebarTypeRows)
console.log("predicate filter rows:", sidebarPredRows)
console.log("console/page errors:", JSON.stringify(errors, null, 2))

await page.screenshot({ path: "typed-graph-screenshot.png", fullPage: true })

await browser.close()
