import React from "react";

interface Media {
  link: string;
}

interface MediaViewerProps {
  mediaItems: Media[];
}

const MediaViewer: React.FC<MediaViewerProps> = ({ mediaItems }) => {
  const isImage = (link: string): boolean => {
    return link.match(/\.(jpeg|jpg|gif|png)$/) != null;
  };

  const isYouTube = (link: string): boolean => {
    return link.includes("youtube.com");
  };

  const isVimeo = (link: string): boolean => {
    return link.includes("vimeo.com");
  };

  const getEmbedLink = (link: string): string => {
    if (isYouTube(link)) {
      const videoId = link.split("v=")[1] || link.split("/")[3];
      return `https://www.youtube.com/embed/${videoId}`;
    } else if (isVimeo(link)) {
      const videoId = link.split("/")[3];
      return `https://player.vimeo.com/video/${videoId}`;
    }
    return link;
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {mediaItems.map((item, index) => (
        <div key={index}>
          {isImage(item.link) && (
            <img src={item.link} alt="Image" className="max-w-full h-auto" />
          )}
          {(isYouTube(item.link) || isVimeo(item.link)) && (
            <iframe
              src={getEmbedLink(item.link)}
              title="Video Player"
              className="w-full aspect-video"
              allowFullScreen
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default MediaViewer;
