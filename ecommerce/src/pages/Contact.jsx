import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function Contact() {
  return (
    <>
      <div className="contact-div  ">
        <h1 className="contact-info">Contact Information</h1>

        <Link className="CEO" to="ceo">
          <b>Contact TO CEO</b>
        </Link>
        <br />

        <Link className="HR" to="hr">
          <b>Contact TO HR</b>
        </Link>
      </div>
      <Outlet />
    </>
  );
}
