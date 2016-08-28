# Getting Started

All run from the golang dir:
```bash
$ export GOPATH=`pwd`
$ export PATH=$PATH:$GOPATH/bin

# build go-bindata
$ go get -u github.com/jteeuwen/go-bindata/...

# generates a bundled executable, make sure /dist is built on the angular side
$ go generate github.com/nyaruka/gojukebox && go build github.com/nyaruka/gojukebox && gojukebox
$ ./bin/gojukebox

# generates an arm executable
env GOOS=linux GOARCH=arm go build -v github.com/nyaruka/gojukebox
```