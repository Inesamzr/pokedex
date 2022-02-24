const app = Vue.createApp({
    data(){
        return{
             pokemons : [],
             number : 14,
             name: ''
        } 
    },
    created(){
        const loop = this.number
        for(let i=0; i<loop; i++){
            let x = i+1
            url = 'https://pokeapi.co/api/v2/pokemon/'+x
            fetch(url).
            then(res => res.json())
            .then(data => {
                let poke = {id: null, name:"", img:"" , abilities:null, show : true, showDetails : false}
                poke.name = data.name
                poke.id = data.id
                poke.img = data.sprites.front_default
                poke.abilities = data.abilities
                this.pokemons.push(poke)
            })
            
        }
    },



    methods: {
        afficherinfos(i){
            if(this.pokemons[i].showDetails == false){
                this.pokemons[i].showDetails = true
            }
            else{
                this.pokemons[i].showDetails = false
            }
              
        },
        charger(){
            this.number = this.number + 28;
            for(let i=28; i<this.number; i++){
                let x = i+1
                url = 'https://pokeapi.co/api/v2/pokemon/'+x
                fetch(url).
                then(res => res.json())
                .then(data => {
                    let poke = {id: null, name:"", img:"" , abilities:null, show : true, showDetails : false}
                    poke.name = data.name
                    poke.id = data.id
                    poke.img = data.sprites.front_default
                    poke.abilities = data.abilities
                    this.pokemons.push(poke)
                })    
            }
        },
        afficherinfos(i){
            if(this.pokemons[i].showDetails == false){
                this.pokemons[i].showDetails = true
            }
            else{
                this.pokemons[i].showDetails = false
            }
              
        },
        research(){
            let nom = document.forms["Form"]["fname"].value ;
            console.log(nom);
            let nonTrouve = true
            let indice =0
            while(indice<pokemons.length & nonTrouve){
                if(pokemons[indice].name == nom){
                    nonTrouve = false 
                }
                else{
                    indice++
                }
            }

            for(let i=0; i < this.pokemons.length; i++){
                pokemons[i].show = false
            }

            if(indice<pokemons.length){
                pokemons[indice].show = true
            }
            else{
                var url = 'https://pokeapi.co/api/v2/pokemon/'+name;
                var request = new XMLHttpRequest();
                request.open('GET',url);
                request.responseType = 'json';
                request.send();

                request.onload = function() {
                    let poke = {id: null, name:"", img:"" , abilities:null, show : true, showDetails : false}
                    poke.name = request.response.name;
                    poke.id = request.response.id;
                    poke.img = request.response.sprites.front_default;
                    poke.abilities = request.response.abilities;
                    this.pokemons.push(poke);
                }
            }
        },
        //searchTask(){
            //if (this.q.length > 3){
                //url = 'https://pokeapi.co/api/v2/pokemon/'+this.q
                //fetch(url).
                //then(res => this.tasks = response.data)
            
            //}
        //},

    }
})


