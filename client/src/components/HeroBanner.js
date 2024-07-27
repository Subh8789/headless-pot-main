import React from "react";
import "../utils/css/home.css";

export default function HeroBanner({ bannerData }) {

  // Ensure bannerData is defined
  if (!bannerData) {
    return null; // or return a placeholder/loading component
  }

  //  banner_image is defined and has at least one element
  const bannerImage = bannerData.banner_image?.[0]?.url;
  const header = bannerData.header;
  const bannerText = bannerData.banner_text;

  return (
    <div className="hero-image">
      {bannerImage && (
        <img
          src={bannerImage}
          alt="Photographer"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      )}
      <div className="bannertext">
        {header && (
          <h1 className="header1" dangerouslySetInnerHTML={{ __html: header }} />
        )}
        {bannerText && (
          <div className="text-white para" dangerouslySetInnerHTML={{ __html: bannerText }} />
        )}
      </div>
    </div>
  );
}
