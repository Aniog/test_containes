import { useState } from "react";
import { cn } from "@/lib/utils";


function GalleryContainer({ children }) {
  return <div className="space-y-4">{children}</div>;
}

function MainStage({ selectedImage, children }) {
  return (
    <div className="relative aspect-[4/5] bg-sand overflow-hidden">{children}</div>
  );
}

function ThumbButton({ active, onClick, label, children }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "relative w-20 h-24 md:w-24 md:h-28 bg-sand overflow-hidden border-2 transition-colors",
        active ? "border-gold" : "border-transparent"
      )}
      aria-label={label}
    >
      {children}
    </button>
  );
}

export function ProductGallery({ productId }) {
  const [selectedImage, setSelectedImage] = useState(0);

  switch (productId) {
    case "vivid-aura-jewels":
      return (
        <GalleryContainer>
          <MainStage selectedImage={selectedImage}>
            <img
              data-strk-img-id="product-vivid-aura-1"
              data-strk-img="gold ear cuff crystal accent demi fine jewelry"
              data-strk-img-ratio="4x5"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Vivid Aura Jewels front view"
              className={cn(
                "absolute inset-0 w-full h-full object-cover transition-opacity duration-500",
                selectedImage === 0 ? "opacity-100" : "opacity-0"
              )}
            />
            <img
              data-strk-img-id="product-vivid-aura-2"
              data-strk-img="gold ear cuff crystal accent side detail jewelry"
              data-strk-img-ratio="4x5"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Vivid Aura Jewels side view"
              className={cn(
                "absolute inset-0 w-full h-full object-cover transition-opacity duration-500",
                selectedImage === 1 ? "opacity-100" : "opacity-0"
              )}
            />
          </MainStage>
          <div className="flex gap-3">
            <ThumbButton
              active={selectedImage === 0}
              onClick={() => setSelectedImage(0)}
              label="View image 1"
            >
              <img
                data-strk-img-id="product-vivid-aura-thumb-1"
                data-strk-img="gold ear cuff crystal accent demi fine jewelry"
                data-strk-img-ratio="3x4"
                data-strk-img-width="200"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="Vivid Aura Jewels thumbnail 1"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </ThumbButton>
            <ThumbButton
              active={selectedImage === 1}
              onClick={() => setSelectedImage(1)}
              label="View image 2"
            >
              <img
                data-strk-img-id="product-vivid-aura-thumb-2"
                data-strk-img="gold ear cuff crystal accent side detail jewelry"
                data-strk-img-ratio="3x4"
                data-strk-img-width="200"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="Vivid Aura Jewels thumbnail 2"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </ThumbButton>
          </div>
        </GalleryContainer>
      );
    case "majestic-flora-nectar":
      return (
        <GalleryContainer>
          <MainStage selectedImage={selectedImage}>
            <img
              data-strk-img-id="product-flora-nectar-1"
              data-strk-img="multicolor floral crystal necklace gold plated"
              data-strk-img-ratio="4x5"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Majestic Flora Nectar front view"
              className={cn(
                "absolute inset-0 w-full h-full object-cover transition-opacity duration-500",
                selectedImage === 0 ? "opacity-100" : "opacity-0"
              )}
            />
            <img
              data-strk-img-id="product-flora-nectar-2"
              data-strk-img="floral crystal necklace detail gold chain"
              data-strk-img-ratio="4x5"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Majestic Flora Nectar detail view"
              className={cn(
                "absolute inset-0 w-full h-full object-cover transition-opacity duration-500",
                selectedImage === 1 ? "opacity-100" : "opacity-0"
              )}
            />
          </MainStage>
          <div className="flex gap-3">
            <ThumbButton
              active={selectedImage === 0}
              onClick={() => setSelectedImage(0)}
              label="View image 1"
            >
              <img
                data-strk-img-id="product-flora-nectar-thumb-1"
                data-strk-img="multicolor floral crystal necklace gold plated"
                data-strk-img-ratio="3x4"
                data-strk-img-width="200"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="Majestic Flora Nectar thumbnail 1"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </ThumbButton>
            <ThumbButton
              active={selectedImage === 1}
              onClick={() => setSelectedImage(1)}
              label="View image 2"
            >
              <img
                data-strk-img-id="product-flora-nectar-thumb-2"
                data-strk-img="floral crystal necklace detail gold chain"
                data-strk-img-ratio="3x4"
                data-strk-img-width="200"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="Majestic Flora Nectar thumbnail 2"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </ThumbButton>
          </div>
        </GalleryContainer>
      );
    case "golden-sphere-huggies":
      return (
        <GalleryContainer>
          <MainStage selectedImage={selectedImage}>
            <img
              data-strk-img-id="product-sphere-huggies-1"
              data-strk-img="chunky gold dome huggie earrings polished"
              data-strk-img-ratio="4x5"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Golden Sphere Huggies front view"
              className={cn(
                "absolute inset-0 w-full h-full object-cover transition-opacity duration-500",
                selectedImage === 0 ? "opacity-100" : "opacity-0"
              )}
            />
            <img
              data-strk-img-id="product-sphere-huggies-2"
              data-strk-img="chunky gold dome huggie earrings worn"
              data-strk-img-ratio="4x5"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Golden Sphere Huggies worn view"
              className={cn(
                "absolute inset-0 w-full h-full object-cover transition-opacity duration-500",
                selectedImage === 1 ? "opacity-100" : "opacity-0"
              )}
            />
          </MainStage>
          <div className="flex gap-3">
            <ThumbButton
              active={selectedImage === 0}
              onClick={() => setSelectedImage(0)}
              label="View image 1"
            >
              <img
                data-strk-img-id="product-sphere-huggies-thumb-1"
                data-strk-img="chunky gold dome huggie earrings polished"
                data-strk-img-ratio="3x4"
                data-strk-img-width="200"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="Golden Sphere Huggies thumbnail 1"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </ThumbButton>
            <ThumbButton
              active={selectedImage === 1}
              onClick={() => setSelectedImage(1)}
              label="View image 2"
            >
              <img
                data-strk-img-id="product-sphere-huggies-thumb-2"
                data-strk-img="chunky gold dome huggie earrings worn"
                data-strk-img-ratio="3x4"
                data-strk-img-width="200"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="Golden Sphere Huggies thumbnail 2"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </ThumbButton>
          </div>
        </GalleryContainer>
      );
    case "amber-lace-earrings":
      return (
        <GalleryContainer>
          <MainStage selectedImage={selectedImage}>
            <img
              data-strk-img-id="product-amber-lace-1"
              data-strk-img="textured gold filigree drop earrings vintage"
              data-strk-img-ratio="4x5"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Amber Lace Earrings front view"
              className={cn(
                "absolute inset-0 w-full h-full object-cover transition-opacity duration-500",
                selectedImage === 0 ? "opacity-100" : "opacity-0"
              )}
            />
            <img
              data-strk-img-id="product-amber-lace-2"
              data-strk-img="gold filigree drop earrings detail"
              data-strk-img-ratio="4x5"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Amber Lace Earrings detail view"
              className={cn(
                "absolute inset-0 w-full h-full object-cover transition-opacity duration-500",
                selectedImage === 1 ? "opacity-100" : "opacity-0"
              )}
            />
          </MainStage>
          <div className="flex gap-3">
            <ThumbButton
              active={selectedImage === 0}
              onClick={() => setSelectedImage(0)}
              label="View image 1"
            >
              <img
                data-strk-img-id="product-amber-lace-thumb-1"
                data-strk-img="textured gold filigree drop earrings vintage"
                data-strk-img-ratio="3x4"
                data-strk-img-width="200"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="Amber Lace Earrings thumbnail 1"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </ThumbButton>
            <ThumbButton
              active={selectedImage === 1}
              onClick={() => setSelectedImage(1)}
              label="View image 2"
            >
              <img
                data-strk-img-id="product-amber-lace-thumb-2"
                data-strk-img="gold filigree drop earrings detail"
                data-strk-img-ratio="3x4"
                data-strk-img-width="200"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="Amber Lace Earrings thumbnail 2"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </ThumbButton>
          </div>
        </GalleryContainer>
      );
    case "royal-heirloom-set":
      return (
        <GalleryContainer>
          <MainStage selectedImage={selectedImage}>
            <img
              data-strk-img-id="product-heirloom-set-1"
              data-strk-img="gold earring necklace gift box set jewelry"
              data-strk-img-ratio="4x5"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Royal Heirloom Set front view"
              className={cn(
                "absolute inset-0 w-full h-full object-cover transition-opacity duration-500",
                selectedImage === 0 ? "opacity-100" : "opacity-0"
              )}
            />
            <img
              data-strk-img-id="product-heirloom-set-2"
              data-strk-img="gold jewelry gift box necklace earrings set"
              data-strk-img-ratio="4x5"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Royal Heirloom Set box view"
              className={cn(
                "absolute inset-0 w-full h-full object-cover transition-opacity duration-500",
                selectedImage === 1 ? "opacity-100" : "opacity-0"
              )}
            />
          </MainStage>
          <div className="flex gap-3">
            <ThumbButton
              active={selectedImage === 0}
              onClick={() => setSelectedImage(0)}
              label="View image 1"
            >
              <img
                data-strk-img-id="product-heirloom-set-thumb-1"
                data-strk-img="gold earring necklace gift box set jewelry"
                data-strk-img-ratio="3x4"
                data-strk-img-width="200"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="Royal Heirloom Set thumbnail 1"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </ThumbButton>
            <ThumbButton
              active={selectedImage === 1}
              onClick={() => setSelectedImage(1)}
              label="View image 2"
            >
              <img
                data-strk-img-id="product-heirloom-set-thumb-2"
                data-strk-img="gold jewelry gift box necklace earrings set"
                data-strk-img-ratio="3x4"
                data-strk-img-width="200"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="Royal Heirloom Set thumbnail 2"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </ThumbButton>
          </div>
        </GalleryContainer>
      );
    default:
      return null;
  }
}
