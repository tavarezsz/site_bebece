
export function getProducts() {
     return new Promise((res) => {
          res([
               {
                    name: 'Scarpin Sligback Bebecê Salto Médio Taça Detalhe Metalizado',
                    image: '/static/images/produtos/produto-1.png',
                    price: { amount: 179.9, isDiscount: null },
                    id: 1,
               },
               {
                    name: 'Coturno Feminino Bebecê Tratorado Detalhe Tachas',
                    image: '/static/images/produtos/produto-2.png',
                    price: { amount: 349.9, isDiscount: 315 },
                    id: 2,
               },
               {
                    name: 'Scarpin Bebecê Salto Alto Taça Com Fivela',
                    image: '/static/images/produtos/produto-3.png',
                    price: { amount: 159.90, isDiscount: null },
                    id: 3,
               },
          ]);
     });
}


//Resolvi manter o retorno como Promise,mesmo não sendo necessario. Para simular uma chamada para API ou aplicação externa
export function getCategories(){
     return new Promise((res) => {
          res([
               {nome: "Botas", imagem: "static/images/categorias/banner-botas.png"},
               {nome: "Scarpins", imagem: "static/images/categorias/banner-scarpins.png" },
               {nome: "Sapatilhas", imagem: "static/images/categorias/banner-sapatilhas.png"},
               {nome: "Sandálias", imagem: "static/images/categorias/banner-sandalias.png"}
          ])
     })
}

export function getBlogPosts(){
     return new Promise((res) => {
          res([
               {
                    id:1, 
                    title: "Novo logo, mesma essência.", 
                    content: "Trazendo conforto através das linhas finas e grossas + uma paleta de cores vibrante e cheia de atitude, o resultado é um visual que traduz nossa essência: autêntica e surpreendente!",
                    image: "/static/images/blog/post1.png"},

               {
                    id:2, 
                    title: "É amanhã", 
                    content: "SIMPLE and TRUE: lançamento da nova coleção Outono Inverno 2024 da Bebecê ❤️", 
                    image: "/static/images/blog/post2.png"},

               {
                    id:3, 
                    title: "Descubra o glamour em cada passo.", 
                    content: "Quer brilhar ainda mais neste inverno sem abrir mão do conforto? Esta mule é perfeita para você. ✨", 
                    image: "/static/images/blog/post3.png"}
          ])
     })
}

