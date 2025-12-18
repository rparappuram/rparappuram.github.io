import professionalSitting from "./assets/images/professional_sitting.png";
import stock_trading_algo from "./assets/images/stock_trading_algo.png";
import llm_chatbot from "./assets/images/llm_chatbot.png";
import ssa_name_analysis from "./assets/images/ssa_name_analysis.png";
import url_shortener from "./assets/images/url_shortener.png";

const logotext = "RYAN";
const footertext = "PARAPPURAM";
const meta = {
  title: "Ryan Parappuram",
  description: "I’m Ryan Parappuram Quantitative Developer _ Blackstone Inc.",
};

const introdata = {
  title: "Ryan Parappuram",
  animated: {
    first: "Quantitative Developer",
    second: "B.S. + M.S. Computer Science",
    third: "Finance & Real Estate",
  },
  description:
    "Merging computer science expertise with financial insight to create scalable tools for real estate investing.",
  your_img_url: professionalSitting,
};

const dataabout = {
  title: "Intro",
  aboutme:
    "Ryan Parappuram is a Quantitative Developer at Blackstone Real Estate. He holds a B.S. in Computer Science from The University of Texas at Austin and is pursuing an M.S. in Computer Science at Georgia Tech, with expertise at the intersection of finance, real estate, and technology.",
};
const worktimeline = [
  {
    jobtitle: "Blackstone Real Estate",
    where: "New York",
    date: "2025 - Present",
  },
  {
    jobtitle: "Integral Development",
    where: "Palo Alto",
    date: "2023 - 2025",
  },
  {
    jobtitle: "Nordstrom",
    where: "Seattle",
    date: "2022",
  },
];

const skills = [
  {
    name: "Software Development",
    value: 100,
  },
  {
    name: "Data Engineering",
    value: 85,
  },
  {
    name: "Quantitative Finance",
    value: 80,
  },
  {
    name: "Cloud Computing",
    value: 90,
  },
  {
    name: "Database Systems",
    value: 95,
  },
];

const services = [
  {
    title: "Software Solutions",
    description:
      "Developing robust, enterprise-grade applications that streamline processes and enhance operational efficiency.",
  },
  {
    title: "Financial Analytics",
    description:
      "Applying quantitative methods and computing expertise to model, value, and analyze real estate and investment portfolios.",
  },
  {
    title: "Data Engineering",
    description:
      "Building pipelines and systems that transform complex datasets into actionable insights for decision-making.",
  },
];

const dataportfolio = [
  {
    img: stock_trading_algo,
    description: "Stock Trading Algorithm",
    link: "https://github.com/rparappuram/AlpacaTradingAlgo",
  },
  {
    img: llm_chatbot,
    description: "LLM Chatbot",
    link: "https://github.com/rparappuram/python-chatbot",
  },
  {
    img: ssa_name_analysis,
    description: "Social Security Administration Name Analysis",
    link: "",
  },
  {
    img: url_shortener,
    description: "URL Shortener",
    link: "https://github.com/rparappuram/url-shortener",
  },
];

const contactConfig = {
  YOUR_EMAIL: "rparappuram@gmail.com",
  YOUR_FONE: "(555)123-4567",
  description:
    "For inquiries related to quantitative development, finance, or real estate technology, please reach out via email.",
  // creat an emailjs.com account
  // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
  YOUR_SERVICE_ID: "service_1edexjv",
  YOUR_TEMPLATE_ID: "template_h3w0og2",
  YOUR_PUBLIC_KEY: "LoNLEr5inE4cqGDYW",
};

const socialprofils = {
  github: "https://github.com/rparappuram",
  linkedin: "https://linkedin.com/in/ryanparappuram",
};
export {
  meta,
  dataabout,
  dataportfolio,
  worktimeline,
  skills,
  services,
  introdata,
  contactConfig,
  socialprofils,
  logotext,
  footertext,
};
