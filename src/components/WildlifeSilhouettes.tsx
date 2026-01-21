import elephantSilhouette from "@/assets/silhouette-elephant.png";
import pangolinSilhouette from "@/assets/silhouette-pangolin.png";
import tigerSilhouette from "@/assets/silhouette-tiger.png";
import rhinoSilhouette from "@/assets/silhouette-rhino.png";

const WildlifeSilhouettes = () => {
  const silhouetteStyle = "opacity-[0.12] brightness-0 invert drop-shadow-[0_0_1px_rgba(255,255,255,0.4)] drop-shadow-[0_0_2px_rgba(255,255,255,0.2)]";
  
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Elephant - bottom left, prominent */}
      <img
        src={elephantSilhouette}
        alt=""
        aria-hidden="true"
        className={`absolute bottom-12 left-8 w-40 md:w-56 ${silhouetteStyle}`}
      />
      
      {/* Pangolin - middle right area */}
      <img
        src={pangolinSilhouette}
        alt=""
        aria-hidden="true"
        className={`absolute top-1/4 right-4 w-24 md:w-32 ${silhouetteStyle}`}
      />
      
      {/* Tiger - bottom right corner */}
      <img
        src={tigerSilhouette}
        alt=""
        aria-hidden="true"
        className={`absolute bottom-20 right-8 w-36 md:w-48 ${silhouetteStyle}`}
      />
      
      {/* Rhino - top left area */}
      <img
        src={rhinoSilhouette}
        alt=""
        aria-hidden="true"
        className={`absolute top-16 left-12 w-28 md:w-40 ${silhouetteStyle}`}
      />
    </div>
  );
};

export default WildlifeSilhouettes;
