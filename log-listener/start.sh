#!/bin/bash

if [ -z "${USE_PERSISTENT_VOLUME}" ]; then
    node ./index.js > /data/remote.log
else
    node ./index.js
fi
