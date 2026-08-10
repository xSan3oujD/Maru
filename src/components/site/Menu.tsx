import dishRolls from "@/assets/dish-rolls.jpg";
import dishHot from "@/assets/dish-hot.jpg";

const sections = [
  {
    title: "From the Sushi Bar",
    note: "Cut to order at the counter",
    items: [
      { name: "Nigiri & Sashimi", desc: "Tuna, salmon, yellowtail, shrimp, eel — by the piece" },
      { name: "Signature Rolls", desc: "Layered with citrus, tobiko and house eel glaze" },
      { name: "Classic Maki", desc: "California, spicy tuna, salmon avocado, veggie" },
      { name: "Chef's Selection", desc: "A daily assortment chosen from the freshest case" },
    ],
  },
  {
    title: "From the Kitchen",
    note: "Comfort, wok and grill",
    items: [
      { name: "Ramen & Udon", desc: "Slow-simmered broth, chashu, soft egg, scallion" },
      { name: "Hibachi Plates", desc: "Chicken, steak, shrimp or tofu with fried rice" },
      { name: "Bibimbap & Rice Bowls", desc: "Seasoned vegetables, egg and house chili paste" },
      { name: "Tempura", desc: "Shrimp and seasonal vegetables, light and crisp" },
    ],
  },
  {
    title: "Small Plates",
    note: "To begin",
    items: [
      { name: "Edamame", desc: "Steamed and salted" },
      { name: "Gyoza", desc: "Pan-seared pork dumplings" },
      { name: "Miso Soup", desc: "Tofu, seaweed, scallion" },
      { name: "Seaweed & Kani Salad", desc: "Sesame, cucumber, sweet vinegar" },
    ],
  },
];

export function Menu() {
  return (
    <section id="menu" className="mx-auto max-w-6xl px-6 py-24 md:py-32">
      <div className="mb-14 text-center">
        <p className="text-kicker">お品書き · The Menu</p>
        <h2 className="mt-4 text-4xl md:text-5xl">Sushi, noodles & hibachi</h2>
        <div className="rule-gold mx-auto mt-6 w-40" />
      </div>

      <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-start">
        <div className="grid gap-10 md:grid-cols-2">
          {sections.map((s) => (
            <div key={s.title} className="surface-card rounded-md p-7">
              <h3 className="text-2xl">{s.title}</h3>
              <p className="mt-1 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                {s.note}
              </p>
              <ul className="mt-6 space-y-5">
                {s.items.map((i) => (
                  <li key={i.name}>
                    <p className="font-display text-lg text-primary">{i.name}</p>
                    <p className="text-sm leading-relaxed text-muted-foreground">{i.desc}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="surface-card flex flex-col justify-center rounded-md p-7 md:col-span-2">
            <p className="text-kicker">Lunch service</p>
            <p className="mt-3 font-display text-2xl">
              Bento and lunch specials, Tuesday through Saturday, 11am–2pm.
            </p>
            <p className="mt-3 text-sm text-muted-foreground">
              Full menu and current pricing are available in the restaurant — call ahead for
              takeout orders.
            </p>
          </div>
        </div>

        <div className="grid gap-6 lg:w-[19rem]">
          <img
            src={dishRolls}
            alt="Specialty sushi rolls plated on a long black ceramic dish"
            loading="lazy"
            width={1008}
            height={1200}
            className="h-full w-full rounded-md object-cover"
          />
          <img
            src={dishHot}
            alt="Steaming bowl of ramen with chashu pork and soft egg"
            loading="lazy"
            width={1008}
            height={1200}
            className="h-full w-full rounded-md object-cover"
          />
        </div>
      </div>
    </section>
  );
}