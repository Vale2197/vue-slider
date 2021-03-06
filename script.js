
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
                this.counter = this.images.length;
            }
            this.counter--
            
        },
        scrollDown() {
            this.counter++
            if(this.counter == this.images.length) {
                this.counter = 0
                
            }
        }, 
        time() {
            setInterval(() => {
                if(this.counter == this.images.length - 1) {
                    this.counter = 0
                    this.counter --
                }
                this.counter++
            
            }, 3000)
        }
        
    },
    mounted: function() {
        this.time()
    }
})
