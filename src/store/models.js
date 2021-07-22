export default {
  state: () => ({
    Product: {
      Name: {
        type: "String",
      },
      Link: {
        type: "String"
      },
      Contributors: {
        type: "Custom",
        referance_type: "Model",
        referance: "Contributor",
        array: true
      }
    },
    Contributor: {
      Name: {
        type: "String"
      },
      Surname: {
        type: "String"
      },
      Github: {
        type: "String",
        description: "Github link"
      }
    }
  }),
}