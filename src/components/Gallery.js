import {useState, useEffect} from "react";
import Lightbox from "yet-another-react-lightbox";
import { useNavigate, useLocation } from 'react-router';
import "../../node_modules/yet-another-react-lightbox/dist/styles.css";
import Zoom from "../../node_modules/yet-another-react-lightbox/dist/plugins/zoom";
import Captions from "../../node_modules/yet-another-react-lightbox/dist/plugins/captions";
import photos from "../photos";
import "../../node_modules/yet-another-react-lightbox/dist/plugins/captions/captions.css";
import * as React from "react";
import '../lightbox.css';

export default function Gallery() {
  const navigate = useNavigate();
  const location = useLocation();
  const [currentPhotoId, setCurrentPhotoId] = useState(null);
  const captionsRef = React.useRef(null);

  const openLightbox = (id) => {
    setCurrentPhotoId(id);
    navigate(`${location.pathname}?photo=${id}`, { replace: true });
  };

  const closeLightbox = () => {
    setCurrentPhotoId(null);
    navigate(location.pathname, { replace: true });
  };

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const photoId = params.get("photo");
    if (photoId) {
      setCurrentPhotoId(photoId);
    }
  }, [location.search]);

  console.log(currentPhotoId);
  const currentIndex = photos.findIndex((p) => p.id === currentPhotoId);
  console.log("index " + currentIndex);

  return (
    <div>
      <h1 style={{ textAlign: 'center', marginBottom: '50px' }}>Aironi e Altri Volatili</h1>
      <div
        style={{
          columnCount: 3,
          columnGap: "16px",
        }}
      >
        {photos.map((photo, i) => (
            <img
              key={photo.id}
              alt={photo.title}
              src={photo.src}
              style={{
                width: "100%",
                display: "block",
                marginBottom: "16px",
                cursor: "pointer",
              }}
              onClick={() => openLightbox(photo.id)}
            />
        ))}
      </div>

      {currentIndex >= 0 && (
        <Lightbox
          slides={photos.map((photo, i) => {
              return {
                src: photo.src,
                title: photo.title,
              }
            }
          )}
          plugins={[Zoom, Captions]}
          open={true}
          close={closeLightbox}
          index={currentIndex}
          captions={{ ref: captionsRef }}
          on={{
            view: ({index}) => openLightbox(photos[index].id),
            click: () => {
              (captionsRef.current?.visible
                ? captionsRef.current?.hide
                : captionsRef.current?.show)?.();
            },
        }}
        />
      )}
    </div>
  );
}