const allMedia = import.meta.glob(
  "../assets/projects/**/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP,mp4,MP4,mov,MOV}",
  {
    eager: true,
    import: "default",
  }
);

export function getProjectMedia(folderName) {
  const media = Object.entries(allMedia)
    .filter(([path]) => path.includes(`/projects/${folderName}/`))
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([path, src]) => {
      const isVideo = /\.(mp4|mov)$/i.test(path);

      return {
        src,
        type: isVideo ? "video" : "image",
        name: path.split("/").pop(),
      };
    });

  const images = media.filter((item) => item.type === "image");
  const videos = media.filter((item) => item.type === "video");

  return {
    coverImage: images[0]?.src || "",
    images,
    videos,
    media,
  };
}