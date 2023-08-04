import Image from "next/image";
import background from "@/assets/background.jpg";
import tile from "@/assets/tile.svg";
import { FileBadge, GithubIcon, LinkedinIcon } from "lucide-react";

const links = [
  {
    icon: LinkedinIcon,
    href: "#",
  },
  {
    icon: GithubIcon,
    href: "#",
  },
  {
    icon: FileBadge,
    href: "#",
  },
];

function getAge(dateString: string) {
  let today = new Date();
  let birthDate = new Date(dateString);
  let age = today.getFullYear() - birthDate.getFullYear();
  let m = today.getMonth() - birthDate.getMonth();

  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate() + 1)) age--;

  return age;
}

export default function Home() {
  const age = getAge("2001-02-27");
  const jobAge = getAge("2021-05-01");

  return (
    <>
      <header id="hero" className="relative h-screen">
        {/* background */}
        <div
          className="absolute inset-0 bg-slate-50 bg-center bg-no-repeat"
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
        <div className="relative mx-auto flex max-w-5xl flex-col justify-center pt-20 sm:pt-24 lg:pt-32">
          <div className="relative mx-auto">
            <p className="ml-2 text-lg font-bold uppercase text-slate-700">
              Oi, 👋🏾 sou o Eduardo
            </p>
            <h1 className="relative text-4xl font-black uppercase tracking-wide text-slate-900 sm:text-5xl lg:text-9xl">
              <span>
                React
                <br />
                Developer
              </span>
            </h1>
            <div className="flex justify-end">
              <p className="max-w-md text-end text-xl font-bold text-slate-700">
                Desenvolvedor fullstack com {jobAge} anos como PJ
                <br />
                Tenho {age} anos
              </p>
            </div>
            <div className="absolute right-14 top-16">
              <ul className="flex space-x-8">
                {links.map(({ icon: Icon, href }) => (
                  <li className="h-16 w-16">
                    <a
                      href={href}
                      className="flex h-full w-full items-center justify-center rounded-lg bg-sky-100 text-sky-900 shadow-md ring-1 ring-inset ring-sky-400 transition-all duration-300 hover:bg-sky-200 hover:text-sky-950 hover:ring"
                    >
                      <Icon className="h-10 w-10" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
