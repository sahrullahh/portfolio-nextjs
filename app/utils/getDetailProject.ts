import fetch from "@/app/utils/axios";

export const getDetailProject = async ({ slug }: { slug: string }) => {
  try {
    const res = await fetch.get(`/portofolio/${slug}`);
    const { data } = res.data;

    // const { title, thumbnail, description, tags, repository, website } = data;
    return data;
  } catch (error) {
    console.log(error);
  }
};
