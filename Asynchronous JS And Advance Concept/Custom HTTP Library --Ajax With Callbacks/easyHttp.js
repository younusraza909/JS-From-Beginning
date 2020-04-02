function easyHTTP() {
  this.http = new XMLHttpRequest();
}

//Make an Http GET Request
easyHTTP.prototype.get = function(url, callback) {
  this.http.open("GET", url, true);

  let self = this; //used this method so that we can replace this with self bcz this will not work here...we can aslo fix it with ES6 Arrow Function
  this.http.onload = function() {
    if (self.http.status === 200) {
      callback(null, self.http.responseText);
    } else {
      callback("Error: " + self.http.status);
    }
  };

  this.http.send();
};

//Make an Http POST Request
easyHTTP.prototype.post = function(url, data, callback) {
  this.http.open("POST", url, true);
  this.http.setRequestHeader("Content-type", "application/json");
  let self = this;
  this.http.onload = function() {
    callback(null, self.http.responseText);
  };
  this.http.send(JSON.stringify(data));
};

//Make an Http PUT Request
easyHTTP.prototype.put = function(url, data, callback) {
  this.http.open("PUT", url, true);
  this.http.setRequestHeader("Content-type", "application/json");
  let self = this;
  this.http.onload = function() {
    callback(null, self.http.responseText);
  };
  this.http.send(JSON.stringify(data));
};

//Make an Http DELETE Request

easyHTTP.prototype.delete = function(url, callback) {
  this.http.open("delete", url, true);

  let self = this; //used this method so that we can replace this with self bcz this will not work here...we can aslo fix it with ES6 Arrow Function
  this.http.onload = function() {
    if (self.http.status === 200) {
      callback(null, "POST DELETED");
    } else {
      callback("Error: " + self.http.status);
    }
  };

  this.http.send();
};
