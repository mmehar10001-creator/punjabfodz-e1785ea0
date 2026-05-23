import { contact } from "@/lib/menu-data";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card mt-24">
      <div className="mx-auto max-w-7xl px-6 py-12 grid gap-8 md:grid-cols-3">
        <div>
          <h3 className="font-serif text-2xl text-primary">Punjab Foods</h3>
          <p className="mt-2 text-sm text-muted-foreground">Authentic Pulao & Kabab since years. Rawalpindi.</p>
        </div>
        <div>
          <h4 className="text-xs uppercase tracking-[0.2em] text-primary mb-3">Home Delivery</h4>
          {contact.phones.map((p) => (
            <a key={p} href={`tel:${p.replace(/-/g, "")}`} className="block text-sm text-foreground/90 hover:text-primary">{p}</a>
          ))}
        </div>
        <div>
          <h4 className="text-xs uppercase tracking-[0.2em] text-primary mb-3">Visit Us</h4>
          <p className="text-sm text-muted-foreground">{contact.address}</p>
        </div>
      </div>
      <div className="border-t border-border py-4 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Punjab Foods. All rights reserved.
      </div>
    </footer>
  );
}
