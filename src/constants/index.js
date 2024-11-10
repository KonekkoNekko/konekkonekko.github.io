import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import projectcomingsoon from "../assets/projects/project-comingsoon.jpg";

export const HERO_CONTENT = `Fresh Graduate in Information Systems from Telkom University | Android Learning Path Graduate from Bangkit Academy 2023 Batch 2 | Former Assistant Lecturer at Telkom University | Full Stack Developer | Android Developer`;

export const ABOUT_TEXT = `I am a fresh-graduate as a cumlaude with Bachelor’s degree in Information Systems from Telkom University Surabaya, with diverse experience including organizations, internship, and work. I am skilled in mobile (Kotlin, React Native), web development (Laravel) and prodicient in various design patterns (MVC, MVVM, Service & Repository Pattern, Repository Pattern). I have teaching assistance experience with strong problem-solving skills, responsible, and committed to teamwork.`;

export const EXPERIENCES = [
  {
    year: "August 2023 - Desember 2023",
    role: "Android Learning Path Cohort",
    company: "Bangkit Academy 2023 Batch 2",
    description: `
    I was participating in the Bangkit Academy 2023 batch 2 program as Android Learning Path cohort for enriching my journey of learning and growth. During the program, I have a well comprehension of the basic concepts on Object-Oriented Programming (OOP) and Functional Programming in Kotlin and how to implementing those concepts for solving problems in software design using SOLID principles, I'm also adept and proficient on building android application capable of fetching data from Web API and storing data locally, implementing various features usage such as Location, Sensor, Media, etc, I was also capable designing the application interface using Jetpack Compose.

    On the program's capstone project, my team creating an English learning application using user's speech capability as the main feature. I was managed to finished and completing the android side of the project by using Jetpack Compose in the project for efficient production.
    `,
    technologies: [
      "Android Development",
      "Kotlin",
      "Jetpack Compose",
      "RoomDB",
    ],
    softwares: ["Android Studio", "Figma"],
    designs: ["MVVM", "Repository Pattern"],
  },
  {
    year: "September 2023 - December 2023",
    role: "Assistant Lecturer",
    company: "Telkom University",
    description: `I was teaching four classes during this period as an assistant lecturer during a practicum session in Information Systems and Data Science Departement. The following classes are two classes of Mobile Application Development with React Native, Algorithms and Programming with Python then lastly Relational Database with Oracle SQL. Teaching and demonstrating in front of the class was the main task, but I also assist in practical assessments, create practical module case studies, and solving any problems faced by students during the practical sessions.`,
    technologies: [
      "Javascript",
      "PHP",
      "HTML",
      "CSS",
      "Python",
      "SQL",
      "React Native",
      "Expo",
      "MySQL",
      "Firebase",
    ],
    softwares: [
      "Visual Studio Code",
      "Postman",
      "DBeaver",
      "Figma",
      "Microsoft Office",
    ],
    designs: ["MVC"],
  },
];

export const PROJECTS = [
  {
    title: "StockMobile",
    image: project1,
    description:
      "An Android-based system to manage stock lists, transactions, and partner directories. The system supports stock recording accuracy and provides partner and stock data distribution maps.",
    technologies: [
      "Kotlin",
      "Jetpack Compose",
      "Firebase",
      "RoomDB",
      "MLKit",
      "Google Maps API",
    ],
    designs: ["MVVM", "Repository Pattern"],
    url_repo: "https://github.com/KonekkoNekko/StockMobile",
  },
  {
    title: "NotesApp",
    image: project2,
    description:
      "A simple note-taking app for mobile development practicum with React Native. It helps students implement mobile app development using React Native with AsyncStorage and Firebase Integration.",
    technologies: ["React Native", "AsyncStorage", "Firebase", "GluestackUI"],
    designs: ["OOP"],
    url_repo: "https://github.com/sabillahsakti/NoteApp",
  },
  {
    title: "GinsengStrip",
    image: project3,
    description:
      "An e-commerce website for GinsengStrip, a music and culture-inspired band merchandise store. Allowing customers to search and puchase items and sellers able to manage products and transactions.",
    technologies: [
      "Laravel",
      "Bootstrap",
      "Leaflet",
      "PHP",
      "CSS",
      "JS",
      "CSS",
    ],
    designs: ["MVC"],
    url_repo: "https://github.com/KonekkoNekko/UAS-FW-GinsengStrip",
  },
  {
    title: "JuaraWebTiket",
    image: projectcomingsoon,
    description: "Coming soon.",
    technologies: [
      "Laravel",
      "TailwindCSS",
      "Filament",
      "PHP",
      "CSS",
      "JS",
      "CSS",
    ],
    designs: ["MVC", "Service & Repository Pattern"],
    url_repo: "https://github.com/KonekkoNekko/",
  },
  {
    title: "Cari Workspace!",
    image: projectcomingsoon,
    description: "Coming soon.",
    technologies: ["React Native", "CSS"],
    designs: [],
    url_repo: "https://github.com/KonekkoNekko/",
  },
  {
    title: "SimplePOS",
    image: projectcomingsoon,
    description: "Coming soon.",
    technologies: ["Kotlin", "Jetpack Compose", "RoomDB", "MLKit"],
    designs: ["MVVM", "Repository Pattern"],
    url_repo: "https://github.com/KonekkoNekko/",
  },
];

export const CONTACT = {
  address: "Surabaya, Indonesia",
  phoneNo: "+6287802776756",
  email: "nabiel.setiawan@gmail.com",
};
