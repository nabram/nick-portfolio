import React from "react";
import { usePageMeta } from "../hooks/usePageMeta";

export const About = () => {
  usePageMeta({
    title: "About · Nicholas Abram",
    description:
      "Hybrid product, AI systems, and growth operator with a founder mindset. Timeline, principles, and how I work.",
  });

  return (
    <main className="about">
      {/* Hero */}
      <section className="about-hero">
        <div className="about-hero-text">
          <p className="about-eyebrow">About</p>
          <h1 className="about-title">
            I build AI powered products that stay grounded in people.
          </h1>
          <p className="about-subtitle">
            I am a hybrid product, AI systems, and growth operator with a founder mindset.
            I like ambiguous problems, complex systems, and work that connects back to
            real people, whether that is climate, education, or everyday tools.
          </p>
        </div>
      </section>

      {/* Now and how I work */}
      <section className="about-section">
        <h2>Now</h2>
        <p>
          Recently I have been leading work around AI avatar platforms, enterprise learning
          workflows, and AI assisted prototyping. I move between product strategy, UX,
          systems design, and GTM. I am comfortable talking to customers, executives, and
          engineers, and I enjoy stitching those perspectives together.
        </p>
      </section>

      <section className="about-section">
        <h2>How I work</h2>
        <ul className="about-list">
          <li>
            <strong>Systems first.</strong> I like to understand the end to end system
            before focusing on individual screens or campaigns.
          </li>
          <li>
            <strong>Human centered.</strong> Even when I am deep in AI and architecture, I
            anchor decisions in how people will experience the product.
          </li>
          <li>
            <strong>Experiment driven.</strong> I prefer small, well designed experiments
            over vague big bets. Build, test, and learn loops matter.
          </li>
          <li>
            <strong>AI as a team, not a trick.</strong> I treat AI tools like junior
            teammates that need structure, not like magic. I design workflows that make
            them reliable.
          </li>
          <li>
            <strong>Clear communication.</strong> I take pride in making complex work
            legible to stakeholders and teammates.
          </li>
        </ul>
      </section>

      {/* Career timeline */}
      <section className="about-section">
        <h2>Career timeline</h2>
        <p className="about-section-intro">
          A high level view of how my work has evolved, from early UX and storefront
          design to climate pilots and AI powered products.
        </p>

        <div className="timeline">
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
                customer needs, and sales and marketing motions. Presented UX and product
                recommendations to leadership and helped translate them into roadmap and
                product changes.
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-meta">
              <span className="timeline-period">Earlier</span>
              <span className="timeline-role">Founder and product designer</span>
            </div>
            <div className="timeline-body">
              <h3>ReAQtions (originally CanAIRy)</h3>
              <p>
                Co founded a climate and health project focused on indoor air quality and
                electrification. Designed and piloted a device and service that helped
                families understand and improve their indoor air quality when cooking and
                using gas appliances.
              </p>
              <p>
                Led product design, UX, community engagement, and pilot work with local
                partners. We saw behavior changes like families opening windows, turning
                on fans, and adjusting cooking habits based on the device feedback.
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-meta">
              <span className="timeline-period">Early career</span>
              <span className="timeline-role">UX, content, and tooling</span>
            </div>
            <div className="timeline-body">
              <h3>Niche Marketing</h3>
              <p>
                Designed and maintained websites, storefronts, and courses for small
                businesses and programs. This included redesigning a 300+ page curriculum
                for a small business entrepreneurship program and improving storefronts
                that helped drive meaningful revenue lift for clients.
              </p>

              <h3>Core Construction</h3>
              <p>
                Worked in the field doing demolition and construction support, then built
                an in house estimation tool using Python and Excel with VBA to automate
                parts of the bidding process.
              </p>

              <h3>Northwestern Mutual</h3>
              <p>
                Joined as an Associate Financial Representative. Assisted with client
                outreach, planning workflows, and the day to day operations behind a
                financial advisory practice. This role gave me early exposure to regulated
                environments and client facing work.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="about-section">
        <h2>Education</h2>
        <p>
          I completed a BS in Mechanical Engineering with a Product Design specialization
          at Stanford University. During that time I took part in a Stanford Design
          Fellowship, where the work that eventually became ReAQtions was originally
          developed.
        </p>
      </section>
    </main>
  );
};
