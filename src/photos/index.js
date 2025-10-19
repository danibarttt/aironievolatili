import IMG_2971 from "url:./IMG_2971.jpg";
import IMG_2990 from "url:./IMG_2990.jpg";
import IMG_3292 from "url:./IMG_3292.jpg";
import IMG_3511 from "url:./IMG_3511.jpg";
import IMG_3807 from "url:./IMG_3807.jpg";
import IMG_3817 from "url:./IMG_3817.jpg";
import IMG_3943 from "url:./IMG_3943.jpg";
import IMG_4044 from "url:./IMG_4044.jpg";
import IMG_4087 from "url:./IMG_4087.jpg";
import IMG_4100 from "url:./IMG_4100.jpg";
import IMG_4188 from "url:./IMG_4188.jpg";
import IMG_4198 from "url:./IMG_4198.jpg";
import IMG_4344 from "url:./IMG_4344.jpg";
import IMG_4398 from "url:./IMG_4398.jpg";
import IMG_4480 from "url:./IMG_4480.jpg";
import IMG_4572 from "url:./IMG_4572.jpg";
import IMG_4937 from "url:./IMG_4937.jpg";
import IMG_5284 from "url:./IMG_5284.jpg";
import IMG_5319 from "url:./IMG_5319.jpg";
import IMG_5321 from "url:./IMG_5321.jpg";
import IMG_5470 from "url:./IMG_5470.jpg";

let photos = [
  {src: IMG_2971, title: "Aironi Cenerini", _id: "2fffd7e0"},
  {src: IMG_2990, title: "Aironi Cenerini", _id: "dbe30e8a"},
  {src: IMG_3292, title: "Airone Guardabuoi e Garzetta", _id: "aa86c9f8"},
  {src: IMG_3511, title: "Garzetta", _id: "a6cdac30"},
  {src: IMG_3807, title: "Airone Rosso", _id: "2b07cdda"},
  {src: IMG_3817, title: "Airone Rosso", _id: "f824065c"},
  {src: IMG_3943, title: "Nitticora", _id: "3af80f40"},
  {src: IMG_4044, title: "Gruccione", _id: "a32ac848"},
  {src: IMG_4087, title: "Airone Cenerino", _id: "52219f95"},
  {src: IMG_4100, title: "Giovane Airone Rosso", _id: "23f3c87d"},
  {src: IMG_4188, title: "Airone Cenerino", _id: "65eb97e8"},
  {src: IMG_4198, title: "Airone Cenerino", _id: "d9043bd5"},
  {src: IMG_4344, title: "Airone Cenerino", _id: "1d324029"},
  {src: IMG_4398, title: "Airone Cenerino", _id: "a325da53"},
  {src: IMG_4480, title: "Gallinella d'acqua", _id: "31f846ec"},
  {src: IMG_4572, title: "Cicogna", _id: "539a922c"},
  {src: IMG_4937, title: "Fagiano", _id: "8f515a6f"},
  {src: IMG_5284, title: "Airone Bianco Maggiore", _id: "a42a6c22"},
  {src: IMG_5319, title: "Airone Bianco Maggiore, Giovane Cenerino e Ibis", _id: "1efc82b8"},
  {src: IMG_5321, title: "Aironi Bianchi Maggiori", _id: "024f0904"},
  {src: IMG_5470, title: "Cicogne", _id: "fd63d7bd"},
];

export default photos.map(photo => ({
  ...photo,
  id: photo.title.replace(/ /g, "-") + "-" + photo._id
}))