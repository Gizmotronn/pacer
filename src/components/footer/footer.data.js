import Chat from 'assets/widget/chat.svg';
import Community from 'assets/widget/community.svg';
import Github from 'assets/widget/github.svg';

export default {
  widgets: [
    {
      id: 1,
      iconSrc: Chat,
      altText: 'Community',
      title: 'Connect with other users',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiusmod tempor.',
    },
    {
      id: 2,
      iconSrc: Community,
      altText: 'Chat',
      title: 'Run together with other users',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiusmod tempor.',
    },
    {
      id: 3,
      iconSrc: Github,
      altText: 'Github',
      title: 'Github Access',
      description:
        'I just really like Github',
    },
  ],
  menuItem: [
    {
      path: '/',
      label: 'Home',
    },
    {
      path: '/',
      label: 'Affiliates',
    },
    {
      path: '/',
      label: 'Support',
    },
    {
      path: '/',
      label: 'White Paper',
    },
    {
      path: '/',
      label: 'Contact',
    },
  ],
};
