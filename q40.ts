// Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.
export default function q40(){
interface Album {
    artist: string;
    title: string;
    numTracks?: number;
  }
  
  function makeAlbum(artist: string, title: string, numTracks?: number): Album {
    const album: Album = {
      artist: artist,
      title: title,
    };

    if (numTracks) {
      album.numTracks = numTracks;
    }
    return album;
  }
  
  const album1 = makeAlbum("Artist1", "Album1");
  const album2 = makeAlbum("Artist2", "Album2", 10);
  const album3 = makeAlbum("Artist3", "Album3", 15);
  
  console.log(album1);
  console.log(album2);
  console.log(album3);
}
q40();