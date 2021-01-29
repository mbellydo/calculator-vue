const app = Vue.createApp({
    data() {
        return {
            inputNumber: "",
            show : false
        }
    },
    mounted() {
        this.show = true
    },
    methods: {
        clearAll(){
            this.inputNumber= "" 
        },
        // f() que ens concatenaran els valors dels numeros o els simbols clickats amb el que ja existeixi 
        // dins de  inputNumber (linea4)
        numbersChoice(n){
            this.inputNumber = `${this.inputNumber}${n}`
        },
        plusButton(n){
            this.inputNumber = `${this.inputNumber}${n}`
        },
        reduceButton(n){
            this.inputNumber = `${this.inputNumber}${n}`
        },
        multButton(n){
            this.inputNumber = `${this.inputNumber}${n}`
        },
        divButton(n){
            this.inputNumber = `${this.inputNumber}${n}`
        },          
        equal(){
            return this.inputNumber = eval(this.inputNumber)
        }
    }
})
app.mount("#app") 
