const state = {
    count: 0
};
const getters = {
    getCount: state => state.count
};
const mutations = {
    incrementCount: state => state.count++,
    decrementCount: (state, number) => state.count -= number.amount
};
const actions = {
    incrementCountAsync: ({ commit }) => {
        setTimeout(() => {
            commit("incrementCount");
        }, 2000);
    },
    decrementCountAsync: (context, number) => {
        setTimeout(() => {
            context/* =this.$store*/.commit("decrementCount", number);
        }, 1000);
    }
};
export default {
    state, getters, mutations, actions
}