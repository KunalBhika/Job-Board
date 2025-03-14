import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
    title : String,
    company_name : String ,
    experience : String ,
    apply_link : String ,
} , { timestamps : true });

const Job = mongoose.model("Job" , jobSchema);
export default Job;