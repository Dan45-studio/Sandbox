import MediaViewer from "../components/MediaViewer";


const MyPage = () => {
  const mediaData = [
    { link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" },
    { link: "https://www.example.com/image.jpg" },
    { link: "https://vimeo.com/123456789" },
  ];

  return (
    <div>
      <MediaViewer mediaItems={mediaData} />
    </div>
  );
};

export default MyPage;
