import React from "react";
import Footer from "../components/Footer";
import MainLayout from "../layouts/MainLayout";

export default function experience() {
  return (
    <MainLayout>
      <div
        className="d-flex mx-auto align-items-center"
        style={{ width: "900px" }}
      >
        <div className="bg-black bg-opacity-50 mt-3">
          <p className="h3 fw-bold text-center mt-5 p-4">
            Achievements & Activities
          </p>
          <hr className="my-4 ms-auto me-auto" style={{ width: "500px" }} />
          <div className="vstack mx-5">
            <img
              src="/images/kids-holding-colorful-blocks-illustration_53876-40275.jpg"
              width="200"
              height="200"
              style={{ objectFit: "cover" }}
              className="rounded-circle mx-auto my-4"
            />
            <div>
              <p className="fw-bold mt-4">
                🍁 President of the Inventor Club CMU
              </p>
              <p className="ms-5" style={{ color: "gainsboro" }}>
                March 2021 - present
              </p>
              <p className="ms-5">
                Inventor Club CMU is for people who are interested in creating
                things together. There are both software and hardware to learn
                to build robots and other inventions. They can also participate
                in interesting competitions, whether they are the competitions
                that the faculty wants to participate in or other competitions
                that we are interested in.
              </p>
            </div>

            <div>
              <p className="fw-bold mt-3">
                🍁 Online Python and Arduino programming trainning
              </p>
              <p className="ms-5" style={{ color: "gainsboro" }}>
                September 11, 2021
              </p>
              <p className="ms-5">
                Organize introductory programming training for first-year
                students who have just joined the Inventor Club CMU.
              </p>
            </div>

            <div>
              <p className="fw-bold mt-3">
                🍁 Certificate of excellence for participants in the 13th
                Thailand Robot Design Camp: RDC 2021
              </p>
              <p className="ms-5" style={{ color: "gainsboro" }}>
                July 12-24, 2021
              </p>
              <p className="ms-5">
                Has passed the training and participated in the project to
                develop skills in designing and building robots.
              </p>
            </div>

            <div>
              <p className="fw-bold mt-3">
                🍁 Take participate in the True 5G Temi Robot Boot Camp 2020
              </p>
              <p className="ms-5" style={{ color: "gainsboro" }}>
                December, 2020
              </p>
            </div>

            <div>
              <p className="fw-bold mt-3">
                🍁 Received the 3rd prize in the Thai chess competition of the
                board game club in Freshy Sports CMU.
              </p>
              <p className="ms-5" style={{ color: "gainsboro" }}>
                October, 2018
              </p>
            </div>

            <div>
              <p className="fw-bold mt-3">
                🍁 Certificate of excellence for 3rd place winner in the
                Internet of things Competition at the 3rd Open House Harris
                Institute Exhibition and Competition
              </p>
              <p className="ms-5" style={{ color: "gainsboro" }}>
                August 18, 2017
              </p>
            </div>

            <div>
              <p className="fw-bold mt-3">
                🍁 Certificate of excellence for 2nd place winner in the
                Electrically Controlled Pneumatic Mechatronics Competition at
                the 3rd Open House Harris Institute Exhibition and Competition
              </p>
              <p className="ms-5" style={{ color: "gainsboro" }}>
                August 16, 2017
              </p>
            </div>

            <div>
              <p className="fw-bold mt-3">
                🍁 Certificate of excellence for participants in the World Robot
                Olympiad 2014 at Sochi, Russia.
              </p>
              <p className="ms-5" style={{ color: "gainsboro" }}>
                November 21-23, 2014
              </p>
              <p className="ms-5">
                4th place in the final of 16 teams from 367 teams in 48
                countries
              </p>
            </div>

            <div>
              <p className="fw-bold mt-3">
                🍁 Certificate of excellence for 4th place winner in the World
                Robot Olympiad Thailand 2014 at the national level.
              </p>
              <p className="ms-5" style={{ color: "gainsboro" }}>
                September 3-5, 2014
              </p>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </MainLayout>
  );
}
