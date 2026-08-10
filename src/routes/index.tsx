import { createFileRoute } from "@tanstack/react-router";

import heroSushi from "@/assets/hero-sushi.jpg";
import interior from "@/assets/interior.jpg";
import { Nav } from "@/components/site/Nav";
import { Menu } from "@/components/site/Menu";
import { Visit } from "@/components/site/Visit";

const title = "Maru Murfreesboro | Sushi, Ramen & Hibachi in Murfreesboro, TN";
const description =
  "Maru is a sushi bar and Japanese kitchen on Franklin Rd in Murfreesboro, TN. Fresh nigiri, signature rolls, ramen and hibachi. Call (615) 410-7930.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "restaurant" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: "Maru - Murfreesboro",
  servesCuisine: ["Sushi", "Japanese", "Asian"],
  telephone: "+1-615-410-7930",
  address: {
    "@type": "PostalAddress",
    streetAddress: "3921 Franklin Rd",
    addressLocality: "Murfreesboro",
    addressRegion: "TN",
    postalCode: "37128",
    addressCountry: "US",
  },
  geo: { "@type": "GeoCoordinates", latitude: 35.8438654, longitude: -86.4677708 },
  openingHours: [
    "Su 12:00-20:30",
    "Tu-Th 11:00-14:00",
    "Tu-Th 16:30-21:00",
    "Fr-Sa 11:00-14:00",
    "Fr-Sa 16:30-22:00",
  ],
};

function Index() {
  return (
    <div id="top" className="min-h-screen bg-background">
      <Nav />

      <main>
        {/* Hero */}
        <section className="relative flex min-h-screen items-end overflow-hidden">
          <img
            src={heroSushi}
            alt="Chef plating nigiri sushi on a dark slate board at Maru in Murfreesboro"
            width={1600}
            height={1104}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="overlay-ink absolute inset-0" />
          <div className="relative mx-auto w-full max-w-6xl px-6 pb-20 pt-32">
            <p className="text-kicker">Murfreesboro, Tennessee</p>
            <h1 className="mt-5 text-6xl leading-[0.95] md:text-8xl">
              Maru
              <span className="mt-3 block font-body text-base font-light tracking-[0.4em] text-muted-foreground md:text-lg">
                SUSHI · RAMEN · HIBACHI
              </span>
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-foreground/80">
              A quiet, high-ceilinged room on Franklin Road where fish is cut to order at the
              counter and the kitchen sends out bowls that steam all the way to the table.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <a href="#menu" className="btn-gold">
                See the menu
              </a>
              <a href="tel:+16154107930" className="btn-outline-gold">
                Order takeout
              </a>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <div>
              <p className="text-kicker">丸 · Maru</p>
              <h2 className="mt-4 text-4xl md:text-5xl">Whole, round, complete</h2>
              <div className="rule-gold mt-6 w-32" />
              <p className="mt-7 leading-relaxed text-muted-foreground">
                Maru is named for the character meaning whole — a full circle, nothing missing.
                That's the idea behind the room and the food: an open dining room with tall
                ceilings and a clear view into the kitchen, a sushi case kept honest by daily
                deliveries, and a menu that runs from delicate nigiri to a bowl of ramen big
                enough to disappear into.
              </p>
              <p className="mt-5 leading-relaxed text-muted-foreground">
                Come in for a fast lunch, settle in for dinner with friends, or call ahead and
                take it home. Everything is made when you order it.
              </p>
              <dl className="mt-10 grid grid-cols-3 gap-6 border-t border-border pt-8">
                <div>
                  <dt className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    Rated
                  </dt>
                  <dd className="mt-2 font-display text-3xl text-primary">4.5★</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    Cut to order
                  </dt>
                  <dd className="mt-2 font-display text-3xl text-primary">Daily</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    Takeout
                  </dt>
                  <dd className="mt-2 font-display text-3xl text-primary">Yes</dd>
                </div>
              </dl>
            </div>
            <img
              src={interior}
              alt="The sushi bar and dining room at Maru, lit by warm pendant lights"
              loading="lazy"
              width={1600}
              height={1008}
              className="rounded-md object-cover shadow-[var(--shadow-deep)]"
            />
          </div>
        </section>

        {/* Quote */}
        <section className="border-y border-border/60 bg-card/40">
          <blockquote className="mx-auto max-w-3xl px-6 py-20 text-center text-2xl leading-relaxed md:text-3xl">
            "Very good sushi. Fresh and creative rolls."
            <footer className="mt-6 text-xs uppercase tracking-[0.28em] text-muted-foreground">
              — Guest review
            </footer>
          </blockquote>
        </section>

        <Menu />
        <Visit />
      </main>

      <footer className="border-t border-border/60">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 py-12 text-center">
          <p className="font-display text-2xl tracking-[0.35em] text-primary">MARU</p>
          <p className="text-sm text-muted-foreground">
            3921 Franklin Rd, Murfreesboro, TN 37128 · (615) 410-7930
          </p>
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground/70">
            © {new Date().getFullYear()} Maru Murfreesboro
          </p>
        </div>
      </footer>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </div>
  );
}
