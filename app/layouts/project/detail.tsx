"use client";

import React, { useRef, useEffect, useState, use } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { NextSeo } from "next-seo";

import "swiper/css";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { Projects, Tags } from "@/app/types/portos";
import fetch from "@/app/utils/axios";

export default function detail({ slug }: { slug: string }) {
  const [data, setData] = useState<Projects>();
  const prevSlide = useRef(null);
  const nextSlide = useRef(null);

  const getDetailProject = async ({ slug }: { slug: string }) => {
    try {
      const response = await fetch.get("project.json");

      const filteredData = response.data.find(
        (item: any) => item.slug === slug
      );

      setData(filteredData);
    } catch (error) {
      console.error("Error fetching project:", error);
      return null;
    }
  };

  useEffect(() => {
    getDetailProject({ slug: slug });
  });

  return (
    <>
      {data && (
        <NextSeo
          title={`${data.title} . Mohammad S`}
          description={data.description || data.content.slice(0, 150)}
          openGraph={{
            title: data.title,
            description: data.description || data.content.slice(0, 150),
            type: "article",
          }}
        />
      )}
      <div className="space-y-8 pb-16 pt-10 container mx-auto">
        <div className="max-w-7xl mx-auto font-outfit">
          <Link
            href={`/`}
            className=" flex gap-2 items-center"
          >
            <Icon icon="ion:arrow-back" /> <span>Back to home </span>
          </Link>
        </div>
        <div className="relative">
          {data && data.thumbnail.length > 1 ? (
            <button
              ref={nextSlide}
              className="px-4 py-4 bg-neutral-800 rounded-full font-outfit absolute right-0 top-80 text-2xl z-20"
            >
              <span>
                <Icon icon="lucide:arrow-right" />
              </span>
            </button>
          ) : null}
          {data && data.thumbnail.length > 1 ? (
            <button
              ref={prevSlide}
              className="px-4 py-4 bg-neutral-800 rounded-full font-outfit absolute left-0 top-80 text-2xl z-20"
            >
              <span>
                <Icon icon="lucide:arrow-left" />
              </span>
            </button>
          ) : null}

          <Swiper
            modules={[Navigation]}
            navigation={{
              prevEl: prevSlide.current,
              nextEl: nextSlide.current,
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            slidesPerView={1}
          >
            {data && data.thumbnail.length > 0 ? (
              data.thumbnail.map((item: string, i: number) => (
                <SwiperSlide key={i}>
                  <img
                    src={"/image/project/" + item}
                    className="w-full max-w-7xl mx-auto rounded-md"
                  />
                </SwiperSlide>
              ))
            ) : (
              <SwiperSlide>
                <div className="w-full max-w-7xl mx-auto border-2 border-dashed border-col-secondary-font p-5">
                  No Image Showed
                </div>
              </SwiperSlide>
            )}
          </Swiper>
        </div>

        <div className="max-w-7xl mx-auto space-y-5">
          <div className="flex lg:flex-row flex-col justify-between gap-5">
            <h2 className="text-4xl  font-archiabold tracking-tighter">
              {data?.title}
            </h2>
            <div className="flex gap-5">
              {data && data.website && (
                <Link
                  href={data.website}
                  target="_blank"
                  className="px-5 font-outfit py-2 flex gap-2 items-center bg-neutral-700 rounded-md text-white"
                >
                  <span> Visit site</span> <Icon icon="akar-icons:link-out" />
                </Link>
              )}
              {data && data.repository && (
                <Link
                  href={data.repository}
                  target="_blank"
                  className="px-5 font-outfit py-2 flex gap-2 items-center bg-neutral-700 rounded-md text-white"
                >
                  Repository
                  <span>
                    {" "}
                    <Icon icon="mdi:github" />
                  </span>
                </Link>
              )}
            </div>
          </div>

          <p className="font-outfit text-lg text-col-secondary-font ">
            {data?.description}
          </p>
          <div className="flex gap-2">
            {data && data.tag.length > 0 ? (
              data.tag.map((item: string, i: number) => (
                <span
                  key={i}
                  className="text-center font-outfit px-3 py-1 bg-neutral-800 rounded-md"
                >
                  {item}
                </span>
              ))
            ) : (
              <span className="text-center font-outfit px-3 py-1 bg-neutral-800 rounded-md">
                No techonlogy used
              </span>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
