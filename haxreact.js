const fs = require("fs");
const path = require("path");

function deleteFiles() {
  const filesToDelete = [
    path.join(__dirname, "./src/index.css"),
    path.join(__dirname, "./src/App.css"),
    path.join(__dirname, "./src/App.js"),
    path.join(__dirname, "./src/setupTests.js"),
    path.join(__dirname, "./src/reportWebVitals.js"),
    path.join(__dirname, "./src/logo.svg"),
    path.join(__dirname, "./src/App.test.js"),
  ];

  console.log("Files to delete:", filesToDelete);
  filesToDelete.forEach((filePath) => {
    console.log(`Attempting to delete: ${filePath}`);
    try {
      fs.unlinkSync(filePath);
    } catch (err) {
      console.error(`Error deleting file ${filePath}: ${err.message}`);
    }
  });
}

function createNewFiles() {
  const app_scss = path.join(__dirname, "./src/App.scss");
  const app_scss_content = `// Made proudly by Harsh Singh
@tailwind base;
@tailwind components;
@tailwind utilities;


:root {
    --accent: #CDF529;
    --black: #0A0C00;
    --white: #fff;
    --grey:#f0f0f0;
    --trans: all 0.33s ease-in-out;
    --trans-q: all 0.15s ease-in-out;
    --shadow: 0px 0px 30px rgba(0, 0, 0, 0.116);
    --width: 1160px;
  }
  
  *,
  *::after,
  *::before {
    box-sizing: border-box;
    margin: 0px;
    padding: 0px;
    font-family: "Quicksand", serif;
  
  }
  
  
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Quicksand:wght@300..700&family=Sacramento&display=swap');
  // font-family: "Montserrat", sans-serif;
  // font-family: "Sacramento", serif;
  // font-family: "Quicksand", serif;
  
  .parent {
    width: 100%;
    .container {
      max-width: var(--width);
      padding: 0px calc(var(--unit) / 2);
      margin: auto;
      height: 100%;
    }
  }
  
  a {
    text-decoration: none;
    color: inherit;
  }
  
  p,
  .para {
    line-height: 28px;
    letter-spacing: 1px;
    word-spacing: 2px;
    font-size: 20px;
    max-width: 65ch;
    text-align: justify;
    text-align-last: center;
  
  }
  
  
  
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-size: 30px;
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  line-height: 100%;
  padding: 10px 0px;
  
  
    span {
      font-size: inherit !important;
      font-weight: inherit !important;
      font-family: inherit !important;
      color: var(--accent);
    }
  }
  
  h1{
    font-size: 45px;
  }
  
  
  
  ::-webkit-scrollbar {
    width: 5px;
  }
  
  ::-webkit-scrollbar-track {
    background-color: var(--accent-blue);
    border-radius: 10px;
  }
  
  ::-webkit-scrollbar-thumb {
    background-color: var(--accent-yellow);
    border-radius: 10px;
  }
  
  * {
    scrollbar-width: thin;
    scrollbar-color: var(--accent-yellow) var(--accent-blue);
  }
      .bg-img-cover {
    background-size: cover !important;
    background-repeat: no-repeat !important;
    background-position: center center !important;
  }
  .bg-img-contain {
    background-position: center center !important;
    background-repeat: no-repeat !important;
    background-size: contain !important;
  }
      body {
    -ms-overflow-style: scrollbar;

  
  }
  
  .btn{
    background: none;
    text-decoration: none;
    padding: 10px 20px;
    border: none;
    background: var(--accent);
    text-transform: capitalize;
    cursor: pointer;
    border-radius: 5px;
    color: var(--black);
    font-weight: 600;
    transition: var(--trans);
    &:hover{
      box-shadow: 0px 0px 50px #ccf52946 , 0px 0px 10px #ccf529db;
    }
  }
  
`;

const app_js = path.join(__dirname, "./src/App.scss");
const app_js_content = `import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Home from "./pages/home/Home";
import Four04 from "./pages/404/Four04";
import Header from "./comps/header/Header";
import Footer from "./comps/footer/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/*" element={<Four04 />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

`;
const index_js = path.join(__dirname, "./src/App.scss");
const index_js_content = `import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <App />

);

`;


  try {
    fs.writeFileSync(app_scss, app_scss_content);
    fs.writeFileSync(app_js, app_js_content);
    fs.writeFileSync(index_js, index_js_content);

  } catch (err) {
    console.error(`Error creating file ${newFilePath}: ${err.message}`);
  }
}



function installPackages() {
    const packages = [
      'tailwindcss', // Tailwind CSS
      'react-router-dom', // React Router
      'sass', // Sass preprocessor
      'react-icons' // React icons
    ];

    try {
     
      execSync('npm install -D tailwindcss', { stdio: 'inherit' });
      execSync('npx tailwindcss init', { stdio: 'inherit' });
      execSync(`npm install ${packages.slice(1).join(' ')}`, { stdio: 'inherit' });
    } catch (err) {
      console.error(`Error installing packages: ${err.message}`);
    }
  }
  

function setupReactProject() {
  console.log("Starting setup for React project...");
  installPackages();
  deleteFiles();
  createNewFiles();
  console.log("React project setup complete.");
}

setupReactProject();
