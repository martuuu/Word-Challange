const results = (
  state = [
    {
      name: "tincho",
      rounds: [
        { round1: { bet: 1, res: 1 } },
        { round2: { bet: 1, res: 2 } },
      ],
    },
    {
      name: "pabli",
      rounds: [
        { round1: { bet: 1, res: 1 } },
        { round2: { bet: 1, res: 2 } },
      ],
    },
  ],
  action
) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default results;
