import { CodeIcon } from "lucide-react";
import React from "react";

export default function Favicon() {
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <div className="from flex h-96 w-96 items-center justify-center overflow-clip rounded-3xl bg-gradient-to-br from-pink-300 from-10% via-violet-400 to-sky-300  text-9xl font-bold tracking-wider text-slate-100">
        <CodeIcon className="h-full w-full p-2 text-slate-100" />
      </div>
    </div>
  );
}
