import React, { useEffect } from "react";
import HeroBanner from "../components/HeroBanner";
import HomeSection2 from "../components/HomeSection2";
import ImageGrid from "../components/Section-4";
import ImageBanner from "../components/Section-5";

import useContentStackApi from "../customHook/useContenStackApi";
import CardSection3 from "../components/CardSection3";


export default function Home() {
  
  const pageInfo = "pot_landing_page";
  const entrypoint = "blta135005fa8d23ccf"

  const [bannerData, setBannerData] = React.useState([]);
  const [section2Data, setSection2Data] = React.useState();
  //const [section3Data, setSection3Data] = React.useState([]);
  const [imageGrid, setImageGrid] = React.useState();
  const [imageBanner, setImageBanner] = React.useState();

  const data = useContentStackApi(pageInfo, entrypoint);

  console.log("contenapidatahook", data);

  console.log("contenapidatahook", data[0]?.herobanner?.banner_image[0].url);

  console.log("imagegridgtext", data[2]?.imagegrid?.imagegrid_images);
  useEffect(() => { 
    setBannerData(data[0]?.herobanner);
   setSection2Data(data[1]?.section);
   setImageGrid(data[2]?.imagegrid?.imagegrid_images);
   setImageBanner(data[3]?.imagebanner);
  },[data]);

  
  return (
    <>
      <HeroBanner bannerData={bannerData} ></HeroBanner>
      <HomeSection2 section2Data={section2Data}></HomeSection2>
      <CardSection3></CardSection3>
      <ImageGrid imageGrid={imageGrid} ></ImageGrid>
      <ImageBanner imageBanner={imageBanner}></ImageBanner>
    </>
  );
}


