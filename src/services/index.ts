const baseUrl = 'https://jsonplaceholder.typicode.com';
const postsUrl = `${baseUrl}/posts`;

export const getPosts = async (): Promise<IPost[]> =>
  fetch(postsUrl).then((response) => response.json());

export const getPostsByUser = async (userId: number): Promise<IPost[]> =>
  fetch(`${postsUrl}/posts?userId=${userId}`).then((response) => response.json());

export const getPost = async (id: number): Promise<IPost> =>
  fetch(`${postsUrl}/${id}`).then((response) => response.json());

export const createPost = async (post: IPostWithoutId): Promise<IPost> =>
  fetch(postsUrl, {
    method: 'POST',
    body: JSON.stringify(post),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  }).then((response) => response.json());

export const updatePost = async (id: number, post: IPost): Promise<IPost> =>
  fetch(`${postsUrl}/${id}`, {
    method: 'PUT',
    body: JSON.stringify(post),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  }).then((response) => response.json());

export const patchPost = async (id: number, post: IPostPatch): Promise<IPost> =>
  fetch(`${postsUrl}/${id}`, {
    method: 'PATCH',
    body: JSON.stringify(post),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  }).then((response) => response.json());

export const deletePost = async (id: number): Promise<IPost> =>
  fetch(`${postsUrl}/${id}`, {
    method: 'DELETE',
  }).then((response) => response.json());
