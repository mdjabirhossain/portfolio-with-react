import React from "react";
import CircleCISVG from "./svg.components";
import hclogo from "../images/hc.png";
import ficsResearch from "../images/ficsResearch.jpeg";
import ibb from "../images/ibb1.png";
import clubfinity from "../images/clubfinity.png";
import hack from "../images/Florida_Hacks_with_IBM.png";
import dsr from "../images/dsr.png";
import climate1 from "../images/Cli-Mate_1.gif";
import CB from "../images/CB.jpeg";
import crwn from "../images/crwn0.gif";
import pierre from "../images/pierre.avif";
import pony from "../images/pony1.png";
import netwire from "../images/netwire1.jpeg";
import osp1 from "../images/OSP1.gif";
import osp2 from "../images/p2.gif";
import osp3 from "../images/osp3.gif";
import cf from "../images/clubfinity.gif";
import da from "../images/dataannotation.png";
import nasa from "../images/nasa0.png";
import avl from "../images/AVL.webp";

export const Bio = {
  name: "Jabir",
  roles: ["Programmer", "Cybersecurity Enthusiast", "Full Stack Developer"],
  description:
    "I have a vision to be an entrepreneur and create markets with innovations. I aspire to identify underlying challenges, eliminate them with technologies, and augment our potential to accomplish more prosperity.",
  github: "https://github.com/skywalker-alt327",
  resume:
    "https://drive.google.com/file/d/1hodz7jKZ7LAbk-pFEuoP6FkXKFEV25hx/view?usp=sharing",
  linkedin: "https://www.linkedin.com/in/md-jabir-hossain-1a5454192/",
  twitter: "https://twitter.com/Hossain_M_J",
};

export const skills = [
  {
    title: "Machine Learning",
    skills: [
      {
        name: "Python",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
      },
      {
        name: "Tensorflow",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/2/2d/Tensorflow_logo.svg",
      },
      {
        name: "Keras",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/a/ae/Keras_logo.svg",
      },
      {
        name: "Scikit Learn",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg",
      },
      {
        name: "Numpy",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/3/31/NumPy_logo_2020.svg",
      },
      {
        name: "Pandas",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/e/ed/Pandas_logo.svg",
      },

      // {
      //   name: "MySQL",
      //   image:
      //     "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg",
      // },
      // {
      //   name: "Postgresql",
      //   image: "https://www.postgresql.org/media/img/about/press/elephant.png",
      // },
    ],
  },
  {
    title: "Backend",
    skills: [
      {
        name: "Node Js",
        image: "https://nodejs.org/static/images/logo.svg",
      },
      {
        name: "Express Js",
        image:
          "data:image/png;base64,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",
      },
      {
        name: "Graph Ql",
        image: "https://www.vectorlogo.zone/logos/graphql/graphql-icon.svg",
      },
      {
        name: "Java",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg",
      },
      // {
      //   name: "MySQL",
      //   image:
      //     "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg",
      // },
      // {
      //   name: "Postgresql",
      //   image: "https://www.postgresql.org/media/img/about/press/elephant.png",
      // },
      {
        name: "MongoDB",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg",
      },
      {
        name: "Firebase",
        image: "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg",
      },
    ],
  },
  {
    title: "Frontend",
    skills: [
      {
        name: "React Js",
        image:
          "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K",
      },
      // {
      //   name: "Redux",
      //   image:
      //     "https://d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg",
      // },
      {
        name: "Next Js",
        image:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACTklEQVR4Ab1XAaQqURB9DyohSykREpRIQSAlBCoECKUFCSRCBBEAaSEABQEoCIEASCwAUICALgCo83do0//9v819XX845O7VnDkzOzP7JWGaBd3C3IJpQVjAHeJ+Rs9a97vKLGrBsB1KgMhEP3FMUUwt4ENMfxr1yQIU4SSjRkbeOZtERmHk6pXQVDlnkHh9S+QLTm1hkiz4n/gzFQuny9FoFLquE+i34x+n02k0m00UCoV3BIzn3MMJrVYLtp1OJ0cS/X4f5/MZhmG8IyDsWtDfEaDIn2232/3zbrvdxuFwwGg04qRBt+VnETBNE0IIkE2n07/erdfrWK/X6Ha73Hb9ZXII3G43ivy3dNRqtZe7lUoFs9mM6oBDwCQCgquALT1FT3a5XF7qIZ/PYzgcolqtcggIIgBZAgRKB6lCRalp2uM8k8mAVMrlchwC+DEBipycE4n5fP44j8ViKJVKSCaTbAJCpgaez4vFIsjoWa/XA50FAgEkEgmEw2F2CkxZBZ5Br5tt1ITcbjd8Ph88Hg+7CBefECCsVitS4aVJcV9D/VMCVITk/Hq9YrPZyBBo2a1YMGvAcQYcj0cCtWMugcdYNhjDiBrP25mx3++x3W6RzWZZ8isfxzQLlsslJpMJpYY5jhkqcOH1ejEYDDAej9FoNOByuZxGsfqVzC7KTqcDSkkqleKsZOqX0mAwiHK5DGrJfr+fs5SqX8sjkQji8ThCoRC+v78Za7l6JagrUh3YkUuZpqgwDaecc9VYSDoV5Fg+at7n+eLN57kuE/EvzHr/Kvs31aYAAAAASUVORK5CYII=",
      },
      {
        name: "HTML",
        image: "https://www.w3.org/html/logo/badge/html5-badge-h-solo.png",
      },
      {
        name: "CSS",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png",
      },
      {
        name: "JavaScript",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png",
      },
      // {
      //   name: "Bootstrap",
      //   image:
      //     "https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png",
      // },
      // {
      //   name: "Material UI",
      //   image:
      //     "data:image/png;base64,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",
      // },
      // {
      //   name: "Flutter",
      //   image:
      //     "https://cdn-images-1.medium.com/max/1200/1*5-aoK8IBmXve5whBQM90GA.png",
      // },
    ],
  },

  {
    title: "Cybersecurity",
    skills: [
      {
        name: "Kali Linux",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/2/2b/Kali-dragon-icon.svg",
      },
      {
        name: "Ghidra",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/f/f6/Ghidra_logo.svg",
      },
      {
        name: "x64 dbg",
        image: "",
      },
      {
        name: "Remnux",
        image: "",
      },
      {
        name: "Wireshark",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/d/df/Wireshark_icon.svg",
      },
      {
        name: "Burpsuite",
        image: "",
      },
    ],
  },
  {
    title: "Miscellaneous",
    skills: [
      {
        name: "C++",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg",
      },
      {
        name: "Linux",
        image: "https://upload.wikimedia.org/wikipedia/commons/3/35/Tux.svg",
      },
      {
        name: "Git",
        image:
          "https://camo.githubusercontent.com/fbfcb9e3dc648adc93bef37c718db16c52f617ad055a26de6dc3c21865c3321d/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f6769742d73636d2f6769742d73636d2d69636f6e2e737667",
      },
      {
        name: "GitHub",
        image:
          "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
      },
      {
        name: "Docker",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg",
      },
      {
        name: "CircleCI",
        image: () => {
          <CircleCISVG />;
        },
      },
      {
        name: "VS Code",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/512px-Visual_Studio_Code_1.35_icon.svg.png?20210804221519",
      },
      {
        name: "Postman",
        image:
          "https://camo.githubusercontent.com/93b32389bf746009ca2370de7fe06c3b5146f4c99d99df65994f9ced0ba41685/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f676574706f73746d616e2f676574706f73746d616e2d69636f6e2e737667",
      },
      // {
      //   name: "Adobe XD",
      //   image:
      //     "https://camo.githubusercontent.com/c205ecbe12500177d102169d97bc1c17c545155fdf5ec78c08d54ac53e5b38c1/68747470733a2f2f63646e2e776f726c64766563746f726c6f676f2e636f6d2f6c6f676f732f61646f62652d78642e737667",
      // },
      // {
      //   name: "Figma",
      //   image:
      //     "https://camo.githubusercontent.com/ed93c2b000a76ceaad1503e7eb9356591b885227e82a36a005b9d3498b303ba5/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f6669676d612f6669676d612d69636f6e2e737667",
      // },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: ficsResearch,
    role: "Research Assistant",
    company: "Florida Institute of Cybersecurity",
    date: "January 2023 - Present",
    desc: "In progress to develop a methodology for control flow attestation of embedded systems to identify control flow attacks, that either reorder the way the code is called or new code is injected.",
    skills: ["C++", "Arduino", "Tensorflow"],
  },
  {
    id: 1,
    img: ibb,
    role: "Research Assistant",
    company: "University of Illinois at Urbana Champaign",
    date: "July 2023 - Present",
    desc: "Implemented the modules to model 3d surfaces of polymer grids and apply finite element method.",
    skills: ["Python", "Numpy", "Pandas", "Tensorflow"],
  },
  {
    id: 2,
    img: clubfinity,
    role: "Tech Lead",
    company: "Software Engineering Club, University of Florida",
    date: "September 2021 - December 2022",
    desc: "Developed the back-end and front-end, using MERN stack, of a cross-platform mobile application, for ios and android, named Clubfinity, a centralized communication and engagement tool for student organizations. The beta version has been released on App Store and Play Store.",
    skills: ["JavaScript", "Nodejs", "React Native", "MongoDB", "Postman"],
  },
  {
    id: 3,
    img: hack,
    role: "Winner of Florida Hacks with IBM",
    company: "IBM",
    date: "September 2021 to December 2021",
    desc: "Created website application prototype of a carbon emission tracker for IBM hackathon, using Nodejs, Vue, and MongoDB. The project ranked as one of the top 10 in the competition.",
    skills: [
      "JavaScript",
      "Nodejs",
      "Vue",
      "MongoDB",
      "Google Matrix API",
      "Firebase",
    ],
  },
  {
    id: 4,
    img: dsr,
    role: "Research Assistant",
    company: "Data Science Research, University of Florida",
    date: "August 2020 to December 2020",
    desc: "Implemented a web application framework for extending and annotating a knowledge graph. \n Applied existing language model baselines: BERT, BioBERT, and ClinicalBERT, to create a Virtual Assistant for a newmedical-related task for UFHealth Shands.",
    skills: ["Python", "JavaScript", "NLP"],
  },
];

export const education = [
  {
    id: 0,
    img: "https://upload.wikimedia.org/wikipedia/commons/e/e0/UF_Monogram.svg",
    school: "University of Florida, Florida, United States",
    date: "August 2019 - May 2023",
    grade: "3.81 CGPA",
    desc: "I am pursuing a B.Sc. in Computer Science from Herbert Wertheim College of Engineering and B.A. in Mathematics from the College of Liberal Arts and Sciences.",
    degree:
      "Bachelor of Science - Computer and Information Science and Engineering",
  },
  {
    id: 1,
    img: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Uwc-colleges.svg",
    school: "United World College Maastricht, Maastricht, Netherlands",
    date: "Apr 2017 - Apr 2019",
    grade: "41/45",
    desc: "I received 100% scholarships and completed International Baccalaureate Diploma from this prestigious international school that has a student body comprised of over 100 nationalities. ",
    degree: "International Baccalaureate Diploma",
  },
  {
    id: 2,
    img: hclogo,
    school: "Helias Catholic High School, Missouri, United States",
    date: "August 2016 - May 2017",
    grade: "3.43",
    desc: "I received 100% scholarships and completed this high school exchange program. ",
    degree: "High School Exchange Program",
  },
];

export const projects = [
  {
    id: 0,
    title: "Cli-mate",
    date: "September 2021 - Dec 2021",
    description:
      "Cli-Mate is a carbon-emissions tracking app. Users can create profiles to view their to-date carbon savings and calculate their daily savings based on distance walked, bussed, or biked.",
    image: climate1,
    tags: ["Node Js", "Express Js", "Vuejs", "MongoDb"],
    category: "web app",
    github: "https://github.com/absandell/Cli-Mate",
    webapp: "https://podstream.netlify.app/",
    member: [
      {
        name: "Md Jabir Hossain",
        img: CB,
        linkedin: "https://www.linkedin.com/in/md-jabir-hossain-1a5454192/",
        github: "https://github.com/skywalker-alt327",
      },
      {
        name: "Andrew Sandell",
        img: "https://avatars.githubusercontent.com/u/58280054?v=4",
        linkedin: "https://www.linkedin.com/in/md-jabir-hossain-1a5454192/",
        github: "https://github.com/skywalker-alt327",
      },
    ],
  },
  {
    id: 1,
    title: "Crwn Clothing Project",
    date: "April 2022",
    description:
      "Built the front end of this e-commerce platform to learn Reactjs fundamentals and apply Firebase.",
    image: crwn,
    tags: ["React Js", "Firebase"],
    category: "web app",
    // github: "",
    // webapp: "",
  },
  {
    id: 2,
    title: "Malicious PDF with Dridex",
    date: "April 2023",
    description:
      "Analyzed this malicious pdf document that has an embedded word document containing visual basics macros. When run, the macros get executed, communicates with an http server and drops an executable on the victim machine.",
    image: pierre,
    tags: [
      "Remnux",
      "Visual Basics",
      "Wireshark",
      "Viper Monkey",
      "Peepdf",
      "Pdfextract",
    ],
    category: "malware rev",
  },
  {
    id: 3,
    title: "Pony Information Stealer",
    date: "March 2023",
    description:
      "This is an analysis on a generic information stealer that attempts to steal credentials and cryptocurrency wallets from its victim network. It then connects to remote hosts and ex-filtrates the stolen data. The malware may also act as a rat",
    image: pony,
    tags: [
      "Volatility",
      "Procmon",
      "Remnux",
      "Ghidra",
      "IDA",
      "Wireshark",
      "x64 dbg",
    ],
    category: "malware rev",
    github: "",
    webapp: "",
  },
  {
    id: 4,
    title: "Netware Trojan RAT",
    date: "February 2023",
    description:
      "This is an analysis on a malware that drops an executable and steals credentials from the victim machine to exfiltrate to a remote server.",
    image: netwire,
    tags: [, "Procmon", "Regshot", "Remnux", "Ghidra", "Wireshark", "x64 dbg"],
    category: "malware rev",
    github: "",
    webapp: "",
  },
  {
    id: 5,
    title: "System Call in Reptilian Linux",
    date: "February 2023",
    description:
      "Implemented a system call in the kernel along with library functions that allow the call to be invoked from a C API. The system call gets and sets a custom process log level that sits atop the standard Linux kernel’s diagnostic message logging system and allow processes to submit log entries.",
    image: osp1,
    tags: ["Linux", "C", "VMWare"],
    category: "linux",
    github: "",
    webapp: "",
  },
  {
    id: 6,
    title: "Memory Manager",
    date: "March 2023",
    description:
      "Implemented a memory manager in C++, the features of which include initializing, tracking, allocating, and deallocating sections of memory. Integrated the memory manager into a console program and performed testing to ensure that memory is not leaking.",
    image: osp2,
    tags: ["C++", "Valgrind"],
    category: "linux",
    github: "",
    webapp: "",
  },
  {
    id: 7,
    title: "File Systems",
    date: "April 2023",
    description:
      "Developed a library to read a WAD file and create a directory and file structure. Implemented a userspace daemon using FUSE API to access the directory structure once mounted.",
    image: osp3,
    tags: ["C++", "FUSE API", "Linux"],
    category: "linux",
    github: "",
    webapp: "",
  },
  {
    id: 8,
    title: "Clubfinity",
    date: "September 2021 to December 2022",
    description:
      "Developed the back-end and front-end, using MERN stack, of a cross-platform mobile application, for ios and android. It is a centralized communication and engagement tool for student organizations, where users can follow their favorite clubs and be notified of upcoming events or announcements, and easily discover new groups of interest. The beta version has been released on App Store and Play Store.",
    image: cf,
    tags: [
      "Nodejs",
      "Expressjs",
      "React Native",
      "MongoDB",
      "Axios",
      "Mailgun",
    ],
    category: "mobile app",
    github: "",
    webapp: "",
  },
  {
    id: 9,
    title: "Data Annotation",
    date: "October 2020 to December 2020",
    description:
      "Preprocessed wikidata of event based knowledge graphs and developed the backend that creates relation triplets.",
    image: da,
    tags: ["Python", "Flask", "Visjs"],
    category: "machine learning",
    github: "",
    webapp: "",
  },
  {
    id: 10,
    title: "NASA Mission Control",
    date: "February 2022",
    description:
      "Worked on the backend of this project to learn the fundamentals of Nodejs, Expressjs, and MongoDB.",
    image: nasa,
    tags: ["Nodejs", "Expressjs", "Axios", "MongoDB", "Mongoose"],
    category: "machine learning",
    github: "",
    webapp: "",
  },
  {
    id: 11,
    title: "AVL Tree",
    date: "February 2021",
    description:
      "Created this AVL tree that stores unique student IDs and non-unique student names. Features include insertion, search, and removal of specific IDs or names.",
    image: avl,
    tags: ["Nodejs", "Expressjs", "Axios", "MongoDB", "Mongoose"],
    category: "machine learning",
    github: "",
    webapp: "",
  },
];

export const TimeLineData = [
  { year: 2017, text: "Started my journey" },
  { year: 2018, text: "Worked as a freelance developer" },
  { year: 2019, text: "Founded JavaScript Mastery" },
  { year: 2020, text: "Shared my projects with the world" },
  { year: 2021, text: "Started my own platform" },
];
