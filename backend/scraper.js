import puppeteer from 'puppeteer';
import axios from "axios";

const scrapeJobs = async (keyword) => {
    // https://www.naukri.com/product-manager-jobs?k=product%20manager
    const url = `https://www.naukri.com/${encodeURIComponent(keyword)}-jobs?k=${encodeURIComponent(keyword)}`;

    const browser = await puppeteer.launch({ headless: false }); // headless mode
    const page = await browser.newPage();
    
    await page.goto(url);

    // // Wait for job listings to appear
    await page.waitForSelector(".comp-name", { timeout: 10000 });

    // Extract job titles
    const jobs = await page.evaluate(() => {
        return Array.from(document.querySelectorAll(".comp-name")).map(job => job.innerText);
    });

    console.log("Jobs : " , jobs);
    await browser.close();
    
}

export default scrapeJobs;