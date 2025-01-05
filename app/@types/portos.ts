// this for declaring any type of variable, NOTE: this is good for practices and avoid using the word "any" in entire variable.

export type Menu = {
  name: string;
  link: string;
};

export type SocialMedia = {
  link: string;
  icon: string;
};

export type Navbars = {
  frontLogo?: string;
  backLogo?: string;
  title: string;
  data?: Menu[];
};

export type Homes = {
  greeting: string;
  name: string;
  passion: Array<string>;
  description: string;
  sm: SocialMedia[];
};

export type Projects = {
  title: string;
  description: string;
  image: string;
  link: string;
};
