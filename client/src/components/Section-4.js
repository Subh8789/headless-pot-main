import React from "react";

const ImageGrid = ({imageGrid}) => {
  if (!imageGrid) return null;
  //console.log("ImageGrid", imageGrid[2]?.imagegrid?.imagegrid_images?.alttext_for_imagegrid_image);
  //console.log("ImageGrid_img", imageGrid[2]?.imagegrid?.imagegrid_images?.imagegrid_image[0]?.url);
  
 
/*
  const img1 = imageGrid[2]?.imagegrid?.imagegrid_images?.imagegrid_image[0]?.url;
  const img2 = imageGrid[3]?.imagegrid?.imagegrid_images?.imagegrid_image[0]?.url;
  const img3 = imageGrid[4]?.imagegrid?.imagegrid_images?.imagegrid_image[0]?.url;
  const img4 = imageGrid[5]?.imagegrid?.imagegrid_images?.imagegrid_image[0]?.url;
  const img5 = imageGrid[6]?.imagegrid?.imagegrid_images?.imagegrid_image[0]?.url;
   const img6 = imageGrid[7]?.imagegrid?.imagegrid_images?.imagegrid_image[0]?.url; 

   const imgtext1 = imageGrid[2]?.imagegrid?.imagegrid_images?.alttext_for_imagegrid_image;
  const imgtext2 = imageGrid[3]?.imagegrid?.imagegrid_images?.alttext_for_imagegrid_image;
  const imgtext3 = imageGrid[4]?.imagegrid?.imagegrid_images?.alttext_for_imagegrid_image;
  const imgtext4 = imageGrid[5]?.imagegrid?.imagegrid_images?.alttext_for_imagegrid_image;
  const imgtext5 = imageGrid[6]?.imagegrid?.imagegrid_images?.alttext_for_imagegrid_image;
  const imgtext6 = imageGrid[7]?.imagegrid?.imagegrid_images?.alttext_for_imagegrid_image;
*/
  //const img1 = ImageGrid;
  return (
    <div className="collage">
  { /*    { img1 && imgtext1 && 
       <img
            src={img1}
            alt={imgtext1}
            className="collage-image"
          />
    }
      { img2 && imgtext2 && 
       <img
            src={img2}
            alt={imgtext2}
            className="collage-image"
          />
    }
       { img3 && imgtext3 && 
       <img
            src={img3}
            alt={imgtext3}
            className="collage-image"
          />
    }
       { img4 && imgtext4 && 
       <img
            src={img3}
            alt={imgtext4}
            className="collage-image"
          />
    } { img5 && imgtext5 && 
      <img
           src={img5}
           alt={imgtext5}
           className="collage-image"
         />
   }
     { img6 && imgtext6 && 
       <img
            src={img6}
            alt={imgtext6}
            className="collage-image"
          />
    } */}
    </div>

  );
};

export default ImageGrid;
