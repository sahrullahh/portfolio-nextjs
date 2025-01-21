"use client";
import React, { useState, useEffect } from "react";
import fetch from "@/app/utils/axios";
import Card from "@/app/components/project/card";
import { Projects, Tags } from "@/app/types/portos";
import { useRouter } from "next/navigation";

export default function index() {
  const router = useRouter();
  const [projects, setProjects] = useState<Projects[]>([]);
  const [tags, setTags] = useState<Tags[]>([]);

  const fetchData = async () => {
    try {
      const response = await fetch.get("/portofolio");
      const { data } = response.data;
      setProjects(data);

      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  const getTags = async () => {
    try {
      const response = await fetch.get("/skill");
      const { data } = response.data;
      setTags(data);
    } catch (error) {
      console.error(error);
    }
  };

  const navigateToId = (slug: string) => {
    router.replace(`/project/${slug}`);
  };

  useEffect(() => {
    fetchData();
    getTags();
  }, []);

  return (
    <div className="pt-20 space-y-8 container mx-auto">
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
      <div className="grid gap-5 lg:grid-cols-4 md:grid-cols-2 justify-center grid-cols-1">
        <>
          {projects && projects.length > 0 ? (
            <>
              {projects.map((item: Projects, i: number) => (
                <Card
                  order={i}
                  key={`${item.slug}-${i}`}
                  handler={() => navigateToId(item.slug)}
                  thumbnail={item.thumbnail[0]}
                  tags={tags}
                  activeTags={item.tag}
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
