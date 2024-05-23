export default interface SearchItem {
  kind: 'youtube#video'
  etag: string,
  id: string,
  snippet: {
    publishedAt: string,
    channelId: string,
    title: string,
    description: string, 
    thumbnails: {
      default: Thumbnail,
      medium: Thumbnail,
      high: Thumbnail,
      standard: Thumbnail,
      maxres: Thumbnail,
    }
    channelTitle: string,
    tags: string[];
    categoryId: number,
    liveBroadcastContent: string,
    localized: {
      title: string,
      description: string
    },
    defaultAudioLanguage: string,
  }
  statistic: {
    viewCount: number,
    likeCount: number,
    dislikeCount: number,
    favoriteCount: number,
    commentCount: number
  }
}

interface Thumbnail {
  url: string;
  width: number;
  height: number;
}