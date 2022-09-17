import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <div
      style={{ maxWidth: "100%", maxHeight: "50px" }}
      className="mx-auto bg-black shadow-lg"
    >
      <div className="d-flex align-items-center hstack p-3 gap-4">
        <Link href="/">
          <a className="link-light badge rounded-pill bg-gradient">HOME</a>
        </Link>
        <Link href="/experience">
          <a className="link-light badge rounded-pill bg-gradient">
            EXPERIENCE
          </a>
        </Link>
        <Link href="/contact">
          <a className="link-light badge rounded-pill bg-gradient">CONTACT</a>
        </Link>
        <Link href="/lab-07">
          <a className="link-light badge rounded-pill bg-gradient">Lab-07</a>
        </Link>
      </div>
      {/* <hr /> */}
    </div>
  );
}
