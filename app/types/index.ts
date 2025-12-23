export type Link = {
  icon?: string;
  name: string;
  to: string;
};

export type LinkGroup = {
  links: Link[];
  name: string;
};
