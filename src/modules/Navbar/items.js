import { nanoid } from 'nanoid';
const items = [
  {
    id: nanoid(),
    text: 'Home page',
    link: '/',
    private: false,
  },
  {
    id: nanoid(),
    text: 'Contacts',
    link: '/contacts',
    private: true,
  },
  {
    id: nanoid(),
    text: 'Login',
    link: '/login',
    private: false,
  },
  {
    id: nanoid(),
    text: 'Regisrer',
    link: '/register',
    private: false,
  },
];

export default items;
