
const main = new Vue({
    el: "#main",
    data: {
        images: [
            {
                immagineLink: "./consegna2/img/01.jpg",
                titolo: "Svezia",
                paragrafo: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,"

            },
            {
                immagineLink: "./consegna2/img/02.jpg",
                titolo: "Svizzera",
                paragrafo: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,"

            },
            {
                immagineLink: "./consegna2/img/03.jpg",
                titolo: "Gran Bretagna",
                paragrafo: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,"

            },
            {
                immagineLink: "./consegna2/img/04.jpg",
                titolo: "Germania",
                paragrafo: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,"

            },
            {
                immagineLink: "./consegna2/img/05.jpg",
                titolo: "Paradise",
                paragrafo: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,"

            },
        ],
        counter: 0,
        
    },

    methods: {
        scrollUp(){
            
            if (this.counter == 0) {
                this.counter = 5;
            }
            this.counter--
        },
        scrollDown() {
            this.counter++
            if(this.counter == 5) {
                this.counter = 0
                
            }
        }
        
    }
})
