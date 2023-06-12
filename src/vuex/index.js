import { inject, reactive } from "vue";

const storeKey = "store";
class Store {
  constructor(options) {
    this._store = reactive({ data: options.state });
  }
  get state() {
    return this._store.data;
  }
  install(app, injectKey = storeKey) {
    app.provide(injectKey, this);

    app.config.globalProperties.$store = this;
  }
}
export function createStore(options) {
  return new Store(options);
}

export function useStore(injectKey = storeKey) {
  return inject(injectKey);
}
