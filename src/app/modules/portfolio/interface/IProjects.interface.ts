export interface IProjects{
  src: string;
  alt: string;
  title: string;
  width: string;
  height: string;
  description: string;
  links: ILinks[];
}

interface ILinks{
  name: string;
  href: string;
}
