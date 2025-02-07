import React from "react";
import Header from "./components/Header";
import About from "./components/About";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <Header />

      <About />

      {/* Projects Section */}
      <section className="p-8 bg-gray-50 scroll-mt-24" id="projects">
        <h2 className="text-2xl font-bold mb-4 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="shadow-md p-4 bg-white rounded-md">
            <h3 className="font-semibold text-lg">GitHub Repositories</h3>
            <p className="text-sm mb-2">
              Explore my projects and code contributions on my GitHub profile.
            </p>
            <a
              href="https://github.com/Robertoct952?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              View GitHub
            </a>
          </div>
          <div className="shadow-md p-4 bg-white rounded-md">
            <h3 className="font-semibold text-lg">RoomieHQ</h3>
            <p className="text-sm mb-2">
              A private project showcasing my work with web development.
            </p>
            <p className="text-sm italic">Note: This project is private.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="p-4 bg-gray-800 text-white text-center">
        <p>Designed by Roberto Torres | Full-Stack Developer</p>
      </footer>
    </div>
  );
}
