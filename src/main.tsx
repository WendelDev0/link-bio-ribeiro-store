import React from "react";
import { createRoot } from "react-dom/client";
import {
  BadgeCheck,
  ChevronRight,
  Instagram,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  ShoppingBag,
  Smartphone,
  Star,
} from "lucide-react";
import "./styles.css";

const phone = "5527997249882";
const whatsappMessage = encodeURIComponent(
  "Oi Lucas! Vim pelo link da Ribeiro Store e quero atendimento."
);

const links = [
  {
    title: "Comprar pelo WhatsApp",
    text: "Atendimento direto com Lucas Ribeiro",
    href: `https://wa.me/${phone}?text=${whatsappMessage}`,
    icon: MessageCircle,
    featured: true,
  },
  {
    title: "Ver celulares disponíveis",
    text: "Ofertas, usados selecionados e lançamentos",
    href: `https://wa.me/${phone}?text=${encodeURIComponent(
      "Oi Lucas! Quero ver os celulares disponíveis na Ribeiro Store."
    )}`,
    icon: Smartphone,
  },
  {
    title: "Garantia e suporte",
    text: "Tire dúvidas sobre garantia e assistência",
    href: `https://wa.me/${phone}?text=${encodeURIComponent(
      "Oi Lucas! Quero tirar uma dúvida sobre garantia e suporte."
    )}`,
    icon: ShieldCheck,
  },
  {
    title: "Instagram da loja",
    text: "@ribeiro_storecol",
    href: "https://www.instagram.com/ribeiro_storecol/",
    icon: Instagram,
  },
  {
    title: "Localização",
    text: "Ribeiro Store em Colatina, ES",
    href: "https://www.google.com/maps/search/?api=1&query=Ribeiro%20Store%20Colatina%20ES",
    icon: MapPin,
  },
];

function App() {
  return (
    <main className="page-shell">
      <section className="bio">
        <div className="profile-wrap">
          <span className="profile-glow" />
          <img
            className="profile-photo"
            src="/lucas-ribeiro.jpg"
            alt="Lucas Ribeiro da Ribeiro Store"
          />
        </div>

        <div className="identity">
          <p className="eyebrow">
            <BadgeCheck size={16} aria-hidden="true" />
            Atendimento premium
          </p>
          <h1>Lucas Ribeiro</h1>
          <p className="handle">RIBEIRO STORE | CELULARES | COLATINA | ES</p>
          <p className="intro">
            A mais de 6 anos realizando sonhos com celulares, garantia e
            atendimento próximo do jeito que o cliente merece.
          </p>
        </div>

        <div className="stats" aria-label="Destaques da Ribeiro Store">
          <div>
            <strong>6+</strong>
            <span>anos de loja</span>
          </div>
          <div>
            <strong>1 ano</strong>
            <span>de garantia</span>
          </div>
          <div>
            <strong>Colatina</strong>
            <span>ES</span>
          </div>
        </div>
      </section>

      <section className="links" aria-label="Links principais">
        {links.map((item) => {
          const Icon = item.icon;

          return (
            <a
              className={`link-card ${item.featured ? "featured" : ""}`}
              href={item.href}
              key={item.title}
              target="_blank"
              rel="noreferrer"
            >
              <span className="icon-box">
                <Icon size={22} aria-hidden="true" />
              </span>
              <span className="link-copy">
                <strong>{item.title}</strong>
                <small>{item.text}</small>
              </span>
              <ChevronRight size={22} aria-hidden="true" />
            </a>
          );
        })}
      </section>

      <section className="trust">
        <div>
          <Star size={18} aria-hidden="true" />
          <span>Atendimento rápido</span>
        </div>
        <div>
          <ShoppingBag size={18} aria-hidden="true" />
          <span>Celulares selecionados</span>
        </div>
        <div>
          <Phone size={18} aria-hidden="true" />
          <span>(27) 99724-9882</span>
        </div>
      </section>
    </main>
  );
}

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
