var API_KEY="AIzaSyAK4_yeTC9P0L5yK113cQ28UbRJxJiRnm4";
var token=''
function getvideos()
{
    var search=document.getElementById("search").value;
    var doc=document.querySelector("#videos");
    if(search==='')
    {
      doc.innerHTML+=`
      <p>Please Enter Something to search
      `
      return;
    }
    doc.innerHTML=``;
    var url="https://www.googleapis.com/youtube/v3/search?key="+API_KEY+"&type=video&part=snippet&maxResults=15&q="+search+"&pageToken="+token;
    fetch(url).then((result)=>{
      return result.json();
  }).then((data)=>{
      token=data.nextPageToken;
      data.items.forEach(item => {
        var id=item.id.videoId;
        var url2="https://www.googleapis.com/youtube/v3/videos?key="+API_KEY+"&id="+id+"&part=snippet,statistics";
        fetch(url2).then((d)=>{
          return d.json();
        }).then((res)=>{
            display(res.items[0].statistics.viewCount);
        })
        function display(viewcount){
        var temp="https://www.youtube.com/watch?v="+item.id.videoId;
        doc.innerHTML+=`
        <div id="image">
        <div id="sample">
        <img id="thumnail" src="${item.snippet.thumbnails.high.url}">
        <div id="sample2">
        <h2>${item.snippet.title}</h2>
        <p>Published At: ${item.snippet.publishedAt}</p>
        <p>Description: ${item.snippet.description}</p>
        <p>View Count : ${viewcount}</p>
        <a href=${temp}>Click here to watch the video</a>
        </div>
        </div>
        <hr>
        </div>
        `
        }
      });
  });
}


