import React from "react";
import { usePageMeta } from "../hooks/usePageMeta";


export const About = () => {
    usePageMeta({
    title: "About · Nicholas Abram",
    description:
      "Learn more about Nicholas Abram, a hybrid product, UX, and AI systems operator with experience across DeepBrain AI, ReAQtions, and digital product work.",
    });
    
    return (
    <div className="page">
      <section className="page-header">
        <h1>About</h1>
        <p>
          I am a hybrid product, UX, and AI systems operator with experience spanning
          climate hardware, AI video platforms, and GTM. I like working on ambiguous
          problems where research, design, and execution need to come together quickly.
        </p>
      </section>
      <section className="page-body">
        <p>
          This page will later be refined to match the final narrative we developed for my
          resume and case studies. For now it is a placeholder so the site architecture is
          complete.
        </p>
      </section>
    </div>
  );
};
