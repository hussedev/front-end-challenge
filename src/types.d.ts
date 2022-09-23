interface IPostWithoutId {
  userId: number;
  title: string;
  body: string;
}

interface IPost extends IPostWithoutId {
  id: number;
}

type TPostArray = IPost[];

interface IPostPatch {
  userId?: number;
  title?: string;
  body?: string;
}
