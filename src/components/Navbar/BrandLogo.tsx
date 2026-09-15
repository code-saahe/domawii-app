import { type JSX } from 'react'

type LogoInfo={
    logoName:string
    logoDescription:string

}
function BrandLogo(logoInfo:LogoInfo):JSX.Element {
  return (
    <a href="#" className="flex flex-
    col tracking-tight group select-none">
          <span className="font-serif text-2xl sm:text-3xl font-black tracking-widest text-zinc-950 uppercase transition-colors group-hover:text-zinc-700">
            {logoInfo.logoName}
          </span>
          <span className="text-[10px] tracking-[0.3em] text-zinc-400 font-semibold uppercase -mt-1">
            {logoInfo.logoDescription}
          </span>
        </a>
  )
}

export default BrandLogo