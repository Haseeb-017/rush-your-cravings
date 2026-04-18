import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Clock,
  Store,
  MapPin,
  Star,
  UtensilsCrossed,
  Search,
  Truck,
  Instagram,
  Facebook,
  Twitter,
  Menu,
  X,
  Smartphone,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import heroFood from "@/assets/hero-food.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "FoodRush — Delicious Food, Delivered Fast" },
      {
        name: "description",
        content:
          "Order from the best restaurants in your city in minutes. Fast delivery, live tracking, 100+ restaurants. Pakistan's favorite food delivery app.",
      },
      { property: "og:title", content: "FoodRush — Delicious Food, Delivered Fast" },
      {
        property: "og:description",
        content: "Order from the best restaurants in your city in minutes.",
      },
    ],
  }),
});

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#features", label: "Features" },
  { href: "#how", label: "How It Works" },
  { href: "#reviews", label: "Reviews" },
];

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#home" className="flex items-center gap-2 font-bold text-xl">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-[var(--primary-glow)] text-primary-foreground">
            <UtensilsCrossed className="h-5 w-5" />
          </span>
          <span className="text-foreground">
            Food<span className="text-primary">Rush</span>
          </span>
        </a>
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {l.label}
            </a>
          ))}
        </div>
        <div className="hidden md:block">
          <Button variant="hero" size="default">
            Order Now
          </Button>
        </div>
        <button
          aria-label="Toggle menu"
          className="md:hidden p-2 text-foreground"
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>
      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="flex flex-col gap-1 px-4 py-3">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-sm font-medium text-foreground hover:bg-accent"
              >
                {l.label}
              </a>
            ))}
            <Button variant="hero" className="mt-2 w-full">
              Order Now
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden"
      style={{ background: "var(--gradient-hero)" }}
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-24">
        <div className="flex flex-col gap-6">
          <span className="inline-flex w-fit items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            🔥 Hot deals every day
          </span>
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Delicious Food, <br />
            <span className="bg-gradient-to-r from-primary to-[var(--primary-glow)] bg-clip-text text-transparent">
              Delivered Fast
            </span>
          </h1>
          <p className="max-w-lg text-lg text-muted-foreground">
            Order from the best restaurants in your city in minutes. Hot, fresh & always on time.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button variant="hero" size="xl">
              Order Now
            </Button>
            <Button variant="heroOutline" size="xl">
              See Menu
            </Button>
          </div>
          <div className="mt-4 flex items-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Star className="h-4 w-4 fill-primary text-primary" />
              <span className="font-semibold text-foreground">4.9</span> rating
            </div>
            <div>
              <span className="font-semibold text-foreground">100+</span> restaurants
            </div>
            <div>
              <span className="font-semibold text-foreground">50k+</span> happy customers
            </div>
          </div>
        </div>
        <div className="relative">
          <div
            className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-primary/30 to-[var(--primary-glow)]/20 blur-3xl"
            aria-hidden
          />
          <img
            src={heroFood}
            alt="Delicious Pakistani food spread with biryani, kebabs and curries"
            width={1280}
            height={1280}
            className="relative w-full rounded-3xl object-cover shadow-[var(--shadow-warm)]"
          />
        </div>
      </div>
    </section>
  );
}

const features = [
  {
    icon: Clock,
    title: "Fast Delivery",
    desc: "30 minutes or less, guaranteed. Hot meals at your door, every time.",
  },
  {
    icon: Store,
    title: "100+ Restaurants",
    desc: "Choose from top restaurants near you across all major Pakistani cities.",
  },
  {
    icon: MapPin,
    title: "Live Tracking",
    desc: "Track your order in real time, from kitchen to your doorstep.",
  },
];

function Features() {
  return (
    <section id="features" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Why Choose <span className="text-primary">FoodRush?</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Everything you love about food delivery, made better.
          </p>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="group rounded-2xl border border-border bg-card p-8 shadow-[var(--shadow-card)] transition-transform hover:-translate-y-1"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-[var(--primary-glow)] text-primary-foreground">
                <f.icon className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">{f.title}</h3>
              <p className="mt-2 text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const steps = [
  { icon: Store, title: "Choose your restaurant", desc: "Browse 100+ restaurants near you." },
  { icon: Search, title: "Select your food", desc: "Pick your favorite dishes & customize." },
  { icon: Truck, title: "Get it delivered", desc: "Sit back — we deliver in 30 minutes." },
];

function HowItWorks() {
  return (
    <section id="how" className="bg-secondary/40 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Order in <span className="text-primary">3 Simple Steps</span>
          </h2>
          <p className="mt-4 text-muted-foreground">From craving to delivery in minutes.</p>
        </div>
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {steps.map((s, i) => (
            <div key={s.title} className="relative rounded-2xl bg-background p-8 text-center shadow-[var(--shadow-card)]">
              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                <s.icon className="h-8 w-8" />
              </div>
              <div className="mb-2 text-sm font-bold uppercase tracking-wider text-primary">
                Step {i + 1}
              </div>
              <h3 className="text-xl font-semibold text-foreground">{s.title}</h3>
              <p className="mt-2 text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const reviews = [
  {
    name: "Ali Hassan",
    city: "Lahore",
    text: "Best food delivery app in Pakistan! Biryani arrived hot and on time. Highly recommended.",
  },
  {
    name: "Sara Ahmed",
    city: "Karachi",
    text: "I love the live tracking feature. So many restaurants to choose from — FoodRush is my go-to.",
  },
  {
    name: "Usman Khan",
    city: "Islamabad",
    text: "Fast delivery and great deals. The app is super easy to use. 5 stars from me!",
  },
];

function Testimonials() {
  return (
    <section id="reviews" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Loved by <span className="text-primary">Foodies</span>
          </h2>
          <p className="mt-4 text-muted-foreground">Real reviews from real customers.</p>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {reviews.map((r) => (
            <div
              key={r.name}
              className="rounded-2xl border border-border bg-card p-8 shadow-[var(--shadow-card)]"
            >
              <div className="mb-4 flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground">"{r.text}"</p>
              <div className="mt-6 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-primary to-[var(--primary-glow)] font-semibold text-primary-foreground">
                  {r.name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-foreground">{r.name}</div>
                  <div className="text-sm text-muted-foreground">{r.city}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div
        className="mx-auto max-w-5xl overflow-hidden rounded-3xl px-8 py-16 text-center text-primary-foreground shadow-[var(--shadow-warm)] sm:px-16"
        style={{ background: "var(--gradient-primary)" }}
      >
        <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">Ready to Order?</h2>
        <p className="mx-auto mt-4 max-w-xl text-lg opacity-90">
          Download the FoodRush app and enjoy your first order with free delivery.
        </p>
        <div className="mt-8 flex justify-center">
          <Button
            size="xl"
            className="bg-background text-primary hover:bg-background/90 shadow-lg"
          >
            <Smartphone className="h-5 w-5" />
            Download the App
          </Button>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/30">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <a href="#home" className="flex items-center gap-2 font-bold text-xl">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-[var(--primary-glow)] text-primary-foreground">
              <UtensilsCrossed className="h-5 w-5" />
            </span>
            <span>
              Food<span className="text-primary">Rush</span>
            </span>
          </a>
          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm font-medium text-muted-foreground">
            <a href="#home" className="hover:text-primary">Home</a>
            <a href="#features" className="hover:text-primary">About</a>
            <a href="#" className="hover:text-primary">Contact</a>
            <a href="#" className="hover:text-primary">Privacy Policy</a>
          </nav>
          <div className="flex gap-3">
            {[Instagram, Facebook, Twitter].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Social link"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
        <div className="mt-8 border-t border-border pt-6 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} FoodRush. Made with ❤️ in Pakistan.
        </div>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
