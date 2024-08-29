import React from "react";
import { TechStackButton } from "./TechStackButton";
import reactLogo from "../../public/assets/react.png";
import javascriptLogo from "../../public/assets/javascript.png";
import tailwindLogo from "../../public/assets/tailwind.png";
import nodejsLogo from "../../public/assets/nodejs.png";
import expressLogo from "../../public/assets/express.png";
import javalogo from "../../public/assets/javalogo.png";
import mongodbLogo from "../../public/assets/mongodb.png";
import nextjsLogo from "../../public/assets/nextjs.png";
import typescriptLogo from "../../public/assets/typescript.png";
import cppLogo from "../../public/assets/cpp.png";
import htmlLogo from "../../public/assets/html.png";
import cssLogo from "../../public/assets/css.png";
import Link from "next/link";

const AboutPage = () => {
  return (
    <>
      <div
        className="relative min-h-screen w-full flex flex-col justify-center items-center"
        id="about"
      >
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 left-0 blue__gradient" />
        <div className="absolute z-[0] w-[40%] h-[35%] bottom-0 right-0 blue__gradient" />
        <br />
        <br />
        <br />
        <div className="text-center dark:text-white text-neutral-800 text-[2.5rem] font-bold mt-8">
          About Me
        </div>
        <br />
        <br />
        <div className="w-[90%] sm:w-[80%] md:w-[80%] xl:w-[60%] my-14 text-2xl z-10">
          I&apos;m a skilled developer with a strong foundation in Data
          Structures and Algorithms (DSA), building AIML applications.
          <br />
          <br />
          <br />
          <div className="flex w-full flex-wrap mt-8">
            <TechStackButton title="Java" logo={javalogo} />
            <TechStackButton title="C++" logo={cppLogo} />
            <TechStackButton title="HTML5" logo={htmlLogo} />
            <TechStackButton title="CSS3" logo={cssLogo} />
            <TechStackButton title="React.Js" logo={reactLogo} />
            <TechStackButton title="JavaScript" logo={javascriptLogo} />
            <TechStackButton title="TailwindCSS" logo={tailwindLogo} />
            <TechStackButton title="Node.Js" logo={nodejsLogo} />
            <TechStackButton title="Express.js" logo={expressLogo} />
            <TechStackButton title="MongoDB" logo={mongodbLogo} />
            {/* <TechStackButton title="Mongoose" logo={mongooseLogo} /> */}
            <TechStackButton title="Next.js" logo={nextjsLogo} />
            <TechStackButton title="TypeScript" logo={typescriptLogo} />
            {/* <TechStackButton title="Material-UI" logo={materialuiLogo} /> */}
          </div>
          <br />
          <br />
          <br />
          <div>
            <span className="sm:text-4xl text-[30px] font-bold text-green-300">
              ✨ Juthuka Siva Shankar
            </span>
            <br />
            <br />
            {/* <span className="font-bold text-purple-300">
              Currently:
            </span>{" "}
            Final Year Engineering Student <br /> */}
            <br />
            <span className="font-bold text-purple-300">Branch:</span> Computer
            Science Engineering <br />
            <br />
            <span className="font-bold text-purple-300">Collage:</span> Aditya
            College of Engineering and Technology
            <br />
            <br />
            <span className="font-bold text-purple-300">Graduation Year:</span>
            2024
            <br />
            <br />
            <span className="font-bold text-purple-300">Address:</span>
            Andhra Pradesh, India
            <br />
            <br />
            <br />
            <br />
            <span className="font-bold text-green-300">
              🎗️ As a student of Computer Science Engineering, I am good at:
            </span>
            <br />
            <br />
            -Artificial Intelligence and Machine Learning
            <br /> -Data Structure & Algorithms <br />
            -Object Oriented Programming
            <br /> -Database Management
            <br />
            {/* <br /> I completed an{" "}
            <Link
              href="https://arocrmsoftware.netlify.app/"
              className="text-green-300 underline"
            >
              Internship
            </Link>{" "}
            at Decqle Design Studio as a Frontend Developer, where I worked with
            React.js, Tailwind CSS, and ReactFlow. During this internship, I
            learned various skills such as communication and teamwork.
            <br /> <br />I also completed a{" "}
            <Link
              href="https://aroprojects.000webhostapp.com/gymwebsite/"
              className="text-green-300 underline"
            >
              Freelance
            </Link>{" "}
            project for a gym, creating a landing page website using HTML and
            CSS. The website is fully mobile responsive and includes sections
            for diet plans and gym schedules. */}
          </div>
          <br />
          <br />
          <br />
          🙌 So, come on, let&apos;s connect and share a few laughs while we
          navigate the tech world together!
          <br />
          <br />
          ➡️ I am looking for opportunities in the fields of AIML and software
          development.
          <br />
        </div>
      </div>
    </>
  );
};

export default AboutPage;
