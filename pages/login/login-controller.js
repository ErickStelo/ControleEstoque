import { ValidationProvider, ValidationObserver } from "vee-validate";
import { validate } from 'vee-validate';
export default {
    components: {
        ValidationProvider,
        ValidationObserver
    },
    name: 'Login',
    data() {
        return {
            loginForm: {
                username: null,
                password: null,
            }
        }
    },

    methods: {
        executaLogin: async function () {
        }
    }
}
