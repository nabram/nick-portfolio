import React from "react";
import { usePageMeta } from "../hooks/usePageMeta";

export default function AIProductivitySystemCaseStudy() {
  usePageMeta({
    title: "AI Driven Portfolio System · Case Study · Nicholas Abram",
    description:
      "How I built a modular, high speed portfolio system using structured data, React, and a human plus AI collaboration workflow to generate resumes and case studies in minutes.",
  });

  return (
    <main className="cs">
      <header className="cs-hero">
        <div className="cs-hero-text" style={{ minWidth: 0 }}>
          <p className="cs-eyebrow">Independent project · AI systems · Portfolio engine</p>
          <h1 className="cs-title">Building an AI driven portfolio system</h1>
          <p className="cs-subtitle">
            I designed a modular, AI assisted portfolio engine that can generate resumes,
            case studies, and pages in minutes instead of weeks, by combining structured
            data, React, and a deliberate human plus AI workflow.
          </p>

          <dl className="cs-meta">
            <div>
              <dt>Role</dt>
              <dd>Product lead · System architect · Designer · Implementer</dd>
            </div>
            <div>
              <dt>Timeframe</dt>
              <dd>Late 2025</dd>
            </div>
            <div>
              <dt>Scope</dt>
              <dd>
                Portfolio architecture, AI workflow design, React implementation, resume
                system, case study system, SEO, hallucination controls
              </dd>
            </div>
            <div>
              <dt>Outcome</dt>
              <dd>
                A reusable system that can create high fidelity professional artifacts in
                minutes, with a clear narrative of my hybrid Product × AI identity.
              </dd>
            </div>
          </dl>
        </div>

        <div className="cs-hero-media" aria-hidden="true">
          {/* Placeholder for a future visual (site overview, system diagram, etc.) */}
        </div>
      </header>

      <div className="cs-body">
        <section className="cs-section">
          <h2>Context and motivation</h2>
          <p>
            I wanted a portfolio that matched how I actually work: fast, structured,
            human centric, and AI native. Instead of spending weeks manually polishing
            static pages, I wanted a system that could:
          </p>
          <ul className="cs-list">
            <li>Generate resumes, case studies, and UI modules in minutes.</li>
            <li>
              Reuse the same structures across new roles and projects without starting
              from zero.
            </li>
            <li>
              Act as a persistent professional brain that understands my career and how
              I want to be represented.
            </li>
            <li>Help me see patterns and trends in my own work that I might miss.</li>
          </ul>
          <p>
            The thesis was simple. If I gave an AI system accurate, structured data about
            my experience and defined a clear architecture, I could turn it into a
            reliable product partner instead of a one off tool.
          </p>
        </section>

        <section className="cs-section">
          <h2>My role</h2>
          <p>
            This was a solo project where I acted as founder, product owner, system
            architect, designer, and implementer. Concretely, I:
          </p>
          <ul className="cs-list">
            <li>Scoped and designed the entire portfolio system end to end.</li>
            <li>
              Uploaded and structured hundreds of files, resumes, and JSON profiles to
              build a true data foundation.
            </li>
            <li>
              Directed the AI with clear standards, prompts, and correction loops instead
              of accepting first drafts.
            </li>
            <li>
              Implemented the portfolio in React with Vite, routing, and reusable
              components.
            </li>
            <li>
              Designed and enforced naming, layout, and case study templates so the system
              is consistent and reusable.
            </li>
          </ul>
        </section>

        <section className="cs-section">
          <h2>The build process</h2>
          <p>
            The hardest part of this project was not the React setup. It was accuracy
            verification. With more than 200 artifacts and multiple versions of my
            resume, it was easy for an LLM to blend companies, roles, and timelines in
            subtle ways.
          </p>
          <p>
            I solved this by treating the AI like a team that needed structure, not like
            a magic box that would just handle it. I:
          </p>
          <ul className="cs-list">
            <li>
              Introduced structured JSON files that described my skills, roles, and
              experience in a consistent schema.
            </li>
            <li>
              Uploaded many generations of resumes and explicitly corrected mistakes in
              title, scope, and career arc.
            </li>
            <li>
              Asked the AI to slow down, ask clarifying questions, and prioritize
              accuracy over speed.
            </li>
            <li>
              Locked in the correct narrative and preferences using memory so the system
              did not drift over time.
            </li>
          </ul>
        </section>

        <section className="cs-section">
          <h2>Human plus AI collaboration</h2>
          <p>
            The AI was very strong at translating architecture into implementation once
            the rules were clear. It helped:
          </p>
          <ul className="cs-list">
            <li>Generate React components that followed my naming and layout rules.</li>
            <li>Build out routing, hooks, and reusable project tiles.</li>
            <li>
              Turn narrative structures into consistent case study layouts and resume
              variants.
            </li>
          </ul>
          <p>
            Where it struggled was exactly where LLMs usually struggle. It mixed details
            from different jobs, over stated seniority, and occasionally hallucinated
            responsibilities when data was ambiguous.
          </p>
          <p>
            To correct this I enforced standards. I pushed back when something was wrong,
            required explicit questions before making assumptions, and used structured
            data and templates to limit the space where hallucinations could occur.
          </p>
        </section>

        <section className="cs-section">
          <h2>Business and product value</h2>
          <p>
            The result is not just a portfolio site. It is a reusable system that now
            creates real value:
          </p>
          <ul className="cs-list">
            <li>
              I can generate new, targeted resumes and case studies in minutes instead of
              days.
            </li>
            <li>
              The system maintains a coherent view of my career that matches how I want
              to be positioned.
            </li>
            <li>
              Every new project can plug into the same component library and narrative
              framework.
            </li>
            <li>
              I have a working example of how to design AI workflows that are fast and
              reliable, which applies directly to product work.
            </li>
          </ul>
          <p>
            The key product insight is that AI becomes significantly more reliable once
            it is given structured data, clear templates, and permission to ask
            questions. Speed comes after system design, not before it.
          </p>
        </section>

        <section className="cs-section">
          <h2>Outcomes</h2>
          <ul className="cs-list">
            <li>Five production ready resumes for different role types.</li>
            <li>A full React portfolio architecture with routing and SEO hooks.</li>
            <li>Seven plus polished case studies that can be recreated quickly.</li>
            <li>A reusable component system for cards, pages, and layouts.</li>
            <li>
              A clearer, more accurate narrative of my hybrid Product × AI identity.
            </li>
            <li>
              A personal AI workflow that I can reuse for future products and work.
            </li>
          </ul>
        </section>

        <section className="cs-section">
          <h2>A key moment</h2>
          <p>
            One of the turning points came when the AI kept blending my DeepBrain AI
            responsibilities into earlier roles. Instead of manually correcting every
            instance, I stepped back and redesigned the system. I introduced JSON based
            profiles, locked in a clean timeline, and enforced consistent component
            naming.
          </p>
          <p>
            After that change, the quality of output jumped. The AI stopped guessing and
            started behaving more like a junior team operating within a well designed
            system. That is exactly how I approach building AI powered products in
            general.
          </p>
        </section>
      </div>
    </main>
  );
}
