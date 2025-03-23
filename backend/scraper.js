import puppeteer from 'puppeteer';
import axios from "axios";

const scrapeJobs = async (keyword) => {
    // https://www.naukri.com/product-manager-jobs?k=product%20manager - sample link
    const url = `https://www.naukri.com/${encodeURIComponent(keyword)}-jobs?k=${encodeURIComponent(keyword)}`;

    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    
    await page.goto(url);

    // Wait for job post container to load for atleast 10 seconds
    await page.waitForSelector(".styles_job-listing-container__OCfZC", { timeout: 10000 });

    const jobs = await page.evaluate(() => {
        return Array.from(document.querySelectorAll(".cust-job-tuple")).map(
            job => ({
                title : job.querySelector("a.title")?.innerText.trim() || "N/A" ,
                company_name : job.querySelector(".comp-name")?.innerText.trim() || "N/A" ,
                experience : job.querySelector(".expwdth")?.innerText.trim() || "N/A" ,
                apply_link : job.querySelector(".comp-name")?.getAttribute("href") || "N/A" ,
                logo_url : job.querySelector(".logoImage")?.getAttribute("src") || "N/A" ,
            })
        )
    });

    await browser.close();

    return jobs;
}

export default scrapeJobs;