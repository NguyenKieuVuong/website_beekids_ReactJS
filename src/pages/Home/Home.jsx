import React from "react";

import Advantage from "./Advantage";
import CourseFavorite from "./CourseFavorite";
import Distinctive from "./Distinctive";
import HomeHeader from "./HomeHeader";
import Reality from "./Reality";
import Result from "./Result";
import ReviewHome from "./ReviewHome";
import SolutionForChild from "./SolutionForChild";
import SolutionGamification from "./SolutionGamification";
import Teams from "./Teams";
import Vision from "./Vision";
import Wish from "./Wish";
function Home() {
  return (
    <>
      <HomeHeader />
      <Vision />
      <Reality />
      <Wish />
      <SolutionForChild />
      <SolutionGamification />
      <Advantage />
      <Distinctive />
      <Result />
      <CourseFavorite />
      <Teams />
      <ReviewHome />
    </>
  );
}

export default Home;
