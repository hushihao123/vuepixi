import HqRate from './src/main';

/* istanbul ignore next */
HqRate.install = function(Vue) {
  Vue.component(HqRate.name, HqRate);
};

export default HqRate;
