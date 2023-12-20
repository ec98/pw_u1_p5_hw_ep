//console.log("elementos Vue")

const persona = [];

// console.log("afirmando")
// console.table(persona);
const app = Vue.createApp({
  // template: `
  // <h1>gola</h1>
  // `,
  methods: {
    agregarPerson() {
      const identity = {
        nombre: this.nombre,
        apellido: this.apellido,
        pais: this.pais,
        ciudad: this.ciudad,
        genero: this.genero,
      };
      this.lista.push(identity);
      this.nombre = "";
      this.apellido = "";
      this.pais = "";
      this.ciudad = "";
      this.genero = "";
    },
    agregarPersonaPorTecla({ charCode }) {
      if (charCode === 13) {
        this.agregarPerson();
      }
    },
  },

  watch: {},

  //propiedades reactivas
  data() {
    return {
      lista: persona,
      nombre: null,
      apellido: null,
      pais: null,
      ciudad: null,
      genero: null,
    };
  },
});

//identificador
app.mount("#miVue");
