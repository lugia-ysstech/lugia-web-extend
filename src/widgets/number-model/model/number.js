import lugiax from "@lugia/lugiax";

const __LUGIAX_MODEL_DEFINE__ = "ad"; // lugiax-model-define
const state = {
  number: 0
};

export default lugiax.register({
  model: __LUGIAX_MODEL_DEFINE__,
  state,
  mutations: {
    sync: {
      increment(state) {
        const newCounter = state.get("number") + 1;
        return state.set("number", newCounter);
      },
      decrement(state) {
        const newCounter = state.get("number") - 1;
        return state.set("number", newCounter);
      }
    },
    async: {
      async incrementAsync(state, delay = 1000, { mutations }) {
        await mutations.decrement();
        setTimeout(() => {
          mutations.increment();
        }, delay);
      }
    }
  }
});
