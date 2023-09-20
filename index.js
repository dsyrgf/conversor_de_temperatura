 const prompt = require("prompt-sync")()
    //   prompt(opcao)
      
      let fator1
      let result
    
     console.log();("conversao de temperatura\n")
     console.log("precione 1 pra converte graus celsuis para fahrenheit\n")
     console.log("precione 2 pra converte graus fahrenheit pra celsuis\n")
     console.log("digite  1 ou 2: ")
      opcao = prompt()
    
      if(opcao == 1) {
        console.log(" digite a temperatura em °C\n")
        console.log("digite: ")
        fator1 = parseInt(prompt())
        console.log("resultado é: ",(fator1  * 9/5) + 32,"°F") 
      }
       if(opcao == 2) {
        console.log(" digite a temperatura em °F\n ")
        console.log("digite: ")
        fator1 = parseInt(prompt())
        console.log(" resultado é: ",( fator1 - 32) * 5/9, "°C") 
      }
      