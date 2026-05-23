import { Link } from "@tanstack/react-router";

export function SiteHeader() {
  const linkCls = "text-xs tracking-[0.2em] uppercase text-foreground/80 hover:text-primary transition-colors";
  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <Link to="/" className="font-serif text-2xl text-primary">
          Punjab <span className="text-foreground">Foods</span>
        </Link>
        <nav className="hidden gap-8 md:flex">
          <Link to="/" className={linkCls}>Home</Link>
          <Link to="/menu" className={linkCls}>Menu</Link>
          <Link to="/catering" className={linkCls}>Catering / Deg</Link>
          <Link to="/about" className={linkCls}>About</Link>
          <Link to="/contact" className={linkCls}>Contact</Link>
        </nav>
        <a href="tel:0515706222" className="hidden md:inline-block text-xs tracking-[0.2em] uppercase border border-primary/60 px-4 py-2 text-primary hover:bg-primary hover:text-primary-foreground transition-colors">
          Order Now
        </a>
      </div>
    </header>
  );
}
