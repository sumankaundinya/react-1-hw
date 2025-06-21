import Image from "next/image";

export const SocialMediaItem = ({ url, title, icon }) => {
  return (
    <li>
      <a href={url} target="_blank" rel="noopener noreferrer">
        {icon && (
          <Image
            src={icon}
            alt={`${title} icon`}
            width={16}
            height={16}
            style={{ marginRight: "0.5rem", verticalAlign: "middle" }}
          />
        )}
        {title}
      </a>
    </li>
  );
};

export default SocialMediaItem;
