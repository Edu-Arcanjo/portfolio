"use client";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/Tooltip";
import { CopyCheckIcon, MailIcon } from "lucide-react";
import React, { useRef, useState } from "react";

const classNames = [
  "bg-emerald-400",
  "hover:bg-emerald-400",
  "text-emerald-900",
  "ring-emerald-600",
];

export default function CopyMail() {
  const [copied, setCopied] = useState(false);

  const emailRef = useRef<HTMLButtonElement>(null);

  const handleEmailCopy = () => {
    const email = emailRef.current?.textContent;
    navigator.clipboard.writeText(email!);
    setCopied(true);
    emailRef.current?.classList.add(...classNames);

    setTimeout(() => {
      setCopied(false);
      emailRef.current?.classList.remove(...classNames);
    }, 1500);
  };

  return (
    <div className="mt-8">
      <TooltipProvider delayDuration={0}>
        <Tooltip>
          <TooltipTrigger>
            <button
              type="button"
              disabled={copied}
              onClick={handleEmailCopy}
              ref={emailRef}
              className="flex h-10 max-w-fit items-center gap-4 rounded-lg bg-sky-100 px-4 text-sky-900 shadow-md ring-1 ring-inset ring-sky-400 transition duration-300 hover:bg-sky-200 hover:ring md:h-12"
            >
              {copied ? (
                <CopyCheckIcon className="md:h-8 md:w-8" />
              ) : (
                <MailIcon className="md:h-8 md:w-8" />
              )}
              <div className="flex-1 text-center text-sm font-semibold tracking-wide md:text-lg">
                contato@eduarcanjo.com.br
              </div>
            </button>
          </TooltipTrigger>
          <TooltipContent>Copiar email</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
}
