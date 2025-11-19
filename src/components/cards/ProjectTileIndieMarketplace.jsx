import React from "react";

export const ProjectTileIndieMarketplace = () => {
  return (
    <article className="proj-card">
        <div className="proj-tag-row">
            <span className="proj-tag">Independent project</span>
            <span className="proj-tag">MCP Servers</span>
            <span className="proj-tag">AI Prototyping</span>
            <span className="proj-tag">AI System Design</span>
            <span className="proj-tag">Marketplace UX</span>
        </div>
        <h3 className="proj-title">Indie Game Marketplace (IndieGems)</h3>
        <p className="proj-summary">
          AI assisted prototype of a resilient indie game marketplace using JSON driven
          architecture, Reforge Build, and Lovable.
        </p>
        <button className="proj-cta btn-primary">View case study</button>
    </article>
  );
};
