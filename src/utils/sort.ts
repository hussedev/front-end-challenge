export type SortTypes = 'userAsc' | 'userDesc' | 'titleAsc' | 'titleDesc' | 'default';

const orderByAsc = (property: keyof IPost) => (postA: IPost, postB: IPost) => {
  if (postA[property] !== postB[property]) {
    return postA[property] < postB[property] ? -1 : 1;
  } else {
    return postA.id < postB.id ? -1 : 1;
  }
};

const orderByDes = (property: keyof IPost) => (postA: IPost, postB: IPost) => {
  if (postA[property] !== postB[property]) {
    return postA[property] > postB[property] ? -1 : 1;
  } else {
    return postA.id < postB.id ? -1 : 1;
  }
};

export const orderFunctions = {
  default: orderByAsc('id'),
  userAsc: orderByAsc('userId'),
  userDesc: orderByDes('userId'),
  titleAsc: orderByAsc('title'),
  titleDesc: orderByDes('title'),
};
