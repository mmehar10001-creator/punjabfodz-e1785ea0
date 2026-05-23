import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { contact } from "@/lib/menu-data";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Punjab Foods" },
      { name: "description", content: "Call Punjab Foods at 051-5706222 for home delivery in Rawalpindi. Visit us at Sirsyed Chowk, Tipu Road." },
      { property: "og:title", content: "Contact — Punjab Foods" },
      { property: "og:description", content: "Home delivery & location details for Punjab Foods, Rawalpindi." },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <SiteLayout>
      <section className="pt-40 pb-24 px-6">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs tracking-[0.4em] uppercase text-primary mb-4">Get in Touch</p>
          <h1 className="font-serif text-5xl md:text-7xl mb-6">Contact Us</h1>
          <p className="text-muted-foreground text-lg">Home delivery, dine-in & catering orders welcome.</p>
        </div>

        <div className="mx-auto max-w-4xl mt-16 grid md:grid-cols-2 gap-6">
          <div className="border border-border p-10 bg-card">
            <h2 className="text-xs uppercase tracking-[0.3em] text-primary mb-6">Home Delivery</h2>
            <div className="space-y-3">
              {contact.phones.map((p) => (
                <a key={p} href={`tel:${p.replace(/-/g, "")}`} className="block font-serif text-2xl hover:text-primary transition-colors">
                  {p}
                </a>
              ))}
            </div>
          </div>
          <div className="border border-border p-10 bg-card">
            <h2 className="text-xs uppercase tracking-[0.3em] text-primary mb-6">Visit Us</h2>
            <p className="font-serif text-2xl leading-snug">{contact.address}</p>
            <p className="mt-4 text-sm text-muted-foreground">Open daily · Lunch & Dinner</p>
          </div>
        </div>

        <div className="mx-auto max-w-4xl mt-6 border border-border overflow-hidden">
          <iframe
            title="Punjab Foods Location"
            src="https://www.google.com/maps?q=Sirsyed+Chowk+Tipu+Road+Rawalpindi&output=embed"
            className="w-full h-96"
            loading="lazy"
          />
        </div>
      </section>
    </SiteLayout>
  );
}
