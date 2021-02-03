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
        divButton(event){
            console.log(event.target.dataset.num)
            // En la propiedad dataset tenemos todos los atributos mapeados en tag HTML con el formato data-*; como por ejemplo, data-num
            let clickedButton = event.target.dataset.num
            this.inputNumber = `${this.inputNumber}${clickedButton}`
        },          
        equal(){
            return this.inputNumber = eval(this.inputNumber)
        }
    }
})
app.mount("#app") 
