var $image = ".gallery";
var $search = "#filter-search";

$($search).keyup(function(){
  var $searchInput = $($search).val().toLowerCase();

  if ($searchInput !== ""){
    $($image).hide();

$($image).each(function(){
	var $imageData = $(this).attr("data-title").toLowerCase();

  if ($imageData.indexOf($searchInput) >= 0){
    $(this).show();
   }
});
} else {
    $($image).show();
   }

});