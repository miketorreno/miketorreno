import "./App.css";
import About from "./components/About";
import Sidebar from "./components/Sidebar";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Experience from "./components/Experience";

function App() {
  return (
    <div className="bg-slate-900">
      <div className="mx-auto flex flex-wrap min-h-screen max-w-screen-xl subpixel-antialiased text-slate-400 px-6 md:px-12 tracking-wide">
        <div className="w-full flex-none lg:flex-2/5 space-y-15 mb-20 lg:mb-0">
          <Sidebar />
        </div>

        <main className="w-full flex-none lg:flex-3/5 pl-6 py-12 lg:py-24">
          <About />
          <Experience />
          <Projects />
          <Contact />
        </main>
      </div>
    </div>
  );
}

export default App;
