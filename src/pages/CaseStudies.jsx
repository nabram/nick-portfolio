import React from "react";
import { Link } from "react-router-dom";
import { ProjectTileAIStudios } from "../components/cards/ProjectTileAIStudios";
import { ProjectTileReAQtions } from "../components/cards/ProjectTileReAQtions";
import { ProjectTileIndieMarketplace } from "../components/cards/ProjectTileIndieMarketplace";

export const CaseStudies = () => {
  return (
    <div className="page">
      <section className="page-header">
        <h1>Case studies</h1>
        <p>
          A selection of product and UX work across AI platforms and climate focused
          hardware, with a consistent thread of systems thinking and behavior change.
        </p>
      </section>
      <section className="page-body">
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
