export default {
  state: () => ({
    OnlyNumber: {
      regex: '^\\d+$', // ! burada backslash `\` özel karakter olduğu için (bkz: '\n', '\r') sadece kodlarken 2 tane backslash koymak gerekiyor. dinamik olarak alındığında gerek kalmıyor.
      description: "Sadece Rakamlar",
      type: 'Number'
    }
  }),
}