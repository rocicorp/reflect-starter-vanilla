/**
 *
 * @param {*} element
 * @param {Reflect} r
 */
export function setupCounter(element, r) {
  r.subscribe(
    async (tx) => {
      const count = await tx.get("count");
      return count ?? 0;
    },
    {
      onData: (count) => {
        element.innerHTML = `count is ${count}`;
      },
    }
  );
  element.addEventListener("click", () =>
    r.mutate.increment({ key: "count", delta: 1 })
  );
}
