const hours = [
  { day: "Sunday", time: "12:00pm – 8:30pm" },
  { day: "Monday", time: "Closed" },
  { day: "Tuesday", time: "11am – 2pm · 4:30pm – 9pm" },
  { day: "Wednesday", time: "11am – 2pm · 4:30pm – 9pm" },
  { day: "Thursday", time: "11am – 2pm · 4:30pm – 9pm" },
  { day: "Friday", time: "11am – 2pm · 4:30pm – 10pm" },
  { day: "Saturday", time: "11am – 2pm · 4:30pm – 10pm" },
];

export function Visit() {
  return (
    <section id="hours" className="border-t border-border/60 bg-card/40">
      <div className="mx-auto grid max-w-6xl gap-14 px-6 py-24 md:py-32 lg:grid-cols-2">
        <div>
          <p className="text-kicker">営業時間 · Hours</p>
          <h2 className="mt-4 text-4xl md:text-5xl">Come sit at the bar</h2>
          <ul className="mt-8 divide-y divide-border">
            {hours.map((h) => (
              <li key={h.day} className="flex items-baseline justify-between gap-6 py-3.5">
                <span className="font-display text-lg">{h.day}</span>
                <span
                  className={
                    h.time === "Closed"
                      ? "text-sm tracking-wide text-accent"
                      : "text-sm tracking-wide text-muted-foreground"
                  }
                >
                  {h.time}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div id="visit" className="surface-card rounded-md p-8">
          <p className="text-kicker">Visit</p>
          <h3 className="mt-4 text-3xl">Maru — Murfreesboro</h3>
          <address className="mt-4 not-italic leading-relaxed text-muted-foreground">
            3921 Franklin Rd
            <br />
            Murfreesboro, TN 37128
          </address>
          <p className="mt-4 text-muted-foreground">
            <a href="tel:+16154107930" className="transition-colors hover:text-primary">
              (615) 410-7930
            </a>
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="https://maps.app.goo.gl/Wi94tmiKfB4Mu8s39"
              target="_blank"
              rel="noreferrer"
              className="btn-gold"
            >
              Get directions
            </a>
            <a href="tel:+16154107930" className="btn-outline-gold">
              Call for takeout
            </a>
          </div>
          <div className="mt-8 overflow-hidden rounded-md border border-border">
            <iframe
              title="Map showing Maru at 3921 Franklin Rd, Murfreesboro, TN"
              src="https://www.google.com/maps?q=3921+Franklin+Rd,+Murfreesboro,+TN+37128&output=embed"
              width="100%"
              height="260"
              loading="lazy"
              className="block border-0 grayscale-[35%]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}