import type { Metadata } from "next";
import ProjectDetail from "@/app/layouts/project/detail";
import { getDetailProject } from "@/app/utils/getDetailProject";

interface Params {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const data = await getDetailProject({ slug: params.slug });

  if (!data) {
    return {
      title: "Not Found!",
      description:
        "The post you are looking for no longer exists, may have been moved or deleted",
    };
  }
  return {
    title: `${data.title} . Mohammad S`,
    description: data.description || data.content.slice(0, 150),
    openGraph: {
      title: data.title,
      description: data.description || data.content.slice(0, 150),
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: data.title,
      description: data.description || data.content.slice(0, 150),
    },
  };
}

export default async function page({ params }: Params) {
  const data = await getDetailProject({ slug: params.slug });
  return <ProjectDetail data={data} />;
}
