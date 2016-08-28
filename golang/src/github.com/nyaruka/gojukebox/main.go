package main

import (
	"fmt"
	"net/http"
	"github.com/gorilla/mux"
	"bytes"
	"io"
	"strings"
)

//go:generate go-bindata -prefix "../../../../../jukebox/dist/" -pkg main -o bindata.go ../../../../../jukebox/dist/...

func static_handler(rw http.ResponseWriter, req *http.Request) {
  var path string = req.URL.Path
  if path == "" {
    path = "index.html"
  }

  var contentType string;
  if strings.HasSuffix(path, ".css") {
    contentType = "text/css"
  } else if strings.HasSuffix(path, ".png") {
    contentType = "image/png"
  } else {
    contentType = "text/plain"
  }

  fmt.Println(path, " ", contentType)

  if bs, err := Asset(path); err != nil {
    rw.WriteHeader(http.StatusNotFound)
  } else {
    rw.Header().Add("Content-Type", contentType)
    var reader = bytes.NewBuffer(bs)
    io.Copy(rw, reader)
  }
}

func index_handler(rw http.ResponseWriter, req *http.Request) {
  var path = "index.html"
  if bs, err := Asset(path); err != nil {
    rw.WriteHeader(http.StatusNotFound)
  } else {
    var reader = bytes.NewBuffer(bs)
    io.Copy(rw, reader)
  }
}

func main() {
	// Here we are instantiating the gorilla/mux router
	r := mux.NewRouter()

	r.PathPrefix("/artist").Handler(http.HandlerFunc(index_handler))
	r.PathPrefix("/").Handler(http.StripPrefix("/", http.HandlerFunc(static_handler)))
	fmt.Println("Starting server on port 3000")
	http.ListenAndServe(":3000", r)
}