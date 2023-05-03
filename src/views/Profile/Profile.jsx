import React, { useRef, useEffect } from "react";
import Typed from "typed.js";
import "./Profile.css";

export default function Profile() {
  const typedJSRef = useRef(null);


  useEffect(() => {
    const typedJS = new Typed(typedJSRef.current, {
      strings: [
        "Full-stack Development 💻",
        "React😎 ",
        "NodeJS 🧠",
        "Python🐍",
        "C# 🤖",
      ],
      typeSpeed: 40,
      backSpeed: 40,
      backDelay: 500,
      startDelay: 500,
      loop: true,
    });

    return () => typedJS.destroy();
  }, []);
  return (
    <div className="profile-container">

      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://www.linkedin.com/in/renancardozo/">
                <i class="bi bi-linkedin"></i>
              </a>
              <a href="https://github.com/RenanCardozo">
                <i class="bi bi-github"></i>
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hi, I'm <span className="highlighted-text">Renan</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text ">
              <span className="profile-role-tagline">
                Passionate Developer with knowledge in
              </span>
              <h1>
                <span ref={typedJSRef} />
              </h1>
            </span>
          </div>

          <div className="profile-options">
            <a href="renanCardozo.pdf" download="renancardozo.pdf">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
