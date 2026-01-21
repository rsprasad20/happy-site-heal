import elephantSilhouette from "@/assets/silhouette-elephant.png";
import pangolinSilhouette from "@/assets/silhouette-pangolin.png";
import tigerSilhouette from "@/assets/silhouette-tiger.png";
import rhinoSilhouette from "@/assets/silhouette-rhino.png";

const WildlifeSilhouettes = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Elephant - bottom left */}
      <img
        src={elephantSilhouette}
        alt=""
        aria-hidden="true"
        className="absolute bottom-8 left-4 w-32 md:w-48 opacity-[0.06] mix-blend-soft-light"
      />
      
      {/* Pangolin - top right area */}
      <img
        src={pangolinSilhouette}
        alt=""
        aria-hidden="true"
        className="absolute top-20 right-8 w-20 md:w-28 opacity-[0.05] mix-blend-soft-light"
      />
      
      {/* Tiger - bottom right */}
      <img
        src={tigerSilhouette}
        alt=""
        aria-hidden="true"
        className="absolute bottom-16 right-12 w-28 md:w-40 opacity-[0.05] mix-blend-soft-light"
      />
      
      {/* Rhino - left side middle */}
      <img
        src={rhinoSilhouette}
        alt=""
        aria-hidden="true"
        className="absolute top-1/3 left-8 w-24 md:w-36 opacity-[0.05] mix-blend-soft-light"
      />
    </div>
  );
};

export default WildlifeSilhouettes;
