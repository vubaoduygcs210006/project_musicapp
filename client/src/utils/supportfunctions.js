import { deleteObject, ref } from "firebase/storage";
import { storage } from "../config/firebase.config";

export const filters = [
  { id: 2, name: "Hip-hop", value: "hip-hop" },
  { id: 3, name: "R&B", value: "R&B" },
  { id: 4, name: "Melody", value: "melody" },
  { id: 5, name: "Karaoke", value: "karaoke" },
];

export const filterByLanguage = [
  { id: 1, name: "Vietnamese", value: "vietnamese" },
  { id: 2, name: "English", value: "english" },
  { id: 3, name: "France", value: "France" },
  { id: 4, name: "Korea", value: "korea" },
  { id: 5, name: "Thailand", value: "thailand" },
];

export const deleteAnObject = (referenceUrl) => {
  const deleteRef = ref(storage, referenceUrl);
  deleteObject(deleteRef)
    .then(() => {
      return true;
    })
    .catch((error) => {
      return false;
    });
};
