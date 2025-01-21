"use client";
import { Icon } from "@iconify/react";
import React, { useState, useEffect, useRef } from "react";
import fetch from "@/app/utils/axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { config } from "@/app/utils/config";
import "swiper/css";

export default function Achievement() {
  const [certif, setCertif] = useState([]);
  const [awards, setAwards] = useState([]);
  const [tab, setTab] = useState(1);

  const prevCertifRef = useRef(null);
  const nextCertifRef = useRef(null);
  const prevAwardRef = useRef(null);
  const nextAwardRef = useRef(null);

  const fetchData = async () => {
    try {
      const res = await fetch.get("/archivement");
      const { data } = res.data;

      const filteredCertif = data.filter(
        (item: any) => item.category === "CERTIFICATES"
      );

      const filteredAwards = data.filter(
        (item: any) => item.category === "AWARDS"
      );

      setCertif(filteredCertif);
      setAwards(filteredAwards);
    } catch (error) {
      console.log(error);
    }
  };

  const showCertifBtn =
    certif?.length > 4
      ? "flex"
      : certif?.length > 3
      ? "flex"
      : certif?.length > 1
      ? "flex"
      : "hidden";

  const showAwardBtn =
    certif?.length > 4
      ? "flex"
      : certif?.length > 3
      ? "flex"
      : certif?.length > 1
      ? "flex"
      : "hidden";

  const buttonTabs = (tab: number) => {
    setTab(tab);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="space-y-8 pb-16">
      <div className="space-y-4">
        <h2 className="text-4xl font-archiabold tracking-tighter">
          Certificate & Awards
        </h2>
        <p className="text-lg font-outfit text-col-secondary-font max-w-6xl">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque, nam
          maiores. Pariatur molestiae, laudantium maxime consequuntur nam
          consectetur at adipisci.
        </p>
      </div>
      <div className="flex max-w-[200px] font-outfit rounded-md border border-neutral-800 bg-neutral-800">
        <button
          className={`px-5 py-2 rounded-md ${
            tab === 1 ? "bg-neutral-700" : "bg-neutral-800"
          }`}
          onClick={() => buttonTabs(1)}
        >
          Certificate
        </button>
        <button
          className={`px-5 py-2 rounded-md ${
            tab === 2 ? "bg-neutral-700" : "bg-neutral-800"
          }`}
          onClick={() => buttonTabs(2)}
        >
          Awards
        </button>
      </div>

      {tab === 1 && (
        <>
          {certif && certif.length > 0 ? (
            <Swiper
              modules={[Navigation]}
              spaceBetween={10}
              navigation={{
                prevEl: prevCertifRef.current,
                nextEl: nextCertifRef.current,
              }}
              breakpoints={{
                1024: {
                  slidesPerView: 4,
                },
                768: {
                  slidesPerView: 3,
                },
                320: {
                  slidesPerView: 1,
                },
              }}
            >
              {certif.map((item: any, i: number) => (
                <SwiperSlide key={`certif-${i}`}>
                  <div className="group relative lg:max-w-[300px] w-full cursor-pointer">
                    <div className="relative overflow-hidden ">
                      <img
                        className="w-full transform group-hover:scale-110 transition-all duration-500 "
                        src={config.BASE_URL_IMAGE + item.image}
                        alt={item.title}
                      />
                      <div className="group-hover:opacity-100 opacity-0 transition-all duration-300 p-5 bg-neutral-800 bg-opacity-90 absolute inset-0 flex items-center justify-center">
                        <h2 className="font-archiabold tracking-tighter transition-all transform translate-y-8 group-hover:translate-y-0">
                          {item.title}
                        </h2>
                      </div>
                    </div>
                    <div className="p-3 group-hover:translate-y-0 -translate-y-20 -z-10 relative transition-all  bg-neutral-900 bg-opacity-90  bottom-0 w-full">
                      <button className="font-outfit">Certificate</button>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <>
              <div className="p-4 border-2 border-neutral-700 border-dashed font-outfit">
                <h2>No Certificate.</h2>
              </div>
            </>
          )}

          <div className={`${showCertifBtn} justify-center gap-5 relative`}>
            <button
              ref={prevCertifRef}
              className="px-5 py-3 bg-neutral-800 font-outfit text-2xl hover:bg-neutral-700 text-neutral-300 rounded-md font-bold"
            >
              <span>
                <Icon icon="lucide:arrow-left" />
              </span>
            </button>
            <button
              ref={nextCertifRef}
              className="px-5 py-3 bg-neutral-800 font-outfit text-2xl  hover:bg-neutral-700 text-neutral-300 rounded-md font-bold"
            >
              <span>
                <Icon icon="lucide:arrow-right" />
              </span>
            </button>
          </div>
        </>
      )}

      {tab === 2 && (
        <>
          {awards && awards.length > 0 ? (
            <Swiper
              modules={[Navigation]}
              spaceBetween={10}
              navigation={{
                prevEl: prevAwardRef.current,
                nextEl: nextAwardRef.current,
              }}
              breakpoints={{
                1024: {
                  slidesPerView: 4,
                },
                768: {
                  slidesPerView: 3,
                },
                320: {
                  slidesPerView: 1,
                },
              }}
            >
              {awards.map((item: any, i: number) => (
                <SwiperSlide>
                  <div
                    className="group relative lg:max-w-[300px] w-ful cursor-pointer"
                    key={i}
                  >
                    <div className="relative overflow-hidden ">
                      <img
                        className="w-full transform group-hover:scale-110 transition-all  duration-500 "
                        src={config.BASE_URL_IMAGE + item.image}
                        alt={item.title}
                      />
                      <div className="group-hover:opacity-100 opacity-0 transition-all duration-300 p-5 bg-neutral-800 bg-opacity-90 absolute inset-0 flex items-center justify-center">
                        <h2 className="font-archiabold tracking-tighter transition-all transform translate-y-8 group-hover:translate-y-0">
                          {item.title}
                        </h2>
                      </div>
                    </div>
                    <div className="p-3 group-hover:translate-y-0 -translate-y-20 -z-10 relative transition-all  bg-neutral-900 bg-opacity-90  bottom-0 w-full">
                      <button className="font-outfit">Awards</button>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <>
              <div className="p-4 border-2  border-neutral-700  border-dashed font-outfit">
                <h2>No Awards.</h2>
              </div>
            </>
          )}
          <div className={`${showAwardBtn} justify-center gap-5`}>
            <button
              ref={prevAwardRef}
              className="px-5 py-3 bg-neutral-800 font-outfit text-2xl hover:bg-neutral-700 text-neutral-300 rounded-md font-bold"
            >
              <span>
                <Icon icon="lucide:arrow-left" />
              </span>
            </button>
            <button
              ref={nextAwardRef}
              className="px-5 py-3 bg-neutral-800 font-outfit text-2xl  hover:bg-neutral-700 text-neutral-300 rounded-md font-bold"
            >
              <span>
                <Icon icon="lucide:arrow-right" />
              </span>
            </button>
          </div>
        </>
      )}
    </div>
  );
}
