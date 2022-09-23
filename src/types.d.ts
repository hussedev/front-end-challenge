interface IPostWithoutId {
  userId: number;
  title: string;
  body: string;
}

interface IPost extends IPostWithoutId {
  id: number;
}

interface IPostPatch {
  userId?: number;
  title?: string;
  body?: string;
}
