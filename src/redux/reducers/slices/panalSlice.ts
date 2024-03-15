import { createSlice } from '@reduxjs/toolkit';

export interface IPanel {
  name: string;
  image: string;
  heading: string;
  description: string;
  githubLink: string;
}

const initialState: IPanel[] = [
  {
    name: 'panel-1',
    image: 'images/illustration-features-tab-1.svg',
    heading: 'Manage your to-do tasks',
    description: 'List and organize your tasks easily',
    githubLink:
      'https://github.com/Nirjala123/Project-1--Task-Manager-Nirjala-and-Menda-/tree/typescript-todo',
  },
  {
    name: 'panel-2',
    image: 'images/illustration-features-tab-1.svg',
    heading: 'Animal transportation',
    description:
      'Find the minimum number of containers required to transport a set of animals with given constraints',
    githubLink:
      'https://github.com/Nirjala123/Animal-Tranportation-using-Grapch-Coloring-Algorithm/tree/master',
  },
  {
    name: 'panel-3',
    image: 'images/illustration-features-tab-1.svg',
    heading: 'Analyze your logs',
    description:
      'Log analysis python program that displays different stats from a log using PostgreSQL and Python',
    githubLink: 'https://github.com/Nirjala123/Logs-Analysis',
  },
];

export const panelSlice = createSlice({
  name: 'panel',
  initialState,
  reducers: {},
});

export default panelSlice.reducer;
