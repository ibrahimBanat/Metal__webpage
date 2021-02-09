 export function album() {
    var nameOfAlbum = prompt('do you want to purchase Damnation or Deliverance?');

    while (nameOfAlbum != 'Damnation' && nameOfAlbum !='Deliverance'){
        var nameOfAlbum = prompt('do you want to purchase Damnation or Deliverance?');
        
    };

    var damnation = '<img src="https://upload.wikimedia.org/wikipedia/en/1/16/Damnation_cover.jpg"/>';

    var deliverance = '<img src="https://upload.wikimedia.org/wikipedia/en/b/b3/Opeth_-_Deliverance.jpg"/>';

    var numberOfAlbums = prompt('How Many Albums do you want to purchase?');

    var iterator = 1;
    // console.log('hi')

    if(nameOfAlbum == 'Damnation') {
        for(iterator; iterator <= numberOfAlbums; iterator++){
            var render = '';
            render = render + damnation;
            document.write(render);
        };
    } else { 
        for(iterator; iterator <= numberOfAlbums; iterator++){
            var render = '';
            render += deliverance;
            document.write(render + iterator);
        };
    }
};









    

