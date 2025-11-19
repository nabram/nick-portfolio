import React from "react";

export const ProjectTileAvatars = () => {
  return (
    <article className="proj-card">
      <div className="proj-tag-row">
        <span className="proj-tag">AI Product</span>
        <span className="proj-tag">R&amp;D</span>
        <span className="proj-tag">GTM</span>
      </div>
      <h3 className="proj-title">150+ Avatar Pipeline (AI Studios v3.0)</h3>
      <p className="proj-summary">
        Planned and scaled AI Studios&apos; avatar catalog from ~24 to 150+ lifelike
        characters and instant avatars, coordinating research, talent, shoots, and
        integrations and contributing to a major lift in subscribers.
      </p>
      <button className="proj-cta">View case study</button>
    </article>
  );
};
