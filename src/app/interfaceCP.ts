export interface Project {
    id: number;
    title: string;
    subtitle: string;
    description: string;
    image: string;
    link: string;
  }
  
  // export interface Content {
  //   title: string;
  //   lightMode: boolean;
  //   name: string;
  //   socials: {
  //     linkedin: string;
  //     github: string;
  //   };
  // }

  export interface Socials {
    linkedin: string;
    github: string;
  }
  
  export interface Content {
    title: string;
    lightMode: boolean;
    name: string;
    socials: Socials;
  }
  