import React from "react";
import MainLayout from "../layouts/MainLayout";

export default function experience() {
  return (
    <MainLayout>
      <div
        className="vstack gap-2 border border-5 rounded-4 p-2 mx-auto"
        style={{
          maxWidth: "800px",
        }}
      >
        <div
          className="d-none d-sm-flex mx-auto align-items-center"
          style={{ maxWidth: "500px" }}
        ></div>
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

      <div
        className="vstack gap-2 border border-5 rounded-4 p-2 align-items-center mx-auto"
        style={{ backgroundColor: "wheat", maxWidth: "800px" }}
      >
        <p className="fw-bold">My Experience</p>

        <div
          className="vstack gap-2 border border-5 rounded-4 p-2"
          style={{ backgroundColor: "darkturquoise" }}
        >
          <div>
            <img
              src="/Snake.png"
              width="100"
              height="100"
              className="rounded-circle"
            />
            <p className="fw-bold"> Snake Game Project </p>
            <p>สร้างเกมงูจากภาษา Java</p>
          </div>
        </div>

        <div
          className="vstack gap-2 border border-5 rounded-4 p-2"
          style={{ backgroundColor: "lightblue" }}
        >
          <div>
            <img
              src="/monopoly.jpg"
              width="100"
              height="100"
              className="rounded-circle"
            />
            <p className="fw-bold"> Monopoly Game Project </p>
            <p>สร้างเกมเศรษฐีจากภาษา C++</p>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
