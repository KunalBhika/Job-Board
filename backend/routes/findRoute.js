import express from "express";
import Job from "../models/Job.js";
import scrapeJobs from "../scraper.js";

const router = express.Router();

router.get("/findJobs" , async (req , res) => {
    const { title } = req.query;
    try {
        const currentResults = await Job.find({ title : { $regex : title , $options : "i" } });
        if(currentResults.length > 0) return res.status(200).json({ data : currentResults , type : 'success' });

        // const searchResult = await scrapeJobs(title);

        if(searchResult.length > 0) {
            await Job.deleteMany({});
            await Job.insertMany(searchResult);
            return res.status(200).json({ data : searchResult , type : 'success' });
        }
        else return res.status(200).json({ data : [] , type : 'success' , message : 'no jobs found' }); 
    } catch(error) {
        return res.status(500).json({ error : 'internal server error' , type : 'errorll' , exact : error });
    }
});

export default router;