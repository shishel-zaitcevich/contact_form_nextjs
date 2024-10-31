// @types/react-lite-youtube-embed/index.d.ts
declare module 'react-lite-youtube-embed' {
  import { FC } from 'react';

  interface LiteYouTubeEmbedProps {
    id: string;
    title?: string;
    [key: string];
  }

  const LiteYouTubeEmbed: FC<LiteYouTubeEmbedProps>;

  export default LiteYouTubeEmbed;
}
