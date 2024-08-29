import React from "react";
import linkedinLogo from "../../public/assets/linkedin_logo.png";
import instagramLogo from "../../public/assets/instagram_logo.png";
import xLogo from "../../public/assets/x_logo.png";
import gmailLogo from "../../public/assets/gmail_logo.png";
import callLogo from "../../public/assets/call_logo.png";
// import art5 from "../../public/assets/art-5.jpg";
import Image from "next/image";
import Link from "next/link";

const ContactPage = () => {
  return (
    <div className="relative">
      <div
        className="text-center dark:text-white text-neutral-800 text-[2.5rem] font-bold"
        id="contact"
      >
        🌌 Contact 🦄
      </div>

      <div className="flex justify-center gap-14 mt-24">
        <Link href="https://www.linkedin.com/in/siva-shankar-juthuka-26b80023a/">
          <Image
            src={linkedinLogo}
            alt="Linkedin"
            width={50}
            style={{ objectFit: "contain", cursor: "pointer" }}
          />
        </Link>

        <Link href="https://www.instagram.com/">
          <Image
            src={instagramLogo}
            alt="instagram"
            width={50}
            style={{ objectFit: "contain", cursor: "pointer" }}
          />
        </Link>
        <Link href="https://x.com/">
          <Image
            src={xLogo}
            alt="x"
            width={50}
            style={{ objectFit: "contain", cursor: "pointer" }}
          />
        </Link>
      </div>
      <div className="flex justify-center gap-6 mb-8 mt-1">
        <p>LinkedIn</p>
        <p>Instagram</p>
        <p>X(twitter)</p>
      </div>

      {/*  */}
      <div className="flex justify-center gap-14 mt-8">
        <Link href="mailto:sivashankar.juthuka@gmail.com">
          <Image
            src={gmailLogo}
            alt="Email Address"
            width={50}
            style={{ objectFit: "contain", cursor: "pointer" }}
          />
        </Link>
        <Link href="tel:+91 93475 21442">
          <Image
            src={callLogo}
            alt="call"
            width={50}
            style={{ objectFit: "contain", cursor: "pointer" }}
          />
        </Link>
      </div>
      <div className="flex justify-center gap-16 mb-24 mt-1">
        <p>Mail</p>
        <p>Call</p>
      </div>

      <div className="absolute z-[0] w-[40%] h-[35%] top-0 left-0 blue__gradient" />
      <div className="absolute z-[0] w-[40%] h-[35%] bottom-0 right-0 blue__gradient" />

      {/* <div className="w-full flex justify-center items-center my-24" id="about">
        <Image
          src={art5}
          alt="about"
          width={800}
          style={{ objectFit: "cover" }}
        />
      </div> */}
    </div>
  );
};

export default ContactPage;
