import elephantSilhouette from "@/assets/silhouette-elephant.png";
import pangolinSilhouette from "@/assets/silhouette-pangolin.png";
import tigerSilhouette from "@/assets/silhouette-tiger.png";
import rhinoSilhouette from "@/assets/silhouette-rhino.png";

const WildlifeSilhouettes = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Elephant - bottom left, largest and most prominent */}
      <img
        src={elephantSilhouette}
        alt=""
        aria-hidden="true"
        className="absolute bottom-0 left-[5%] w-48 md:w-64 lg:w-72 opacity-20"
      />
      
      {/* Rhino - bottom center-left */}
      <img
        src={rhinoSilhouette}
        alt=""
        aria-hidden="true"
        className="absolute bottom-0 left-[25%] w-36 md:w-44 lg:w-52 opacity-15"
      />
      
      {/* Tiger - bottom center-right */}
      <img
        src={tigerSilhouette}
        alt=""
        aria-hidden="true"
        className="absolute bottom-0 right-[20%] w-40 md:w-48 lg:w-56 opacity-15"
      />
      
      {/* Pangolin - bottom right, smaller */}
      <img
        src={pangolinSilhouette}
        alt=""
        aria-hidden="true"
        className="absolute bottom-4 right-[5%] w-28 md:w-36 lg:w-40 opacity-20"
      />
    </div>
  );
};

export default WildlifeSilhouettes;
