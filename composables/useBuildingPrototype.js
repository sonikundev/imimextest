// Keep the original interactive diagrams, confined to their Nuxt page lifecycle.
export function useBuildingPrototype(pageRoot, initialize) {
  const intervals = new Set();
  const timeouts = new Set();

  onMounted(() => {
    const root = pageRoot.value;
    const dom = {
      querySelector: (selector) => root.querySelector(selector),
      querySelectorAll: (selector) => root.querySelectorAll(selector),
      getElementById: (id) => root.querySelector(`#${CSS.escape(id)}`),
    };
    const timers = {
      setInterval(callback, delay) {
        const id = window.setInterval(callback, delay);
        intervals.add(id);
        return id;
      },
      setTimeout(callback, delay) {
        const id = window.setTimeout(() => {
          timeouts.delete(id);
          callback();
        }, delay);
        timeouts.add(id);
        return id;
      },
      clearTimeout(id) {
        window.clearTimeout(id);
        timeouts.delete(id);
      },
    };
    initialize(dom, timers);
  });

  onBeforeUnmount(() => {
    intervals.forEach((id) => window.clearInterval(id));
    timeouts.forEach((id) => window.clearTimeout(id));
    intervals.clear();
    timeouts.clear();
  });
}
