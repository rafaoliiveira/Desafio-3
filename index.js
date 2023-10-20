class heroi {
    constructor(name, age, tipo) {
      this.name = name;
      this.age = age;
      this.tipo = tipo;
    }
  
   atacar() {
      let ataque;
  
     switch (this.tipo) {
        case "mago":
          ataque = "magia";
          break;
        case "guerreiro":
          ataque = "espada";
          break;
        case "monge":
          ataque = "artes marciais";
          break;
        case "ninja":
          ataque = "shuriken";
          break;
        default:
          ataque = "atacou"
      }
      
      const escrever = `O ${this.tipo} atacou usando ${ataque} `
      console.log(escrever);
    }
  }
  
  const heroi1 = new heroi("heroi 1", 24, "guerreiro");
  heroi1.atacar()
  