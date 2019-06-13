class Helper {
  playPauseAndUpdate(song) {

    player.playPause(song);

    //sets total-time to song length
    const songTime = player.currentlyPlaying.duration;
    const prettyTime = player.prettyTime(songTime);
    $('#time-control .total-time').text( prettyTime );
  }
}

const helper = new Helper();
