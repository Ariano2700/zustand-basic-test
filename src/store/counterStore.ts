import create from "zustand";

interface Post {
  id: number;
  title: string;
  body: string;
}
type CounterState = {
  count: number;
  title: string;
  posts: Post[];
  increment: (value: number) => void;
  getPost: () => Promise<void>;
  multiply:(value:number) => void;
};

export const useCounterStore = create<CounterState>((set, get) => ({
  count: 10,
  title: "Anda a mamarlong",
  posts: [],
  increment: (value: number) =>
    set((state) => ({
      ...state,
      count: state.count + value,
    })),
  getPost: async () => {
    const posts = await (
      await fetch("https://jsonplaceholder.typicode.com/posts")
    ).json();
    set((state) => ({
      ...state,
      posts,
    }));
  },
  multiply: (value: number) => {
    const { count } = get();
    set({ count: count * value });
  },
}));
