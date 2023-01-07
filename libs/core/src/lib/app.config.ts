export const config = {
  header: {
    nav_buttons: {
      back: {
        icon: 'navigate_before',
        id: 'back',
      },
      next: {
        icon: 'navigate_next',
        id: 'next',
      },
    },
    nav_links: [
      {
        title: 'Premium',
        titleEN: 'premium',
      },
      {
        title: 'About',
        titleEN: 'about',
      },
      {
        title: 'Download',
        titleEN: 'download',
      },
    ],
    nav_authorization: {
      login_button: {
        title: 'Log in',
      },
      authorization_links: {
        registerLink: {
          title: 'Register',
          titleEN: 'register',
        },
        loginLink: {
          title: 'Log in',
          titleEN: 'login',
        },
      },
    },
  },
  sidebar: {
    nav_links: [
      {
        title: 'Home',
        icon: 'home',
        href: '/',
      },
      {
        title: 'Search',
        icon: 'search',
        href: '/search',
      },
      {
        title: 'My library',
        icon: 'library_music',
        href: '/my-library',
      },
    ],
    action_links: [
      {
        title: 'Create playlist',
        icon: 'add_box',
        href: '/create-playlist',
      },
      {
        title: 'Favorites tracks',
        icon: 'favorite',
        href: '/favorite',
      },
    ],
  },
};
