const app = Vue.createApp({
    data() {
        return {
            inputNumber: "123456",
            inputNumberTwo: []
         
        }
    },
    methods: {
        clearAll(){
            this.inputNumber= "" //Nos vacía el Array
        },
        // f() que ens concatenara el valor del numero clickat amb el que ja existeixi al inputNumber (linea4)
        addNumber(n){
            this.inputNumber = `${this.inputNumber}${n}`
        }
    }
})

app.mount("#app") 