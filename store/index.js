export const state = () => ({
  adminName: ''
})

export const mutations = {
  setName(state, name){
    state.adminName = name
  }
}