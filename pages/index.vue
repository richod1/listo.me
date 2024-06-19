<script setup>
definePageMeta({ layout: "site" });

const hover = ref(false);

const schemaOrg = {
  "@context": "http://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      name: SITE.name,
      url: SITE.url,
      image: `${SITE.url}/${SITE.logo}`
    },
    {
      "@type": "Organization",
      name: SITE.name,
      url: SITE.url,
      logo: `${SITE.url}/${SITE.logo}`,
      image: `${SITE.url}/${SITE.cover}`,
      description: SITE.meta_description
    },
    {
      "@type": ["Person", "MusicGroup"],
      "@id": SITE.socials.musicbrainz,
      name: SITE.name,
      alternateName: SITE.person.fullname,
      url: SITE.url,
      image: `${SITE.url}/${SITE.cover}`,
      description: SITE.meta_description,
      birthDate: SITE.person.birthdate,
      birthPlace: {
        "@type": "AdministrativeArea",
        "@id": SITE.person.province.id,
        name: SITE.person.province.name,
        containedIn: {
          "@type": "Country",
          "@id": SITE.person.country.id,
          name: SITE.person.country.name
        }
      },
      sameAs: [
        SITE.socials.youtube,
        SITE.socials.soundcloud,
        SITE.socials.facebook,
        SITE.socials.twitter,
        SITE.socials.instagram
      ]
    }
  ]
};

useSeoMeta({
  title: SITE.name,
  description: SITE.description,
  keywords: SITE.keywords,
  // OG
  ogUrl: SITE.url,
  ogType: "website",
  ogTitle: SITE.name,
  ogSieName: SITE.name,
  ogDescription: SITE.description,
  ogImage: `${SITE.url}/${SITE.cover}`,
  ogImageWidth: 300,
  ogImageHeight: 300,
  ogImageAlt: SITE.name,
  // Twitter
  twitterCard: "summary",
  twitterTitle: SITE.name,
  twitterDescription: SITE.description,
  twitterImage: `${SITE.url}/${SITE.logo}`,
  twitterSite: `@${SITE.twitter}`
});

useHead({
  script: [{ type: "application/ld+json", children: JSON.stringify(schemaOrg) }],
  link: [{ rel: "canonical", href: SITE.url }]
});


const lastTrack = computed(() => {
  return tracks.sort((a, b) => new Date(b.date) - new Date(a.date))[0];
});

const upcoming = [
  /*
  {
    title: "Redemption",
    cover: "redemption",
    artists: "Bayza",
    year: 2024,
    date: "2024-05-17 00:00:00"
  }
  */
];

const indexTracks = computed (() => {
  return tracks.sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 12 - upcoming.length);
});
</script>
<template>
  <main>
    <section id="dark" class="cabecera text-white py-5">
      <div class="container pt-4 cabecera-adjust" style="overflow-x: hidden;">
        <div class="row align-items-center">
          <div class="col-12 col-md-6 text-start d-none d-md-block" data-aos="fade-right">
            <h1 class="display-4 text-uppercase">{{ SITE.name }}</h1>
            <h4 class="my-3 font-weight-light">{{ SITE.description }}</h4>
            <h5 class="mb-0 font-weight-light"><span>Contact: </span><a class="text-white" :href="`mailto:${SITE.email}`" target="_blank">{{ SITE.email }}</a></h5>
          </div>
          <div class="col-12 col-md-12 text-center d-block d-md-none mt-4 mb-4" data-aos="zoom-in">
            <h1 class="display-4 text-uppercase mb-0">{{ SITE.name }}</h1>
            <h4 class="mt-2 mb-3 font-weight-light">{{ SITE.description }}</h4>
            <small><p class="mb-0"><span>Contact: </span><a class="text-white" :href="`mailto:${SITE.email}`" target="_blank">{{ SITE.email }}</a></p></small>
          </div>
          <div class="col-12 col-md-6 row text-end px-0 align-items-center" data-aos="fade-left">
            <div class="col-12 col-md-7 d-none d-md-block pe-0 text-secondary">
              <h5>Latest Release:</h5>
              <NuxtLink :to="`#`" class="text-white latest-release-title" :class="{ underline : hover }">
                <h3 class="font-weight-light">001 Daily</h3>
              </NuxtLink>
              <div><h5 class="font-weight-light">by Cots Listo</h5></div>
              <small><p class="mb-0 mt-1">{{ dateFormat("08-04-2023") }}</p></small>
            </div>
            <NuxtLink :to="`/releases/${lastTrack.year}${releaseType(lastTrack.link)}/${lastTrack.release}`" class="col-12 col-md-5 d-none d-md-block p-0 latest-release-cover" @mouseover="hover=true" @mouseout="hover=false">
              <div class="me-0 text-start px-2">
                <img id="covers" class="mx-auto d-flex w-100" src="https://i.ytimg.com/vi/Z9FHHp0FJ2s/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBS5h2MOvSbh2flGaXtsmDu6G1zHg" alt="001" style="max-width:230px;">
              </div>
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
    <section id="latest releases" class="bg-darkest">
      <div class="container text-secondary py-5 text-center" style="overflow-x: hidden;">
        <h3 class="mt-3 text-uppercase text-white">Recent Gallary</h3>
        <h5 class="font-weight-light">Check out my latest Gallary</h5>
        <div class="row my-4 text-start">
          <div v-for="(u, i) of upcoming" :key="i" class="col-6 col-lg-3" data-aos="fade-in">
            <div class="item">
              <div class="cover">
                <div class="upcoming-container">
                  <img class="img-fluid scale-on-hover upcoming" :src="`/images/releases/${u.year}/${u.cover}.jpg`">
                  <div class="centered">
                    <h4>Upcoming</h4>
                    <small><h5>{{ dateFormat(u.date) }}</h5></small>
                  </div>
                </div>
                <h5 class="mb-0"><small><p class="mb-0 mt-2">{{ u.title }}</p></small></h5>
                <small><p class="mb-4">{{ u.artists }}</p></small>
              </div>
            </div>
          </div>
          <div v-for="(tracks, index) of indexTracks" :key="index" class="col-6 col-lg-3" data-aos="fade-in">
            <div class="item">
              <div class="cover">
                <NuxtLink to="#/">
                  <div class="overflow-hidden">
                    <img id="covers" class="img-fx img-fluid release-color-covers scale-on-hover" :src="`/images/releases/${tracks.year}/${tracks.cover}.jpg`" :alt="`${ tracks.artists } - ${ tracks.title }`">
                  </div>
                  <h5 class="mb-0" style="font-size: 1.25rem;"><small><p class="mb-0 mt-2">{{ tracks.title }}</p></small></h5>
                </NuxtLink>
                <small><p class="mb-0">{{ tracks.artists }}</p></small>
                <small><p class="mb-4">{{ dateFormat(tracks.date) }}</p></small>
              </div>
            </div>
          </div>
        </div>
        <NuxtLink class="btn btn-outline-releases px-4 py-1" to="#/" data-aos="flip-left">See all releases</NuxtLink>
      </div>
    </section>
    <section id="music" class="bg-dark text-secondary text-center py-5">
      <div class="container" style="overflow-x: hidden;">
        <h3 class="mt-3 text-uppercase text-white">Listen</h3>
        <h5 class="font-weight-light">Stream/Buy my music on your favorite platform</h5>
        <div class="mt-4 d-flex flex-wrap justify-content-center">
          <div class="m-1">
            <a class="icons-fx text-white platform-icons spotify_card rounded-circle" :href="SITE.platforms.spotify" target="_blank" title="Spotify">
              <Icon class="fa-fw" name="simple-icons:spotify" />
              <span class="visually-hidden">Spotify</span>
            </a>
          </div>
          <div class="m-1">
            <a class="icons-fx text-white platform-icons soundcloud_card rounded-circle" :href="SITE.platforms.soundcloud" target="_blank" title="SoundCloud">
              <Icon class="fa-fw" name="simple-icons:soundcloud" />
              <span class="visually-hidden">SoundCloud</span>
            </a>
          </div>
          <div class="m-1">
            <a class="icons-fx text-white platform-icons youtube_card rounded-circle" :href="SITE.platforms.youtube" target="_blank" title="YouTube">
              <Icon class="fa-fw" name="simple-icons:youtube" />
              <span class="visually-hidden">YouTube</span>
            </a>
          </div>
          <div class="m-1">
            <a class="icons-fx text-white platform-icons itunes_card rounded-circle" :href="SITE.platforms.itunes" target="_blank" title="iTunes Store">
              <Icon class="fa-fw" name="ic:sharp-star-rate" />
              <span class="visually-hidden">iTunes Store</span>
            </a>
          </div>
          <div class="m-1">
            <a class="icons-fx text-white platform-icons apple_card rounded-circle" :href="SITE.platforms.apple" target="_blank" title="Apple Music">
              <Icon class="fa-fw" name="simple-icons:apple" />
              <span class="visually-hidden">Apple Music</span>
            </a>
          </div>
        </div>
        <div class="row text-white">
          <div class="col-lg-6" data-aos="fade-right">
            <div class="mt-4">
              <iframe src="https://open.spotify.com/embed/playlist/37i9dQZF1E4xPxZxyWkOKX?utm_source=generator&theme=0" width="95%" height="500" frameBorder="0" allow="autoplay; clipboard-write; fullscreen; picture-in-picture;" loading="lazy" />
            </div>
          </div>
          <div class="col-lg-6" data-aos="fade-left">
            <div class="mt-4">
              <iframe width="95%" height="500" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/listogram&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=true&amp;show_teaser=true&amp;visual=false" />
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="yt_videos" class="bg-darkest text-secondary text-center py-5">
      <div class="container" style="overflow-x: hidden;">
        <h3 class="mt-3 text-uppercase text-white">VIDEOS</h3>
        <h5 class="font-weight-light">Featured youtube videos</h5>
        <div class="row text-white">
          <div class="col-lg-6 mt-4" data-aos="fade-in">
            <div class="video-container">
              <iframe width="1280" height="720" src="https://www.youtube-nocookie.com/embed/ohSgY4OIu6M" frameborder="0" allow="accelerometer; autoplay; gyroscope; picture-in-picture; fullscreen;" />
            </div>
          </div>
          <div class="col-lg-6 mt-4" data-aos="fade-in">
            <div class="video-container">
              <iframe width="1280" height="720" src="https://www.youtube-nocookie.com/embed/Z9FHHp0FJ2s" frameborder="0" allow="accelerometer; autoplay; gyroscope; picture-in-picture; fullscreen;" />
            </div>
          </div>
          <div class="col-lg-6 mt-4" data-aos="fade-in">
            <div class="video-container">
              <iframe width="1280" height="720" src="https://www.youtube-nocookie.com/embed/qWREyU91m8o" frameborder="0" allow="accelerometer; autoplay; gyroscope; picture-in-picture; fullscreen;" />
            </div>
          </div>
          <div class="col-lg-6 mt-4" data-aos="fade-in">
            <div class="video-container">
              <iframe width="1280" height="720" src="https://www.youtube-nocookie.com/embed/TP1q-SXp-WU" frameborder="0" allow="accelerometer; autoplay; gyroscope; picture-in-picture; fullscreen;" />
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="about" class="bg-dark text-secondary text-center py-5">
      <div class="container" style="overflow-x: hidden;">
        <h3 class="mt-3 text-uppercase text-white">About</h3>
        <div id="about-desc" class="row">
          <div class="col-lg-8 my-3 font-weight-light text-justify" data-aos="fade-right">
            <p>
              Cots Listo,
              <b><a href="https://open.spotify.com/artist/1VXBoUvGP2ruGJkWo7aL7x" target="_blank" title="Listo Spotify">Listo</a></b><i class="em em-flag-pa" aria-role="presentation" aria-label="Panama Flag" />.
            </p>
            <p>
              Cots Listo, is a Ghanaian musician from Takoradi in the Western Region. He grew up in a close-knit family and attended Jaycris Education Centre for junior high and St. John's School in Sekondi-Takoradi for high school. Influenced by artists like Nasty C, Joey B, and Maleek Berry, as well as Roddy Ricch, he started making music in 2015 and initially shared his work with friends via Bluetooth.
            </p>
            <p>
              In 2017, he began releasing his music on streaming platforms, with his debut single, “Scoobies Gang,” followed by “Never For That.” His 2019 hit “Been Calling” brought him wider recognition. His motivational song “School Boy” became popular among high school students, boosting his fame,
            </p>
            <p>
              Aside from music, Cots Listo enjoys basketball and cinematography. He's known for memorable quotes like “Expect the unexpected” and “This be pain, this be vibe.”
            </p>
          </div>
          <div class="col-lg-4 text-center"><img id="covers" class="img-fluid shadow" src="/images/bayza-about.jpg" data-aos="fade-left"></div>
        </div>
      </div>
    </section>
  </main>
</template>