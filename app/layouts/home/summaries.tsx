"use client";
import React, { useState } from "react";
import { Icon } from "@iconify/react";
import Markdown from "markdown-to-jsx";

const educations = [
  {
    name: "State Polytechnic of Jember",
    time: "2020 - 2024 (4 Years)",
    major: "Bachelor's Degree in Informatics - S.Tr.Kom.",
    gpa: "3.73",
    image: "./image/education/polije.jpg",
  },
];

const achievements = [
  {
    name: "Top 10 Rating Mentors of the Months",
    time: "2023",
    description: "Top Mentor of Bangkit Academy",
  },
  {
    name: "100% class graduation rate",
    time: "2023",
    description: "Top Mentee of Bangkit Academy",
  },
];
const experiences = [
  {
    name: "Rolling Glory",
    time: "January 2023 - Present",
    position: "Mobile Engineer",
    type: "Fulltime",
    description:
      "As a Mobile Engineer since January 2023, I have significantly improved team productivity through the development of a custom Flutter Linter and libraries. I have consistently delivered high-value mobile development projects within deadlines, resulting in exceptional client retention. By employing clean architecture and Test-Driven Development, I have notably reduced bug reports. Additionally, I have enhanced user engagement by integrating sophisticated functionalities, such as personalized product recommendations and in-app marketing tools.",
  },
  {
    name: "Bangkit Academy led by Google, GoTo, & Traveloka",
    time: "February 2024 - Present",
    position: "Mobile Development Mentor",
    type: "Freelance",
    description:
      "As a Mentor, I am responsible for teaching and providing support to enhance mentee learning. I achieved top mentor status by offering actionable feedback and guidance, earning a score of 4.92/5.00 from 25 mentees over 6 months. I facilitated their professional growth, enabling them to complete courses and final projects 3 weeks ahead of schedule. I coached a mentee in advanced coding techniques and contributed to Bangkit’s all-time high graduation rate of 93%.",
  },
  {
    name: "Area Berkarya Abadi",
    time: "January 2024 - Present",
    position: "Mobile Engineer",
    type: "Fulltime",
    description:
      "I led the development and enhancement of mobile applications for three projects, achieving notable performance improvements. I optimized operational efficiency by developing and deploying features like face recognition, Bluetooth integration, and geo-fencing, which enhanced payroll management and attendance functionalities. I implemented Golang best practices and frameworks such as Gin and Gorm, improving database operations and reducing query response times. I deployed a tourism app using Flutter with offline caching, which reduced data usage and improved accessibility in remote areas.",
  },
  {
    name: "PT Global Data Inspirasi",
    time: "August 2023 - January 2024",
    position: "Computer Vision Engineer",
    type: "Internship",
    description:
      "At Genio Video CCTV, I was responsible for maintaining and enhancing code quality. I implemented features to detect vehicles in real-time from CCTV in Yogyakarta and integrated a stacked bar chart. Additionally, I focused on reducing delays and improving overall performance. In the Proctoring App project, I developed a multi-platform application using Flutter and successfully integrated face recognition technology.",
  },
  {
    name: "Bangkit Academy led by Google, GoTo, & Traveloka",
    time: "February 2023 - July 2023",
    position: "Android Developer Mentee",
    type: "Apprenticeship",
    description:
      "Bangkit is a unique career readiness program led by Google and delivered with support from industry experts from their industry partner like GoTo, Traveloka, and Deeptech Foundation. The program is designed to provide participants with first-hand exposure to real-world practitioners and prepare them with relevant skills for a successful career in leading tech companies. I am successfully selected to be 3,100 participants from 67,000 registrants as Mobile Developer (Android) Trainees and graduated as Certified Android Developer.",
  },
  {
    name: "MoGawe",
    time: "September 2021 - December 2022",
    position: "Android Developer",
    type: "Fulltime",
    description:
      "Increased the user base and reduced development costs by proposing and leading the initiative to rebuild the MoGawe App using Flutter with clean architecture for multi-platform deployment. Boosted development efficiency and minimized bug-related tickets by developing a new app architecture and standardized coding conventions. Enhanced data entry efficiency and accuracy by designing an advanced form with OCR integration, eliminating manual data entry tasks. I ensured smooth app performance by analyzing and fixing critical memory leaks that caused crashes on low-end devices, preventing potential negative app store reviews.",
  },
];

export default function Summaries() {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="grid lg:grid-cols-2 grid-cols-1   gap-10">
      <div className="space-y-5 mt-5  transition-opacity w-full ">
        <div className="relative">
          <h1 className="text-6xl absolute bg-clip-text text-transparent bg-gradient-to-b from-neutral-400 to-transparent font-archiabold tracking-tighter -top-9 -left-5">
            02
          </h1>
          <h1 className="text-4xl flex-col gap-5 font-archiabold tracking-tighter text-neutral-300">
            <span>
              <Icon
                icon="fluent-mdl2:education"
                className="text-col-primary-font"
              />
            </span>{" "}
            Education
          </h1>
        </div>

        <div>
          <ol className="relative text-col-primary-font border-s border-neutral-600 dark:border-gray-700">
            {educations.map((item, i) => (
              <li
                className="mb-10 ms-4 group transition-all duration-300"
                key={`education-${i}`}
              >
                <div className="relative">
                  <img
                    src={item.image}
                    alt={`Image of ${item.name}`}
                    className="absolute -top-1 opacity-0 object-cover w-[500px] h-[300px] rounded-md group-hover:opacity-10 transition-all duration-1000 transform translate-y-12 group-hover:translate-y-0 -z-10"
                  />
                </div>
                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time className="mb-1 text-lg font-bold font-outfit">
                  {item.time}
                </time>
                <h3 className="mb-4 text-2xl font-semibold font-archiabold tracking-tighter text-neutral-400">
                  {item.name}
                </h3>
                <p className="text-lg font-normal font-outfit text-col-secondary-font">
                  {item.major}
                </p>
                <p className="text-lg font-normal font-outfit text-col-secondary-font">
                  Grade:{" "}
                  <span className="font-bold">{item.gpa}/4.00 (GPA)</span>
                </p>
              </li>
            ))}
            <li className="mb-10 ms-4 group">
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <h3 className="text-lg font-semibold text-neutral-400">
                Ended - (Present)
              </h3>
            </li>
          </ol>
        </div>
      </div>
      <div className="space-y-5 mt-5 lg:col-span-1 col-span-2 transition-opacity w-full ">
        <div className="relative">
          <h1 className="text-6xl absolute bg-clip-text text-transparent bg-gradient-to-b from-neutral-400 to-transparent font-archiabold tracking-tighter -top-9 -left-5">
            03
          </h1>
          <h1 className="text-4xl flex-col gap-5 font-archiabold tracking-tighter text-neutral-300">
            <span>
              <Icon
                icon="solar:cup-outline"
                className="text-col-primary-font"
              />
            </span>{" "}
            Achievements
          </h1>
        </div>

        <div>
          <ol className="relative text-col-primary-font border-s border-neutral-600 dark:border-gray-700">
            {achievements.map((item, i) => (
              <li
                className="mb-10 ms-4 group transition-all duration-300"
                key={`achievement-${i}`}
              >
                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time className="mb-1 text-lg font-bold font-outfit">
                  At {item.time}
                </time>
                <h3 className="mb-4 text-2xl font-semibold font-archiabold tracking-tighter text-neutral-400">
                  {item.name}
                </h3>
                <p className="text-lg font-normal font-outfit text-col-secondary-font">
                  {item.description}
                </p>
              </li>
            ))}
            <li className="mb-10 ms-4 group">
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <h3 className="text-lg font-semibold text-neutral-400">
                That the lastest
              </h3>
            </li>
          </ol>
        </div>
      </div>

      <div className="space-y-5 mt-5 w-full col-span-2">
        <div className="relative">
          <h1 className="text-6xl absolute bg-clip-text text-transparent bg-gradient-to-b from-neutral-400 to-transparent font-archiabold tracking-tighter -top-9 -left-5">
            04
          </h1>
          <h1 className="text-4xl font-archiabold tracking-tighter text-neutral-300">
            <Icon
              icon="fluent-mdl2:work"
              className="text-col-primary-font"
            />
            Experience
          </h1>
        </div>

        <div
          className={`${
            showMore ? "h-auto" : "h-[530px] overflow-hidden "
          } w-full  relative`}
        >
          <div className="p-2">
            <ol className="relative pl-2 text-col-primary-font border-s border-neutral-600 dark:border-gray-700">
              {experiences.map((item, i) => (
                <li
                  className="mb-10 ms-4"
                  key={`experience-${i}`}
                >
                  <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white z-20 dark:border-gray-900 dark:bg-gray-700"></div>
                  <time className="mb-1 text-lg font-bold font-outfit">
                    {item.time}
                  </time>
                  <h3 className="mb-4 text-2xl font-semibold font-archiabold tracking-tighter text-neutral-400">
                    {item.name}
                  </h3>
                  <h3 className="mb-4 text-lg font-semibold text-col-secondary-font">
                    {item.position} - ({item.type})
                  </h3>
                  <p className="mb-4 text-lg font-normal font-outfit text-col-secondary-font">
                    {item.description}
                  </p>
                </li>
              ))}
            </ol>
          </div>
          <div
            className={`w-full flex pb-10 pl-0 left-0 justify-center bg-gradient-to-t from-[#121212] via-[#121212]/80 to-transparent sticky ${
              showMore ? "bottom-0" : "-bottom-2"
            } -ml-5 z-30`}
          >
            <button
              className="bg-neutral-600 px-5 py-2 rounded-md font-outfit"
              onClick={() => setShowMore(!showMore)}
            >
              {showMore ? "Show Less" : "Show More..."}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
