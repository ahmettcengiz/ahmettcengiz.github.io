const imagelist = ['https://creativereview.imgix.net/content/uploads/2019/12/joker_full.jpg?auto=compress,format&q=60&w=1012&h=1500',
    'https://www.indiewire.com/wp-content/uploads/2019/12/nightingale-1.jpeg?w=675',
    'https://www.indiewire.com/wp-content/uploads/2019/12/us-1.jpg?w=758',
    'https://maxcdn.icons8.com/app/uploads/2019/05/film-poster-design.png',
    'https://cdn.shopify.com/s/files/1/0057/3728/3618/products/4c177c2b7f7bb9a679f089bcb50f844e_3e89eb5d-ffbd-4033-a00f-e595a3ef2e2a_240x360_crop_center.progressive.jpg?v=1573587540',
    'https://www.washingtonpost.com/graphics/2019/entertainment/oscar-nominees-movie-poster-design/img/black-panther-web.jpg',
	'https://assets.mubicdn.net/images/notebook/post_images/22624/images-w1400.jpg?1481168208',
	'https://www.discountdisplays.co.uk/our-blog/wp-content/uploads/robin-hood-cookie-cutter-691x1024.jpeg',
	'https://i.pinimg.com/736x/5c/2c/9c/5c2c9cd90e00bff83d3d26a176c7e70a.jpg',
	'https://pro2-bar-s3-cdn-cf3.myportfolio.com/ab99a4cfd61f46ca66367856609c20a3/e7589852-4f6f-46b9-95b0-3e59dab224d1_rw_1200.jpg?h=3d26644c995ebd0b393e5d89de428a47',
	'https://www.washingtonpost.com/graphics/2019/entertainment/oscar-nominees-movie-poster-design/img/bohemian-rhapsody-web.jpg',
	'https://www.washingtonpost.com/graphics/2019/entertainment/oscar-nominees-movie-poster-design/img/green-book-web.jpg',
	'https://www.arthipo.com/image/cache/catalog/poster/movie/759-1554/pfilm1228-the-adventures-of-tintin-the-secret-of-the-unicorn-film-movie-posters-tablo-canvas-1000x1000.jpg',
	'https://www.arthipo.com/image/cache/catalog/poster/movie/1-758/pfilm659-everest-poster-movie-film-posteri-1000x1000.jpg',
	'https://lwlies.com/wp-content/uploads/2017/11/John-Wick-2-900x0-c-default.jpg',
	'https://static01.nyt.com/images/2017/09/15/arts/24movie-posters8/24movie-posters8-superJumbo.jpg',
	'https://www.companyfolders.com/blog/media/2017/07/jaws.jpg'
	]

const image = new Tiles({
    container: 'image',
    width: 200,
    height: 300,
    num_horizontal: 6,
    nodrag: true,
    animate_factor: 1.1  
})

$.ajax({
            url:"deneme.json",
            dataType:"json",
            async:false,
            type:"GET",
            success:function (data){
    
			for (let i = 0; i < 17; i++) {
			image.addTile({
			img_src: data["photos"][i].title,
			hover_color: 'white'
    })
	
}
            },
            error(){
                console.log("error");
            }
        })