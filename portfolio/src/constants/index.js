import {
    mobile,
    backend,
    web,
    meta,
    starbucks,
    tesla,
    shopify,
    tankStar,
    bingeHub,
    mshCustomShell,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    // {
    //   id: "experience",
    //   title: "Experience",
    // },
    {
      id: "project",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
    {
      id: "resume",
      title: "resume",
    },
  ];

  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    
  ];
  
  const experiences = [
    {
      title: "React.js Developer",
      company_name: "Starbucks",
      icon: starbucks,
      iconBg: "#383E56",
      date: "March 2020 - April 2021",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "React Native Developer",
      company_name: "Tesla",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Feb 2022",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Shopify",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jan 2022 - Jan 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "Meta",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  // const testimonials = [
  //   {
  //     testimonial:
  //       "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
  //     name: "Sara Lee",
  //     designation: "CFO",
  //     company: "Acme Co",
  //     image: "https://randomuser.me/api/portraits/women/4.jpg",
  //   },
  //   {
  //     testimonial:
  //       "I've never met a web developer who truly cares about their clients' success like Rick does.",
  //     name: "Chris Brown",
  //     designation: "COO",
  //     company: "DEF Corp",
  //     image: "https://randomuser.me/api/portraits/men/5.jpg",
  //   },
  //   {
  //     testimonial:
  //       "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
  //     name: "Lisa Wang",
  //     designation: "CTO",
  //     company: "456 Enterprises",
  //     image: "https://randomuser.me/api/portraits/women/6.jpg",
  //   },
  // ];
  
  const projects = [
    {
      name: "BingeHub",
      description:
        "An API based project, which helps you in keeping a track of all the movies,shoes and animes you have watched, want's to watch, your favourites and many more features.",
      tags: [
        {
          name: "react",
        },
        {
          name: "Node.js",
        },
      ],
      image: bingeHub,
      source_code_link: "https://github.com/mahanshAdtiya/BingeHub.git",
    },
    {
      name: "msh-custom shell",
      description:
        "It's a custom shell made by me in C language which runs all the basic commands of linux and also use emoticons to give a sense of friendly enviornment",
      tags: [
        {
          name: "C-Language",
        },
        {
          name: "Linux",
        },
      ],
      image: mshCustomShell,
      source_code_link: "https://github.com/mahanshAdtiya/Msh-Custom-Shell.git",
    },
    {
      name: "Tank-Start",
      description:
        "A game called Tanks stars which is a player versus player experience. In creating this game, we utilized object-oriented programming concepts and applied design principles utilizing the Libgdx library.",
      tags: [
        {
          name: "Java-Language",
        },
        {
          name: "Libgdx Library",
        },
        
      ],
      image: tankStar,
      source_code_link: "https://github.com/AaravBalachandran/Game.git",
    },
  ];
  
  export { services, experiences, projects }; 