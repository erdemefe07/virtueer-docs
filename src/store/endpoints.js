export default {
  state: () => ({
    datas: [
      {
        name: "Product",
        route: "/product",
        routes: [
          {
            title: "List products",
            description: "List all productions (max: 50)",
            method: "GET",
            route: "/",
            res: "Product[]"
          },
          {
            title: "Get product",
            description: "Get product with given id",
            method: "GET",
            route: "/{:id}",
            params: {
              id: {
                type: "Custom",
                referance_type: "Type",
                referance: "OnlyNumber"
              }
            },
            res: "Product"
          },
          {
            title: "New product",
            method: "POST",
            role: "Admin",
            route: "/",
            req: "Product",
            res: "Product"
          },
          {
            title: "Edit product",
            description: "Edit product with given id",
            method: "PUT",
            role: "Admin",
            route: "/{:id}",
            params: {
              id: {
                type: "Custom",
                referance_type: "Type",
                referance: "OnlyNumber"
              }
            },
            req: "Product",
            res: "Product"
          },
          {
            title: "Remove product",
            description: "Remove product with given id",
            method: "DELETE",
            role: "Admin",
            route: "/{:id}",
            params: {
              id: {
                type: "Custom",
                referance_type: "Type",
                referance: "OnlyNumber"
              }
            },
            res: "Product"
          },
          {
            title: "Add Contributor",
            description: "Add contributor to product with given id",
            method: "POST",
            role: "Admin",
            route: "/{:id}/contributor",
            params: {
              id: {
                type: "Custom",
                referance_type: "Type",
                referance: "OnlyNumber"
              }
            },
            req: "Contributor",
            res: "Contributor"
          },
          {
            title: "Deneme",
            description: "Cupidatat aliquip excepteur ad irure laboris. Officia anim veniam id consectetur commodo esse veniam nisi ut labore officia consectetur ullamco. Ad incididunt cillum consectetur aliqua aute anim irure. Elit irure nulla elit aute et qui id anim laborum.",
            method: "POST",
            role: "Admin",
            route: "/{:id}/contributor/{:sa}/sa/{:as}",
            params: {
              id: {
                type: "Custom",
                referance_type: "Type",
                referance: "OnlyNumber"
              },
              sa: {
                type: "String"
              },
              as: {
                type: 'Boolean'
              }
            },
            req: "Contributor",
            res: "Contributor"
          },
        ]
      }
    ]
  })
}