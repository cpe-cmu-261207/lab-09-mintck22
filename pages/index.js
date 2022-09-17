import Footer from "../components/Footer";
import MainLayout from "../layouts/MainLayout";

export default function Home() {
  return (
    <MainLayout>
      <div
        className="d-flex mx-auto align-items-center"
        style={{ maxWidth: "900px" }}
      >
        <div className="bg-black bg-opacity-50 mt-3">
          <div className="mt-5 ms-5 hstack gap-4">
            <img
              src="/images/pic.jpg"
              width="200"
              height="200"
              style={{ objectFit: "cover" }}
              className="rounded-circle ms-3"
            />
            <div className="vstack mt-auto ms-3 me-5">
              <span className="text-white h2 fw-bold">Chawanluck Kaewmool</span>
              <hr className="my-2" />
              <p>
                I am looking for work in the IT sector and apply my knowledge of
                computer engineering and management skills to work in a leading
                company and use the knowledge from the internship to develop
                myself better.
              </p>
            </div>
          </div>
          <br />

          <div className="d-flex mx-auto" style={{ maxWidth: "600px" }}>
            <div className="bg-opacity-75 vstack flex-column">
              <p className="mx-auto h4 fw-bold my-5 mb-3">Skills</p>
              <hr className="my-2" />
              <div className="hstack mx-auto my-auto p-2 fw-bold gap-4">
                <img
                  src="/images/programming.jpg"
                  width="100"
                  height="100"
                  style={{ objectFit: "cover" }}
                  className="rounded-circle"
                />
                <p>○ Programming: C, Python, HTML, CSS, Bootstrap, SQL</p>
              </div>

              <div className="hstack mx-auto my-auto p-2 fw-bold gap-4">
                <img
                  src="/images/arduino.jpg"
                  width="100"
                  height="100"
                  style={{ objectFit: "cover" }}
                  className="rounded-circle"
                />
                <p>○ Arduino</p>
              </div>

              <div className="hstack mx-auto my-auto p-2 fw-bold gap-4">
                <img
                  src="/images/cisco.jpg"
                  width="100"
                  height="100"
                  style={{ objectFit: "cover" }}
                  className="rounded-circle"
                />
                <p>○ Cisco Packet Tracer</p>
              </div>

              <div className="hstack mx-auto my-auto p-2 fw-bold gap-4">
                <img
                  src="/images/mslogo.jpg"
                  width="100"
                  height="100"
                  style={{ objectFit: "cover" }}
                  className="rounded-circle"
                />
                <p>○ Microsoft Office Word, Excel, PowerPoint</p>
              </div>

              <div className="hstack mx-auto my-auto p-2 fw-bold gap-4">
                <img
                  src="/images/team.png"
                  width="100"
                  height="100"
                  style={{ objectFit: "cover" }}
                  className="rounded-circle"
                />
                <div className="vstack mt-auto">
                  <p>○ Leadership</p>
                  <p>○ Team player</p>
                </div>
              </div>
            </div>
          </div>
          {/* <p class="text-center my-4 mt-5" style="color:lightsteelblue">
            © 2022 chawanluckkaewmool.com by Chawanluck Kaewmool
          </p> */}
          <Footer />
        </div>
      </div>
    </MainLayout>
  );
}
