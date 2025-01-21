"use client";
import React, { useState, useEffect } from "react";
import fetch from "@/app/utils/axios";
import Educations from "@/app/components/summaries/educations";
import Achievements from "@/app/components/summaries/achievement";
import Experiences from "@/app/components/summaries/experiences";
import { Experience } from "@/app/types/portos";

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
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui itaque voluptatibus sed, quam unde corporis suscipit error possimus. Quaerat, doloremque.",
  },
  {
    name: "100% class graduation rate",
    time: "2023",
    description:
      "TLorem ipsum dolor sit amet consectetur adipisicing elit. Qui itaque voluptatibus sed, quam unde corporis suscipit error possimus. Quaerat, doloremque.",
  },
];

export default function Summaries() {
  const [exp, setExp] = useState([]);
  const [edu, setEdu] = useState([]);

  const fetchExp = async () => {
    try {
      const res = await fetch.get("/experience");

      const { data } = res.data;

      const exp = data.map((item: Experience) => ({
        company: item.company,
        start_date: item.start_date,
        end_date: item.end_date,
        position: item.position,
        category: item.category,
        description: item.description,
      }));

      setExp(exp);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchEdu = async () => {
    try {
      const res = await fetch.get("/education");

      const { data } = res.data;

      const edu = data.map((item: any) => ({
        name: item.name,
        time: item.time,
        major: item.major,
        gpa: item.gpa,
        image: item.image,
      }));

      setEdu(edu);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchExp();
  }, []);

  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 gap-10 ">
      <Achievements data={achievements} />
      <Educations data={educations} />
      <Experiences data={exp} />
    </div>
  );
}
