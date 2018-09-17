export default {
  namespace: 'add',
  state: {
    input: 'umi'
  },
  reducers: {
    'change'(state, { payload: name }) {
      return {input: name}
    }
  }
};