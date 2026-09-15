const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen w-full mb-16 scroll-mt-16 md:mb-24s lg:mb-36s lg:scroll-mt-24"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="font-bold uppercase tracking-widest text-sky-400 lg:sr-only">
          About
        </h2>
      </div>

      <div className="space-y-6">
        <p>
          DevOps Engineer with practical experience in Linux,
          infrastructure-as-code (Terraform, Ansible), container platforms
          (Docker, ECS, Kubernetes, EKS), CI/CD automation (GitHub Actions,
          GitLab CI), observability stack (Prometheus, Grafana, Loki, Tempo,
          OpenTelemetry), and cloud ecosystems (AWS, DigitalOcean, Vercel) with
          strong scripting in Python and Bash.
        </p>
        <p>
          Well-versed in container lifecycle automation, performance tuning,
          service deployment patterns, network configuration, secrets
          management, and environment consistency, using repeatable IaC
          workflows, and automated release strategies.
        </p>
        <p>
          5 years of experience as a Full-Stack Developer designing and shipping
          end-to-end web applications across productivity, healthcare, project
          management, bots, and developer tools, specializing in end-to-end
          feature ownership, API development, full-stack TypeScript, and
          design-system implementation.
        </p>
      </div>
    </section>
  );
};

export default About;
