export interface Post {
  title: string;
  permalink: string;
  excerpt: string;
  category: {
    id: number;
    category: string;
  };
  content: string;
  isFeatured: boolean;
  viewCount: number;
  status: string;
  postImagePath: string;
  createdAt: Date;
}
