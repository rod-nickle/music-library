const library = {
  tracks: {
    t01: {
      id: "t01",
      name: "Code Monkey",
      artist: "Jonathan Coulton",
      album: "Thing a Week Three"
    },
    t02: {
      id: "t02",
      name: "Model View Controller",
      artist: "James Dempsey",
      album: "WWDC 2003"
    },
    t03: {
      id: "t03",
      name: "Four Thirty-Three",
      artist: "John Cage",
      album: "Woodstock 1952"
    }
  },
  playlists: {
    p01: {
      id: "p01",
      name: "Coding Music",
      tracks: ["t01", "t02"]
    },
    p02: {
      id: "p02",
      name: "Other Playlist",
      tracks: ["t03"]
    }
  }
};


/////////////////////////////
// FUNCTIONS TO IMPLEMENT:
/////////////////////////////

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks
const printPlaylists = function() {
  let playListId;
  let playListName;
  let playListTrackCount;

  // Loop through the keys of the playlist object.
  for (const playList in library.playlists) {
    playListId = library["playlists"][playList]["id"];
    playListName = library["playlists"][playList]["name"];
    playListTrackCount = library["playlists"][playList]["tracks"].length;
    console.log(`${playListId}: ${playListName} - ${playListTrackCount} tracks`);
  }
};


// prints a list of all tracks, using the following format:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)
const printTracks = function() {
  let trackId;
  let trackName;
  let artist;
  let album;

  // Loop through the keys of the tracks object.
  for (const track in library.tracks) {
    trackId = library["tracks"][track]["id"];
    trackName = library["tracks"][track]["name"];
    artist = library["tracks"][track]["artist"];
    album = library["tracks"][track]["album"];
    console.log(`${trackId}: ${trackName} by ${artist} (${album})`);
  }
};


// prints a list of tracks for a given playlist, using the following format:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
const printPlaylist = function(playlistId) {
  let playListId;
  let playListName;
  let playListTrackCount;
  let tracks = [];
  let trackId;
  let trackName;
  let artist;
  let album;

  // Print the Playlist
  playListId = library["playlists"][playlistId]["id"];
  playListName = library["playlists"][playlistId]["name"];
  playListTrackCount = library["playlists"][playlistId]["tracks"].length;
  console.log(`${playListId}: ${playListName} - ${playListTrackCount} tracks`);

  // Print the tracks
  tracks = library["playlists"][playlistId]["tracks"];
  for (let track of tracks) {
    trackId = library["tracks"][track]["id"];
    trackName = library["tracks"][track]["name"];
    artist = library["tracks"][track]["artist"];
    album = library["tracks"][track]["album"];
    console.log(`${trackId}: ${trackName} by ${artist} (${album})`);
  }
};


// adds an existing track to an existing playlist
const addTrackToPlaylist = function(trackId, playlistId) {
  library["playlists"][playlistId]["tracks"].push(trackId);
};


// generates a unique id
// (already implemented: use this for addTrack and addPlaylist)
const generateUid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
};


// adds a track to the library
const addTrack = function(name, artist, album) {
  const trackId = generateUid();

  library["tracks"][trackId] = {
    id: trackId,
    name: name,
    artist: artist,
    album: album};
};


// adds a playlist to the library
const addPlaylist = function(name) {
  const playListId = generateUid();

  library["playlists"][playListId] = {
    id: playListId,
    name: name,
    tracks: []};
};


// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search
const printSearchResults = function(query) {
  let trackId;
  let trackName;
  let artist;
  let album;
  query = query.toUpperCase();

  // Loop through the keys of the tracks object.
  for (const track in library.tracks) {
    trackId = library["tracks"][track]["id"];
    trackName = library["tracks"][track]["name"];
    artist = library["tracks"][track]["artist"];
    album = library["tracks"][track]["album"];

    // Does the name, artist or album match the search string (case insensitive)
    if (trackName.toUpperCase().search(query) >= 0 ||
    artist.toUpperCase().search(query) >= 0 ||
    album.toUpperCase().search(query) >= 0) {
      console.log(`${trackId}: ${trackName} by ${artist} (${album})`);
    }
  }
};


// // Print Playlists
// console.log("\n--- printPlaylists function ---");
// printPlaylists();

// // Print Tracks
// console.log("\n--- printTracks function ---");
// printTracks();

// // Print Playlist
// console.log("\n--- printPlaylist function p01 ---");
// printPlaylist("p01");
// console.log("\n--- printPlaylist function p02 ---");
// printPlaylist("p02");

// // addTrackToPlaylist
// console.log("\n--- addTrackToPlaylist function p01 ---");
// addTrackToPlaylist("t03", "p01");
// printPlaylist("p01");
// console.log("\n--- addTrackToPlaylist function p02 ---");
// addTrackToPlaylist("t02", "p02");
// addTrackToPlaylist("t01", "p02");
// printPlaylist("p02");

// // addTrack
// console.log("\n--- addTrack function ---");
// addTrack("Thunder Road", "Bruce Springsteen", "ThunderRoad");
// addTrack("Badlands", "Bruce Springsteen", "Darkness on the Edge of Town");
// console.log(library["tracks"]);

// // addPlaylist
// console.log("\n--- addPlaylist function ---");
// addPlaylist("Rod's Playlist");
// addPlaylist("Emily's Playlist");
// console.log(library["playlists"]);

// // printSearchResults
// console.log("\n--- printSearchResults function Three ---");
// printSearchResults("Three");
// console.log("\n--- printSearchResults function three---");
// printSearchResults("three");
// console.log("\n--- printSearchResults function THREE---");
// printSearchResults("THREE");
// console.log("\n--- printSearchResults function jo ---");
// printSearchResults("jo");