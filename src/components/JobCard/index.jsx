import React from "react";

export default function JobCard() {
  const skills = ["Javascript", "ReactJs", "NodeJs", "GraphQL"];
  return (
    <div>
      <div>
        <div>
          <h1>Frontend Developer</h1>
          <p> Full time &#x2022; Fresher &#x2022; In-Office</p>

          <div>
            {skills.map((skilld) => {
              <p>{skilld}</p>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
