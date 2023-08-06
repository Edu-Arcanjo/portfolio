"use client";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/Tooltip";
import { cva } from "class-variance-authority";
import { CopyCheckIcon, MailIcon } from "lucide-react";
import React, { useRef, useState } from "react";

export default function CopyMail() {
  const [copied, setCopied] = useState(false);

  const emailRef = useRef<HTMLButtonElement>(null);

  const handleEmailCopy = () => {
    const email = emailRef.current?.textContent;
    navigator.clipboard.writeText(email!);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div className="mt-8">
      <TooltipProvider delayDuration={100}>
        <Tooltip>
          <TooltipTrigger asChild>
            <button
              type="button"
              disabled={copied}
              onClick={handleEmailCopy}
              ref={emailRef}
              className={buttonVariants({
                intent: copied ? "success" : "primary",
              })}
            >
              {copied ? (
                <CopyCheckIcon className="md:h-8 md:w-8" />
              ) : (
                <MailIcon className="md:h-8 md:w-8" />
              )}
              <span className="flex-1 text-center text-sm font-semibold tracking-wide md:text-lg">
                contato@eduarcanjo.com.br
              </span>
            </button>
          </TooltipTrigger>
          <TooltipContent>Copiar email</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
}

const buttonVariants = cva(
  "flex h-10 max-w-fit items-center gap-4 rounded-lg px-4 shadow-md ring-1 ring-inset transition duration-300 hover:ring md:h-12",
  {
    variants: {
      intent: {
        primary: "bg-sky-100 text-sky-900 ring-sky-400 hover:bg-sky-200",
        success:
          "bg-emerald-100 text-emerald-900 ring-emerald-400 hover:bg-emerald-200",
      },
    },
  },
);
