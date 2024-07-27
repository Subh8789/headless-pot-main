import React from 'react';
const ImageBanner = ({imageBanner}) => {

if(!imageBanner) return null;
console.log("ImageBanner", imageBanner?.imagebanner_image[0]?.url);
const img1 = imageBanner?.imagebanner_image[0]?.url;
const eyebrow = imageBanner?.eyebrow;
const description = imageBanner?.description;
const title = imageBanner?.title;
//console.log("ImageBanner", img1);

  return (
    <div className="ImageBanner" id="div-1">
  <div className="image-container" id="div-2">
    <div id="div-3">
      <div>
      {img1 && <div><img src={img1}/></div>}
      </div>
    </div>
  </div>

  <div className="text-container" id="div-4">
    { eyebrow && <h2 id="h2-1">{eyebrow}</h2>}
    { title && <h2 id="h2-2">{title}</h2>}
    <div id="div-5" dangerouslySetInnerHTML={{ __html: description }} />

    <div className="cta">
      <a href="https://buildingsbt.stage.honeywell.com/us/en/ecommerce_old"> FIND OUT MORE </a>
    </div>
  </div>
</div>


  );
  


}

export default ImageBanner;