import Home from "./layouts/home";
import About from "./layouts/home/about";
import Featured from "./layouts/home/featured";
import Summaries from "./layouts/home/summaries";
import Tools from "./layouts/home/tools";
import Achievement from "./layouts/home/achievement";

export default function page() {
  const desc = `
Passionate mobile developer with 4+ years of experience building high-performance Android and iOS apps using Kotlin, Java, and Flutter. Some of my apps have earned **4.8-star ratings** and ranked in the **top 50** in shopping categories.

Beyond mobile, I have experience with **NestJS** and **Golang** for backend development and have integrated machine learning models (**TensorFlow & Keras**) into apps to enhance functionality.

I’ve also **led and mentored teams**, focusing on clean code and maintainable codebases.

I thrive in dynamic environments, solving complex challenges, and pushing the boundaries of technology. **Excited to contribute to innovative projects!**
`;

  return (
    <div className="container mx-auto flex flex-col gap-20">
      <Home
        greeting="Hello, I`m"
        name="Ibnu Batutah"
        image="./image/profile/profile.jpeg"
        passion={["Mobile Developer", "Backend Developer", "Android Developer"]}
        description="I'm a passionate Mobile Developer focused on building
            interactive ui."
        sm={[
          {
            icon: "mdi:github",
            link: "https://github.com/mohammad-sahrullah",
          },
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
      <About desc={desc} />
      <Summaries />
      <Featured />
      <Achievement />
      <Tools />
    </div>
  );
}
