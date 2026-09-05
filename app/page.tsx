import type { ReactNode } from "react";
import { ThemeToggle } from "./components/theme-toggle";

function SectionHeading({
  children,
  id,
}: {
  children: ReactNode;
  id?: string;
}) {
  return (
    <h2
      id={id}
      className="text-sm font-bold uppercase tracking-widest text-indigo-700 dark:text-indigo-400"
    >
      {children}
    </h2>
  );
}

type Experience = {
  role: string;
  organization: string;
  dates: string;
  bullets: string[];
};

const experience: Experience[] = [
  {
    role: "Senior Full Stack Web Developer",
    organization: "BackBone Labs",
    dates: "Jan 2022 - Present",
    bullets: [
      "Architected backend API and database schema for multi-chain NFT Marketplace (Necropolis) and Launchpad (Necromancer) serving thousands of active users",
      "Led technical decisions on system architecture, database optimization, and API design for high-traffic production apps",
      "Implemented CI/CD for smart contract deployments and web app releases across multiple blockchain networks",
      "Maintained and enhanced LST platform (Gravedigger) with focus on system reliability and UX",
      "Remote collaboration with international team, providing technical leadership and code reviews",
    ],
  },
  {
    role: "Owner/Software Developer",
    organization: "Reality Flux, LLC",
    dates: "Jan 2021 - Present",
    bullets: [
      "Full-stack dApp development with TypeScript and modern frontend frameworks for blockchain interaction",
      "Comprehensive testing suites using Mocha/TypeScript for smart contract validation",
      "Custom API endpoints for data retrieval and filtering",
      "Production-ready escrow system for NFT domain name transfers (adopted as FIO chain system contract)",
    ],
  },
  {
    role: "Senior Software Developer",
    organization: "Orbital Command",
    dates: "Apr 2021 - Apr 2022",
    bullets: [
      "High-performance arbitrage bots using TypeScript/Node.js for real-time blockchain trading",
      "Smart contract development and technical architecture decisions",
    ],
  },
  {
    role: "Software Developer III",
    organization: "Tetra Tech",
    dates: "Mar 2020 - Aug 2021",
    bullets: [
      "Developed Drug/Alcohol abatement management portal for FAA using Angular 8 and ASP.NET Core",
      "Mentored junior developers in Agile environment",
      "Full-stack development with SQL Server, Entity Framework Core 3.0, Elasticsearch",
      "Mission-critical federal aviation administration regulatory compliance application",
    ],
  },
  {
    role: "Software Developer",
    organization: "amshot",
    dates: "Oct 2017 - Mar 2020",
    bullets: [
      "Full-stack applications with Angular 2+, .NET, and PHP for multiple client projects",
      "Led technical interviews and mentored junior/mid-level developers",
      "Built reports and dashboards using Power BI",
      "Project estimations and technical consultation",
      "Due diligence apps, tax management systems, database conversion tools",
    ],
  },
];

type SkillGroup = {
  heading: string;
  skills: string;
};

const skillGroups: SkillGroup[] = [
  {
    heading: "Languages",
    skills: "TypeScript, JavaScript, Node.js, Rust, C#, HTML5, CSS3, SQL",
  },
  {
    heading: "Frontend",
    skills: "React, Next.js, Angular, PrimeNG, Responsive Design",
  },
  {
    heading: "Backend",
    skills: "Express.js, ASP.NET Core, RESTful APIs, Microservices",
  },
  {
    heading: "Databases",
    skills: "MySQL, SQL Server, PostgreSQL, Entity Framework, Knex.js",
  },
  {
    heading: "DevOps",
    skills: "CI/CD, Git, Testing (Mocha, Unit Testing), Deployment Automation",
  },
  {
    heading: "Blockchain",
    skills: "Smart Contracts, Cosmos SDK, CosmWasm, IBC, EOSIO, Bitcoin Core",
  },
];

const leadershipCommunity = [
  "UCO Computer Science Advisory Board (2023 - Present)",
  "Teaching Assistant, CTRL+SHIFT Code School (Oct - Dec 2019) — Mentored women in tech",
  "Robotics Team Mentor, Metro Technology Centers (Aug 2018 - Apr 2019) — FIRST Robotics",
];

const education = [
  {
    title: "CompTIA Security+ Certification",
    detail: undefined as string | undefined,
  },
  {
    title: "Information Technology Specialist (25B), U.S. Army",
    detail: "Ft. Gordon School of Information Technology (2010)",
  },
  {
    title: "AS, Business Administration",
    detail: "American InterContinental University (2005)",
  },
];

export default function Home() {
  const year = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-100">
      <div className="mx-auto max-w-2xl px-4 py-10 sm:px-6 sm:py-14">
        <div className="mb-8 flex items-start justify-between gap-4">
          <header>
            <h1 className="text-3xl font-bold sm:text-4xl">Thomas Le</h1>
            <p className="mt-1 text-indigo-700 dark:text-indigo-400">
              Senior Full-Stack JavaScript Engineer
            </p>
            <h2 className="mt-3 text-base">Contact</h2>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
              Oklahoma City, OK ·{" "}
              <a
                href="mailto:thomas@thomasle.dev"
                className="underline underline-offset-2 hover:text-indigo-700 dark:hover:text-indigo-400"
              >
                thomas@thomasle.dev
              </a>
              <br />
              <a
                href="https://github.com/tvl83"
                className="underline underline-offset-2 hover:text-indigo-700 dark:hover:text-indigo-400"
              >
                github.com/tvl83
              </a>
              {" · "}
              <a
                href="https://linkedin.com/in/thomasvanle"
                className="underline underline-offset-2 hover:text-indigo-700 dark:hover:text-indigo-400"
              >
                linkedin.com/in/thomasvanle
              </a>
              {" · "}
              <a
                href="https://realityflux.llc"
                className="underline underline-offset-2 hover:text-indigo-700 dark:hover:text-indigo-400"
              >
                realityflux.llc
              </a>
            </p>
          </header>
          <div className="mt-1 shrink-0">
            <ThemeToggle />
          </div>
        </div>

        <main>
          <section aria-labelledby="summary">
            <SectionHeading id="summary">Professional Summary</SectionHeading>
            <p className="mt-3 text-sm leading-relaxed text-gray-700 dark:text-gray-200">
              Senior full-stack JavaScript engineer with 10+ years of
              professional development experience and 20+ years of total
              programming expertise. Proven track record of architecting and
              shipping large-scale, production-ready applications serving
              thousands of users. Specializes in React, Node.js, and modern web
              technologies with extensive experience in blockchain development,
              technical leadership, mentoring, and collaborative development.
              Passionate about open source contributions and building robust,
              scalable systems. U.S. Army veteran. Founder of Reality Flux,
              LLC.
            </p>
          </section>

          <section aria-labelledby="experience" className="mt-10">
            <SectionHeading id="experience">Professional Experience</SectionHeading>
            <div className="mt-4 space-y-8">
              {experience.map((entry) => (
                <article key={`${entry.role}-${entry.organization}`}>
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <h3 className="text-base font-semibold">{entry.role}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {entry.dates}
                    </p>
                  </div>
                  <p className="text-sm text-indigo-700 dark:text-indigo-400">
                    {entry.organization}
                  </p>
                  <ul className="mt-2 list-disc space-y-1.5 pl-5 text-sm text-gray-700 dark:text-gray-200">
                    {entry.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </section>

          <section aria-labelledby="skills" className="mt-10">
            <SectionHeading id="skills">Technical Skills</SectionHeading>
            <dl className="mt-4 space-y-3 text-sm">
              {skillGroups.map((group) => (
                <div
                  key={group.heading}
                  className="sm:grid sm:grid-cols-[7rem_1fr] sm:gap-4"
                >
                  <dt className="font-semibold">{group.heading}</dt>
                  <dd className="sm:mt-0">{group.skills}</dd>
                </div>
              ))}
            </dl>
          </section>

          <section aria-labelledby="leadership" className="mt-10">
            <SectionHeading id="leadership">Leadership & Community</SectionHeading>
            <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-gray-700 dark:text-gray-200">
              {leadershipCommunity.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="education" className="mt-10">
            <SectionHeading id="education">Education & Certifications</SectionHeading>
            <ul className="mt-3 space-y-3 text-sm">
              {education.map((item) => (
                <li key={item.title}>
                  <span className="font-semibold">{item.title}</span>
                  {item.detail ? (
                    <span className="text-gray-500 dark:text-gray-400">
                      {" "}
                      — {item.detail}
                    </span>
                  ) : null}
                </li>
              ))}
            </ul>
          </section>
        </main>

        <footer className="mt-12 border-t pt-6 text-center text-xs text-gray-400 dark:text-gray-500">
          © {year} Thomas Le
        </footer>
      </div>
    </div>
  );
}