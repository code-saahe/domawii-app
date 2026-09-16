import type { JSX } from "react";

type PillTagName = {
  pillName: string;
};
type MainWordsLogo = {
  logoName: string;
  descript1: string;
  descript2: string;
  descript3: string;
};
type SubTexter = {
  text: string;
};

export function PillTag({ pillName }: PillTagName): JSX.Element {
  return (
    <div className="mx-auto lg:mx-0 inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-50 px-4 py-1.5 text-xs font-semibold tracking-wider text-zinc-700 uppercase">
      <span className="h-1.5 w-1.5 rounded-full bg-zinc-950 animate-pulse" />
      {pillName}
    </div>
  );
}

export function MainHeadline({
  logoName,
  descript1,
  descript2,
  descript3,
}: MainWordsLogo): JSX.Element {
  return (
    <h1 className="mt-6 font-serif text-5xl font-black tracking-tight text-zinc-950 sm:text-7xl lg:text-7xl lg:leading-[1.1]">
      {logoName} <br />
      {descript1} <br />
      <span className="italic font-normal text-zinc-500 font-serif">
        {descript2}
      </span>{" "}
      {descript3}
    </h1>
  );
}
export function SubText({ text }: SubTexter): JSX.Element {
  return (
    <p className="mt-6 max-w-2xl mx-auto lg:mx-0 text-base leading-relaxed text-zinc-600 sm:text-lg">
      {text}
    </p>
  );
}
export function CallToAction(): JSX.Element {
  return (
    <div className="mt-10 flex w-full flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start sm:w-auto">
      <a
        href="#designer"
        className="inline-flex items-center justify-center rounded-full bg-zinc-950 px-10 py-4.5 text-xs font-bold uppercase tracking-widest text-white shadow-lg shadow-zinc-950/15 hover:bg-zinc-800 hover:shadow-zinc-950/25 active:scale-[0.98] transition-all"
      >
        Start Your Design
        <svg
          className="ml-2.5 h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          />
        </svg>
      </a>

      <a
        href="#samples"
        className="inline-flex items-center justify-center rounded-full border border-zinc-300 bg-white px-10 py-4.5 text-xs font-bold uppercase tracking-widest text-zinc-800 hover:bg-zinc-50 hover:border-zinc-400 active:scale-[0.98] transition-all"
      >
        Request Sample Kit
      </a>
    </div>
  );
}
export function QuickMetrics(): JSX.Element {
  return (
    <div className="mt-16 grid grid-cols-2 gap-x-8 gap-y-6 border-t border-zinc-200/80 pt-10 w-full max-w-xl mx-auto lg:mx-0">
      <div className="flex gap-4 items-center">
        <div className="p-3 bg-zinc-100 rounded-xl border border-zinc-200">
          <svg
            className="w-6 h-6 text-zinc-950"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
        </div>
        <div className="text-left">
          <p className="font-bold text-zinc-950 text-lg">No Minimums</p>
          <p className="text-sm text-zinc-500 mt-0.5">
            Order 1 or 1,000+ pieces.
          </p>
        </div>
      </div>
      <div className="flex gap-4 items-center">
        <div className="p-3 bg-zinc-100 rounded-xl border border-zinc-200">
          <svg
            className="w-6 h-6 text-zinc-950"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M13 10V3L4 14h7v7l9-11h-7z"
            />
          </svg>
        </div>
        <div className="text-left">
          <p className="font-bold text-zinc-950 text-lg">48-Hr Print</p>
          <p className="text-sm text-zinc-500 mt-0.5">
            Rapid production turnarounds.
          </p>
        </div>
      </div>
    </div>
  );
}
