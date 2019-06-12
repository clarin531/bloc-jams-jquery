{
  $('#album-title').text(album.title);
  $('h2.artist').text(album.artist);
  $('div#release-info').text(album.releaseInfo);
  $('img#album-cover-art').attr('src', album.albumArtUrl);
 }
