let enterr = document.getElementById('enterr');
// let ancorr = document.getElementsByTagName('a')

let searchInput =document.getElementById('searchInput');
let Popular = document.getElementById('Popular');


$('#enterr ').click( function(e){

    console.log(e.target)
    let divwidthh = $('#divwidthh').innerWidth();

    if($('#enter1').css('left') == '0px'){


        $('#enter1').animate({left : `-${divwidthh}`} , 1000) 
        enterr.innerHTML = `<i  class="fa fa-align-justify"></i> `

        // ($('a').css(' display: none;') )
       



    }

    else{
       

            $('#enter1').animate({left: `0px`} , 1000 , function(){
                // $('#divwidthh').slideDown(500)
                $('.hOne').slideDown(350 , function(){
                    $('.hTwo').slideDown(350 , function(){
                        $('.hThree').slideDown(350 , function(){
                            $('.hFour').slideDown(350 , function(){
                                $('.hFive').slideDown(350 , function(){
                                    $('.hSex').slideDown(350)
                                })
                            })
                        })
                    })


                })

            }) 
            enterr.innerHTML = `<i class="fa-solid fa-circle-xmark fs-4 " style="left:50%;"></i>`
            // function insideGoUp(){
            //     $('.hOne').slideDown(1000 , function(){
            //         $('hTwo').slideDown(1000 , function(){
            //             $('hThree').slideDown(1000)
            //         })
            //     })
            // }
            

        
        
        // insideGoUp()
       

    }

   
    
   

console.log(divwidthh)

    // $('#enter1').toggle()
})

let response;
let resResponse;
let resultss=[]

// async function getNewMoves(){

//     response = await fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=eba8b9a7199efdcb0ca1f96879b83c44`)
//     resResponse = await response.json();
//     resultss = resResponse.results
//     console.log(resultss)

// }

async function getNewMoves(){

    response = await fetch(`https://api.themoviedb.org/3/trending/popular/day?api_key=eba8b9a7199efdcb0ca1f96879b83c44`)
    resResponse = await response.json();
    resultss = resResponse.results
    console.log(resultss)
    console.log(resResponse)

    displayData()
}

getNewMoves()

function displayData( ){

   


        
    let cartona = ``;
    for( let i = 0 ; i<resultss.length ; i++){

       let name1= resultss[i].name
    //    console.log(name1)
       let name2 = resultss[i].title
    //    console.log(name2)
        if (resultss[i].name ){
            
        
        cartona +=`
        <div class="col-md-4 position-relative hov "><img src="https://image.tmdb.org/t/p/w500${resultss[i].poster_path}" class="w-100  " alt="">
        <div class="layer d-flex align-items-center">
            <div class="content">
       
                <h2>${resultss[i].name}</h2>
                <p>${resultss[i].overview}</p>
                <p>rate:${resultss[i].vote_average}</p>
                <p>${resultss[i].first_air_date}</p>
                
            </div>
        </div>
    </div>`

  


       


    }
    else{
         
        cartona +=`
        <div class="col-md-4 position-relative hov "><img src="https://image.tmdb.org/t/p/w500${resultss[i].poster_path}" class="w-100  " alt="">
        <div class="layer d-flex align-items-center">
            <div class="content">
       
                <h2>${resultss[i].title}</h2>
                <p>${resultss[i].overview}</p>
                <p>rate:${resultss[i].vote_average}</p>
                <p>${resultss[i].release_date}</p>
            
            </div>
        </div>
    </div>`


    }

   


    }

    document.getElementById('demo').innerHTML=cartona;
 
    



}



