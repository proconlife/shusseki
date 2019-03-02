$(function(){
  $("#info").text("none");
  liff.getProfile()
  .then(profile => {
    const name   = profile.displayName
    $("#info").text(name);
  })
  .catch((err) => {
    $("#info").text("err");
  });
});


