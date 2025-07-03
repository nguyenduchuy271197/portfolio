import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Huy Nguyen",
  initials: "HN",
  url: "https://www.huynguyen.work/",
  location: "Ho Chi Minh City, Vietnam",
  locationLink: "https://www.google.com/maps/place/Ho+Chi+Minh+City",
  description:
    "Software Engineer turned Indie Hacker. I love building things and helping people.",
  summary:
    "Senior Software Engineer with nearly 5 years of experience and a strong technical foundation. Combined tech skills with business knowledge to grow at top tech companies. Good at building software, leading teams, and using business thinking to solve technical problems.",
  avatarUrl: "/me.jpg",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Tailwind CSS",
    "Node.js",
    "NestJS",
    "Python",
    "Postgres",
    "MongoDB",
    "Docker",
    "AWS",
    "CI/CD",
    "Git",
    "Supabase",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "hello@example.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/nguyenduchuy271197",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/huy-nguyen-451483196/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/DucHuy55363957",
        icon: Icons.x,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:huynguyen271197@gmail.com",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Atomic Finance",
      href: "https://atomic.finance",
      badges: [],
      location: "Remote",
      title: "Bitcoin Protocol Engineer",
      logoUrl: "/atomic.png",
      start: "May 2021",
      end: "Oct 2022",
      description:
        "Implemented the Bitcoin discreet log contract (DLC) protocol specifications as an open source Typescript SDK. Dockerized all microservices and setup production kubernetes cluster. Architected a data lake using AWS S3 and Athena for historical backtesting of bitcoin trading strategies. Built a mobile app using react native and typescript.",
    },
    {
      company: "Shopify",
      badges: [],
      href: "https://shopify.com",
      location: "Remote",
      title: "Software Engineer",
      logoUrl: "/shopify.svg",
      start: "January 2021",
      end: "April 2021",
      description:
        "Implemented a custom Kubernetes controller in Go to automate the deployment of MySQL and ProxySQL custom resources in order to enable 2,000+ internal developers to instantly deploy their app databases to production. Wrote several scripts in Go to automate MySQL database failovers while maintaining master-slave replication topologies and keeping Zookeeper nodes consistent with changes.",
    },
    {
      company: "Nvidia",
      href: "https://nvidia.com/",
      badges: [],
      location: "Santa Clara, CA",
      title: "Software Engineer",
      logoUrl: "/nvidia.png",
      start: "January 2020",
      end: "April 2020",
      description:
        "Architected and wrote the entire MVP of the GeForce Now Cloud Gaming internal admin and A/B testing dashboard using React, Redux, TypeScript, and Python.",
    },
    {
      company: "Splunk",
      href: "https://splunk.com",
      badges: [],
      location: "San Jose, CA",
      title: "Software Engineer",
      logoUrl: "/splunk.svg",
      start: "January 2019",
      end: "April 2019",
      description:
        "Co-developed a prototype iOS app with another intern in Swift for the new Splunk Phantom security orchestration product (later publicly demoed and launched at .conf annual conference in Las Vegas). Implemented a realtime service for the iOS app in Django (Python) and C++; serialized data using protobufs transmitted over gRPC resulting in an approximate 500% increase in data throughput.",
    },
    {
      company: "Lime",
      href: "https://li.me/",
      badges: [],
      location: "San Francisco, CA",
      title: "Software Engineer",
      logoUrl: "/lime.svg",
      start: "January 2018",
      end: "April 2018",
      description:
        "Proposed and implemented an internal ruby API for sending/receiving commands to scooters over LTE networks. Developed a fully automated bike firmware update system to handle asynchronous firmware updates of over 100,000+ scooters worldwide, and provide progress reports in real-time using React, Ruby on Rails, PostgreSQL and AWS EC2 saving hundreds of developer hours.",
    },
    {
      company: "Mitre Media",
      href: "https://mitremedia.com/",
      badges: [],
      location: "Toronto, ON",
      title: "Software Engineer",
      logoUrl: "/mitremedia.png",
      start: "May 2017",
      end: "August 2017",
      description:
        "Designed and implemented a robust password encryption and browser cookie storage system in Ruby on Rails. Leveraged the Yahoo finance API to develop the dividend.com equity screener",
    },
  ],
  education: [
    {
      school: "Bach Khoa University",
      href: "https://uwaterloo.ca",
      degree: "Bachelor's Degree of Electrical Engineering",
      logoUrl: "/hcmut.png",
      start: "2015",
      end: "2020",
    },
  ],
  projects: [
    {
      title: "Learning Management System (LMS)",
      href: "https://lms-hn.vercel.app/",
      active: true,
      description:
        "Built a comprehensive Learning Management System with course creation, student enrollment, progress tracking, and interactive learning modules.",
      technologies: ["Next.js", "TypeScript", "Supabase", "Shadcn UI"],
      links: [
        {
          type: "Website",
          href: "https://lms-hn.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/nguyenduchuy271197/lms",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "/videos/lms-demo.mp4",
    },
    {
      title: "Minishop E-commerce",
      href: "https://minishop-hn.vercel.app/",
      active: true,
      description:
        "Developed a modern e-commerce platform with product catalog, shopping cart, payment processing, and order management. Includes admin dashboard, inventory tracking, and customer analytics.",
      technologies: ["Next.js", "TypeScript", "Supabase", "Shadcn UI"],
      links: [
        {
          type: "Website",
          href: "https://minishop-hn.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/nguyenduchuy271197/mini-shop",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "/videos/minishop-demo.mp4",
    },
    {
      title: "Job Board Platform",
      href: "https://jobboard-hn.vercel.app/",
      active: true,
      description:
        "Created a job board platform connecting employers and job seekers. Features job posting, application tracking, resume parsing, advanced search filters, and automated matching algorithms.",
      technologies: ["Next.js", "TypeScript", "Supabase", "Shadcn UI"],
      links: [
        {
          type: "Website",
          href: "https://jobboard-hn.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/nguyenduchuy271197/jobboard",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "/videos/jobboard-demo.mp4",
    },
    {
      title: "Healthcare Management System",
      href: "https://healthcare-hn.vercel.app/",
      active: true,
      description:
        "Built a healthcare management system for clinics and hospitals. Includes patient records, appointment scheduling, medical history tracking, prescription management, and telemedicine capabilities.",
      technologies: ["Next.js", "TypeScript", "Supabase", "Shadcn UI"],
      links: [
        {
          type: "Website",
          href: "https://healthcare-hn.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/nguyenduchuy271197/healthcare",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "/videos/healthcare-demo.mp4",
    },
  ],
  products: [
    {
      title: "LIKELION",
      href: "https://likelion.edu.vn/",
      dates: "2021 - 2024",
      active: true,
      description:
        "Developed a comprehensive programming education platform offering coding bootcamps, technical courses, and skill development programs. Features course management, student progress tracking, interactive coding exercises, and certification systems.",
      technologies: [
        "Next.js",
        "TypeScript",
        "Prisma",
        "Shadcn UI",
        "PostgreSQL",
      ],
      links: [
        {
          type: "Website",
          href: "https://likelion.edu.vn/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/products/likelion.png",
      video: "",
    },
    {
      title: "KTC",
      href: "https://ktc.likelion.edu.vn/",
      dates: "2024 - 2025",
      active: true,
      description:
        "Built a government-sponsored programming training platform funded by the Korean government. Provides structured coding curriculum, mentorship programs, and career development pathways for Vietnamese developers.",
      technologies: ["Next.js", "TypeScript", "Shadcn UI", "Google Form"],
      links: [
        {
          type: "Website",
          href: "https://ktc.likelion.edu.vn/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/products/ktc.png",
      video: "",
    },
    {
      title: "Smart Lion",
      href: "https://smartlion-landing.vercel.app/",
      dates: "2023 - 2024",
      active: true,
      description:
        "Created an outsourcing services platform that connects clients with development teams. Features project management, team collaboration tools, client communication systems, and resource allocation for efficient outsourcing operations.",
      technologies: ["Next.js", "TypeScript", "Postgres", "Shadcn UI"],
      links: [
        {
          type: "Website",
          href: "https://smartlion-landing.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/products/smart-lion.png",
      video: "",
    },
    {
      title: "KTech College",
      href: "https://ktc-landing.vercel.app/",
      dates: "2024 - 2025",
      active: true,
      description:
        "Developed a specialized job fair platform connecting Vietnamese programmers with Korean employers. Includes developer profiles, skill assessments, company showcases, interview scheduling, and cross-cultural career matching.",
      technologies: ["Next.js", "TypeScript", "Postgres", "Shadcn UI"],
      links: [
        {
          type: "Website",
          href: "https://ktc-landing.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/products/ktech-college.png",
      video: "",
    },
    {
      title: "Easy Lion",
      href: "https://easylion-landing.vercel.app/",
      dates: "2023 - 2024",
      active: true,
      description:
        "Built a business collaboration platform facilitating partnerships between companies. Features project collaboration tools, document sharing, communication channels, partnership management, and workflow coordination.",
      technologies: ["Next.js", "TypeScript", "Postgres", "Shadcn UI"],
      links: [
        {
          type: "Website",
          href: "https://easylion-landing.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/products/easy-lion.png",
      video: "",
    },
    {
      title: "HR Platform",
      href: "https://likelion-hr.vercel.app/",
      dates: "2023 - 2024",
      active: true,
      description:
        "Created a comprehensive HR outsourcing platform providing end-to-end human resources services. Includes recruitment management, payroll processing, employee onboarding, performance tracking, and compliance management for client companies.",
      technologies: ["Next.js", "TypeScript", "Postgres", "Shadcn UI"],
      links: [
        {
          type: "Website",
          href: "https://likelion-hr.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/products/hr-platform.png",
      video: "",
    },
    {
      title: "Turning Point",
      href: "https://www.turningpoint.asia/",
      dates: "2023 - 2024",
      active: true,
      description:
        "Developed a versatile online learning platform offering short-term courses across multiple disciplines including programming, business, design, marketing, and professional development. Features diverse course catalog and flexible learning paths.",
      technologies: ["Next.js", "TypeScript", "Postgres", "Shadcn UI"],
      links: [
        {
          type: "Website",
          href: "https://www.turningpoint.asia/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/products/turning-point.png",
      video: "",
    },
    {
      title: "Newland",
      href: "https://newland-landing.vercel.app/",
      dates: "2024 - 2025",
      active: true,
      description:
        "Built a healthcare management system for clinics and hospitals. Includes patient records, appointment scheduling, medical history tracking, prescription management, and telemedicine capabilities.",
      technologies: ["Next.js", "TypeScript", "Postgres", "Shadcn UI"],
      links: [
        {
          type: "Website",
          href: "https://newland-landing.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/products/newland.png",
      video: "",
    },
  ],
  careerRoles: [
    {
      title: "Tech Lead",
      dates: "2023 - 2025",
      location: "LIKELION",
      description:
        "Led a team of engineers to build a job search platform for the US market. Made key technology decisions that helped strengthen our company's market position. Improved our development processes while maintaining high quality standards.",
      image: "/likelion.png",
      links: [],
    },
    {
      title: "Senior Software Engineer",
      dates: "2022 - 2023",
      location: "LIKELION",
      description:
        "Built a recruiting platform connecting Vietnamese programmers with job opportunities in South Korea. Helped improve our system architecture, enhancing reliability and reducing deployment times. Implemented testing strategies that caught bugs before going live, saving significant engineering time.",
      image: "/likelion.png",
      links: [],
    },
    {
      title: "Web Development / Data Analysis Instructor",
      dates: "2021 - 2023",
      location: "LIKELION",
      description:
        "Trained 500+ students from universities including UIT, UEH, USSH, and IUH. Led 4 bootcamps that helped participants find jobs after completion. Built full-stack applications using React, Node.js, and PostgreSQL that increased client satisfaction by 35%. Mentored more than 10 junior developers through workshops and coding sessions. Created training programs that reduced new hire onboarding time by 40%.",
      image: "/likelion.png",
      links: [],
    },
  ],
} as const;
