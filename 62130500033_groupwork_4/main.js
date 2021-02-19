const app = {
    data() {
        return {
            img: [{
                    src: './images/Denycard.webp',
                    name: 'Deny',
                    rate: '49.5%',
                    fav: false,
                    show: true,
                    zoom: false
                },
                {
                    src: './images/combat.webp',
                    name: 'Singlecombat',
                    rate: '52.3%',
                    fav: false,
                    show: true,
                    zoom: false
                },
                {
                    src: './images/shot.webp',
                    name: 'Shot',
                    rate: '51.5%',
                    fav: false,
                    show: true,
                    zoom: false
                }
            ],
            svg: "http://www.w3.org/2000/svg",
            bar: false,
            myenter: "",
            notfound: false

        }
    },
    methods: {
        addFav(index) {
            this.img[index].fav = !this.img[index].fav;
            document.getElementsByTagName("svg")[index+1].style.opacity = 1;
        },
        preFav(index) {
            this.img[index].fav = !this.img[index].fav;
            document.getElementsByTagName("svg")[index+1].style.opacity = 0.5;
        },
        showbar() {
            this.bar = !this.bar;

        },
        zoomImage(index) {
           this.img[index].zoom=true;
        },
        enter() {
            this.myenter = this.myinput;
            this.notfound = false;
        },
        cancel(){
            this.myenter = "";
            this.myinput="";
            this.notfound = false;
        }
        ,
        unzoom(index){
            for(i=0;i<this.img.length;i++){
                if(this.img[i]!=this.img[index]){
                    this.img[i].zoom=false;
                }
            }
        }

    },
    computed: {
        count() {
            return this.img.filter(t => t.src).length;
        },
        search() {
            if (this.myenter == '') {
                return this.img
            } else {
                fp = this.img.filter(n => n.name.toLowerCase().includes(this.myenter.toLowerCase()));
                if (fp.length == 0) {
                    this.notfound = true;
                } else {
                    return fp;
                }
            }

        }
}
}

mountedApp = Vue.createApp(app).mount('#app')