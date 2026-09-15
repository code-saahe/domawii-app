import React, { type JSX } from 'react'

function signInButton():JSX.Element{
    return(
         <button
            type="button"
            className="px-4 py-2 text-sm font-medium text-zinc-700 hover:text-zinc-950 transition-colors"
          >
            Sign In
          </button>
    )
}
function customize():JSX.Element{
    return(
          <button
            type="button"
            className="rounded-full bg-zinc-950 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-zinc-800 active:scale-95 transition-all shadow-sm"
          >
            Customize
          </button>
    )
}

function DesktopButtons() {
  return (
    <div className="hidden md:flex items-center gap-4">
        {signInButton()}
        {customize()}
    </div>
  )
}

export default DesktopButtons