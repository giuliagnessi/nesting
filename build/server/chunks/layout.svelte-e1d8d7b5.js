function Layout($$payload, $$props) {
  let { children } = $$props;
  children($$payload);
  $$payload.out += `<!---->`;
}

export { Layout as default };
//# sourceMappingURL=layout.svelte-e1d8d7b5.js.map
