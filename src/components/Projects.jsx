import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div
      id="projects"
      className="min-h-screen w-full mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="font-bold uppercase tracking-widest text-sky-400 lg:sr-only">
          Projects
        </h2>
      </div>

      <div className="">
        <ol className="group/list">
          <li className="mb-12">
            <ProjectCard
              title="DevOps & Cloud Templates"
              description="Production-ready DevOps and Cloud project templates designed to bootstrap real-world projects with best practices."
              url="https://github.com/miketorreno/devops-cloud-templates"
              techStack={[
                "Nginx",
                "Docker",
                "Kubernetes",
                "Helm",
                "GitHub Actions",
                "AWS",
                "Terraform",
                "Ansible",
                "Prometheus",
                "Grafana",
                "Loki",
                "Tempo",
                "OpenTelemetry",
              ]}
              imgs={["public/devops-cloud-templates.png"]}
            />
          </li>

          <li className="mb-12">
            <ProjectCard
              title="Cloud Platform"
              description="Reusable cloud platform demonstrating modern platform engineering practices."
              url="https://github.com/miketorreno/cloud-platform"
              techStack={[
                "AWS infrastructure",
                "IaC with Terraform",
                "Docker containerization",
                "Kubernetes platform",
                "Helm deployments",
                "CI/CD with GitHub Actions",
                "Prometheus & Grafana monitoring",
                "Loki centralized logging",
                "OpenTelemetry instrumentation",
                "Security best practices",
                "Operational documentation",
                "Production runbooks",
              ]}
              imgs={["public/cloud-platform.png"]}
            />
          </li>

          <li className="mb-12">
            <ProjectCard
              title="Electronic Health Record (EHR) System"
              description="Small scale electronic health record system, secure patient management and appointment scheduling. Features an optimized PostgreSQL database, docker and a full CI/CD pipeline with GitHub Actions for automated, zero-downtime releases."
              url="https://github.com/miketorreno/sshp"
              techStack={[
                "Next.js",
                "TypeScript",
                "Tailwind CSS",
                "Shadcn/ui",
                "Zod",
                "PostgreSQL",
                "Prisma",
                "GitHub Actions",
                "Docker",
              ]}
              imgs={["public/sshp.png"]}
            />
          </li>

          <li className="mb-12">
            <ProjectCard
              title="AI-Powered Telegram Job Bot"
              description="An intelligent bot that connects employers and job seekers on Telegram. Integrates AI to automate key tasks like generating tailored cover letters, building professional resumes, and refining job descriptions."
              url="https://github.com/miketorreno/talent-hive"
              techStack={[
                "Python",
                "python-telegram-bot",
                "Hugging Face",
                "PostgreSQL",
                "Redis",
                "Pytest",
              ]}
              imgs={["public/talent-hive.png"]}
            />
          </li>

          <li className="mb-12">
            <ProjectCard
              title="Handyman Services API"
              description="Robust and reliable API built with Laravel and MySQL to search and rank local handymen. Engineered for performance with optimized search queries to ensure fast results at peak load, and backed by feature tests ensuring 100% critical path coverage."
              url="https://github.com/miketorreno/handyman-api"
              techStack={["Laravel", "PHP", "MySQL", "PHPUnit"]}
              imgs={["public/handyman-api.png"]}
            />
          </li>

          <li className="mb-12">
            <ProjectCard
              title="Habit Tracker"
              description="Productivity app that combines habit tracking, task timing, and progress visualization. It supports multiple calendars and habits, allowing you to customize your approach to personal growth. Featuring an activity grid similar to GitHub's contribution tracker, it offers a clear view of your achievements over time."
              url="https://github.com/miketorreno/streaks"
              techStack={[
                "Next.js",
                "Convex",
                "Clerk",
                "TypeScript",
                "Shadcn/ui",
                "Tailwind CSS",
              ]}
              imgs={["public/streaks.png"]}
            />
          </li>

          <li className="mb-12">
            <ProjectCard
              title="Donation Platform"
              description="Donation platform designed to empower nonprofits, independent creators, and community projects to raise funds seamlessly. It features a user-friendly interface, secure payment processing, and a robust admin dashboard for efficient management."
              url="https://github.com/miketorreno/donation-platform"
              techStack={["Django", "Python", "MySQL", "JavaScript"]}
              imgs={["public/donation-platform.png"]}
            />
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Projects;
