import React from "react";
import { Building, Briefcase } from "lucide-react";

function Card(props) {
  return (
    <div className="card w-full my-1 bg-base-100 shadow-sm">
      <div className="card-body">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-xl font-bold">{props.jobData.title}</h2>
            <ul className="lg:menu-horizontal">
              <div className="flex items-center mt-2">
                <span className="flex items-center">
                  <Building size={24} strokeWidth={1.25} className="mr-1" />{" "}
                  {props.jobData.company_name}
                </span>
                <span className="flex items-center mx-5">
                  <Briefcase size={24} strokeWidth={1.25} className="mr-1" />{" "}
                  {props.jobData.experience === "N/A"
                    ? "Fresher"
                    : props.jobData.experience}
                </span>
              </div>
            </ul>
          </div>
          <div className="avatar">
            <div className="w-25 rounded">
              <img src={props.jobData.logo_url} />
            </div>
          </div>
        </div>

        <div className="mt-2">
          <button className="btn w-40 btn-primary btn-block">
            <a href={props.jobData.apply_link}>Apply</a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
