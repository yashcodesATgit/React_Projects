import React from "react";
import "./App.css";
import Card from "./components/Card";

const jobOpenings = [
  {
    brandLogo: "https://icons.duckduckgo.com/ip3/google.com.ico",
    companyName: "Google",
    datePosted: "2 days ago",
    post: "Frontend Developer Intern",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$28/hour",
    location: "Bangalore, India",
  },
  {
    brandLogo: "https://icons.duckduckgo.com/ip3/microsoft.com.ico",
    companyName: "Microsoft",
    datePosted: "1 day ago",
    post: "React Developer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$24/hour",
    location: "Hyderabad, India",
  },
  {
    brandLogo: "https://icons.duckduckgo.com/ip3/amazon.com.ico",
    companyName: "Amazon",
    datePosted: "5 days ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$42/hour",
    location: "Pune, India",
  },
  {
    brandLogo: "https://icons.duckduckgo.com/ip3/netflix.com.ico",
    companyName: "Netflix",
    datePosted: "3 days ago",
    post: "UI/UX Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$48/hour",
    location: "Mumbai, India",
  },
  {
    brandLogo: "https://icons.duckduckgo.com/ip3/meta.com.ico",
    companyName: "Meta",
    datePosted: "6 days ago",
    post: "Full Stack Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$35/hour",
    location: "Gurgaon, India",
  },
  {
    brandLogo: "https://icons.duckduckgo.com/ip2/apple.com.ico",
    companyName: "Apple",
    datePosted: "4 days ago",
    post: "iOS Developer",
    tag1: "Part Time",
    tag2: "Senior Level",
    pay: "$50/hour",
    location: "Bangalore, India",
  },
  {
    brandLogo:
      "https://i.pinimg.com/1200x/61/4b/df/614bdff99e380635851a2ac8ada55d47.jpg",
    companyName: "Adobe",
    datePosted: "7 days ago",
    post: "Backend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$30/hour",
    location: "Noida, India",
  },
  {
    brandLogo: "https://icons.duckduckgo.com/ip2/uber.com.ico",
    companyName: "Uber",
    datePosted: "2 days ago",
    post: "MERN Stack Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$45/hour",
    location: "Hyderabad, India",
  },
  {
    brandLogo: "https://icons.duckduckgo.com/ip2/nvidia.com.ico",
    companyName: "NVIDIA",
    datePosted: "8 days ago",
    post: "AI Engineer",
    tag1: "Part Time",
    tag2: "Senior Level",
    pay: "$55/hour",
    location: "Pune, India",
  },
  {
    brandLogo: "https://icons.duckduckgo.com/ip2/salesforce.com.ico",
    companyName: "Salesforce",
    datePosted: "1 week ago",
    post: "Cloud Support Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$32/hour",
    location: "Chennai, India",
  },
];


const App = () => {
  return (
    <div className="parent">
      {jobOpenings.map(function (elem, idx) {
        return ( 
          <div key={idx}>
          <Card
            companyName={elem.companyName}
            brandLogo={elem.brandLogo}
            datePosted={elem.datePosted}
            post={elem.post}
            tag1={elem.tag1}
            tag2={elem.tag2}
            pay={elem.pay}
            location={elem.location}
          />
          </div>
        );
      })}
    </div>
  );
};

export default App;
