var $image = ".gallery";
var $search = "#filter-search";

$($search).keyup(function(){
  var $searchInput = $($search).val();

  if ($searchInput != ""){
    $($image).hide();

$($image).each(function(){
	var $data = $(this).attr("data-title");

  if ($data.indexOf($searchInput) >= 0){
    $(this).show();
   }
});
} else {
    $($image).show();
   }

});