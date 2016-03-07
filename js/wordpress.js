 // Get the container of the feeds.
            var feedcontainer = document.getElementById("feed");

// Get the feeds from the given url with limits and call the display function
            function rssfeedsetup(feedurl, feedlimit) {
                var feedpointer = new google.feeds.Feed(feedurl);
                feedpointer.setNumEntries(feedlimit);
                feedpointer.load(displayfeed);
            }
            // Displays the feeds
            function displayfeed(result) {
                if (!result.error) {
                    // If feeds are fetched without errors
                    var thefeeds = result.feed.entries;
                    // Title of each feed URL
                    //var rssoutput = "<h2 class='title_rss'>" + result.feed.title + "</h2>";
                    var rssoutput = "<div class='row'>";
                    var iCounter = 0;
                    $.each(thefeeds, function (i, value) {
                        // Bootstrap sty;ing and embedding feed content
                        //rssoutput += "<div class='row'><div class='col-md-12'>";
                        //rssoutput += "<h4>" + value.title + "</h3>";
                        //rssoutput += "<h5><i>Posted on:" + value.publishedDate + " </i></h4>";
                        //rssoutput += "<p>" + value.contentSnippet + "</p>";
                        //rssoutput += "<a target='_blank'class='btn btn-primary btn-sm pull-right' href='" + value.link + "'>View More <span class='glyphicon glyphicon-chevron-right'></span></a>";
                      //  rssoutput += "<li><a href='" + value.link + "'>" + value.title + "</a></li>";
                        //rssoutput += "</div></div>";
                    	
                    	rssoutput += "<div class='col-md-3 col-sm-6 hero-feature'>";
                    	rssoutput += "<div class='thumbnail'>";
                    	rssoutput += "<img src='http://placehold.it/800x500' alt=''>";
                    	rssoutput += "<div class='caption'>";
                    	rssoutput += "<h4>" + value.title + "</h4>";
                    	rssoutput += "<p>" + value.contentSnippet + "</p>";
                    	rssoutput += "<p>";
                    	//rssoutput += "<a href='#' class='btn btn-primary'>Buy Now!</a> <a href='#' class='btn btn-default'>More Info</a>";
                    	rssoutput += "<a target='_blank'class='btn btn-primary' href='" + value.link + "'>View More</a>";
                    	rssoutput += "</p>";
                    	rssoutput += "</div>";
                    	rssoutput += "</div>";
                    	rssoutput += "</div>";
                    	
                    	if(iCounter ==3)
                    	{
                    		rssoutput += "</div>";
                    		rssoutput += "<div class='row'>";
                    		iCounter = 0;
                    	}	
                        
                    	iCounter = iCounter + 1;
                    });
                    
                    if(iCounter != 4)
                	{
                    	rssoutput += "</div>";
                	}
                   
                    $(".loading").fadeOut();
                    
                    // We append the html into the container 
                    $(feedcontainer).append(rssoutput);
                }
                else
                    // Error occured in fetching
                    alert("Error fetching feeds!")
            }
            jQuery(document).ready(function () {
                
                // Call for blogspot, We can also put the URLs in an array and loop it.
                rssfeedsetup("https://something.wordpress.com/feeds/posts/default?alt=rss", 10);


            });