export const state = () => ({
  userList: []
})

export const mutations = {
  set(state, list){
    state.userList = list
  },
  add(state, user) {
    state.userList.push(user)
  },
  remove(state, id) {
    state.userList = state.userList.map(i => {
      return i.id !== id
    })
  }
}