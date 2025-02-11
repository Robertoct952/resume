"use client";

import Image from "next/image";
import Link from "next/link";

export default function Projects() {
  const projects = [
    {
      title: "RoomieHQ",
      description: (
        <>
          {" "}
          RoomieHQ is a project of mine that was designed to help users look for
          their future roommates and a shared living space in one website. I
          wish to finish where I left off once I learn more about how to
          integrate an innovative AI to help match users together in their
          desired cities. I played with mock data from an api and I stopped
          after initializing the <strong>dashboard</strong> page.
        </>
      ),
      skills: ["Tailwind CSS", "React"],
      image: "/images/website.png",
      link: "https://roomiehq.com",
      github: "https://github.com/Robertoct952?tab=repositories",
    },
    {
      title: "Repair Shop",
      description:
        "The Repair Shop project is a management tool I made following a YouTube course on Nextjs 15. It helps them efficiently track employee tasks and customer requests. It relies on the usage of a table to allow the user to easily view and navigate through employee tasks and customer requests. The integration of Sentry for error tracking and NeonDB for database management ensures reliability and scalability.",
      skills: ["Next.js", "Tailwind CSS", "Sentry", "NeonDB"],
      image: "/images/repairshop.png",
      link: "https://github.com/Robertoct952/repairshop",
      github: "https://github.com/Robertoct952?tab=repositories",
    },
  ];

  return (
    <section id="projects" className="py-12 bg-white scroll-mt-24">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold text-yellow-500">Projects</h2>
          <div className="w-24 h-1 bg-yellow-500 mt-2 mx-auto"></div>{" "}
        </div>

        {/* Projects Grid */}
        <div className="space-y-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`grid grid-cols-1 md:grid-cols-2 gap-8 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Project Description */}
              <div className="p-6 flex flex-col justify-center">
                <h3 className="text-2xl font-semibold mb-4 text-center">
                  {project.title}
                </h3>
                <p className="text-black text-lg mb-4">{project.description}</p>

                {/* Skills Used */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-2">Skills Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-yellow-500 text-white rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex flex-wrap gap-4">
                  <Link
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition"
                  >
                    <span>Visit Website</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 ml-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </Link>
                  <Link
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition"
                  >
                    <span>View on GitHub</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 ml-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </Link>
                </div>
              </div>

              {/* Project Image */}
              <Link
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="relative h-96 w-full group overflow-hidden"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
