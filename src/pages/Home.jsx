import React from "react";
import { Link } from "react-router-dom";
import { ProjectTileAIStudios } from "../components/cards/ProjectTileAIStudios";
import { ProjectTileIndieMarketplace } from "../components/cards/ProjectTileIndieMarketplace";
import { ProjectTileReAQtions } from "../components/cards/ProjectTileReAQtions";
import { usePageMeta } from "../hooks/usePageMeta";


export const Home = () => {

  usePageMeta({
    title: "Nicholas Abram · Product, UX, and AI Systems",
    description:
      "Portfolio of Nicholas Abram, a hybrid product, UX, and AI systems operator working across AI video, climate hardware, and GTM.",
  });

  return (
    <div className="home">
      <section className="home-hero">
        <p className="home-eyebrow">Product · UX · AI Systems</p>
        <h1 className="home-title">
          I design and ship products at the intersection of AI, UX, and growth.
        </h1>
        <p className="home-subtitle">
          Hybrid product and UX operator with founder experience. I work across research,
          workflows, and GTM to turn complex systems into interfaces people can actually use.
        </p>
      </section>

      <section className="home-section">
        <div className="home-section-header">
          <h2>Selected work</h2>
          <Link to="/case-studies" className="home-link">
            View all case studies
          </Link>
        </div>
        <div className="home-grid">
          <Link to="/case-studies/ai-studios">
            <ProjectTileAIStudios />
          </Link>
          <Link to="/case-studies/reaqtions">
            <ProjectTileReAQtions />
          </Link>
        <Link to="/case-studies/indie-game-marketplace">
            <ProjectTileIndieMarketplace />
          </Link>
        </div>
      </section>
    </div>
  );
};
