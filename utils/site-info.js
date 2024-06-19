const protocol = "http";
const domain = "localhost:3000";

const SITE = {
  name: "COTSLISTO",
  domain: domain,
  person: {
    fullname: "Cots Listo",
    birthdate: "1998-06-15",
    country: {
      id: "https://musicbrainz.org/area/6f85633b-dff4-3fb4-babd-fb89b3628041",
      name: "Ghana - Takoradi"
    },
    province: {
      id: "https://musicbrainz.org/area/e4038ab2-0e15-4987-855a-adf4f0878645",
      name:"Ghana - Takoradi"
    }
  },
  protocol: protocol,
  meta_description: "CotsListo.",
  description: "Musician and a day music dreamer",
  keywords: "bayza, website, dj, producer, panama, music, EDM, dance, musician, artist, ahmed",
  email: "listoCots@gmail.com",
  logo: "images/logomt.jpg",
  image: "images/ahmed_bannerweb3.jpg",
  cover: "images/logomt-sq-300.jpg",
  spotify_id: "0UFz5jBFwlNKaq1JwESYnX",
  twitter: "cotslisto",
  instagram: "cotslisto",
  socials: {
    spotify: "https://open.spotify.com/artist/0UFz5jBFwlNKaq1JwESYnX",
    youtube: "https://youtube.com/cotslisto",
    twitter: "https://twitter.com/cotslisto",
    facebook: "https://facebook.com/cotslisto"
  },
  platforms: {
    spotify: "https://open.spotify.com/artist/0UFz5jBFwlNKaq1JwESYnX",
    youtube: "https://youtube.com/bayza",
    apple: "https://music.apple.com/us/artist/bayza/882647839?app=music&ls=1",
    itunes: "https://music.apple.com/us/artist/bayza/882647839?app=itunes&ls=1"
  },
  merch: "https://merch.streamelements.com/bayza",
  fanlinks: "http://localhost:3000/musicx",
  url: `${protocol}://${domain}`
};

export { SITE };