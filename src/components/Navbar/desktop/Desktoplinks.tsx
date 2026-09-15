import type { JSX } from "react/jsx-runtime";


const navLinks = [
    { label: 'Design Lab', href: '#designer' },
    { label: 'Collection', href: '#collection' },
    { label: 'Bulk Orders', href: '#bulk' },
    { label: 'Lookbook', href: '#lookbook' },
  ];

function Desktoplinks():JSX.Element {
  return (
    <nav className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide text-zinc-600">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="transition-colors hover:text-zinc-950"
            >
              {link.label}
            </a>
          ))}
        </nav>

  )
}

export default Desktoplinks