class Pokemon{
   
   
    constructor(names, images, types, ids){
        this.names=names;
        this.images=images;
        this.types=types;
        this.ids=ids;
    }

    getName(){
        return this.names;
    }
    getImage(){
        return this.images;
    }
    getType(){
        return this.types;
    }
    getIds(){
        return this.ids;
    }
};
    function createNode(element) {
        return document.createElement(element);
    }
    
    function append(parent, el) {
      return parent.appendChild(el);
    }
   

    const ul = document.getElementById('pokedex');
    const titl = document.getElementById('card-title');
    const typ = document.getElementById('card-subtitle');
    const img = document.getElementById('card-divimg');
    
    let cont = 1;

    window.onload =loadP(1);
        function loadP(cont){
            fetch('https://pokeapi.co/api/v2/pokemon/' + cont)
            .then((resp) => resp.json())
            .then(data => { 
                console.log(data);
                titl.innerHTML= "Nº " + data.id +" - "+ data.name;
                typ.innerHTML = "Tipo/s: " + data.types.map((type) => type.type.name).join(', ');
                img.setAttribute("src",""+data.sprites['front_default'] );
        })
    }


    function theLast(count) {

        if(count==1){
            count=151;
        }else{
            count--;
        }
        fetch('https://pokeapi.co/api/v2/pokemon/' + count)
            .then((resp) => resp.json())
            .then(data => { 
                titl.innerHTML= "Nº " + data.id +" - "+ data.name;
                typ.innerHTML = "Tipo/s: " + data.types.map((type) => type.type.name).join(', ');
                img.setAttribute("src",""+data.sprites['front_default'] );
        })
        cont=count;
    }

    
    function next(count) {
        if(count==151){
            count=1;
        }else{
            count++;
        }
        fetch('https://pokeapi.co/api/v2/pokemon/' + count)
            .then((resp) => resp.json())
            .then(data => { 
                titl.innerHTML= "Nº " + data.id +" - "+ data.name;
                typ.innerHTML = "Tipo/s: " + data.types.map((type) => type.type.name).join(', ');
                img.setAttribute("src",""+data.sprites['front_default'] );
        })
        cont= count;
    }