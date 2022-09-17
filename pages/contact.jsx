import React from "react";
import Footer from "../components/Footer";
import MainLayout from "../layouts/MainLayout";

export default function contact() {
  return (
    <MainLayout>
      <div
        className="d-flex mx-auto align-items-center"
        style={{ maxWidth: "900px" }}
      >
        <div className="bg-black bg-opacity-50 mt-3">
          <p className="text-center mt-5 fw-bold h3 p-3">Contacts</p>
          <hr className="my-4 ms-auto me-auto" style={{ width: "500px" }} />
          <div className="d-flex mt-4 mx-5 hstack gap-4">
            <img
              src="/images/pic.jpg"
              width="200"
              height="200"
              style={{ objectFit: "cover" }}
              className="rounded-circle mx-4"
            />
            <div className="vstack mt-3 gap-3" style={{ width: "110px" }}>
              <span className="fw-bold">Name :</span>
              <span className="fw-bold">Nickname :</span>
              <span className="fw-bold">Address :</span>
              <span className="fw-bold mt-4">Facebook :</span>
              <span className="fw-bold">Email :</span>
              <span className="fw-bold">Phone :</span>
            </div>
            <div className="vstack mt-3 ms-3 gap-3">
              <span>Chawanluck Kaewmool</span>
              <span>Mint</span>
              <span>
                8 Village No.10, Tonthong Sub-district, Muang District, Lamphun,
                51000
              </span>
              <a
                href="https://www.facebook.com/chawanluck.mint"
                className="link-info"
                rel="noreferrer"
              >
                https://www.facebook.com/chawanluck.mint
              </a>
              <a
                href="mailto://?subject=I%20think%20you%27d%20be%20interested%20in%20this%3A%20Why%20do%20web%20links%20open%20inside%20of%20Outlook%3F&amp;body=Why%20do%20web%20links%20open%20inside%20of%20Outlook%3F%20https%3A%2F%2Fsupport.microsoft.com%2Fen-us%2Foffice%2Fwhy-do-web-links-open-inside-of-outlook-cb86f4d8-bf25-4652-a8ed-b862683d9b17"
                className="link-info"
              >
                chawanluck_kae@cmu.ac.th
              </a>
              <span>0846082971</span>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </MainLayout>
  );
}
