import CryptoJS from "crypto-js";

let urls = import.meta.glob('./photos/*.jpg', { eager: true, import: 'default' });
let thumbnailUrls = import.meta.glob('./photos/thumbnails/*.jpg', { eager: true, import: 'default' });

let photos = [
  {filename: "IMG_2971", title: "Aironi Cenerini"},
  {filename: "IMG_2990", title: "Aironi Cenerini"},
  {filename: "IMG_5319", title: "Cenerino e Ibis"},
  {filename: "IMG_3292", title: "Guardabuoi e Garzetta"},
  {filename: "IMG_3511", title: "Garzetta"},
  {filename: "IMG_3807", title: "Airone Rosso"},
  {filename: "IMG_3817", title: "Airone Rosso"},
  {filename: "IMG_3943", title: "Nitticora"},
  {filename: "IMG_4044", title: "Gruccione"},
  {filename: "IMG_4087", title: "Airone Cenerino"},
  {filename: "IMG_4100", title: "Giovane Airone Rosso"},
  {filename: "IMG_4188", title: "Airone Cenerino"},
  {filename: "IMG_4198", title: "Airone Cenerino"},
  {filename: "IMG_4344", title: "Airone Cenerino"},
  {filename: "IMG_4399", title: "Airone Cenerino"},
  {filename: "IMG_4480", title: "Gallinella d'acqua"},
  {filename: "IMG_4572", title: "Cicogna"},
  {filename: "IMG_4937", title: "Fagiano"},
  {filename: "IMG_5284", title: "Airone Bianco Maggiore"},
  {filename: "IMG_5321", title: "Aironi Bianchi Maggiori"},
  {filename: "IMG_5470", title: "Cicogne"},
];

export default photos.map(photo => {
  const thumbnail = thumbnailUrls[`./photos/thumbnails/${photo.filename}.jpg`];
  const url = urls[`./photos/${photo.filename}.jpg`];
  const id = `${photo.title.replace(/ /g, "-")}-${CryptoJS.MD5(photo.filename).toString()}`;
  return { src: url, thumbnail, title: photo.title, id };
});
