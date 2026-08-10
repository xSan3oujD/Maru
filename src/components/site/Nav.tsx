const links = [
  { href: "#menu", label: "Menu" },
  { href: "#about", label: "About" },
  { href: "#hours", label: "Hours" },
  { href: "#visit", label: "Visit" },
];

export function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-display text-2xl tracking-[0.35em] text-primary">
          MARU
        </a>
        <ul className="hidden items-center gap-9 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-xs uppercase tracking-[0.22em] text-muted-foreground transition-colors hover:text-primary"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a href="tel:+16154107930" className="btn-outline-gold !px-5 !py-2 text-[0.7rem]">
          (615) 410-7930
        </a>
      </nav>
    </header>
  );
}