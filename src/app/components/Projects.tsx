import React from "react";
import tabletPortifolio from "@/assets/Portifolio/tablet.png";
import mobilePortifolio from "@/assets/Portifolio/mobile.png";
import tabletKlabin from "@/assets/Klabin/tablet.png";
import mobileKlabin from "@/assets/Klabin/mobile.png";
import tabletMaisRX from "@/assets/MaisRX/tablet.png";
import mobileMaisRX from "@/assets/MaisRX/mobile.png";
import tabletFrizzar from "@/assets/Frizzar/tablet.png";
import mobileFrizzar from "@/assets/Frizzar/mobile.png";
import Image from "next/image";

export default function Projects() {
  return (
    <section className="mb-24 px-4 md:px-8">
      <div className="container mx-auto">
        <div className="mt-16 grid grid-cols-1 gap-x-12 gap-y-24 md:grid-cols-2">
          {projects.map((project) => (
            <div key={project.title} className="">
              <div className="flex items-end justify-center">
                <Image
                  src={project.mobile}
                  alt="Portifólio no celular"
                  width={256}
                  height={256}
                  className="z-10 -mr-14 mb-5 h-52 max-w-fit flex-shrink-0"
                />
                <Image
                  src={project.tablet}
                  alt="Portifólio no tablet"
                  width={320}
                  height={320}
                  className="h-96 max-w-fit flex-shrink-0"
                />
              </div>
              <div className="mt-8 text-center">
                <span className="uppercase text-slate-700">
                  {project.label}
                </span>
                <h3 className="mt-2 text-3xl font-semibold text-slate-900">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const projects = [
  {
    label: "Estudo de Next.js",
    title: "Meu portifólio de websites",
    mobile: mobilePortifolio,
    tablet: tabletPortifolio,
  },
  {
    label: "Cliente real",
    title: "Sistema de gerenciamente de aprendizado (LMS)",
    mobile: mobileMaisRX,
    tablet: tabletMaisRX,
  },
  {
    label: "Cliente real",
    title: "E-commerce de papelão",
    mobile: mobileKlabin,
    tablet: tabletKlabin,
  },
  {
    label: "Cliente real",
    title: "Serviço de assinatura de barbearia (Protótipo)",
    mobile: mobileFrizzar,
    tablet: tabletFrizzar,
  },
];
