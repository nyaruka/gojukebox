package main

import (
	"fmt"
	"net/http"
	"github.com/gorilla/mux"
	"bytes"
	"io"
)

//go:generate go-bindata -prefix "../../../../../jukebox/dist/" -pkg main -o bindata.go ../../../../../jukebox/dist/...

func static_handler(rw http.ResponseWriter, req *http.Request) {
  var path string = req.URL.Path
  fmt.Println(path)
  if path == "" {
    path = "index.html"
  }
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

	r.PathPrefix("/").Handler(http.StripPrefix("/", http.HandlerFunc(static_handler)))
	fmt.Println("Starting server on port 3000")
	http.ListenAndServe(":3000", r)
}