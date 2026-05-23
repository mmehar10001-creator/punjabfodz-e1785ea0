import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { menu } from "@/lib/menu-data";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menu — Punjab Foods" },
      { name: "description", content: "Full menu: Chicken Pulao, Channa Pulao, Chicken Roast, Shami Kabab, Zarda and more. Prices in PKR." },
      { property: "og:title", content: "Menu — Punjab Foods" },
      { property: "og:description", content: "Pulao, Roast, Kabab, Zarda — complete price list." },
    ],
  }),
  component: MenuPage,
});

function MenuPage() {
  return (
    <SiteLayout>
      <section className="pt-40 pb-16 px-6 text-center">
        <p className="text-xs tracking-[0.4em] uppercase text-primary mb-4">À la Carte</p>
        <h1 className="font-serif text-5xl md:text-7xl">Our Menu</h1>
        <p className="mt-6 text-muted-foreground max-w-xl mx-auto">
          Prepared fresh daily. All prices in Pakistani Rupees.
        </p>
      </section>

      <section className="px-6 pb-24">
        <div className="mx-auto max-w-4xl space-y-20">
          {menu.map((section) => (
            <div key={section.title}>
              <div className="text-center mb-10">
                <div className="inline-flex items-center gap-4">
                  <span className="h-px w-12 bg-primary/60" />
                  <h2 className="font-serif text-3xl md:text-4xl text-primary">{section.title}</h2>
                  <span className="h-px w-12 bg-primary/60" />
                </div>
              </div>
              <div className="space-y-5">
                {section.items.map((it, i) => (
                  <div key={i} className="flex items-baseline gap-4 border-b border-border/60 pb-4">
                    <div>
                      <h3 className="font-serif text-xl">{it.name}</h3>
                      {it.desc && <p className="text-sm text-muted-foreground italic mt-0.5">{it.desc}</p>}
                    </div>
                    <div className="flex-1 border-b border-dotted border-border/60 mb-2" />
                    <p className="text-primary font-medium whitespace-nowrap">{it.price}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
