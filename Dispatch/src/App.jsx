import { useState } from "react";
import Navbar from "./components/navbar.jsx";
import Footer from "./components/footer.jsx";
import Hero from "./components/hero"
import Articles_section from "./components/articles_section.jsx"

// DUMMY POST DATA
const POSTS = [
  {
    author: "Amara Diallo",
    profile_pic: "#",
    category: "Technology",
    read_min: 8,
    date: "April 20, 2025",
    title: "The Quiet Revolution of Local AI Models",
    content:
      "For years, running a language model required a data center. That's changing fast — and the implications for privacy and access are profound.",
  },
  {
    author: "Kwame Osei",
    profile_pic: "#",
    category: "Culture",
    read_min: 12,
    date: "April 18, 2025",
    title: "Why Kigali's Tech Scene Is Different",
    content:
      "Infrastructure, policy, and a generation with something to prove — Rwanda's capital is building something that doesn't follow the usual playbook.",
  },
  {
    author: "Lena Fischer",
    profile_pic: "#",
    category: "Media",
    read_min: 6,
    date: "April 15, 2025",
    title: "The Return of the Long Read",
    content:
      "Scroll fatigue is real. Readers are increasingly seeking depth over breadth — and publishers who ignored that are paying attention.",
  },
];

const TAGS = [
  "TECHNOLOGY",
  "CULTURE",
  "MEDIA",
  "SCIENCE",
  "AFRICA",
  "DESIGN",
  "OPINION",
];

const AUTHORS = [
  { full_name: "Amara Diallo", posts: 14, profile_pic: "#" },
  { full_name: "Kwame Osei", posts: 11, profile_pic: "#" },
  { full_name: "Lena Fischer", posts: 9, profile_pic: "#" },
];



function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Articles_section posts={POSTS} tags={TAGS} authors={AUTHORS}   />      
      <Footer />
    </>
  );
}

export default App;
