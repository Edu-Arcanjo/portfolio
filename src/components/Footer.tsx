import { FileBadgeIcon, GithubIcon, LinkedinIcon } from "lucide-react";
import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./Tooltip";
import CopyMail from "@/app/components/CopyMail";

export default function Footer() {
  return (
    <footer className="flex justify-center border-t border-slate-300 bg-slate-200 px-8">
      <div className="container my-12 flex flex-col md:grid md:grid-cols-[1fr_max-content_1fr] md:grid-rows-2 lg:grid-cols-2 lg:gap-x-12">
        <div className="flex flex-col items-center justify-center md:row-span-2">
          <span className="text-3xl md:row-span-2 md:text-4xl">
            Eduardo Arcanjo
          </span>
          <span className="mt-1 text-xl font-bold tracking-wide md:mt-2 md:text-2xl">
            React Developer
          </span>
        </div>
        <div className="mx-auto my-12 h-px w-full bg-slate-400 md:row-span-2 md:mx-8 md:my-0 md:block md:h-full md:w-px lg:hidden" />
        {/* <div className="bg-slate-400 md:row-span-2 md:mx-8 md:block md:h-full md:w-px lg:hidden" /> */}
        <ul className="flex justify-center space-x-4 md:row-span-1 md:mt-0 md:space-x-8">
          {links.map(({ icon: Icon, href, target, hover }) => (
            <li key={href}>
              <TooltipProvider delayDuration={100}>
                <Tooltip>
                  <TooltipTrigger>
                    <a
                      href={href}
                      className="flex h-10 w-10 items-center justify-center rounded-lg bg-sky-100 text-sky-900 shadow-md ring-1 ring-inset ring-sky-400 transition-all duration-300 hover:bg-sky-200 hover:text-sky-950 hover:ring md:h-12 md:w-12"
                      target={target}
                    >
                      <Icon className="md:h-8 md:w-8" />
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>{hover}</TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </li>
          ))}
        </ul>
        <div className="mt-4 flex justify-center md:col-span-1 md:mt-2">
          <CopyMail />
        </div>
      </div>
    </footer>
  );
}

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
