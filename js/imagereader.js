/* code for fetching images from flickr */
function flickr()
{
	
	this.flickrURL = 'http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?';
	this.imageTags = 'javascript';
	this.imageTagMode='any';
	this.appendToContainerID = '#flickrImages';

	
	
	this.getImages = function()	{

		$.getJSON(this.flickrURL, 
				{
				    tags: this.imageTags,
				    tagmode: this.imageTagMode,
				    format: "json",
				})
				.done(function(jsonData){
										var iCounter = 0;
										var imgoutput = "<div class='row'>";
										$.each( jsonData.items, function( i, item ) {
											
									        //$( "<img>" ).attr( "src", item.media.m ).appendTo("#flickrImages");

									        imgoutput += "<div class='col-md-3 col-sm-6 hero-feature'>";
					                    	imgoutput += "<div class='thumbnail'>";
					                    	imgoutput += "<img src='"+ item.media.m +"' alt=''>";
					                    	imgoutput += "</div>";
					                    	imgoutput += "</div>";
					                    	
					                    	if(iCounter ==3)
					                    	{
					                    		imgoutput += "</div>";
					                    		imgoutput += "<div class='row'>";
					                    		iCounter = 0;
					                    	}	
					                        
					                    	iCounter = iCounter + 1;									        
									        
									      });	
										
										if(iCounter != 4)
										{
											imgoutput += "</div>";
										}
										$("#flickrImages").append(imgoutput);
										
						});
	}
	
}