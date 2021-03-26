export default {
  nav: {
    logo: 'UG',
    links: [
      { text: 'Work', to: 'mywork' },
      { text: 'Contact', to: 'mycontact' },
    ],
  },
  header: {
    img:
      'https://cdn.dribbble.com/users/1769954/screenshots/11832326/media/f2a32c15a31453200d9056881f2dbc0d.png?compress=1&resize=1000x750',
    text: ['Hi!', "My Name Angga Surya Prianto", 'I am '],
    typical: [
      'Cloud Engineer. ',
      2000,
    ],
    btnText: 'Discover More',
  },

  stack: {
    title: 'Stack',
    tech: [
      {
        img: process.env.PUBLIC_URL + '/assets/docker.png',
        alt: 'docker',
      },
      {
        img: process.env.PUBLIC_URL + '/assets/gcp-logo-cloud.png',
        alt: 'gcp',
      },
      {
        img: process.env.PUBLIC_URL + '/logo512.png',
        alt: 'react',
      },
      {
        img: process.env.PUBLIC_URL + '/assets/tailwind.png',
        alt: 'tailwind',
      },
    ],
  },
};
