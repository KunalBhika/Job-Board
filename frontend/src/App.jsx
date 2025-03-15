import { useState, useEffect } from "react";
import { Search } from "lucide-react";
import axios from "axios";
import Card from "./components/card";
import "./App.css";

function App() {
  const displayNumber = 4;
  const [jobs, setJobs] = useState(null);
  const [page, setPage] = useState(0);
  const [designation, setDesignation] = useState("Software Engineer");

  const fetchJobs = async () => {
    setJobs(null);   // resetting
    setPage(0)
    try {
      const response = await axios.get(
        `/api/findJobs?title=${designation}`  // `http://localhost:5000/api/findJobs?title=${designation}`
      );
      if (response.data.type === "success") {
        setJobs(response.data.data);
      }
    } catch (error) {
      console.error("Error fetching jobs:", error);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <>
      <div className="container p-10 flex flex-col justify-center items-center gap-2">
        <fieldset className="fieldset w-xs bg-base-200 border border-base-300 p-4 rounded-box">
          <legend className="fieldset-legend">Enter designation</legend>
          <div className="join">
            <input
              type="text"
              className="input join-item"
              placeholder="Eg. Software Engineer"
              onChange={(e) => {
                setDesignation(e.target.value);
              }}
            />
            <button className="btn join-item" onClick={fetchJobs}>
              <Search size={16} />
            </button>
          </div>
        </fieldset>
        {jobs === null ? (
          <span className="loading loading-dots loading-xl"></span>
        ) : (
          jobs
            .slice(
              page * displayNumber,
              page * displayNumber + displayNumber >= jobs.length
                ? jobs.length - 1
                : page * displayNumber + displayNumber
            )
            .map((jobDetails, index) => (
              <Card key={index} jobData={jobDetails} />
            ))
        )}
      </div>

      <div className="flex flex-row justify-center item-center gap-4">
        {Array.from({ length: jobs?.length / displayNumber - 1 }).map(
          (_, index) => (
            <button
              className={`btn btn-active ${
                page === index ? "btn-primary" : ""
              }`}
              key={index}
              onClick={() => {
                setPage(index);
              }}
            >
              0{index + 1}
            </button>
          )
        )}
      </div>
    </>
  );
}

export default App;
