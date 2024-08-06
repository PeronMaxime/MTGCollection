$(function() {
    $.ajax({
        url: 'https://api.scryfall.com/cards/collection',
        method: 'POST',
        contentType : 'application/json',
        headers: {
            Origin: 'https://peronmaxime.github.io/MTGCollection/',
            Accept: 'application/json;q=0.9,*/*;q=0.8'
        },
        data: {
            "identifiers": [
                {
                    "id": "683a5707-cddb-494d-9b41-51b4584ded69"
                },
                {
                    "name": "Ancient Tomb"
                },
                {
                    "set": "mrd",
                    "collector_number": "150"
                }
            ]
        },
        success: function (data){
            console.log(data);
        },
        error: function(error){
            console.log(error);
        }
    })
})