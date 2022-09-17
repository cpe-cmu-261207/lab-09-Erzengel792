import React from "react";
import MainLayout from "../layouts/MainLayout";

export default function contact() {
  return (
    <MainLayout>
      <div
        className="vstack gap-2 border border-5 rounded-4 p-2 align-items-center mx-auto"
        style={{ maxWidth: "800px" }}
      >
        <p className="fw-bold">My Contact</p>
        <div className="vstack gap-4 align-items-center">
          <div className="p-4">
            <img
              src="/MyPicture.jpg"
              width="200"
              height="200"
              style={{ objectFit: "cover" }}
              className="rounded-circle"
            />
          </div>
          <div
            className="d-none d-sm-flex mx-auto align-items-center"
            style={{ maxWidth: "500px" }}
          >
            <p className="mx-2 fw-bold">Name :</p>
            <div className="mx-4">
              <p>Tanadol Takunkayan</p>
            </div>
          </div>
          <div
            className="d-none d-sm-flex mx-auto align-items-center"
            style={{ maxWidth: "500px" }}
          >
            <p className="mx-2 fw-bold">Nickname :</p>
            <div className="mx-4">
              <p>Boat</p>
            </div>
          </div>
          <div
            className="d-none d-sm-flex mx-auto align-items-center"
            style={{ maxWidth: "500px" }}
          >
            <p className="mx-2 fw-bold">Address :</p>
            <div className="mx-4">
              <p>60/1 ถ.ป่าตันงาม ต.ป่าตัน อ.เมือง จ.เชียงใหม่</p>
            </div>
          </div>
          <div
            className="d-none d-sm-flex mx-auto align-items-center"
            style={{ maxWidth: "500px" }}
          >
            <p className="mx-2 fw-bold">Facebook :</p>
            <div className="mx-4">
              <p>
                <a
                  href="https://www.facebook.com/boat.seito/"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  https://www.facebook.com/boat.seito/
                </a>
              </p>
            </div>
          </div>
          <div
            className="d-none d-sm-flex mx-auto align-items-center"
            style={{ maxWidth: "500px" }}
          >
            <p className="mx-2 fw-bold">Email :</p>
            <div className="mx-4">
              <p>
                <a href="mailto:tanadol_tak@cmu.ac.th">tanadol_tak@cmu.ac.th</a>
              </p>
            </div>
          </div>
          <div
            className="d-none d-sm-flex mx-auto align-items-center"
            style={{ maxWidth: "500px" }}
          >
            <p className="mx-2 fw-bold">Phone :</p>
            <div className="mx-4">
              <p>0954093516</p>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
