import React from "react";
import Home from "./layouts/home";
import About from "./layouts/home/about";
import Featured from "./layouts/home/featured";
import Summaries from "./layouts/home/summaries";
import Tools from "./layouts/home/tools";
import Achievement from "./layouts/home/achievement";
import Contact from "./layouts/home/contact";
export default function page() {
  return (
    <div className="flex flex-col gap-20">
      <Home
        greeting="Hello, I`m"
        name="Ibnu Batutah"
        passion={["Mobile Developer", "Backend Developer", "Android Developer"]}
        description="I'm a passionate front-end web engineer focused on building
            beautiful interfaces."
        sm={[
          { icon: "mdi:github", link: "https://github.com/mohammad-sahrullah" },
          {
            icon: "mdi:linkedin",
            link: "https://www.linkedin.com/in/mohammad-sahrullah/",
          },
          {
            icon: "mdi:instagram",
            link: "https://www.instagram.com/mohammad_sahrullah/",
          },
          {
            icon: "mdi:gmail",
            link: "https://www.facebook.com/mohammad.sahrullah.9/",
          },
        ]}
      />
      <About />
      <Summaries />
      <Achievement />
      <Tools />
      <Featured />
      <Contact />
    </div>
  );
}
