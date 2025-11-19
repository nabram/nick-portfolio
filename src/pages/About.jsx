import React from "react";
import { usePageMeta } from "../hooks/usePageMeta";

export const About = () => {
  usePageMeta({
    title: "About · Nicholas Abram",
    description:
      "Hybrid product, AI systems, and growth operator with a founder mindset. Timeline, principles, and how I work.",
  });

  return (
    <main className="page">
      {/* Hero */}
      <section className="page-header">
        <h1>About</h1>
        <p>
          I build AI powered products that stay grounded in people. I am a hybrid
          product, AI systems, and growth operator with a founder mindset. I like
          ambiguous problems, complex systems, and work that connects back to real
          people, whether that is climate, education, or everyday tools.
        </p>
      </section>

      {/* Now & how I work */}
      <section className="page-body">
        <h2>Now</h2>
        <p>
          Recently I have been leading work around AI avatar platforms, enterprise
          learning workflows, and AI-assisted prototyping. I move between product
          strategy, UX, systems design, and GTM. I am comfortable talking to customers,
          executives, and engineers, and I enjoy stitching those perspectives together.
        </p>
      </section>

      <section className="page-body">
        <h2>How I work</h2>
        <ul className="about-list">
          <li>
            <strong>Systems first.</strong> I like to understand the end-to-end
            system before focusing on isolated screens or campaigns.
          </li>
          <li>
            <strong>Human centered.</strong> Even when I am deep in AI and architecture,
            I anchor decisions in how people will experience the product.
          </li>
          <li>
            <strong>Experiment driven.</strong> I prefer small, well designed experiments
            with tight learn loops rather than vague big bets.
          </li>
          <li>
            <strong>AI as a team.</strong> I treat AI tools like junior teammates that need
            structure and guardrails. I design workflows that make them reliable.
          </li>
          <li>
            <strong>Clear communication.</strong> I make complex work legible for teams
            and stakeholders.
          </li>
        </ul>
      </section>

      {/* Career timeline */}
      <section className="page-body">
        <h2>Career timeline</h2>
        <p className="page-body-intro">
          A high level view of how my work has evolved, from early UX and storefront design to climate
          pilots and AI powered products.
        </p>

        <div className="timeline">
          {/* Recent years */}
          <div className="timeline-item">
            <div className="timeline-meta">
              <span className="timeline-period">Recent years</span>
              <span className="timeline-role">AI product, GTM, and systems</span>
            </div>
            <div className="timeline-body">
              <h3>DeepBrain AI · AI Studios</h3>
              <p>
                Led work across AI avatar and video products, including a full UX refresh
                for AI Studios, planning and scoping an expansion from roughly 24 to 150+
                avatars, and defining SCORM and enterprise workflows for learning and
                development teams.
              </p>
              <p>
                Operated as a hybrid product and GTM partner, bridging roadmap, UX,
                customer needs, and sales and marketing. Presented UX and product
                recommendations to leadership and helped translate them into changes.
              </p>
            </div>
          </div>

          {/* Earlier */}
          <div className="timeline-item">
            <div className="timeline-meta">
              <span className="timeline-period">Earlier</span>
              <span className="timeline-role">Founder and product designer</span>
            </div>
            <div className="timeline-body">
              <h3>ReAQtions (originally CanAIRy)</h3>
              <p>
                Co-founded a climate and health project focused on indoor air quality
                and electrification. Designed and piloted a device and service that
                helped families understand and improve their indoor air quality when
                cooking and using gas appliances.
              </p>
            </div>
          </div>

          {/* Early career */}
          <div className="timeline-item">
            <div className="timeline-meta">
              <span className="timeline-period">Early career</span>
              <span className="timeline-role">UX, content, and tooling</span>
            </div>
            <div className="timeline-body">
              <h3>Niche Marketing</h3>
              <p>
                Designed and maintained websites, storefronts, and courses for small
                businesses and programs. Redesigned a 300+ page curriculum for a small
                business entrepreneurship program and improved storefronts that drove
                meaningful revenue increases.
              </p>

              <h3>Core Construction</h3>
              <p>
                Worked in the field doing demolition and construction support, then
                built an in-house estimation tool using Python and Excel with VBA to
                automate parts of the bidding process.
              </p>

              <h3>Northwestern Mutual</h3>
              <p>
                Associate Financial Representative. Assisted with client outreach,
                planning workflows, and day-to-day operations of an advisory practice.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="page-body">
        <h2>Education</h2>
        <p>
          BS in Mechanical Engineering with a Product Design specialization, Stanford University.
          I also completed a Stanford Design Fellowship that seeded the early CanAIRy / ReAQtions work.
        </p>
      </section>
    </main>
  );
};
