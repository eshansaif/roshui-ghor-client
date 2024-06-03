import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer p-10 text-base-200 bg-base-content">
      <div>
        <Link to="/">
          <h2 className="btn btn-ghost normal-case text-xl">Roshui Ghor</h2>
        </Link>
        <p>
          Roshui Ghor Ltd.
          <br />
          Providing Fresh and Healthy Recipes since 1952
        </p>
      </div>
      <div>
        <span className="footer-title">Services</span>
        <a className="link link-hover">Recipes</a>
        <a className="link link-hover">Chefs</a>
        <a className="link link-hover">Marketing</a>
        <a className="link link-hover">Advertisement</a>
      </div>
      <div>
        <span className="footer-title">Company</span>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
      </div>
      <div>
        <span className="footer-title">Legal</span>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </div>
    </footer>
  );
};

export default Footer;
