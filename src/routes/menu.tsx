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
        <p className="mt-4 text-2xl text-foreground/80" lang="ur" dir="rtl">ہمارا مینو</p>
        <p className="mt-6 text-muted-foreground max-w-xl mx-auto">
          Prepared fresh daily. All prices in Pakistani Rupees.
        </p>
      </section>

      <section className="px-6 pb-24">
        <div className="mx-auto max-w-6xl space-y-24">
          {menu.map((section) => (
            <div key={section.title}>
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-4">
                  <span className="h-px w-12 bg-primary/60" />
                  <h2 className="font-serif text-3xl md:text-4xl text-primary">{section.title}</h2>
                  <span className="h-px w-12 bg-primary/60" />
                </div>
                {section.urdu && (
                  <p className="mt-3 text-xl text-foreground/70" lang="ur" dir="rtl">{section.urdu}</p>
                )}
              </div>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {section.items.map((it, i) => (
                  <article key={i} className="group bg-card border border-border overflow-hidden flex flex-col">
                    {it.image && (
                      <div className="aspect-[4/3] overflow-hidden bg-secondary">
                        <img
                          src={it.image}
                          alt={it.name}
                          loading="lazy"
                          width={1024}
                          height={768}
                          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      </div>
                    )}
                    <div className="p-5 flex-1 flex flex-col">
                      <div className="flex items-baseline justify-between gap-3">
                        <h3 className="font-serif text-xl">{it.name}</h3>
                        <p className="text-primary font-medium whitespace-nowrap">{it.price}</p>
                      </div>
                      {it.urdu && (
                        <p className="text-lg text-foreground/70 mt-1" lang="ur" dir="rtl">{it.urdu}</p>
                      )}
                      {it.desc && (
                        <p className="text-sm text-muted-foreground italic mt-2">{it.desc}</p>
                      )}
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
