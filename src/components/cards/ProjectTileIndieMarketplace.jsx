import React from "react";

export const ProjectTileIndieMarketplace = () => {
  return (
    <article className="project-tile">
      <div className="project-tile-body">
        <p className="project-tile-eyebrow">Independent project · AI prototyping</p>
        <h3 className="project-tile-title">Indie Game Marketplace</h3>
        <p className="project-tile-summary">
          AI assisted prototype of a resilient indie game marketplace using JSON driven
          architecture, Reforge Build, and Lovable.
        </p>
        <ul className="project-tile-tags">
          <li>AI prototyping</li>
          <li>Marketplace UX</li>
          <li>System design</li>
        </ul>
      </div>
    </article>
  );
};
