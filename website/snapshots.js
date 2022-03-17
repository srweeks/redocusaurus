const urls = [
  {
    name: 'YAML Spec',
    path: '/examples/using-single-yaml/',
  },
  { name: 'URL Spec', path: '/examples/using-remote-url/' },
  { name: 'Schema Imports', path: '/docs/guides/schema-imports' },
];

module.exports = () => {
  const baseUrl = process.env.TARGET_URL || 'http://localhost:3000';
  return [
    ...urls.map(({ name, path }) => {
      return {
        name,
        url: `${baseUrl}${path}`,
      };
    }),
    ...urls.map(({ name, path }) => {
      return {
        name: `${name} (Dark Mode)`,
        url: `${baseUrl}${path}`,
        execute: {
          afterNavigation() {
            // toggle dark-mode
            // @ts-ignore
            Array.from(document.querySelector('.navbar__items--right').children)
              .pop()
              // @ts-ignore
              .children[0].click();
          },
        },
      };
    }),
  ];
};
