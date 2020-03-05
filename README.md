# remote-local-logging

Receive logs from devices and write them to either stdout to reuse persistent logging, or disk to preserve them
ad-infinitum!

To write to disk, simply set the `USE_PERSISTENT_VOLUME` env var.

This app lets you log from other devices locally to a more persistent storage medium, perhaps using the balena
supervisor's journald API endpoint (as explained/demoed
[here](https://github.com/balena-io-playground/device-cloud-logging).

## NOTE

This app is demo-quality, there are still many other pieces that need to be implemented for a production app (some of
those listed below):

* Log rotation
* Datestamped logging to file
* Syslog integration for easier semantics
* Service discovery / balena API integration
