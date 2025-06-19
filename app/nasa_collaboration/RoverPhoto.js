import React from "react";
import styles from "./RoverPhoto.module.css"; // we'll define styles next

export const RoverPhoto = ({ src, date, roverName }) => {
  return (
    <div className={styles.roverPhotoCard}>
      <img src={src} alt={`Photo taken by ${roverName}`} />
      <div className={styles.roverPhotoDetails}>
        <p>
          <strong>Date:</strong> {date}
        </p>
        <p>
          <strong>Rover:</strong> {roverName}
        </p>
      </div>
    </div>
  );
};
