import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { degMenu, contact } from "@/lib/menu-data";
import deg from "@/assets/deg.jpg";

export const Route = createFileRoute("/catering")({
  head: () => ({
    meta: [
      { title: "Catering & Deg Menu — Punjab Foods" },
      { name: "description", content: "Order Pulao, Biryani, Qorma and Zarda Degs for weddings and events. Sada Pulao Deg from Rs. 10,000." },
      { property: "og:title", content: "Catering & Deg — Punjab Foods" },
      { property: "og:description", content: "Full Deg menu for shadi, gham and events. One call away." },
    ],
  }),
  component: CateringPage,
});

function CateringPage() {
  return (
    <SiteLayout>
      <section className="relative pt-40 pb-24 px-6 overflow-hidden">
        <img src={deg} alt="" className="absolute inset-0 h-full w-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-background/60" />
        <div className="relative z-10 text-center max-w-3xl mx-auto">
          <p className="text-xs tracking-[0.4em] uppercase text-primary mb-4">Catering Service</p>
          <h1 className="font-serif text-5xl md:text-7xl">Deg Menu</h1>
          <p className="mt-6 text-muted-foreground text-lg">
            Shadi, gham, aur har taqreeb par parcel aap ke paas — ek phone call par.
          </p>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="mx-auto max-w-5xl">
          <div className="overflow-hidden border border-border">
            <table className="w-full">
              <thead className="bg-card">
                <tr>
                  <th className="text-left p-5 text-xs uppercase tracking-[0.2em] text-primary">Dish</th>
                  <th className="text-left p-5 text-xs uppercase tracking-[0.2em] text-primary hidden md:table-cell">Quantity</th>
                  <th className="text-right p-5 text-xs uppercase tracking-[0.2em] text-primary">Price</th>
                </tr>
              </thead>
              <tbody>
                {degMenu.map((d, i) => (
                  <tr key={i} className="border-t border-border hover:bg-card/50 transition-colors">
                    <td className="p-5 font-serif text-lg">
                      {d.name}
                      <p className="md:hidden text-xs text-muted-foreground italic mt-1">{d.qty}</p>
                    </td>
                    <td className="p-5 text-muted-foreground text-sm hidden md:table-cell">{d.qty}</td>
                    <td className="p-5 text-right text-primary font-medium whitespace-nowrap">{d.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-16 text-center border border-primary/30 p-10 bg-card">
            <h2 className="font-serif text-3xl mb-4">Place an Order</h2>
            <p className="text-muted-foreground mb-6">Call us directly for catering bookings and bulk orders.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              {contact.phones.map((p) => (
                <a key={p} href={`tel:${p.replace(/-/g, "")}`} className="text-sm tracking-wider border border-primary px-6 py-3 text-primary hover:bg-primary hover:text-primary-foreground transition-all">
                  {p}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
