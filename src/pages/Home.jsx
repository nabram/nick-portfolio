import React from "react";
import { Link } from "react-router-dom";

import { ProjectTileAIStudios } from "../components/cards/ProjectTileAIStudios";
import { ProjectTileReAQtions } from "../components/cards/ProjectTileReAQtions";
import { ProjectTileAvatars } from "../components/cards/ProjectTileAvatars";
import { ProjectTileAIProductivitySystem } from "../components/cards/ProjectTileAIProductivitySystem";
import { ProjectTileSCORM } from "../components/cards/ProjectTileSCORM"; // make sure this exists

import { usePageMeta } from "../hooks/usePageMeta";

export const Home = () => {
  usePageMeta({
    title: "Nicholas Abram · Product, AI Systems, and Growth",
    description:
      "Hybrid product, AI systems, and growth operator. I design and ship AI powered products, from avatar platforms to climate pilots.",
  });

  return (
    <main className="home">
      {/* Hero */}
      <section className="home-hero">
        <p className="home-eyebrow">Product · AI Systems · Growth</p>
        <h1 className="home-title">
          I design and ship AI powered products, from climate pilots to enterprise tools.
        </h1>
        <p className="home-subtitle">
          Hybrid product and AI systems operator with a founder mindset. I work across
          UX, workflows, and GTM to turn complex systems into interfaces people can
          actually use.
        </p>

        <div className="home-meta-row">
          <div className="home-meta-item">
            <div className="home-meta-label">Now</div>
            <span className="home-meta-value">
              AI avatar and video platforms, enterprise learning, and AI assisted
              prototyping.
            </span>
          </div>
          <div className="home-meta-item">
            <div className="home-meta-label">Focus</div>
            <span className="home-meta-value">
              AI product, GTM systems, rapid prototyping, climate and education.
            </span>
          </div>
        </div>

        <div className="home-cta-row">
          <Link to="/case-studies" className="btn btn-primary">
            View selected work
          </Link>
          <Link to="/about" className="btn btn-secondary">
            About and timeline
          </Link>
        </div>
      </section>

      {/* Positioning / how I create value */}
      <section className="home-section">
        <h2 className="home-section-title">How I create value</h2>
        <div className="home-pillars">
          <article className="pillar-card">
            <h3>AI product and UX</h3>
            <p>
              I shape AI powered products end to end. I care about flows, edge cases, and
              how features translate into real retention and usage, not just demos.
            </p>
          </article>
          <article className="pillar-card">
            <h3>Growth and GTM systems</h3>
            <p>
              I design systems that connect product, marketing, and sales, from avatar
              catalog strategy to enterprise enablement and outbound motions.
            </p>
          </article>
          <article className="pillar-card">
            <h3>Rapid prototyping with AI</h3>
            <p>
              I use structured data, AI coding assistants, and tools like Reforge Build
              and Lovable to go from idea to working prototypes fast while keeping UX and
              architecture coherent.
            </p>
          </article>
        </div>
      </section>

      {/* Selected work */}
      <section className="home-section">
        <div className="home-section-header">
          <h2 className="home-section-title">Selected case studies</h2>
          <Link to="/case-studies" className="home-link">
            View all case studies
          </Link>
        </div>

        <p className="home-section-intro">
          A sample of recent work that shows how I operate across product, AI systems, and
          GTM.
        </p>

        <div className="home-grid">
          <Link to="/case-studies/ai-studios">
            <ProjectTileAIStudios />
          </Link>

          <Link to="/case-studies/avatar-pipeline">
            <ProjectTileAvatars />
          </Link>

          <Link to="/case-studies/reaqtions">
            <ProjectTileReAQtions />
          </Link>

          <Link to="/case-studies/ai-portfolio-system">
            <ProjectTileAIProductivitySystem />
          </Link>
        </div>
      </section>
    </main>
  );
};
