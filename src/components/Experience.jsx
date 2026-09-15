import ExperienceCard from "./ExperienceCard";

const Experience = () => {
  return (
    <div
      id="experience"
      className="min-h-screen w-full mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="font-bold uppercase tracking-widest text-sky-400 lg:sr-only">
          Experience
        </h2>
      </div>

      <div className="">
        <ol className="group/list">
          <li className="mb-12">
            <ExperienceCard
              role="DevOps and Backend Developer"
              company="Today Technologies, Addis Ababa"
              startDate="Dec 2024"
              endDate="Present"
              description="At Today Technologies, I bridge the gap between development and operations by architecting a modular AWS ecosystem using Terraform and ECS, reducing environment spin-up times from hours to under 30 minutes. I specialize in high-efficiency CI/CD and observability, having slashed build times up to 70% via Docker layer caching and reduced mean diagnostic time from an hour to 15 minutes through a comprehensive LGTM and OpenTelemetry stack. Combining a strong backend foundation in NestJS and PostgreSQL with a DevOps mindset, I build scalable, production-ready systems from AI-powered bot ecosystems to offline-first healthcare platforms with a focus on stability and developer velocity."
              techStack={[
                "AWS",
                "Terraform",
                "Docker",
                "Nginx",
                "GitHub Actions",
                "Ansible",
                "Turborepo",
                "TypeScript",
                "React",
                "Shadcn/ui",
                "NestJS",
                "PostgreSQL",
                "Vitest",
                "Jest",
              ]}
            />
          </li>

          <li className="mb-12">
            <ExperienceCard
              role="Senior Full-Stack Developer"
              company="KanaBet, Addis Ababa"
              startDate="Sep 2023"
              endDate="Dec 2024"
              description="Streamlined the software delivery lifecycle by implementing CI/CD pipelines using GitHub Actions and Docker based containerization for consistent deployments. Expert at reducing operational toil, evidenced by developing a Telegram bot that significantly decreased support ticket resolution times. Committed to high-availability and performance, having optimized data processing latency by 35% for a 2,000+ DAU environment and rigorous testing raised system coverage from 47% to 83%."
              techStack={[
                "Docker",
                "GitHub Actions",
                "Nginx",
                "TypeScript",
                "React",
                "Next.js",
                "Node.js",
                "PostgreSQL",
                "grammY",
                "Batch",
              ]}
            />
          </li>

          <li className="mb-12">
            <ExperienceCard
              role="Instructor"
              company="iCog-ACC, Addis Ababa"
              startDate="Jun 2024"
              endDate="Aug 2024"
              description="As an instructor I was responsible for educating large cohorts of over 100 students in a range of modern technology concepts, including programming with Python and Scratch, web development, and AI/ML. To ensure learning moved beyond theory, I designed and led a curriculum of hands-on mini-projects—such as building games, developing simple blogs, and creating image classifiers with machine learning—which allowed students to reinforce their knowledge through direct, practical application."
              techStack={[
                "AI",
                "Machine Learning",
                "Python",
                "JavaScript",
                "HTML",
                "CSS",
                "Scratch",
              ]}
            />
          </li>

          <li className="mb-12">
            <ExperienceCard
              role="Manager, Lead Engineer"
              company="BetMe, Addis Ababa"
              startDate="Aug 2022"
              endDate="Sep 2023"
              description="In this leadership role, I led cross-functional teams that included developers, accountants, digital marketers, and customer support agents, ensuring cohesive strategy and execution across the company. A key achievement was the development of internal tools and customer self-service solutions using TypeScript, React, Node.js, and batch scripts. These initiatives directly empowered our support teams, leading to a significant reduction in system issue reports and faster ticket resolution times. Complementing these internal improvements, I also managed digital advertising campaigns on Google Ads and Facebook, successfully increasing user acquisition and enhancing our overall brand visibility."
              techStack={[
                "Docker",
                "TypeScript",
                "React",
                "Node.js",
                "PostgreSQL",
                "grammY",
                "Batch",
              ]}
            />
          </li>

          <li className="mb-12">
            <ExperienceCard
              role="Full-Stack Developer"
              company="Metropolitan Tabernacle, Bishoftu"
              startDate="Feb 2022"
              endDate="Aug 2022"
              description="As a full-stack developer I was responsible with transforming the organization's digital fundraising capabilities and online presence. I developed of an online donation system from the ground up using Django and MySQL. By implementing a key feature that allowed global donors to browse and select beneficiaries, we created a more personal and engaging user experience, which directly resulted in a 200% increase in quarterly donations. In addition to this core project, I also designed and developed the organization's official website, establishing a professional online presence."
              techStack={["Python", "Django", "MySQL", "JavaScript"]}
            />
          </li>

          <li className="mb-12">
            <ExperienceCard
              role="Freelancer"
              company=""
              startDate="Sept 2021"
              endDate="Mar 2023"
              description="My freelance work focuses on providing end-to-end development services for web, mobile, and chat platforms. I have successfully delivered full-stack applications through direct consultation with clients, built user-friendly cross-platform mobile apps with Flutter, and deployed custom Telegram bots and mini-apps to meet unique business requirements."
              techStack={[
                "React",
                "Node.js",
                "Express.js",
                "MongoDB",
                "Laravel",
                "MySQL",
                "PostgreSQL",
                "Firebase",
                "Docker",
                "Redis",
                "python-telegram-bot",
                "grammY",
              ]}
            />
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Experience;
