export default {
  state: () => ({
    Product: {
      id: {
        type: "Number"
      },
      name: {
        type: "String"
      },
      link: {
        type: "String"
      },
      contributors: {
        type: "Custom",
        referance: "Contributor",
        referance_type: "Model",
        array: true
      }
    },
    Contributor: {
      id: {
        type: "Number"
      },
      name: {
        type: "String"
      },
      surname: {
        type: "String"
      },
      github: {
        type: "String"
      }
    }
  }),
}