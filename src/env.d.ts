// Camera exports can use an uppercase extension.
declare module '*.JPG' {
  const image: import('astro').ImageMetadata;
  export default image;
}
