export class Dino {
  getGiffy(){
    return new Promise (function(resolve, reject) {
    let request = new XMLHttpRequest();
    let url = `http://api.giphy.com/v1/gifs/search?q=chicken&api_key=${process.env.API_KEY}&limit=5`;
    request.onload = function() {
      if (this.status === 200) {
        resolve(request.response);
      } else {
        reject(Error(request.statusText));
      }
    }
    request.open("GET", url, true);
    request.send();
  });
  }
}
