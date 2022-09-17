import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import MainLayout from "../layouts/MainLayout";

export default function Home() {
  return (
    <MainLayout>
      <div className="mx-auto" style={{ maxWidth: "800px" }}>
        <div className="vstack gap-2 border border-5 rounded-4 p-2">
          <div className="mx-auto">
            <img
              src="/MyPicture.jpg"
              width="200"
              height="200"
              style={{ objectFit: "cover" }}
              className="rounded-circle"
            />
            <p className="fw-bold">Tanadol Takunkayan</p>
          </div>
        </div>
        <br />
        <div
          className="vstack gap-2 border border-5 rounded-4 p-2 align-items-center"
          style={{ backgroundColor: "wheat" }}
        >
          <p>
            สวัสดีครับผม ธนดล ตระกูลขยัน
            กำลังศึกษาอยู่ที่มหาวิทยาลัยเชียงใหม่ในชั้นปี 4
            ในคณะวิศวกรรมศาสตร์สาขาวิศวกรรมคอมพิวเตอร์ สนใจในการเป็น backend
            developer
          </p>
        </div>
        <br />
        <div
          className="vstack gap-2 border border-5 rounded-4 p-2 align-items-center"
          style={{ backgroundColor: "wheat" }}
        >
          <p className="fw-bold">My Skills</p>
          <div
            className="vstack gap-2 border border-5 rounded-4 p-2"
            style={{ backgroundColor: "wheat" }}
          >
            <div>
              <img
                src="/C++ Logo.png"
                width="100"
                height="100"
                style={{ objectFit: "cover" }}
                className="rounded-circle"
              />
              <span className="fw-bold"> C++ Programing </span>
              <span>เป็นหนึ่งภาษาที่่ถนัด</span>
            </div>
            <div>
              <img
                src="/Java logo.png"
                width="100"
                height="100"
                style={{ objectFit: "cover" }}
                className="rounded-circle"
              />
              <span className="fw-bold"> Java Programing </span>
              <span>เป็นภาษาที่่ถนัดที่สุด</span>
            </div>
            <div>
              <img
                src="/network.jpg"
                width="100"
                height="100"
                style={{ objectFit: "cover" }}
                className="rounded-circle"
              />
              <span className="fw-bold"> Network </span>
              <span>
                มีความรู้ในด้าน Network การสร้าง topology
                การเดินสัญญาณให้กับอุปกรณ์อินเตอร์เน็ต
              </span>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
