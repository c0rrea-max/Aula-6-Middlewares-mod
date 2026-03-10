let categorias = [
    { id: 1, nome: "Cortes Nobres" },
    { id: 2, nome: "Acompanhamentos" },
    { id: 3, nome: "Bebidas" },
];

let produtos = [
    { categoriaId: 1, nome: "Picanha Premium", preco: 115.00, descricao: "TCorte alto, grelhada no sal grosso (aprox. 500g).", imagem: "https://irp.cdn-website.com/33406c6e/dms3rep/multi/picanha-aa0c51c6.jpg" },

    { categoriaId: 1, nome: "Costela Janela", preco: 89.00, descricao: "12 horas de fogo de chão, desmanchando no garfo.", imagem: "https://minervafoods.com/wp-content/uploads/2022/12/02_Costela-Janela-scaled-1.jpg" },

    { categoriaId: 1, nome: "Bife de Ancho", preco: 98.00, descricao: "O miolo do contrafilé argentino, extremamente suculento.", imagem: "https://marmoreio.com.br/wp-content/uploads/2020/06/bife-ancho-1200x738-2.jpg" },

    { categoriaId: 1, nome: "Bife de Chorizo", preco: 95.00, descricao: "Corte tradicional uruguaio com generosa camada de gordura.", imagem: "https://swiftbr.vteximg.com.br/arquivos/ids/209883-768-768/621934-bife-de-chorizo-steak-swift-black-Angus_rec.jpg?v=638900938502900000" },

    { categoriaId: 1, nome: "Fraldinha na Brasa", preco: 78.00, descricao: "Corte magro, macio e muito saboroso (aprox. 400g).", imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSvzApBgEDg7cTJFttHGcZsjU-J3v9DXn_aw&s" },

    { categoriaId: 1, nome: "Prime Rib", preco: 145.00, descricao: "O rei do churrasco: ancho com osso para máximo sabor.", imagem: "https://cdn0.tudoreceitas.com/pt/posts/4/6/7/prime_rib_na_frigideira_7764_orig.jpg" },

    { categoriaId: 2, nome: "Arroz Carreteiro", preco: 35.00, descricao: "Tradicional com charque e tempero da casa.", imagem: "https://receitatodahora.com.br/wp-content/uploads/2025/07/arroz-carreteiro-soltinho-25-06.webp" },

    { categoriaId: 2, nome: "Pão de Alho Especial", preco: 18.00, descricao: "Recheado com blend de queijos e ervas finas.", imagem: "https://i.ytimg.com/vi/ka2Zwr1p0Ks/maxresdefault.jpg" },

    { categoriaId: 2, nome: "Mandioca Cozida", preco: 22.00, descricao: "Derretendo na boca, finalizada com manteiga de garrafa.", imagem: "https://d2qcpt1idvpipw.cloudfront.net/recipes/2020/10/mandioca-cozida-na-manteiga_20082020222829.jpg" },

    { categoriaId: 2, nome: "Farofa de Bacon", preco: 15.00, descricao: "Crocante, com ovos, bacon e cebola na manteiga.", imagem: "https://www.sabornamesa.com.br/media/k2/items/cache/95afb94bcb9e5971a68576edb0850e71_XL.jpg" },

    { categoriaId: 2, nome: "Maionese Caseira", preco: 20.00, descricao: "A clássica salada de batatas com tempero da vovó.", imagem: "https://www.receitasja.com.br/wp-content/uploads/2024/10/maionese-verde-e1728078283761.webp" },

    { categoriaId: 2, nome: "Polenta Frita", preco: 25.00, descricao: "Porção crocante por fora e macia por dentro com parmesão.", imagem: "https://anamariareceitas.com.br/wp-content/uploads/2024/06/8481.jpg" },

    { categoriaId: 2, nome: "Vinagrete Especial", preco: 12.00, descricao: "Tomate, cebola roxa e pimentões picadinhos no azeite.", imagem: "https://comidinhasdochef.com/wp-content/uploads/2015/12/Vinagrete-Especial-00.png" },

    { categoriaId: 2, nome: "Batata Rústica", preco: 28.00, descricao: "Com casca, alecrim e alho frito.", imagem: "https://s2-receitas.glbimg.com/qmuJR8fn3QRCi09U8IUH7WXY96M=/0x0:550x413/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_e84042ef78cb4708aeebdf1c68c6cbd6/internal_photos/bs/2020/g/C/XQTSCGRvAO1hmDq1myMA/4-maneiras-de-preparar-batata-inglesa.jpg"},

    { categoriaId: 3, nome: "Chopp Artesanal (500ml)", preco: 16.00, descricao: "Pilsen puro malte, servido em caneca congelada.", imagem: "https://cdn.awsli.com.br/800x800/1983/1983606/produto/158064102/fb68ad6d1d.jpg" },

    { categoriaId: 3, nome: "Cerveja Spaten (600ml)", preco: 18.00, descricao: "A clássica puro malte alemã.", imagem: "https://www.imigrantesbebidas.com.br/bebida/images/products/full/88940-cerveja-spaten-600ml.jpg" },

    { categoriaId: 3, nome: "Caipirinha de Limão", preco: 24.00, descricao: "Com cachaça premium ou vodka (Smirnoff).", imagem: "https://i.panelinha.com.br/i1/bk-8730-blog-caipirinha-de-limao.webp" },

    { categoriaId: 3, nome: "Gin Tônica Tradicional", preco: 32.00, descricao: "Gin Tanqueray, tônica, limão siciliano e alecrim.", imagem: "https://gastronomiacarioca.zonasul.com.br/wp-content/uploads/2021/10/gin_tonica_rodrigo_azevedo_zona_sul_destaque.jpg" },

    { categoriaId: 3, nome: "Suco Natural (Copo)", preco: 12.00, descricao: "Laranja, Limão ou Abacaxi com Hortelã.", imagem: "https://www.samsclub.com.br/blog/wp-content/uploads/2024/01/Vidro-do-suco-de-laranja-colocado-num-copo-sobre-madeira.jpg" },

    { categoriaId: 3, nome: "Soda Italiana", preco: 15.00, descricao: "Maçã verde, Morango ou Grenadine.", imagem: "https://cafefazenda.com.br/cdn/shop/articles/CafeFazenda_Post_15.png?v=1694460655&width=2048" },

    { categoriaId: 3, nome: "Taça de Vinho Tinto", preco: 28.00, descricao: "Malbec argentino, ideal para carnes vermelhas.", imagem: "https://m.media-amazon.com/images/I/61W135pxGTL._AC_UF894,1000_QL80_.jpg" },

    { categoriaId: 3, nome: "Água Mineral", preco: 6.00, descricao: "Com ou sem gás (500ml).", imagem: "https://www.imigrantesbebidas.com.br/bebida/images/products/full/2893-agua-mineral-crystal-sem-gas-500ml.jpg" },
];

module.exports = { categorias, produtos };