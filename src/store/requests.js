export default {
  state: () => ({
    Product: {
      name: {
        type: "String",
        description: "ZAXDE"
      },
      link: {
        type: "String",
      }
    },
    Contributor: {
      id: {
        type: "Custom",
        referance_type: "Type",
        referance: "OnlyNumber",
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