import React from "react";

const ImageGrid = ({imageGrid}) => {
console.log("imagegrud from comp", imageGrid)
  if (!imageGrid) return null;
  return (
    <div className="collage">

    { imageGrid && imageGrid.map((imagegrid,index)=>(
              <img
                src={imagegrid?.imagegrid_image[0]?.url}
                alt={imagegrid?.alttext_for_imagegrid_image}
                className="collage-image"
              />
    ))
    }
    </div>

  );
};

export default ImageGrid;
