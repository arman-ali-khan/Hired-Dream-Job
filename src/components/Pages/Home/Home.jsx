import React from "react";
import FeaturedCities from "./FeaturedCities/FeaturedCities";
import Articles from "./Articles/Articles";
import Hero from "./Hero/Hero";
import JobFeauters from "./JobFeatures/JobFeatures/JobFeauters";
import JobCategory from "./JobCategory/JobCategory";

const Home = () => {
  return (
    <div>
      <Hero />
      <JobCategory />
      <JobFeauters> </JobFeauters>
      <Articles></Articles>
      <FeaturedCities />
    </div>
  );
};

export default Home;
