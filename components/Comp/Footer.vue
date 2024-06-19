<template>
  <footer id="contact" class="page-footer bg-darkest text-white text-left font-weight-light">
    <div class="container py-4">
      <div class="row">
        <div class="col-md-4">
          <h4>Stream Music</h4>
          <ul class="alt">
            <li><a target="_blank" href="https://open.spotify.com/artist/1VXBoUvGP2ruGJkWo7aL7x">Spotify</a></li>
            <li><a target="_blank" href="https://soundcloud.com/listogram">SoundCloud</a></li>
            <li><a target="_blank" href="https://www.youtube.com/channel/UC6-irRBwn2C5N3OL2oeeFUg">YouTube</a></li>
            <li><a target="_blank" :href="SITE.platforms.apple">Apple Music</a></li>
          </ul>
        </div>
        <div class="col-md-4">
          <h4>Buy Music</h4>
          <ul class="alt">
            <li>
              <a target="_blank" :href="SITE.platforms.itunes">iTunes</a>
            </li>
          </ul>
        </div>
        <div class="col-md-4">
          <h4>Contact</h4>
          <ul class="icons mb-0">
            <li class="spotify">
              <a href="https://open.spotify.com/artist/1VXBoUvGP2ruGJkWo7aL7x" target="_blank"><Icon class="" name="simple-icons:spotify" /></a>
            </li>
            <li class="soundcloud">
              <a href="https://soundcloud.com/listogram" target="_blank"><Icon class="" name="simple-icons:soundcloud" /></a>
            </li>
            <li class="youtube">
              <a href="https://www.youtube.com/channel/UC6-irRBwn2C5N3OL2oeeFUg" target="_blank"><Icon class="" name="simple-icons:youtube" /></a>
            </li>
            <!-- <li class="instagram">
              <a :href="SITE.socials.instagram" target="_blank"><Icon class="" name="simple-icons:instagram" /></a>
            </li> -->
            <!-- <li class="facebook">
              <a :href="SITE.socials.facebook" target="_blank"><Icon class="" name="simple-icons:facebook" /></a>
            </li>
            <li class="twitter">
              <a :href="SITE.socials.twitter" target="_blank"><Icon class="" name="simple-icons:twitter" /></a>
            </li> -->
          </ul>
          <ul class="contact">
            <li>
              <span class="ml-2">Email: </span><a class="mx-0" href="mailto:Cotslisto@gmail.com" target="_blank">Cotslisto@gmail.com</a>
            </li>
          </ul>
        </div>
        <div class="col-md-12 text-center mt-4 text-small">
          <p class="mb-0">© Listo. All rights reserved.</p>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  name: "FooterComponent"
};
</script>