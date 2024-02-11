import dayjs from "dayjs";
import React from "react";

export default function JobCard(props) {
  const date1 = dayjs(Date.now());
  const diffInDays = date1.diff(props.postedOn, "day");
  return (
    <div className="mx-40 mb-4">
      <div className="flex justify-between items-center px-6 py-4 bg-zinc-300 border-black shadow-lg hover:border-blue-500 hover:translate-y-1 hover:scale-102">
        <div className="flex flex-col gap-3 items-start">
          <h1 className="text-lg font-semibold">
            {props.title} - {props.company}
          </h1>
          <p>
            {" "}
            {props.type} &#x2022; {props.experience} &#x2022; {props.location}
          </p>
          <div className="flex items-center gap-2">
            {props.skills.map((skilld) => (
              <p
                key={skilld}
                className="py-1 text-gray-500  px-2 rounded-md border border-black"
              >
                {skilld}
              </p>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-4">
          <p className="text-gray-500">
            Posted {diffInDays > 1 ? `${diffInDays} days` : `${diffInDays} day`}{" "}
            ago{" "}
          </p>
          <a href={props.job_link}>
            <button className="px-10 py-2 text-blue-600 border border-blue-800 rounded-md">
              Apply
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
