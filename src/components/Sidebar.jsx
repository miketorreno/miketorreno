import { BiLogoGithub, BiLogoLinkedin, BiLogoTwitter } from "react-icons/bi";

const Sidebar = () => {
  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:flex-col lg:justify-between py-12 lg:py-24">
      <div>
        <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
          <a href="/">Mikiyas Kebede</a>
        </h1>
        <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
          DevOps Engineer
        </h2>
        <p className="mt-4 max-w-xs leading-normal">
          I turn software into reliable, automate, production-ready systems.
        </p>

        <nav className="nav hidden lg:block">
          <ul className="mt-16 w-max">
            <li>
              <a className="group flex items-center py-3 active" href="#about">
                <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                  About
                </span>
              </a>
            </li>
            <li>
              <a className="group flex items-center py-3" href="#experience">
                <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                  Experience
                </span>
              </a>
            </li>
            <li>
              <a className="group flex items-center py-3" href="#projects">
                <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                  Projects
                </span>
              </a>
            </li>
            <li>
              <a className="group flex items-center py-3" href="#contact">
                <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                  Contact
                </span>
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <ul className="ml-1 mt-8 flex items-center">
        <li className="mr-5 shrink-0 text-xs">
          <a href="https://github.com/miketorreno" target="_blank">
            <BiLogoGithub className="h-10 w-10 cursor-pointer rounded-full border-2 border-transparent p-2 bg-sky-600 text-slate-200 transition-all duration-200 hover:scale-110 hover:border-sky-600 hover:bg-slate-200 hover:text-sky-600 md:h-10 md:w-10" />
          </a>
        </li>
        <li className="mr-5 shrink-0 text-xs">
          <a
            href="https://www.linkedin.com/in/mikiyas-kebede-a2877220a/"
            target="_blank"
          >
            <BiLogoLinkedin className="h-10 w-10 cursor-pointer rounded-full border-2 border-transparent p-2 bg-sky-600 text-slate-200 transition-all duration-200 hover:scale-110 hover:border-sky-600 hover:bg-slate-200 hover:text-sky-600 md:h-10 md:w-10" />
          </a>
        </li>
        <li className="mr-5 shrink-0 text-xs">
          <a href="https://x.com/mike_torreno" target="_blank">
            <BiLogoTwitter className="h-10 w-10 cursor-pointer rounded-full border-2 border-transparent p-2 bg-sky-600 text-slate-200 transition-all duration-200 hover:scale-110 hover:border-sky-600 hover:bg-slate-200 hover:text-sky-600 md:h-10 md:w-10" />
          </a>
        </li>
      </ul>
    </header>
  );
};

export default Sidebar;
