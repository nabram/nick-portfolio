import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { CaseStudies } from "./pages/CaseStudies";
import { AIStudiosCaseStudy } from "./case-studies/AIStudiosCaseStudy";
import { ReAQtionsCaseStudy } from "./case-studies/ReAQtionsCaseStudy";
import "./styles/case-study.css"; // case study styles

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/case-studies/ai-studios" element={<AIStudiosCaseStudy />} />
          <Route path="/case-studies/reaqtions" element={<ReAQtionsCaseStudy />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
