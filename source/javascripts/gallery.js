function initializeGallery() {
  $('li > img.thumbnail').each(function () {
    $(this).click(function(){
      $('#preview').attr('src', $(this).attr('src'));
    });
  });
};
