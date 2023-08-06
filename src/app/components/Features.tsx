import {
  BirdIcon,
  BriefcaseIcon,
  CalendarIcon,
  MedalIcon,
  StarIcon,
  Users2Icon,
} from "lucide-react";
import React from "react";

function getAge(dateString: string) {
  let today = new Date();
  let birthDate = new Date(dateString);
  let age = today.getFullYear() - birthDate.getFullYear();
  let m = today.getMonth() - birthDate.getMonth();

  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate() + 1)) age--;

  return age;
}

export default function Features() {
  const age = getAge("2001-02-27");
  const jobAge = getAge("2021-05-01");

  return (
    <div className="px-2">
      <div className="container mx-auto flex gap-12">
        <div className="z-10 -mt-20 grid w-full grid-cols-1 justify-center gap-y-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="mx-auto w-full max-w-xs border border-slate-200 bg-slate-50 p-8 shadow-md">
            <h2 className="mb-4 text-3xl font-bold text-slate-900">
              Quem sou?
            </h2>
            <ul className="flex flex-col gap-3 text-lg">
              <li className="flex items-center">
                <BriefcaseIcon className="mr-2 text-sky-500" /> Desenvolvedor
                frontend
              </li>
              <li className="flex items-center">
                <BirdIcon className="mr-2 text-sky-500" /> Há {jobAge} anos como
                frelancer
              </li>
              <li className="flex items-center">
                <CalendarIcon className="mr-2 text-sky-500" /> Tenho {age} anos
              </li>
            </ul>
          </div>
          <div className="mx-auto w-full max-w-xs border border-slate-200 bg-slate-50 p-8 shadow-md">
            <h2 className="mb-4 text-3xl font-bold text-slate-900">
              E no Workana?
            </h2>
            <ul className="flex flex-col gap-3 text-lg">
              <li className="flex items-center">
                <MedalIcon className="mr-2 text-sky-500" />
                Tier <strong className="ml-1 text-amber-600">Gold</strong>
              </li>
              <li className="flex items-center">
                <StarIcon className="mr-2 text-sky-500" />
                Classifição média 4.3/5.0
              </li>
              <li className="flex items-center">
                <Users2Icon className="mr-2 text-sky-500" />7 clientes
                satisfeitos
              </li>
            </ul>
          </div>
          <div className="mx-auto w-full max-w-xs border border-slate-200 bg-slate-50 p-8 shadow-md md:hidden lg:block">
            <h2 className="mb-4 text-3xl font-bold text-slate-900">
              E no GitHub?
            </h2>
            <ul className="flex flex-col gap-3 text-lg">
              <li className="flex items-center">
                <b className="mr-2 text-sky-600">82%</b> Commits
              </li>
              <li className="flex items-center">
                <b className="mr-2 text-sky-600">10%</b> Pull requests
              </li>
              <li className="flex items-center">
                <b className="mr-2 text-sky-600">07%</b> Issues
              </li>
              <li className="flex items-center">
                <b className="mr-2 text-sky-600">01%</b> Code review
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-4 text-center text-sm text-slate-600">
        *Dados do Workana e GitHub de Julho de 2023
      </div>
    </div>
  );
}
