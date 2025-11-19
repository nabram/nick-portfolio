import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { CaseStudies } from "./pages/CaseStudies";

import IndieGameMarketplaceCaseStudy from "./case-studies/IndieGameMarketplaceCaseStudy";
import AvatarPipelineCaseStudy from "./case-studies/AvatarPipelineCaseStudy";
import SCORMEnterpriseCaseStudy from "./case-studies/SCORMEnterpriseCaseStudy";
import AIProductivitySystemCaseStudy from "./case-studies/AIProductivitySystemCaseStudy";


// 👇 change these two lines to default imports
import AIStudiosCaseStudy from "./case-studies/AIStudiosCaseStudy";
import ReAQtionsCaseStudy from "./case-studies/ReAQtionsCaseStudy";

import "./styles/case-study.css";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/case-studies/ai-studios" element={<AIStudiosCaseStudy />} />
          <Route path="/case-studies/indie-game-marketplace" element={<IndieGameMarketplaceCaseStudy />} />
          <Route path="/case-studies/reaqtions" element={<ReAQtionsCaseStudy />} />
          <Route path="/case-studies/avatar-pipeline" element={<AvatarPipelineCaseStudy />} />
          <Route path="/case-studies/scorm-enterprise" element={<SCORMEnterpriseCaseStudy />} />
          <Route path="/case-studies/ai-portfolio-system" element={<AIProductivitySystemCaseStudy />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
