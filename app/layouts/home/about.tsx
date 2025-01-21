"use client";
import React, { useState, useEffect } from "react";
import NumberTicker from "@/components/ui/number-ticker";
import fetch from "@/app/utils/axios";
import Markdown from "markdown-to-jsx";

export default function about() {
  const [data, setData] = useState({
    description: "",
  });

  const fetchData = async () => {
    try {
      const response = await fetch.get("/profile");

      const { data } = response.data;

      setData(data);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <React.Fragment>
      <div className="relative flex flex-col gap-20 pb-8 ">
        <div className="font-outfit relative z-10 text-neutral-300 rounded-md w-full  space-y-5">
          <div className="relative">
            <h1 className="text-6xl absolute bg-clip-text text-transparent bg-gradient-to-b from-neutral-400 to-transparent font-archiabold tracking-tighter -top-9 -left-5">
              01
            </h1>
            <h1 className="text-4xl font-archiabold tracking-tighter z-10">
              About Myself
            </h1>
          </div>
          <Markdown className="text-lg text-col-secondary-font">
            {data.description ?? "No about."}
          </Markdown>
          <div className="flex flex-col md:flex-row justify-start gap-5">
            <div className="space-y-3">
              <h2 className="text-4xl font-archiabold">
                <NumberTicker
                  value={19}
                  className="text-neutral-300 tracking-tighter"
                />
                <span className="text-green-500">+</span>
              </h2>
              <p className="font-outfit text-lg text-col-secondary-font ">
                Client Projects
              </p>
            </div>
            <div className="space-y-3">
              <h2 className="text-4xl font-archiabold">
                <NumberTicker
                  value={8}
                  className="text-neutral-300 tracking-tighter"
                />
                <span className="text-green-500">+</span>
              </h2>
              <p className="font-outfit text-lg text-col-secondary-font">
                Achivements
              </p>
            </div>
            <div className="space-y-3">
              <h2 className="text-4xl font-archiabold ">
                <NumberTicker
                  value={5}
                  className="text-neutral-300 tracking-tighter"
                />
                <span className="text-green-500">+</span>
              </h2>
              <p className="font-outfit text-lg text-col-secondary-font">
                Years of Experience
              </p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
