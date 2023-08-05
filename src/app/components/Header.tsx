import React from "react";
import background from "@/assets/background.jpg";
import tile from "@/assets/tile.svg";
import { FileBadgeIcon, GithubIcon, LinkedinIcon } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/Tooltip";

const links = [
  {
    icon: LinkedinIcon,
    href: "https://www.linkedin.com/in/eduardo-santos-86b07020b/",
    hover: "Linkedin",
    target: "blank",
  },
  {
    icon: GithubIcon,
    href: "https://github.com/Edu-Arcanjo",
    hover: "GitHub",
    target: "blank",
  },
  {
    icon: FileBadgeIcon,
    href: "#",
    hover: "Currículo",
  },
];

export default function Header() {
  return (
    <header
      id="hero"
      className="relative -z-10 flex h-screen scroll-mt-16 flex-col items-center justify-center px-4 md:px-8"
    >
      {/* background */}
      <div
        className="absolute inset-0 bg-slate-50 bg-bottom bg-no-repeat"
        style={{ backgroundImage: `url(${background.src})` }}
      >
        <div
          className="absolute inset-0 bg-center"
          style={{
            backgroundImage: `url(${tile.src})`,
            WebkitMaskImage: "linear-gradient(transparent, black)",
          }}
        />
      </div>

      {/* content */}
      <div className="container relative">
        <div className="mx-auto flex max-w-5xl flex-col justify-center">
          <div className="relative mx-auto">
            <p className="mb-4 text-center font-bold text-slate-700 md:ml-2 md:text-left md:text-xl">
              Oi, 👋🏾 sou o Eduardo
            </p>
            <h1 className="relative text-center text-5xl font-black uppercase tracking-wide text-slate-900 sm:text-5xl md:text-left md:text-8xl lg:max-w-none lg:text-9xl">
              React
              <br />
              Developer
            </h1>
            <div className="mt-6 flex justify-center md:absolute md:right-2 md:top-12 lg:right-3 lg:top-14">
              <ul className="flex space-x-12 md:space-x-8">
                {links.map(({ icon: Icon, href, target, hover }) => (
                  <li>
                    <TooltipProvider delayDuration={0}>
                      <Tooltip>
                        <TooltipTrigger>
                          <a
                            href={href}
                            className="flex h-10 w-10 items-center justify-center rounded-lg bg-sky-100 text-sky-900 shadow-md ring-1 ring-inset ring-sky-400 transition-all duration-300 hover:bg-sky-200 hover:text-sky-950 hover:ring md:h-12 md:w-12 lg:h-16 lg:w-16"
                            target={target}
                          >
                            <Icon className="md:h-8 md:w-8 lg:h-10 lg:w-10" />
                          </a>
                        </TooltipTrigger>
                        <TooltipContent>{hover}</TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
