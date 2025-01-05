import React from "react";

export default function tools() {
  const tools = [
    {
      name: "Javascript",
      icon: "./image/tools/js.png",
    },
    {
      name: "Vue",
      icon: "./image/tools/vue.png",
    },
    {
      name: "Nuxt",
      icon: "./image/tools/nuxt.svg",
    },
    {
      name: "React",
      icon: "./image/tools/react.svg",
    },
    {
      name: "Next",
      icon: "./image/tools/next.svg",
    },
    {
      name: "Tailwind",
      icon: "./image/tools/tailwind.svg",
    },
    {
      name: "Figma",
      icon: "./image/tools/figma.png",
    },
    {
      name: "VS Code",
      icon: "./image/tools/vscode.png",
    },
    {
      name: "Typescript",
      icon: "./image/tools/ts.png",
    },
  ];

  return (
    <div className="space-y-8 pb-16 text-center">
      <h2 className="text-4xl font-archiabold tracking-tighter">
        Tools and Skills
      </h2>
      <div className="lg:flex grid md:grid-cols-3 grid-cols-2 gap-20 items-center justify-center">
        {tools.map((tool) => (
          <div className="space-y-3">
            <img
              src={tool.icon}
              alt={tool.name}
              className="max-w-[70px] max-h-[70px] mx-auto"
            />
            <p className="font-outfit text-lg lg:hidden block">{tool.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
