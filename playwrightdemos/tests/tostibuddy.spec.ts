import { expect, test } from "@playwright/test";
import v8toIstanbul from "v8-to-istanbul";

test.skip("works", async ({ page }) => {
  await page.goto("https://tostibuddy.nl/");
  await page.getByRole("button", { name: "Let's COOK" }).click();
  await page
    .locator("div")
    .filter({ hasText: /^Sneetjes Brood$/ })
    .getByRole("spinbutton")
    .fill("03");
  await page
    .locator("div")
    .filter({ hasText: /^Plakken Kaas$/ })
    .getByRole("spinbutton")
    .fill("05");
  await page
    .locator("div")
    .filter({ hasText: /^Plakken Ham$/ })
    .getByRole("spinbutton")
    .fill("03");
  await page
    .locator("div")
    .filter({ hasText: /^Ketchup500 ml$/ })
    .getByRole("slider")
    .fill("446");
  await page
    .locator("div")
    .filter({ hasText: /^500 ml$/ })
    .getByRole("slider")
    .fill("356");
  await page.getByRole("button", { name: "Naar bunkeraars" }).click();

  await expect(page.getByText("Hoeveel hebben we nog?")).not.toBeVisible(); // 4 seconden

  await page.getByRole("slider").fill("2");
  await page
    .locator("div")
    .filter({ hasText: /^Ketchup\?$/ })
    .getByRole("checkbox")
    .uncheck();
  await page
    .locator("div")
    .filter({ hasText: /^Curry\?$/ })
    .click();
  await page.getByRole("textbox", { name: "Naam" }).fill("JP");
  await page.getByRole("button", { name: "Bunkeraar toevoegen" }).click();

  await page.getByRole("textbox", { name: "Naam" }).first().fill("Mr. Z");
  await page.getByRole("slider").first().fill("4");
  await page.getByRole("textbox", { name: "Naam" }).nth(1).fill("JP");
  await page.getByRole("slider").nth(1).fill("2");
  await page.locator("div:nth-child(2) > .flex.items-center.gap-6.w-18\\/20 > div:nth-child(4) > .checkbox").uncheck();
  await page.getByRole("button", { name: "Bunkeraar toevoegen" }).click();

  await page.getByRole("textbox", { name: "Naam" }).nth(2).fill("Rick");
  await page.getByRole("slider").nth(2).fill("4");

  await page.getByRole("button", { name: "Bereken boodschappenlijstje!" }).click();
  await expect(page.locator("#root")).toContainText("2 pakken");
  await expect(page.getByText("Geen ketchup meer nodig")).toBeVisible();
  await expect(page.locator("#root")).toContainText("Geen ketchup meer nodig");
  await expect(page.locator("#root")).toContainText("Geen ketchup meer nodig");
});

test("does not change UI", async ({ page }) => {
  await page.goto("https://tostibuddy.nl/");

  await page.coverage.startJSCoverage();

  await expect(page).toHaveScreenshot({
    mask: [page.getByRole("button", { name: "Let's COOK" }).locator("..")],
  });

  let coverage = await page.coverage.stopJSCoverage();

  for (const entry of coverage) {
    const converter = v8toIstanbul("", 0, { source: entry.source! });
    await converter.load();
    converter.applyCoverage(entry.functions);
    console.log(JSON.stringify(converter.toIstanbul()));
  }
});
