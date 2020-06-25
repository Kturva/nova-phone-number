// import VueMask from 'v-mask';
import {VueMaskDirective} from 'v-mask';

Nova.booting((Vue, router) => {
    // Vue.use(VueMask);

    Vue.directive('mask', function (el, binding) {
        if (!binding.value) {
            return;
        }

        VueMaskDirective.bind(el, binding);
    });

    Vue.component('index-phone-number', require('./components/IndexField.vue').default);
    Vue.component('detail-phone-number', require('./components/DetailField.vue').default);
    Vue.component('form-phone-number', require('./components/FormField.vue').default);
})
