console.log('***** Music Collection *****')

 const collection = [];

 //-----------------------------------

 // function addtoCollection( title, artist, yearPublished ){
 //   for ( let name of addtoCollection){
 //   const music = {
 //     title: 'Rumors',
 //     artist: 'Fleetwood Mac',
 //     yearPublished: '1977',
 //   };//end object
 //   return music;
 //  }//end for
 // } //end function

//------------------------------------

function addtoCollection( title, artist, yearPublished ){

    let music = {
      title: title,
      artist: artist,
      yearPublished: yearPublished
    }//end object
collection.push(music)
  return music
}//end function
console.log(addtoCollection('Rumors', 'Fleetwood Mac', '1977'));
console.log(collection);
