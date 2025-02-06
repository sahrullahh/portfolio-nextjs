"use client";
import React, { useState, useEffect } from "react";
import fetch from "@/app/utils/axios";
import Card from "@/app/components/project/card";
import { Projects, Tags } from "@/app/types/portos";
import { useRouter } from "next/navigation";

export default function index() {
  const router = useRouter();
  const [projects, setProjects] = useState<Projects[]>([]);

  const navigateToId = (slug: string) => {
    router.replace(`/project/${slug}`);
  };

  const fetchAll = async () => {
    try {
      const response = await fetch.get("project.json");
      setProjects(response.data);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchAll();
  });

  return (
    <div className="pt-20 pb-40 space-y-8 container mx-auto">
      <div className="space-y-5">
        <h2 className="text-4xl font-archiabold tracking-tighter">
          My Projects
        </h2>
        <p className="font-outfit text-lg text-col-secondary-font max-w-6xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
          repellat suscipit est expedita. Ratione dolor cumque ducimus, delectus
          id veniam aliquam dicta quos aliquid laboriosam maxime pariatur saepe
          inventore necessitatibus.
        </p>
      </div>
      <div className="grid gap-5 lg:grid-cols-3 md:grid-cols-2 justify-center grid-cols-1">
        <>
          {projects && projects.length > 0 ? (
            <>
              {projects.map((item: Projects, i: number) => (
                <Card
                  order={i}
                  key={`${item.slug}-${i}`}
                  handler={() => navigateToId(item.slug)}
                  thumbnail={item.thumbnail[0]}
                  tags={item.tag}
                  title={item.title}
                />
              ))}
            </>
          ) : (
            <>
              <div className="p-4 border-2 border-neutral-700 border-dashed font-outfit">
                <h2>No project to showed.</h2>
              </div>
            </>
          )}
        </>
      </div>
    </div>
  );
}
