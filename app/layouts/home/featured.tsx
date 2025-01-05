"use client";
import React, { useState, useEffect } from "react";
import { Projects } from "@/app/@types/portos";
import Card from "@/app/components/summaries/card";
import fetch from "@/app/utils/axios";
export default function feature() {
  const [projects, setProjects] = useState<Projects[]>([]);

  const fetchData = async () => {
    try {
      const response = await fetch.get("/portofolio");
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="space-y-8 pb-16">
      <h2 className="text-4xl font-archiabold tracking-tighter">
        Featured Projects
      </h2>
      <div className="grid gap-5 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
        {/* {projects.map((item, i) => (
          <Card
            key={i}
            title={item.title}
            description={item.description}
            image={item.image}
            tags={item.tags}
          />
        ))} */}
      </div>
      <div className="flex justify-center pt-8">
        <button className="px-5 py-3 bg-green-500 font-outfit text-black rounded-md font-bold">
          <span>View All Projects</span>
        </button>
      </div>
    </div>
  );
}
