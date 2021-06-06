console.log('***** Music Collection *****')

 let collection = [];

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

collection.push(music);
  return music
}//end function

console.log(addtoCollection('Rumors', 'Fleetwood Mac', '1977'));
console.log(addtoCollection('Metallica', 'Metallica', '1991'));
console.log(addtoCollection('Make Believe', 'Weezer', '2005'));
console.log(addtoCollection('The Long Road Home', 'John Fogerty/CCR', '2005'));
console.log(addtoCollection('Finding Beauty In Negative Spaces', 'Seether', '2007'));
console.log(addtoCollection('Karma and Effect', 'Seether', '2005'));
console.log(collection);

function showCollection( array ){
  console.log(array.length);
  for ( let i = 0; i < array.length; i++ ){
  console.log(`${array[i].title} by ${array[i].artist}, published in ${array[i].yearPublished}`);
}//end for
  return true//***console showed 'undefined' without a return so I added a boolean.
}
console.log(showCollection(collection));

// function findByArtist(artist){
//   let artists = [];
//   for ( let i = 0; i < collection.length; i++){
//     if (artist === collection)
//     artists.push(artist)
//   }//end for loop
//
// }//end function

// function findByArtist(artist){
//   let band = [];
//   for ( let i = 0; i < collection.length; i++){
//     if (artist === collection){
//     band.push(artist);
//     return band
//   }//end if
//   }//end for
// }//end function
// console.log(findByArtist('Seether'));

function findByArtist(artist){
  let band = [];
  for ( let i = 0; i < collection.length; i++){
    if (artist === collection[i].artist){
    band.push(collection[i]);
    }//end if
  }//end for
  return band
}//end function
console.log(findByArtist('Seether'));
console.log(findByArtist('ScHoolboy Q'));
