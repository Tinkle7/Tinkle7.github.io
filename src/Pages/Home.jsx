import React from "react";
import Aboutme from "../Components/Aboutme";
import { Codingexperience } from "../Components/Codingexperience";
import { Gitcalender } from "../Components/Gitcalender";
import Header from "../Components/Header";
import { Myworks } from "../Components/Myworks";
import Skills from "../Components/Skills";

export const Home = () => {
  return (
    <div>
      <Header />
      <Aboutme />
      <Skills />
      <Codingexperience />
      <Myworks />
      <Gitcalender />
    </div>
  );
};
