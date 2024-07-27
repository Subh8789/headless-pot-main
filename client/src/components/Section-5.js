import React from 'react';
const ImageBanner = ({imageBanner}) => {

if(!imageBanner) return null;
console.log("ImageBanner", imageBanner?.imagebanner_image[0]?.url);
const img1 = imageBanner?.imagebanner_image[0]?.url;
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
    <h2 id="h2-1">BUY DIRECT ONLINE</h2>
    <h2 id="h2-2">Order and track online, any time.</h2>
    <div id="div-5">
      <p id="p-1">If you’re a U.S. Honeywell customer, now there’s a single source for reviewing product specs, placing orders and tracking shipments. Coming soon to Europe, Asia and the Middle East.</p>
    </div>
    <div className="cta">
      <a href="https://buildingsbt.stage.honeywell.com/us/en/ecommerce_old"> FIND OUT MORE </a>
    </div>
  </div>
</div>


  );
  


}

export default ImageBanner;