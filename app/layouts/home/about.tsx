import React from "react";
import { Icon } from "@iconify/react";
import NumberTicker from "@/components/ui/number-ticker";
export default function about() {
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
          <p className="text-lg text-col-secondary-font">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
            incidunt optio ipsam nam, ut nihil aliquid, minima illo dolor ex
            ducimus qui, provident blanditiis et culpa minus reprehenderit
            tempore autem.
          </p>
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
