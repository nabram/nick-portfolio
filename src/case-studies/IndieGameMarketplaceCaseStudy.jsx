import React from "react";
import { usePageMeta } from "../hooks/usePageMeta";

export default function IndieGameMarketplaceCaseStudy() {
  usePageMeta({
    title: "Indie Game Marketplace · AI Prototyping Case Study · Nicholas Abram",
    description:
      "How I used AI tools, JSON driven architecture, and no code platforms to prototype an alternative indie game marketplace in a few days.",
  });

  return (
    <main className="cs">
      <header className="cs-hero">
        <div className="cs-hero-text">
          <p className="cs-eyebrow">Independent project · AI Prototyping Engine</p>
          <h1 className="cs-title">
            Indie Game Marketplace – prototyping a payment resilient platform with AI
          </h1>
          <p className="cs-subtitle">
            I used AI coding assistants, JSON based system design, and no code tools to
            prototype an alternative marketplace for indie games after payment processors
            restricted existing platforms.
          </p>

          <dl className="cs-meta">
            <div>
              <dt>Role</dt>
              <dd>Product and UX · System design · AI assisted implementation</dd>
            </div>
            <div>
              <dt>Timeframe</dt>
              <dd>Fall 2025</dd>
            </div>
            <div>
              <dt>Tools</dt>
              <dd>ChatGPT / Claude code, Reforge Build, Lovable, JSON</dd>
            </div>
            <div>
              <dt>Focus</dt>
              <dd>
                AI assisted prototyping, marketplace UX, payment resilience, rapid iteration
              </dd>
            </div>
          </dl>
        </div>

        <div className="cs-hero-media">
          {/* Placeholder for Indie Game Marketplace mockup */}
        </div>
      </header>

      <div className="cs-body">
        <section className="cs-section">
          <h2>Context</h2>
          <p>
            In 2025, major payment processors tightened restrictions on game marketplaces,
            especially platforms hosting adult or controversial content. This affected sites
            like itch.io and created concern in the indie game community about overreach and
            the fragility of payment rails.
          </p>
          <p>
            I wanted to explore how an alternative marketplace could work, using AI tools to
            accelerate prototyping. The goal was not to launch a competing business, but to
            prove how fast a credible, multi page product could be built with the right
            architecture and AI workflow.
          </p>
        </section>

        <section className="cs-section">
          <h2>Product concept</h2>
          <p>
            The concept was a marketplace where indie developers could list games, players
            could browse and upvote titles, and payments could route through more flexible
            options. The focus was:
          </p>
          <ul className="cs-list">
            <li>A clean, discoverable catalog for niche and experimental games.</li>
            <li>Creator profiles that highlight reputation, tags, and past work.</li>
            <li>
              A front page that balances curation, trending titles, and community driven
              ranking.
            </li>
            <li>
              A payment concept that could later support multiple providers and on ramp
              options, without hard coding one processor.
            </li>
          </ul>
        </section>

        <section className="cs-section">
          <h2>My role</h2>
          <p>
            This was a solo project where I acted as product manager, UX designer, and AI
            assisted builder. I focused on:
          </p>
          <ul className="cs-list">
            <li>Framing the problem from both player and creator perspectives.</li>
            <li>
              Designing the information architecture and flows for browsing, game detail,
              creator pages, and basic account actions.
            </li>
            <li>
              Defining the system as structured JSON so AI tools and no code platforms could
              build from the same model.
            </li>
            <li>
              Implementing the prototype across Reforge Build and Lovable with AI generated
              code and UI adjustments.
            </li>
          </ul>
        </section>

        <section className="cs-section">
          <h2>Approach – AI prototyping engine</h2>
          <h3>1. Define the system as JSON</h3>
          <p>
            I started by describing the marketplace in terms of entities and relationships:
          </p>
          <ul className="cs-list">
            <li>Games (metadata, pricing, tags, platforms, rating, status).</li>
            <li>Creators (profile, team, links, catalog of games).</li>
            <li>Users (library, wishlist, votes).</li>
            <li>
              Collections (front page sections, curated lists, tag based views, search
              results).
            </li>
          </ul>
          <p>
            I captured this as JSON schemas and configuration objects. This became the source
            of truth for screens, components, and navigation.
          </p>

          <h3>2. Use AI coding assistants to generate base components</h3>
          <p>
            With the JSON in place I used tools like ChatGPT and Claude code to generate
            React like components and layout ideas. Instead of asking for entire apps, I
            asked for small, well defined pieces:
          </p>
          <ul className="cs-list">
            <li>Game card layouts.</li>
            <li>Creator profile sections.</li>
            <li>Filtering and sorting controls.</li>
            <li>Navigation and grid structures.</li>
          </ul>

          <h3>3. Build flows in Reforge Build</h3>
          <p>
            I then used Reforge Build to assemble end to end flows powered by the same JSON
            configuration. This allowed me to:
          </p>
          <ul className="cs-list">
            <li>Create multi page flows without hard coding every route.</li>
            <li>Test navigation patterns and UX quickly.</li>
            <li>
              Make content and structural changes in JSON while reusing the same visual
              building blocks.
            </li>
          </ul>

          <h3>4. Port into Lovable for a working prototype</h3>
          <p>
            Once the flows felt right I brought the structure into Lovable and refined the
            implementation. The goal was a functional web prototype with:
          </p>
          <ul className="cs-list">
            <li>A front page showcasing featured and trending games.</li>
            <li>Search and tag based discovery.</li>
            <li>Game detail pages with media, description, and purchase intent.</li>
            <li>Creator pages that aggregate work and social proof.</li>
          </ul>
        </section>

        <section className="cs-section">
          <h2>Outcome</h2>
          <p>
            Within a short window I went from idea to a working, navigable prototype that
            demonstrated:
          </p>
          <ul className="cs-list">
            <li>
              A credible alternative marketplace structure that could be extended with real
              payment integrations.
            </li>
            <li>
              A repeatable loop for using AI tools to accelerate multi page product
              experiments.
            </li>
            <li>
              How JSON driven system design can keep UX, copy, and code aligned as a single
              source of truth.
            </li>
          </ul>
          <p>
            Although this project did not ship as a production product, it became a strong
            internal example of how I approach AI assisted product exploration and the depth
            of thought I apply even to speculative work.
          </p>
        </section>

        <section className="cs-section">
          <h2>What this shows about my work</h2>
          <p>
            This case study highlights my ability to treat AI as a force multiplier rather
            than a gimmick. It shows that I:
          </p>
          <ul className="cs-list">
            <li>Can frame messy, emotionally loaded problems in a clear product shape.</li>
            <li>
              Design systems and flows before diving into screens, so the architecture is
              sound.
            </li>
            <li>
              Use AI coding tools in a structured way, grounded in JSON and reusable
              patterns.
            </li>
            <li>
              Move from idea to working prototype fast without sacrificing clarity or UX
              coherence.
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}
